import { useEffect, useRef, useState } from "react";
import { toSafeEmbedUrl } from "../../lib/embed";
import styles from "./VideoEmbed.module.css";

/**
 * A demo player behind a click-to-play facade.
 *
 * Nothing is requested from the embed host until the user presses the button:
 * the <iframe> is not in the DOM before that, so autoplay-on-load is not
 * merely blocked, it is impossible. That matters now that demos render inline
 * -- the old modal only ever mounted one frame, and only after a click, so the
 * facade is what preserves that property with every entry on the page at once.
 *
 * Two further defences remain in place behind it: toSafeEmbedUrl rebuilds the
 * URL from a per-host param allowlist and so drops any autoplay=1, and the
 * `allow` attribute below omits `autoplay`, which makes Permissions Policy
 * deny it to a cross-origin frame regardless.
 */
export default function VideoEmbed({ demo, title }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const frameRef = useRef(null);

  // Pressing the facade unmounts the focused <button>, and a browser whose
  // active element disappears resets focus to <body> -- so a keyboard user
  // would be thrown back to the top of the page by the act of starting a demo
  // partway down it. Hand focus to the frame that replaced the button.
  //
  // Note this is the opposite of what CardDetail did, and deliberately so: it
  // steered focus AWAY from the iframe because the UA picked that target on
  // its own, with no intent behind it. Here the user explicitly asked for the
  // player, so the player is where they expect to land.
  useEffect(() => {
    if (isLoaded) frameRef.current?.focus({ preventScroll: true });
  }, [isLoaded]);

  const src = toSafeEmbedUrl(demo?.url);

  // Never an <iframe> with an empty src -- that renders about:blank at 300x150
  // and looks broken. A rejected or absent URL renders nothing.
  if (!src) return null;

  return (
    <figure className={styles.figure}>
      <div
        className={styles.wrapper}
        style={{ "--demo-aspect": demo.aspect || "16 / 9" }}
      >
        {isLoaded ? (
          <iframe
            key={src}
            ref={frameRef}
            className={styles.frame}
            src={src}
            title={`${title} — demo video`}
            /* Safe only because toSafeEmbedUrl guarantees a cross-origin
               https: URL -- it rejects relative URLs, which is what stops the
               frame ever being same-origin with the portfolio. */
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allow="fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            /* No loading="lazy": mounting is already gated on a real click, so
               there is nothing left for it to defer. */
          />
        ) : (
          <button
            type="button"
            className={styles.poster}
            onClick={() => setIsLoaded(true)}
          >
            <span className={styles.play} aria-hidden="true">
              &#9654;
            </span>
            <span aria-hidden="true">play demo</span>
            <span className="srOnly">{`play the ${title} demo video`}</span>
          </button>
        )}
      </div>
      {demo.summary ? (
        <figcaption className={styles.caption}>
          <h3>What this demo shows</h3>
          <p>{demo.summary}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
