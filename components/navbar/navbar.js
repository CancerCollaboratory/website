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
        <div className={styles.navbarItemsLine}>
          <div className={styles.navbarItem}>
            <Link href="/about-collaboratory">About Us ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/about-collaboratory">About the Collaboratory</Link>
              <Link href="/about-team">Our Team</Link>
              <Link href="/about-funders-collaborators">
                Funders & Collaborators
              </Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/services">Our Services ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/services">Our Services</Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/research">Our Research ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/research/hardware-software-infrastructure">
                Hardware & Software Infrastructure
              </Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/support/overview">Support ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/support/getting-started">Getting Started</Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/contact-us">Contact Us</Link>
          </div>
          <div className={styles.navbarItem}>
            <form>
              <input
                className={styles.searchBar}
                type="text"
                name="search"
                placeholder="Search"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.navDropdown} id="navMenu" aria-expanded="false">
        <div className={styles.navbarItemsExpanded}>
          <div className={styles.extendSearchBar}>
            <input
              className={styles.expandedSearchBar}
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
          <Link href="/about-collaboratory">About Us ▾</Link>
          <Link href="/services">Our Services ▾</Link>
          <Link href="/research">Our Research ▾</Link>
          <Link href="/support/overview">Support ▾</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
