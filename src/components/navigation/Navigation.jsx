import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.directory}>
        <li>
          <a>projects</a>
        </li>
        <li>
          <a>experience</a>
        </li>
        <li>
          <a>about</a>
        </li>
      </ul>
      <span className={styles.contact}>contact</span>
    </nav>
  );
}
