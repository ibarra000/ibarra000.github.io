import Card from "../../components/card/Card";
import styles from "./Experience.module.css";
import NER from "../../assets/ner-logo.png";
import BOYD from "../../assets/boyd-logo.webp";
import NU from "../../assets/nu-logo.webp";
import ATKORE from "../../assets/atkore-logo.png";

export default function Experience() {
  return (
    <section className={styles.exp} id="experience">
      <h1>Experience</h1>
      <div className={styles.cardContainer}>
        <Card
          title={"atkore"}
          imageUrl={ATKORE}
          role={"Manufacturing Engineer"}
          description={
            "6Sigma, LEAN, Autodesk Inventor + Revit, Management, Leadership"
          }
          altText={"Atkore International Logo"}
          Url={"https://www.atkore.com/"}
          backgroundColor={"#47AA42"}
        />
        <Card
          title={"boyd corporation"}
          imageUrl={BOYD}
          role={"Component Engineer"}
          description={"Python, MySQL/SQLite, SolidWorks, Vacuum-Brazing"}
          altText={"Boyd Corporation Logo"}
          Url={"https://www.boydcorp.com/"}
          backgroundColor={"#1266ab"}
        />
        <Card
          title={"NU electric racing"}
          imageUrl={NER}
          role={"Developer"}
          description={"JavaScript, Node.js, React, Prisma, Git"}
          altText={"Northeastern Electric Racing Logo"}
          Url={"https://electricracing.northeastern.edu/"}
          backgroundColor={"#ff0000"}
        />
        <Card
          title={"northeastern COE"}
          imageUrl={NU}
          role={"IT Technician"}
          description={
            "PowerShell, CMD, OS Imaging, Net Diagnostics, System Config"
          }
          altText={"Northeastern Logo"}
          Url={"https://coe.northeastern.edu/computer/"}
          backgroundColor={"#ff0000"}
        />
      </div>
    </section>
  );
}
