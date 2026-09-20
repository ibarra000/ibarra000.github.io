import EntryList from "../../components/entry-list/EntryList";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.exp} id="projects">
      <h1>Projects</h1>
      <EntryList items={projects} />
    </section>
  );
}
