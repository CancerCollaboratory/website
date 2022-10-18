import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isSubMenuAboutExpanded, setIsSubMenuAboutExpanded] = useState(false);
  const [isSubMenuServicesExpanded, setIsSubMenuServicesExpanded] = useState(false);
  const [isSubMenuResearchExpanded, setIsSubMenuResearchExpanded] = useState(false);
  const [isSubMenuSupportExpanded, setIsSubMenuSupportExpanded] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const menuDropdown = useRef(null);

  const subMenuIds = ["subMenuAbout", "subMenuServices", "subMenuResearch", "subMenuSupport"];

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

  function expandNavMenu() {
    if (!isToggled) {
      setIsToggled(true);
      setAriaExpandedFalse();
    } else {
      setIsToggled(false);
    }
  }

  function setAriaExpandedFalse() {
    setIsSubMenuAboutExpanded(false);
    setIsSubMenuServicesExpanded(false);
    setIsSubMenuResearchExpanded(false);
    setIsSubMenuSupportExpanded(false);
  }

  function collapseSubMenuItems(activeSubMenu) {
    const filteredSubMenuIds = subMenuIds.filter(
      subMenuId => subMenuId !== activeSubMenu && subMenuId
    );

    for (let idIndex = 0; idIndex < 3; idIndex++) {
      if (filteredSubMenuIds[idIndex] === subMenuIds[0]) {
        if (isSubMenuAboutExpanded) {
          setIsSubMenuAboutExpanded(false);
        }
      } else if (filteredSubMenuIds[idIndex] === subMenuIds[1]) {
        if (isSubMenuServicesExpanded) {
          setIsSubMenuServicesExpanded(false);
        }
      } else if (filteredSubMenuIds[idIndex] === subMenuIds[2]) {
        if (isSubMenuResearchExpanded) {
          setIsSubMenuResearchExpanded(false);
        }
      } else {
        if (isSubMenuSupportExpanded) {
          setIsSubMenuSupportExpanded(false);
        }
      }
    }
  }

  function expandAboutSubMenu() {
    !isSubMenuAboutExpanded ? setIsSubMenuAboutExpanded(true) : setIsSubMenuAboutExpanded(false);
    collapseSubMenuItems(subMenuIds[0]);
  }

  function expandServicesSubMenu() {
    !isSubMenuServicesExpanded
      ? setIsSubMenuServicesExpanded(true)
      : setIsSubMenuServicesExpanded(false);
    collapseSubMenuItems(subMenuIds[1]);
  }

  function expandResearchSubMenu() {
    !isSubMenuResearchExpanded
      ? setIsSubMenuResearchExpanded(true)
      : setIsSubMenuResearchExpanded(false);
    collapseSubMenuItems(subMenuIds[2]);
  }

  function expandSupportSubMenu() {
    !isSubMenuSupportExpanded
      ? setIsSubMenuSupportExpanded(true)
      : setIsSubMenuSupportExpanded(false);
    collapseSubMenuItems(subMenuIds[3]);
  }

  function collapseSubMenu() {
    window.addEventListener("click", function (e) {
      if (!expandedMenu.contains(e.target)) {
        setAriaExpandedFalse();
      }
    });
  }

  useEffect(() => {
    setExpandedMenu(menuDropdown.current);
  }, []);

  useEffect(() => {
    expandedMenu && collapseSubMenu();
  });

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.secondaryNavbar}>
        <div className={styles.secondaryNavbarItemsList}>
          <div className={styles.listColoredBlock}>
            <div className={styles.itemColoredBlock}>
              <NavbarLink link={"/services-request-account"} label={"Request an Account"} />
            </div>
            <div className={styles.itemColoredBlock}>
              <NavbarLink link={"/support/getting-started"} label={"Getting Started"} />
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
          aria-expanded={isToggled.toString()}
        >
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
        </button>
        <div className={styles.navbarItemsLine}>
          <div className={styles.navbarItem}>
            <div className={styles.navbarItemLabel}>
              <div className={navbarItemBorder}></div>
              <NavbarLink link={"/about-collaboratory"} label={"About Us ▾"} />
            </div>
            <div className={styles.subMenuDropdown}>
              {navbarLinksAbout.map((navLink, index) => (
                <NavbarLink key={index} link={navLink.link} label={navLink.label} />
              ))}
            </div>
          </div>
          <div className={styles.navbarItem}>
            <div className={styles.navbarItemLabel}>
              <div className={navbarItemBorder}></div>
              <NavbarLink link={"/services"} label={"Our Services ▾"} />
            </div>
            <div className={styles.subMenuDropdown}>
              {navbarLinksServices.map((navLink, index) => (
                <NavbarLink key={index} link={navLink.link} label={navLink.label} />
              ))}
            </div>
          </div>
          <div className={styles.navbarItem}>
            <div className={styles.navbarItemLabel}>
              <div className={navbarItemBorder}></div>
              <NavbarLink link={"/research"} label={"Our Research ▾"} />
            </div>
            <div className={styles.subMenuDropdown}>
              <NavbarLink
                link={"/research#technology_development_cores"}
                label={"Technology Development Cores"}
              />
              <div className={styles.innerSubMenu}>
                {navbarLinksResearchSectionA.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
              </div>
              <div className={styles.subMenuDivision}></div>
              <NavbarLink link={"/research#research_modules"} label={"Research Modules"} />
              <div className={styles.innerSubMenu}>
                {navbarLinksResearchSectionB.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
              </div>
              <div className={styles.subMenuDivision}></div>
              <NavbarLink
                link={"/publications-presentations"}
                label={"Publications & Presentations"}
              />
            </div>
          </div>
          <div className={styles.navbarItem}>
            <div className={styles.navbarItemLabel}>
              <div className={navbarItemBorder}></div>
              <NavbarLink link={"/support/overview"} label={"Support ▾"} />
            </div>
            <div className={styles.subMenuDropdown}>
              {navbarLinksSupport.map((navLink, index) => (
                <NavbarLink key={index} link={navLink.link} label={navLink.label} />
              ))}
            </div>
          </div>
          <div className={styles.navbarItem}>
            <div className={styles.navbarItemLabel}>
              <div className={navbarItemBorder}></div>
              <NavbarLink link={"/contact-us"} label={"Contact Us"} />
            </div>
          </div>
          <div className={`${styles.navbarItem} ${styles.searchItem}`}>
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
      <div className={styles.navDropdown} aria-expanded={isToggled.toString()}>
        <div className={styles.expandedMenuContainer}>
          <div className={styles.extendSearchBar}>
            <input
              className={styles.expandedSearchBar}
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
          <div className={styles.wrapExpandedMenu} ref={menuDropdown}>
            <button type="button" className={styles.expandedMenuItem} onClick={expandAboutSubMenu}>
              <p className={styles.itemName}>About Us ▾</p>
              <div
                className={styles.expandedSubMenuItem}
                aria-expanded={isSubMenuAboutExpanded.toString()}
              >
                {navbarLinksAbout.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
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
                aria-expanded={isSubMenuServicesExpanded.toString()}
              >
                {navbarLinksServices.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
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
                aria-expanded={isSubMenuResearchExpanded.toString()}
              >
                <NavbarLink
                  link={"/research#technology_development_cores"}
                  label={"Technology Development Cores"}
                />
                <div className={styles.innerExpandedMenu}>
                  {navbarLinksResearchSectionA.map((navLink, index) => (
                    <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                  ))}
                </div>
                <NavbarLink link={"/research#research_modules"} label={"Research Modules"} />
                <div className={styles.innerExpandedMenu}>
                  {navbarLinksResearchSectionB.map((navLink, index) => (
                    <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                  ))}
                </div>
                <NavbarLink
                  link={"/publications-presentations"}
                  label={"Publications & Presentations"}
                />
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
                aria-expanded={isSubMenuSupportExpanded.toString()}
              >
                {navbarLinksSupport.map((navLink, index) => (
                  <NavbarLink key={index} link={navLink.link} label={navLink.label} />
                ))}
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
};

export default Navbar;
