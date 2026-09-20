import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.css";
import LinkedInLogo from "../../assets/linkedin.svg";
import GithubLogo from "../../assets/github.svg";
import ChessLogo from "../../assets/chess.png";

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
              home
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
              about
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
              experience
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
              projects
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/edward-ibarra-neu"
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
                <a
          href="https://www.chess.com/member/edwardibarra0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chess.com"
        >
          <img src={ChessLogo} alt="Chess.com Profile" width="36" />
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
