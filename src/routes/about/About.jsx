import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h1>About</h1>
      <p>
        {
          "I'm a senior at Northeastern majoring in Mechanical Engineering with a minor in Computer Science. I love being a hands-on engineer and working with people from all kinds of backgrounds. For me, the best part of any job is the people—I’m always excited to meet new folks and learn from their experiences."
        }
      </p>
      <p>
        {
          "My main focus is in Quality and Manufacturing processes, where I enjoy maximizing systems and ensuring things run smoothly. I’ve had experience working on projects ranging from product testing to system development. I’m a strong believer in continuous learning, so I’m open to diving into new areas of the field to expand my expertise."
        }
      </p>
      <p>
        {
          "Outside of academics and work, I enjoy working on personal projects that combine my interests in engineering and programming. I've been experimenting with fluid mechanics and attempting to model the effects on vehicles in 2D. In my free time, I also like to watch Formula 1 and read. My current favorite book trilogy is called "
        }
        <a
          href="https://www.goodreads.com/series/117100-red-rising-saga"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.red}
        >
          Red Rising
        </a>
        {" it's such a good read, I highly recommend it!"}
      </p>
    </section>
  );
}
