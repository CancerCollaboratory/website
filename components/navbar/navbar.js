import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  function expandNavMenu() {
    let isExpanded = document
      .getElementById("navBtn")
      .getAttribute("aria-expanded");
    if (isExpanded === "false") {
      document.getElementById("navBtn").setAttribute("aria-expanded", "true");
      document.getElementById("navMenu").setAttribute("aria-expanded", "true");
      isExpanded = "true";
    } else {
      document.getElementById("navBtn").setAttribute("aria-expanded", "false");
      document.getElementById("navMenu").setAttribute("aria-expanded", "false");
      isExpanded = "false";
    }
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.secondaryNavbar}></div>
      <div className={styles.mainNavbar}>
        <img
          src="/assets/navbar/svgs/logo-cancer-genome-collaboratory.svg"
          alt="Cancer Genome Collaboratory"
          width="275"
          height="112"
          className={styles.siteLogo}
        ></img>
        <button
          type="button"
          className={styles.navbarToggler}
          onClick={expandNavMenu}
          id="navBtn"
          aria-expanded="false"
        >
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
        </button>
        <ul className={styles.navbarItemsLine}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          <li>
            <Link href="/research">Our Research</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navDropdown} id="navMenu" aria-expanded="false">
        <ul className={styles.navbarItemsExpanded}>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About Us</li>
            </a>
          </Link>
          <Link href="/services">
            <a>
              <li>Our Services</li>
            </a>
          </Link>
          <Link href="/research">
            <a>
              <li>Our Research</li>
            </a>
          </Link>
          <Link href="/support">
            <a>
              <li>Support</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact Us</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}
