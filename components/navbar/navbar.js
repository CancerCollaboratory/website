import clsx from "clsx";
import EscapeOutside from "react-escape-outside";
import ItemLink from "../ItemLink/ItemLink";
import NavbarItem from "../navbarItem/navbarItem";
import SearchBar from "../searchBar/searchBar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import data from "../../data/components/navbar/navbar.json";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { asPath } = useRouter();
  const [isNavbarDropdownToggled, setIsNavbarDropdownToggled] = useState(false);

  useEffect(() => {
    setIsNavbarDropdownToggled(false);
  }, [asPath]);

  function expandNavMenu() {
    !isNavbarDropdownToggled ? setIsNavbarDropdownToggled(true) : setIsNavbarDropdownToggled(false);
  }

  return (
    <EscapeOutside onEscapeOutside={() => setIsNavbarDropdownToggled(false)}>
      <div className={styles.navbarContainer}>
        <nav className={styles.secondaryNavbarContainer}>
          <div className={styles.secondaryNavbarBlock}>
            <ul className={styles.listColoredBlock}>
              {data.headerList.headerTop.map((item, index) => (
                <li className={styles.itemColoredBlock} key={index}>
                  <ItemLink label={item.label} isLinkExternal={false} link={item.link} />
                </li>
              ))}
            </ul>
            <ul className={styles.listBlock}>
              {data.headerList.headerBottom.map((item, index) => (
                <li
                  className={clsx(styles.itemBlock, item?.hasBorder && styles.itemBorderRight)}
                  key={index}
                >
                  <ItemLink label={item.label} isLinkExternal={true} link={item.link} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className={styles.mainNavbar}>
          <ItemLink
            label={data.websiteLogo.label}
            isLinkWrapped={true}
            styleWrap={styles.imageContainer}
            isLinkExternal={false}
            link={data.websiteLogo.link}
            isImageWrapped={true}
            imageSrcPath={data.websiteLogo.srcPath}
            styleImage={styles.siteLogo}
            imageHasPriority={true}
            imageWidth={275}
            imageHeight={112}
          />
          <div
            className={styles.navbarToggler}
            onClick={expandNavMenu}
            aria-expanded={isNavbarDropdownToggled.toString()}
          >
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
          </div>
          <div className={styles.navbarItemsLine}>
            {data.navbarItems.map((item, index) => (
              <NavbarItem
                itemLabel={
                  item.label !== data.navbarItems[4].label
                    ? item.label + data.itemCaret
                    : item.label
                }
                isItemlLink={true}
                itemLink={item.link}
                itemMenu={item.navbarSubMenuItems}
                key={index}
              />
            ))}
            <SearchBar styleContainer={styles.navbarItem} styleInput={styles.searchBar} />
          </div>
        </div>
        <div className={styles.navDropdown} aria-expanded={isNavbarDropdownToggled.toString()}>
          <div className={styles.expandedMenuContainer}>
            <SearchBar
              styleContainer={styles.extendSearchBar}
              styleInput={styles.expandedSearchBar}
            />
            <div className={styles.wrapExpandedMenu}>
              {data.navbarItems.map((item, index) =>
                item.navbarSubMenuItems ? (
                  <NavbarItem
                    itemLabel={item.label + data.itemCaret}
                    isItemlLink={false}
                    itemMenu={item.navbarSubMenuItems}
                    isNavbarDropdownExpanded={isNavbarDropdownToggled}
                    key={index}
                  />
                ) : (
                  <div className={styles.expandedMenuItem} key={index}>
                    <ItemLink
                      label={item.label}
                      isLinkWrapped={true}
                      styleWrap={styles.noSubMenu}
                      isLinkExternal={false}
                      link={item.link}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </EscapeOutside>
  );
};

export default Navbar;
