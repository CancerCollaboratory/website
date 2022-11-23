import clsx from "clsx";
import EscapeOutside from "react-escape-outside";
import Image from "next/future/image";
import CustomLink from "../customLink/customLink";
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
                  <CustomLink label={item.label} link={item.link} />
                </li>
              ))}
            </ul>
            <ul className={styles.listBlock}>
              {data.headerList.headerBottom.map((item, index) => (
                <li
                  className={clsx(styles.itemBlock, item?.hasBorder && styles.itemBorderRight)}
                  key={index}
                >
                  <CustomLink label={item.label} link={item.link} isLinkExternal={true} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className={styles.mainNavbar}>
          <CustomLink link={data.websiteLogo.link}>
            <div className={styles.imageContainer}>
              <Image
                src={data.websiteLogo.srcPath}
                alt={data.websiteLogo.label}
                className={styles.siteLogo}
                priority={true}
                quality={100}
                width={275}
                height={112}
              />
            </div>
          </CustomLink>
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
                itemLabel={item.label}
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
                    itemLabel={item.label}
                    isItemlLink={false}
                    itemMenu={item.navbarSubMenuItems}
                    isNavbarDropdownExpanded={isNavbarDropdownToggled}
                    key={index}
                  />
                ) : (
                  <div className={styles.expandedMenuItem} key={index}>
                    <CustomLink label={item.label} link={item.link} styleWrap={styles.noSubMenu} />
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
