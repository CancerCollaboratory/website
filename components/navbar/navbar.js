import Link from "next/link";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "./navbar.module.scss";

export default function Navbar() {
  function expandNavMenu() {
    let isExpanded = document.getElementById("navBtn").getAttribute("aria-expanded");
    if (isExpanded === "false") {
      document.getElementById("navBtn").setAttribute("aria-expanded", "true");
      document.getElementById("navMenu").setAttribute("aria-expanded", "true");
      setAriaExpandedFalse();
    } else {
      document.getElementById("navBtn").setAttribute("aria-expanded", "false");
      document.getElementById("navMenu").setAttribute("aria-expanded", "false");
    }
  }

  function clickedOutsideExpandedSubMenu() {
    if (typeof window !== "undefined") {
      window.addEventListener("click", function (e) {
        if (!document.getElementById("expandedMenu").contains(e.target)) {
          setAriaExpandedFalse();
        }
      });
    }
  }

  function setAriaExpandedFalse() {
    document.getElementById("subMenuAboutItem").setAttribute("aria-expanded", "false");
    document.getElementById("subMenuServicesItem").setAttribute("aria-expanded", "false");
    document.getElementById("subMenuResearchItem").setAttribute("aria-expanded", "false");
    document.getElementById("subMenuSupportItem").setAttribute("aria-expanded", "false");
  }

  function collapseSubMenuItem(subMenuItemId) {
    let isSubMenuAboutExpanded = document
      .getElementById("subMenuAboutItem")
      .getAttribute("aria-expanded");

    let isSubMenuServicesExpanded = document
      .getElementById("subMenuServicesItem")
      .getAttribute("aria-expanded");

    let isSubMenuResearchExpanded = document
      .getElementById("subMenuResearchItem")
      .getAttribute("aria-expanded");

    let isSubMenuSupportExpanded = document
      .getElementById("subMenuSupportItem")
      .getAttribute("aria-expanded");

    const subMenuIds = [
      "subMenuAboutItem",
      "subMenuServicesItem",
      "subMenuResearchItem",
      "subMenuSupportItem",
    ];

    const filteredSubMenuItemIds = subMenuIds.filter(filterSubMenuItemIds);

    function filterSubMenuItemIds(value) {
      if (value !== subMenuItemId) {
        return value;
      }
    }

    for (let itemIdIndex = 0; itemIdIndex < 3; itemIdIndex++) {
      if (filteredSubMenuItemIds[itemIdIndex] === "subMenuAboutItem") {
        if (isSubMenuAboutExpanded === "true") {
          document.getElementById("subMenuAboutItem").setAttribute("aria-expanded", "false");
          isSubMenuAboutExpanded = "false";
        }
      } else if (filteredSubMenuItemIds[itemIdIndex] === "subMenuServicesItem") {
        if (isSubMenuServicesExpanded === "true") {
          document.getElementById("subMenuServicesItem").setAttribute("aria-expanded", "false");
          isSubMenuServicesExpanded = "false";
        }
      } else if (filteredSubMenuItemIds[itemIdIndex] === "subMenuResearchItem") {
        if (isSubMenuResearchExpanded === "true") {
          document.getElementById("subMenuResearchItem").setAttribute("aria-expanded", "false");
          isSubMenuResearchExpanded = "false";
        }
      } else if (filteredSubMenuItemIds[itemIdIndex] === "subMenuSupportItem") {
        if (isSubMenuSupportExpanded === "true") {
          document.getElementById("subMenuSupportItem").setAttribute("aria-expanded", "false");
          isSubMenuSupportExpanded = "false";
        }
      }
    }
  }

  function toggleAriaExpanded(isSubMenuItemExpanded, subMenuItemId) {
    if (isSubMenuItemExpanded === "false") {
      document.getElementById(subMenuItemId).setAttribute("aria-expanded", "true");
      collapseSubMenuItem(subMenuItemId);
    } else {
      document.getElementById(subMenuItemId).setAttribute("aria-expanded", "false");
    }
  }

  function expandAboutSubMenu() {
    const isSubMenuAboutExpanded = document
      .getElementById("subMenuAboutItem")
      .getAttribute("aria-expanded");
    toggleAriaExpanded(isSubMenuAboutExpanded, "subMenuAboutItem");
  }

  function expandServicesSubMenu() {
    const isSubMenuServicesExpanded = document
      .getElementById("subMenuServicesItem")
      .getAttribute("aria-expanded");
    toggleAriaExpanded(isSubMenuServicesExpanded, "subMenuServicesItem");
  }

  function expandResearchSubMenu() {
    const isSubMenuResearchExpanded = document
      .getElementById("subMenuResearchItem")
      .getAttribute("aria-expanded");
    toggleAriaExpanded(isSubMenuResearchExpanded, "subMenuResearchItem");
  }

  function expandSupportSubMenu() {
    const isSubMenuSupportExpanded = document
      .getElementById("subMenuSupportItem")
      .getAttribute("aria-expanded");
    toggleAriaExpanded(isSubMenuSupportExpanded, "subMenuSupportItem");
  }

  const navbarLinksAbout = [
    {
      link: "/about-collaboratory",
      label: "About the Collaboratory",
    },
    {
      link: "/about-team",
      label: "Our Team",
    },
    {
      link: "/about-funders-collaborators",
      label: "Funders & Collaborators",
    },
  ];

  const navbarLinksServices = [
    {
      link: "/services",
      label: "Our Services",
    },
    {
      link: "/services-cloud-resources",
      label: "Cloud Resources",
    },
    {
      link: "/services-dockstore",
      label: "Dockstore",
    },
    {
      link: "/services-request-account",
      label: "Request an Account",
    },
  ];

  const navbarLinksResearchSectionA = [
    {
      link: "/research/hardware-software-infrastructure",
      label: "Hardware & Software Infrastructure",
    },
    {
      link: "/research/benchmarking",
      label: "Benchmarking",
    },
    {
      link: "/research/training-outreach",
      label: "Training & Outreach",
    },
    {
      link: "/research/management-finance",
      label: "Management & Finance",
    },
  ];

  const navbarLinksResearchSectionB = [
    {
      link: "/research/indexing-search-compression",
      label: "Indexing, Search & Compression",
    },
    {
      link: "/research/variant-identification-consequence",
      label: "Variant Identification & Consequence",
    },
    {
      link: "/research/tumour-heterogenity-evolution",
      label: "Tumour Heterogeneity & Evolution",
    },
    {
      link: "/research/drug-target-identification",
      label: "Drug Target Identification",
    },
    {
      link: "/research/bioethics-protection-phi",
      label: "Bioethics & Protection of PHI",
    },
  ];

  const navbarLinksSupport = [
    {
      link: "/support/getting-started",
      label: "Getting Started",
    },
    {
      link: "/support/best-practices",
      label: "Best Practices",
    },
    {
      link: "/support/user-guide",
      label: "User Guide",
    },
    {
      link: "/support/glossary-terms",
      label: "Glossary of Terms",
    },
    {
      link: "/support/workshops",
      label: "Workshops",
    },
    {
      link: "/support/faqs",
      label: "FAQs",
    },
    {
      link: "/support/system-status",
      label: "System Status",
    },
  ];

  clickedOutsideExpandedSubMenu();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.secondaryNavbar}>
        <div className={styles.secondaryNavbarItemsList}>
          <div className={styles.listColoredBlock}>
            <div className={styles.itemColoredBlock}>
              <Link href="/services-request-account">Request an Account</Link>
            </div>
            <div className={styles.itemColoredBlock}>
              <Link href="/support/getting-started">Getting Started</Link>
            </div>
          </div>
          <div className={styles.listBlock}>
            <div className={`${styles.itemBlock} ${styles.itemBlockRightBorder}`}>
              <a href="https://console.cancercollaboratory.org" target="_blank">
                Console
              </a>
            </div>
            <div className={`${styles.itemBlock} ${styles.itemBlockRightBorder}`}>
              <a href="https://billing.cancercollaboratory.org" target="_blank">
                Usage and Billing
              </a>
            </div>
            <div className={styles.itemBlock}>
              <a
                href="https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22Collaboratory%20-%20Toronto%22%5D%7D%7D%7D"
                target="_blank"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
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
              {navbarLinksAbout.map((navLink, index) => (
                <NavbarLink key={index} link={navLink.link} label={navLink.label} />
              ))}
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/services">Our Services ▾</Link>
            <div className={styles.subMenuDropdown}>
              {navbarLinksServices.map((navLink, index) => (
                <NavbarLink key={index} link={navLink.link} label={navLink.label} />
              ))}
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/research">Our Research ▾</Link>
            <div className={styles.subMenuDropdown}>
              <Link href="/research#technology_development_cores">
                Technology Development Cores
              </Link>
              <div className={styles.innerSubMenu}>
                {navbarLinksResearchSectionA.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
              </div>
              <div className={styles.subMenuDivision}></div>
              <Link href="/research#research_modules">Research Modules</Link>
              <div className={styles.innerSubMenu}>
                {navbarLinksResearchSectionB.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
              </div>
              <div className={styles.subMenuDivision}></div>
              <Link href="/publications-presentations">Publications & Presentations</Link>
            </div>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/support/overview">Support ▾</Link>
            <div className={styles.subMenuDropdown}>
              {navbarLinksSupport.map((navLink, index) => (
                <NavbarLink key={index} link={navLink.link} label={navLink.label} />
              ))}
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
        <div className={styles.expandedMenuContainer}>
          <div className={styles.extendSearchBar}>
            <input
              className={styles.expandedSearchBar}
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
          <div id="expandedMenu" className={styles.wrapExpandedMenu}>
            <button type="button" className={styles.expandedMenuItem} onClick={expandAboutSubMenu}>
              <p className={styles.itemName}>About Us ▾</p>
              <div
                className={styles.expandedSubMenuItem}
                id="subMenuAboutItem"
                aria-expanded="false"
              >
                <Link href="/about-collaboratory">About the Collaboratory</Link>
                <Link href="/about-team">Our Team</Link>
                <Link href="/about-funders-collaborators">Funders & Collaborators</Link>
              </div>
            </button>
            <button
              type="button"
              className={styles.expandedMenuItem}
              onClick={expandServicesSubMenu}
            >
              <p className={styles.itemName}>Our Services ▾</p>
              <div
                className={styles.expandedSubMenuItem}
                id="subMenuServicesItem"
                aria-expanded="false"
              >
                <Link href="/services">Our Services</Link>
                <Link href="/services-cloud-resources">Cloud Resources</Link>
                <Link href="/services-dockstore">Dockstore</Link>
                <Link href="/services-request-account">Request an Account</Link>
              </div>
            </button>
            <button
              type="button"
              className={styles.expandedMenuItem}
              onClick={expandResearchSubMenu}
            >
              <p className={styles.itemName}>Our Research ▾</p>
              <div
                className={styles.expandedSubMenuItem}
                id="subMenuResearchItem"
                aria-expanded="false"
              >
                <Link href="/research#technology_development_cores">
                  Technology Development Cores
                </Link>
                <Link href="/research/hardware-software-infrastructure">
                  <a className={styles.innerExpandedMenu}>Hardware & Software Infrastructure</a>
                </Link>
                <Link href="/research/benchmarking">
                  <a className={styles.innerExpandedMenu}>Benchmarking</a>
                </Link>
                <Link href="/research/training-outreach">
                  <a className={styles.innerExpandedMenu}>Training & Outreach</a>
                </Link>
                <Link href="/research/management-finance">
                  <a className={styles.innerExpandedMenu}>Management & Finance</a>
                </Link>
                <Link href="/research#research_modules">Research Modules</Link>
                <Link href="/research/indexing-search-compression">
                  <a className={styles.innerExpandedMenu}>Indexing, Search & Compression</a>
                </Link>
                <Link href="/research/variant-identification-consequence">
                  <a className={styles.innerExpandedMenu}>Variant Identification & Consequence</a>
                </Link>
                <Link href="/research/drug-target-identification">
                  <a className={styles.innerExpandedMenu}>Drug Target Identification</a>
                </Link>
                <Link href="/research/bioethics-protection-phi">
                  <a className={styles.innerExpandedMenu}>Bioethics & Protection of PHI</a>
                </Link>
                <Link href="/publications-presentations">
                  <a className={styles.innerExpandedMenu}>Publications & Presentations</a>
                </Link>
              </div>
            </button>
            <button
              type="button"
              className={styles.expandedMenuItem}
              onClick={expandSupportSubMenu}
            >
              <p className={styles.itemName}>Support ▾</p>
              <div
                className={styles.expandedSubMenuItem}
                id="subMenuSupportItem"
                aria-expanded="false"
              >
                <Link href="/support/getting-started">Getting Started</Link>
                <Link href="/support/best-practices">Best Practices</Link>
                <Link href="/support/user-guide">User Guide</Link>
                <Link href="/support/glossary-terms">Glossary of Terms</Link>
                <Link href="/support/workshops">Workshops</Link>
                <Link href="/support/faqs">FAQs</Link>
                <Link href="/support/system-status">System Status</Link>
              </div>
            </button>
            <button type="button" className={styles.expandedMenuItem}>
              <Link href="/contact-us">
                <div className={styles.noSubMenu}>Contact Us</div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
