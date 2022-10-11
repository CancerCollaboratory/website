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
              <Link href="/services-cloud-resources">Cloud Resources</Link>
              <Link href="/services-dockstore">Dockstore</Link>
              <Link href="/services-request-account">Request an Account</Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/research">Our Research ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/research#technology_development_cores">
                Technology Development Cores
              </Link>
              <Link href="/research/hardware-software-infrastructure">
                <a className={styles.innerSubMenuItem}>
                  Hardware & Software Infrastructure
                </a>
              </Link>
              <Link href="/research/benchmarking">
                <a className={styles.innerSubMenuItem}>Benchmarking</a>
              </Link>
              <Link href="/research/training-outreach">
                <a className={styles.innerSubMenuItem}>Training & Outreach</a>
              </Link>
              <Link href="/research/management-finance">
                <a className={styles.innerSubMenuItem}>Management & Finance</a>
              </Link>
              <div className={styles.subMenuDivision}></div>
              <Link href="/research#research_modules">Research Modules</Link>
              <Link href="/research/indexing-search-compression">
                <a className={styles.innerSubMenuItem}>
                  Indexing, Search & Compression
                </a>
              </Link>
              <Link href="/research/variant-identification-consequence">
                <a className={styles.innerSubMenuItem}>
                  Variant Identification & Consequence
                </a>
              </Link>
              <Link href="/research/drug-target-identification">
                <a className={styles.innerSubMenuItem}>
                  Drug Target Identification
                </a>
              </Link>
              <Link href="/research/bioethics-protection-phi">
                <a className={styles.innerSubMenuItem}>
                  Bioethics & Protection of PHI
                </a>
              </Link>
              <div className={styles.subMenuDivision}></div>
              <Link href="/publications-presentations">
                Publications & Presentations
              </Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/support/overview">Support ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/support/getting-started">Getting Started</Link>
              <Link href="/support/best-practices">Best Practices</Link>
              <Link href="/support/user-guide">User Guide</Link>
              <Link href="/support/glossary-terms">Glossary of Terms</Link>
              <Link href="/support/workshops">Workshops</Link>
              <Link href="/support/faqs">FAQs</Link>
              <Link href="/support/system-status">System Status</Link>
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
