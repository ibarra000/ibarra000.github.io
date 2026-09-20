import styles from "./Card.module.css";
import { useCardTilt } from "./useCardTilt";


export default function Card({ item, onOpen }) {
  const { title, role, description, imageUrl, altText, accentColor } = item;
  const { handlePointerTrack, handlePointerLeave } = useCardTilt();

  return (
    <figure
      className={styles.cardContainer}
      style={{ "--accent": accentColor }}

      onPointerEnter={handlePointerTrack}
      onPointerMove={handlePointerTrack}

      onPointerLeave={handlePointerLeave}
    >
      <h2 className={styles.name}>
        <button
          type="button"
          className={styles.cardTrigger}
          aria-haspopup="dialog"
          onClick={(event) => onOpen(item, event.currentTarget)}
        >
          {title}
          <span className="srOnly"> — open demo and details</span>
        </button>
      </h2>
      <div className={styles.artwork}>
        <img src={imageUrl} alt={altText} />
      </div>
      <figcaption className={styles.textbox}>
        <h3>{role}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
