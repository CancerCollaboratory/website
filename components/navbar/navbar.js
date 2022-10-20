import Link from "next/link";
import React, { useState } from "react";
import NavbarLink from "../navbarLink/navbarLink";
import MenuDropdown from "../menuDropdown/menuDropdown";
import SearchBar from "../searchBar/searchBar";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const mainNavbarItems = [
    {
      label: "About Us",
      link: "/about-collaboratory",
      navbarSubMenuItems: [
        {
          label: "About the Collaboratory",
          link: "/about-collaboratory",
        },
        {
          label: "Our Team",
          link: "/about-team",
        },
        {
          label: "Funders & Collaborators",
          link: "/about-funders-collaborators",
        },
      ],
    },
    {
      label: "Our Services ▾",
      link: "/services",
      navbarSubMenuItems: [
        {
          label: "Our Services",
          link: "/services",
        },
        {
          label: "Cloud Resources",
          link: "/services-cloud-resources",
        },
        {
          label: "Dockstore",
          link: "/services-dockstore",
        },
        {
          label: "Request an Account",
          link: "/services-request-account",
        },
      ],
    },
    {
      label: "Our Research ▾",
      link: "/research",
      navbarSubMenuItems: [
        {
          label: "Technology Development Cores",
          link: "/research#technology_development_cores",
          subMenuSection: [
            {
              label: "Hardware & Software Infrastructure",
              link: "/research/hardware-software-infrastructure",
            },
            {
              label: "Benchmarking",
              link: "/research/benchmarking",
            },
            {
              label: "Training & Outreach",
              link: "/research/training-outreach",
            },
            {
              label: "Management & Finance",
              link: "/research/management-finance",
            },
          ],
        },
        {
          label: "Research Modules",
          link: "/research#research_modules",
          subMenuSection: [
            {
              label: "Indexing, Search & Compression",
              link: "/research/indexing-search-compression",
            },
            {
              label: "Variant Identification & Consequence",
              link: "/research/variant-identification-consequence",
            },
            {
              label: "Tumour Heterogeneity & Evolution",
              link: "/research/tumour-heterogenity-evolution",
            },
            {
              label: "Drug Target Identification",
              link: "/research/drug-target-identification",
            },
            {
              label: "Bioethics & Protection of PHI",
              link: "/research/bioethics-protection-phi",
            },
          ],
        },
      ],
      navbarSubMenuItem: {
        label: "Publications & Presentations",
        link: "/publications-presentations",
      },
    },
    {
      label: "Support ▾",
      link: "/support/overview",
      navbarSubMenuItems: [
        {
          label: "Getting Started",
          link: "/support/getting-started",
        },
        {
          label: "Best Practices",
          link: "/support/best-practices",
        },
        {
          label: "User Guide",
          link: "/support/user-guide",
        },
        {
          label: "Glossary of Terms",
          link: "/support/glossary-terms",
        },
        {
          label: "Workshops",
          link: "/support/workshops",
        },
        {
          label: "FAQs",
          link: "/support/faqs",
        },
        {
          label: "System Status",
          link: "/support/system-status",
        },
      ],
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  const headerList = {
    headerTop: [
      {
        label: "Request an Account",
        link: "/services-request-account",
      },
      {
        label: "Getting Started",
        link: "/support/getting-started",
      },
    ],
    headerBottom: [
      {
        label: "Console",
        link: "https://console.cancercollaboratory.org",
      },
      {
        label: "Usage and Billing",
        link: "https://billing.cancercollaboratory.org",
      },
      {
        label: "Repository",
        link: "https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22Collaboratory%20-%20Toronto%22%5D%7D%7D%7D",
      },
    ],
  };

  const websiteLogo = {
    srcPath: "/assets/navbar/svgs/logo-cancer-genome-collaboratory.svg",
    label: "Cancer Genome Collaboratory",
    link: "/",
    width: "275",
    height: "112",
  };

  const [isToggled, setIsToggled] = useState(false);

  function expandNavMenu() {
    if (!isToggled) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.secondaryNavbar}>
        <div className={styles.secondaryNavbarItemsList}>
          <div className={styles.listColoredBlock}>
            {headerList.headerTop.map((item, index) => (
              <div className={styles.itemColoredBlock} key={index}>
                <NavbarLink label={item.label} isExternalLink={true} link={item.link} />
              </div>
            ))}
          </div>
          <div className={styles.listBlock}>
            {headerList.headerBottom.map((item, index) =>
              index < 2 ? (
                <div className={`${styles.itemBlock} ${styles.itemBlockRightBorder}`} key={index}>
                  <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
                </div>
              ) : (
                <div className={styles.itemBlock} key={index}>
                  <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.mainNavbar}>
        <NavbarLink
          label={websiteLogo.label}
          isExternalLink={false}
          link={websiteLogo.link}
          isImage={true}
          srcPath={websiteLogo.srcPath}
          hasPriority={true}
          styleImageContainer={styles.imageContainer}
          styleImage={styles.siteLogo}
          width={websiteLogo.width}
          height={websiteLogo.height}
        />
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
          {mainNavbarItems.map((item, index) =>
            index < 2 || index === 3 ? (
              <div className={styles.navbarItem} key={index}>
                <MenuDropdown
                  label={item.label}
                  hasLink={true}
                  link={item.link}
                  styleSubMenu={styles.subMenuDropdown}
                  items={item.navbarSubMenuItems}
                />
              </div>
            ) : index === 2 ? (
              <div className={styles.navbarItem} key={index}>
                <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
                <div className={styles.subMenuDropdown}>
                  {item.navbarSubMenuItems.map((section, index) => (
                    <React.Fragment key={index}>
                      <MenuDropdown
                        label={section.label}
                        hasLink={true}
                        link={section.link}
                        styleSubMenu={styles.innerSubMenu}
                        items={section.subMenuSection}
                      />
                      <div className={styles.subMenuDivision}></div>
                    </React.Fragment>
                  ))}
                  <NavbarLink
                    label={item.navbarSubMenuItem.label}
                    isExternalLink={false}
                    link={item.navbarSubMenuItem.link}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.navbarItem} key={index}>
                <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
              </div>
            )
          )}
          <SearchBar styleContainer={styles.navbarItem} styleInput={styles.searchBar} />
        </div>
      </div>
      <div className={styles.navDropdown} aria-expanded={isToggled.toString()}>
        <div className={styles.expandedMenuContainer}>
          <SearchBar
            styleContainer={styles.extendSearchBar}
            styleInput={styles.expandedSearchBar}
          />
          <div className={styles.wrapExpandedMenu}>
            {mainNavbarItems.map((item, index) =>
              index < 2 || index === 3 ? (
                <button type="button" className={styles.expandedMenuItem} key={index}>
                  <MenuDropdown
                    label={item.label}
                    hasLink={false}
                    styleSubMenu={styles.expandedSubMenuItem}
                    items={item.navbarSubMenuItems}
                  />
                </button>
              ) : index === 2 ? (
                <button type="button" className={styles.expandedMenuItem} key={index}>
                  <p className={styles.itemName}>{item.label}</p>
                  <div className={styles.expandedSubMenuItem}>
                    {item.navbarSubMenuItems.map((section, index) => (
                      <MenuDropdown
                        label={section.label}
                        hasLink={true}
                        link={section.link}
                        styleSubMenu={styles.innerExpandedMenu}
                        items={section.subMenuSection}
                        key={index}
                      />
                    ))}
                    <NavbarLink
                      label={item.navbarSubMenuItem.label}
                      isExternalLink={false}
                      link={item.navbarSubMenuItem.link}
                    />
                  </div>
                </button>
              ) : (
                <button type="button" className={styles.expandedMenuItem} key={index}>
                  <Link href={item.link}>
                    <div className={styles.noSubMenu}>{item.label}</div>
                  </Link>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
