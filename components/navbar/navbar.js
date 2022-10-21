import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import NavbarLink from "../navbarLink/navbarLink";
import MenuDropdown from "../menuDropdown/menuDropdown";
import SearchBar from "../searchBar/searchBar";
import data from "../../content/components/navbarItems.json";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { asPath } = useRouter();
  const [isToggled, setIsToggled] = useState(false);
  const [isMenuAboutExpanded, setIsMenuAboutExpanded] = useState(false);
  const [isMenuServicesExpanded, setIsMenuServicesExpanded] = useState(false);
  const [isMenuResearchExpanded, setIsMenuResearchExpanded] = useState(false);
  const [isMenuSupportExpanded, setIsMenuSupportExpanded] = useState(false);

  const useMenuStates = [
    {
      isMenuExpanded: isMenuAboutExpanded,
      setIsMenuExpanded: setIsMenuAboutExpanded,
    },
    {
      isMenuExpanded: isMenuServicesExpanded,
      setIsMenuExpanded: setIsMenuServicesExpanded,
    },
    {
      isMenuExpanded: isMenuResearchExpanded,
      setIsMenuExpanded: setIsMenuResearchExpanded,
    },
    {
      isMenuExpanded: isMenuSupportExpanded,
      setIsMenuExpanded: setIsMenuSupportExpanded,
    },
  ];

  useEffect(() => {
    setIsToggled(false);
    setIsMenuAboutExpanded(false);
    setIsMenuServicesExpanded(false);
    setIsMenuResearchExpanded(false);
    setIsMenuSupportExpanded(false);
  }, [asPath]);

  function expandNavMenu() {
    if (!isToggled) {
      setIsToggled(true);
      collapseSubMenuItems("");
    } else {
      setIsToggled(false);
    }
  }

  function expandSubMenu(isExpanded, setExpanded, menuId) {
    !isExpanded ? setExpanded(true) : setExpanded(false);
    collapseSubMenuItems(menuId);
  }

  function collapseSubMenuItems(activeSubMenu) {
    const filteredSubMenuIds = data.mainNavbarItems.filter(
      (item, index) => index < 4 && item.subMenuId !== activeSubMenu
    );

    for (let index = 0; filteredSubMenuIds.length === 3 ? index < 3 : index < 4; index++) {
      if (filteredSubMenuIds[index].subMenuId === data.mainNavbarItems[0].subMenuId) {
        if (isMenuAboutExpanded) {
          setIsMenuAboutExpanded(false);
        }
      } else if (filteredSubMenuIds[index].subMenuId === data.mainNavbarItems[1].subMenuId) {
        if (isMenuServicesExpanded) {
          setIsMenuServicesExpanded(false);
        }
      } else if (filteredSubMenuIds[index].subMenuId === data.mainNavbarItems[2].subMenuId) {
        if (isMenuResearchExpanded) {
          setIsMenuResearchExpanded(false);
        }
      } else {
        if (isMenuSupportExpanded) {
          setIsMenuSupportExpanded(false);
        }
      }
    }
  }

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.secondaryNavbarContainer}>
        <div className={styles.secondaryNavbarBlock}>
          <ul className={styles.listColoredBlock}>
            {data.headerList.headerTop.map((item, index) => (
              <li className={styles.itemColoredBlock} key={index}>
                <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
              </li>
            ))}
          </ul>
          <ul className={styles.listBlock}>
            {data.headerList.headerBottom.map((item, index) =>
              index < 2 ? (
                <li className={`${styles.itemBlock} ${styles.itemBlockRightBorder}`} key={index}>
                  <NavbarLink label={item.label} isExternalLink={true} link={item.link} />
                </li>
              ) : (
                <li className={styles.itemBlock} key={index}>
                  <NavbarLink label={item.label} isExternalLink={true} link={item.link} />
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      <div className={styles.mainNavbar}>
        <NavbarLink
          label={data.websiteLogo.label}
          isLinkWrapped={true}
          wrapStyle={styles.imageContainer}
          isExternalLink={false}
          link={data.websiteLogo.link}
          isImageWrapped={true}
          imageSrcPath={data.websiteLogo.srcPath}
          styleImage={styles.siteLogo}
          imageWidth={data.websiteLogo.width}
          imageHeight={data.websiteLogo.height}
          isImageHighPriority={true}
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
        <nav className={styles.navbarItemsLine}>
          {data.mainNavbarItems.map((item, index) =>
            index < 2 || index === 3 ? (
              <div
                className={styles.navbarItem}
                onMouseOver={() => useMenuStates[index].setIsMenuExpanded(true)}
                onMouseLeave={() => useMenuStates[index].setIsMenuExpanded(false)}
                key={index}
              >
                <MenuDropdown
                  label={item.label}
                  hasLink={true}
                  link={item.link}
                  styleSubMenu={styles.subMenuDropdown}
                  items={item.navbarSubMenuItems}
                  shouldExpand={useMenuStates[index].isMenuExpanded}
                />
              </div>
            ) : index === 2 ? (
              <div
                className={styles.navbarItem}
                onMouseOver={() => useMenuStates[index].setIsMenuExpanded(true)}
                onMouseLeave={() => useMenuStates[index].setIsMenuExpanded(false)}
                key={index}
              >
                <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
                {useMenuStates[index].isMenuExpanded && (
                  <div className={styles.subMenuDropdown}>
                    {item.navbarSubMenuItems.map((section, subIndex) => (
                      <React.Fragment key={subIndex}>
                        <MenuDropdown
                          label={section.label}
                          hasLink={true}
                          link={section.link}
                          styleSubMenu={styles.innerSubMenu}
                          items={section.subMenuSection}
                          shouldExpand={useMenuStates[index].isMenuExpanded}
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
                )}
              </div>
            ) : (
              <div className={styles.navbarItem} key={index}>
                <NavbarLink label={item.label} isExternalLink={false} link={item.link} />
              </div>
            )
          )}
          <SearchBar styleContainer={styles.navbarItem} styleInput={styles.searchBar} />
        </nav>
      </div>
      <div className={styles.navDropdown} aria-expanded={isToggled.toString()}>
        <div className={styles.expandedMenuContainer}>
          <SearchBar
            styleContainer={styles.extendSearchBar}
            styleInput={styles.expandedSearchBar}
          />
          <div className={styles.wrapExpandedMenu} onMouseLeave={() => collapseSubMenuItems("")}>
            {data.mainNavbarItems.map((item, index) =>
              index < 2 || index === 3 ? (
                <button
                  type="button"
                  className={styles.expandedMenuItem}
                  onClick={() =>
                    expandSubMenu(
                      useMenuStates[index].isMenuExpanded,
                      useMenuStates[index].setIsMenuExpanded,
                      item.subMenuId
                    )
                  }
                  key={index}
                >
                  <MenuDropdown
                    label={item.label}
                    hasLink={false}
                    styleSubMenu={styles.expandedSubMenuItem}
                    items={item.navbarSubMenuItems}
                    shouldExpand={useMenuStates[index].isMenuExpanded}
                  />
                </button>
              ) : index === 2 ? (
                <button
                  type="button"
                  className={styles.expandedMenuItem}
                  onClick={() =>
                    expandSubMenu(
                      useMenuStates[index].isMenuExpanded,
                      useMenuStates[index].setIsMenuExpanded,
                      item.subMenuId
                    )
                  }
                  key={index}
                >
                  <p className={styles.itemName}>{item.label}</p>
                  {useMenuStates[index].isMenuExpanded && (
                    <div className={styles.expandedSubMenuItem}>
                      {item.navbarSubMenuItems.map((section, subIndex) => (
                        <MenuDropdown
                          label={section.label}
                          hasLink={true}
                          link={section.link}
                          styleSubMenu={styles.innerExpandedMenu}
                          items={section.subMenuSection}
                          shouldExpand={useMenuStates[index].isMenuExpanded}
                          key={subIndex}
                        />
                      ))}
                      <NavbarLink
                        label={item.navbarSubMenuItem.label}
                        isExternalLink={false}
                        link={item.navbarSubMenuItem.link}
                      />
                    </div>
                  )}
                </button>
              ) : (
                <button type="button" className={styles.expandedMenuItem} key={index}>
                  <NavbarLink
                    label={item.label}
                    isLinkWrapped={true}
                    wrapStyle={styles.noSubMenu}
                    isExternalLink={false}
                    link={item.link}
                  />
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
