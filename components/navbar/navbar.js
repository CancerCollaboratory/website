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
        <div className={styles.imageContainer}>
          <Link href="/">
            <img
              src="/assets/navbar/svgs/logo-cancer-genome-collaboratory.svg"
              alt="Cancer Genome Collaboratory"
              width="275"
              height="112"
              className={styles.siteLogo}
            ></img>
          </Link>
        </div>
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
          <li>
            <form>
              <input
                className={styles.searchBar}
                type="text"
                name="search"
                placeholder="Search"
              ></input>
            </form>
          </li>
        </ul>
      </div>
      <div className={styles.navDropdown} id="navMenu" aria-expanded="false">
        <ul className={styles.navbarItemsExpanded}>
          <Link href="/about">
            <li>About Us</li>
          </Link>
          <Link href="/services">
            <li>Our Services</li>
          </Link>
          <Link href="/research">
            <li>Our Research</li>
          </Link>
          <Link href="/support">
            <li>Support</li>
          </Link>
          <Link href="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
