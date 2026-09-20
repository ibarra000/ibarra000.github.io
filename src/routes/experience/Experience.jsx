import EntryList from "../../components/entry-list/EntryList";
import { experience } from "../../data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.exp} id="experience">
      <h1>Experience</h1>
      <EntryList items={experience} />
    </section>
  );
}
