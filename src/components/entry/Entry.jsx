import VideoEmbed from "../embed/VideoEmbed";
import styles from "./Entry.module.css";

/**
 * One inline entry panel -- what used to be a Card plus the CardDetail dialog
 * it hid its contents behind.
 *
 * Stateless, and deliberately so. Everything that made CardDetail complicated
 * (showModal, inerting #root, focus capture and restore, backdrop dismiss, the
 * exit timer that kept the iframe mounted through the fade) existed purely to
 * make a modal behave. Rendering in the flow deletes all of it.
 *
 * Visually this keeps the old panel shell: an accent-coloured frame around a
 * darkened accent header and a white body, so the entries still read as the
 * same objects the overlay used to enlarge.
 */
export default function Entry({ item }) {
  const { id, title, role, description, imageUrl, altText, accentColor, detail } = item;
  const titleId = `${id}-title`;

  return (
    <article
      className={styles.entry}
      aria-labelledby={titleId}
      /* .trim() is load-bearing: veolia's accentColor is " #E71B24" with a
         leading space. It survives as an inline style value today, but the
         moment this lands in a color-mix() or a comparison it stops being
         invisible. Fixed at the point of use -- the space in the data file is
         unseeable and would come straight back. */
      style={{ "--accent": accentColor.trim() }}
    >
      <header className={styles.head}>
        <div className={styles.logo}>
          <img src={imageUrl} alt={altText} loading="lazy" decoding="async" />
        </div>
        <div className={styles.heading}>
          <h2 id={titleId}>{title}</h2>
          <p className={styles.role}>{role}</p>
        </div>
      </header>

      <div className={styles.body}>
        {description ? <p className={styles.description}>{description}</p> : null}

        {/* Renders nothing at all when detail.demo is null, which is the case
            for every entry but veolia. */}
        <VideoEmbed demo={detail.demo} title={title} />

        {detail.summary.length > 0 ? (
          <section className={styles.section}>
            <h3>Overview</h3>
            {detail.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        {detail.highlights.length > 0 ? (
          <section className={styles.section}>
            <h3>Highlights</h3>
            <ul className={styles.highlights}>
              {detail.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {detail.stack.length > 0 ? (
          <section className={styles.section}>
            <h3>Stack</h3>
            <ul className={styles.chips}>
              {detail.stack.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {detail.links.length > 0 ? (
          <div className={styles.links}>
            {detail.links.map((link) => (
              <a
                key={link.href}
                className={styles.linkButton}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span className="srOnly"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
