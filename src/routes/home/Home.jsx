import styles from "./Home.module.css";
import Greeting from "../../assets/greeting.png";
import Mario from "../../assets/mario.gif";

export default function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.intro}>
        <img src={Greeting} alt="Greeting message" />
        <p>mechanical engineer</p>
        <span className={styles.whisper}>
          who enjoys working on hardware + software!
        </span>
      </div>
      <figure>
        <img src={Mario} alt="Mario character" />
      </figure>
    </section>
  );
}
