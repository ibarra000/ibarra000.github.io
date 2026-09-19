import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h1>About</h1>
      <p>
        {
          "I'm a Mechanical Engineer, graduated from "
        }
        <a
          className={styles.red}
        >
          Northeastern University
        </a>
        {", and I love exploring the intersection of physical and digital world. Here you'll find my work experience but more importantly, the projects I've done in the past. I hope you enjoy and thanks for visiting!"}
      </p>
    </section>
  );
}
