/**
 * Embed URL validation.
 *
 * This module is the security boundary for the demo iframes. The sandbox
 * attribute is NOT the boundary -- see the comment in VideoEmbed.jsx for why
 * `allow-scripts allow-same-origin` is safe, a claim that holds only because
 * everything this function returns is guaranteed cross-origin.
 *
 * No component exports live here, so `react-refresh/only-export-components`
 * cannot fire. Keep it that way.
 *
 * Adding a host here also requires adding it to the `frame-src` CSP meta tag
 * in index.html, or the browser will refuse the frame with only a console error.
 */

const ALLOWED_EMBED_HOSTS = new Map([
  ["cap.so", { pathPrefix: "/embed/", params: ["t"] }],
  ["www.youtube-nocookie.com", { pathPrefix: "/embed/", params: ["start", "rel"] }],
  ["player.vimeo.com", { pathPrefix: "/video/", params: ["h", "dnt", "t"] }],
]);

/**
 * Rewrite the YouTube URL shapes people actually paste into the privacy
 * preserving nocookie embed form. Anything unrecognised is returned untouched
 * so that toSafeEmbedUrl still gets the final say.
 *
 * @param {string} raw
 * @returns {string}
 */
function normalizeYouTube(raw) {
  let url;
  try {
    url = new URL(raw);
  } catch {
    return raw;
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  const segments = url.pathname.split("/").filter(Boolean);

  let id = null;
  if (host === "youtu.be") {
    id = segments[0];
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (segments[0] === "watch") id = url.searchParams.get("v");
    else if (segments[0] === "embed" || segments[0] === "shorts") id = segments[1];
  }

  // Reject anything with a path separator, query or fragment character in it.
  // Combined with the literal host below, no data value can point the frame
  // at a different origin.
  if (!id || !/^[A-Za-z0-9_-]{6,20}$/.test(id)) return raw;

  return `https://www.youtube-nocookie.com/embed/${id}`;
}

/**
 * Rewrite a plain vimeo.com/<id> share link into the player embed form.
 * Unlisted videos carry a privacy hash, either as a second path segment or
 * as ?h=. Anything unrecognised is returned untouched.
 *
 * @param {string} raw
 * @returns {string}
 */
function normalizeVimeo(raw) {
  let url;
  try {
    url = new URL(raw);
  } catch {
    return raw;
  }

  if (url.hostname.toLowerCase().replace(/^www\./, "") !== "vimeo.com") return raw;

  const segments = url.pathname.split("/").filter(Boolean);
  const id = segments[0];
  if (!id || !/^[0-9]{5,15}$/.test(id)) return raw;

  const rawHash = segments[1] ?? url.searchParams.get("h");
  const hash = rawHash && /^[A-Za-z0-9]{4,32}$/.test(rawHash) ? rawHash : null;

  return `https://player.vimeo.com/video/${id}${hash ? `?h=${hash}` : ""}`;
}

/**
 * Normalize an author-supplied embed URL, or return null when it is not on the
 * allowlist. A null result must render a static fallback -- never an <iframe>
 * with an empty src, which renders about:blank at 300x150 and looks broken.
 *
 * @param {unknown} raw
 * @returns {string | null}
 */
export function toSafeEmbedUrl(raw) {
  if (typeof raw !== "string" || raw.trim() === "") return null;

  const candidate = normalizeVimeo(normalizeYouTube(raw.trim()));

  let url;
  try {
    // Throws on relative URLs and on garbage. Rejecting relative URLs is a
    // feature: it is what guarantees the frame can never be same-origin with
    // the portfolio, which is what keeps the sandbox token set safe.
    url = new URL(candidate);
  } catch {
    return null;
  }

  // Scheme: blocks javascript:, data:, blob:, file: and plain http:.
  if (url.protocol !== "https:") return null;

  // Credentials: blocks https://cap.so@evil.example/ style confusion.
  if (url.username !== "" || url.password !== "") return null;

  // Exact host match. Never endsWith(), which "cap.so.attacker.example" defeats.
  const rule = ALLOWED_EMBED_HOSTS.get(url.hostname.toLowerCase());
  if (!rule) return null;

  if (url.port !== "") return null;

  // Path shape, so an allowlisted host cannot serve an arbitrary page.
  if (!url.pathname.startsWith(rule.pathPrefix)) return null;
  if (url.pathname.length <= rule.pathPrefix.length) return null;

  // Rebuild from scratch with an allowlist of params. This strips tracking
  // params, any autoplay=1 smuggled in from a share dialog, and the fragment.
  const safe = new URL(`https://${url.hostname}${url.pathname}`);
  for (const key of rule.params) {
    const value = url.searchParams.get(key);
    if (value !== null) safe.searchParams.set(key, value);
  }
  if (url.hostname === "player.vimeo.com") safe.searchParams.set("dnt", "1");

  return safe.toString();
}
