import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.css";
import LinkedInLogo from "../../assets/linkedin.svg";
import GithubLogo from "../../assets/github.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* <span className={styles.logo}></span> */}
      <nav className={styles.links}>
        <ul>
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={700}
              offset={-70}
            >
              Projects
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/edward-ibarra-6974a51a1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={LinkedInLogo} alt="LinkedIn Profile" />
        </a>
        <a
          href="https://github.com/ibarra000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={GithubLogo} alt="GitHub Profile" />
        </a>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={700}
          offset={-70}
          onClick={toggleMenu}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={700}
          offset={-70}
          onClick={toggleMenu}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="experience"
          spy={true}
          smooth={true}
          duration={700}
          offset={-70}
          onClick={toggleMenu}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={700}
          offset={-70}
          onClick={toggleMenu}
        >
          Projects
        </ScrollLink>
      </div>
    </header>
  );
}
