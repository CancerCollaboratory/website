import clsx from "clsx";
import EscapeOutside from "react-escape-outside";
import Image from "next/image";
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
      <div className={styles.container}>
        <nav className={styles.secondaryContainer}>
          <div className={styles.secondaryBlock}>
            <ul className={styles.coloredBlock}>
              {data.headerList.headerTop.map((item, index) => (
                <li key={index}>
                  <CustomLink label={item.label} link={item.link} />
                </li>
              ))}
            </ul>
            <ul className={styles.uncoloredBlock}>
              {data.headerList.headerBottom.map((item, index) => (
                <li className={clsx(item?.hasBorder ? styles.borderRight : undefined)} key={index}>
                  <CustomLink label={item.label} link={item.link} isLinkExternal={true} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className={styles.mainContainer}>
          <CustomLink link={data.websiteLogo.link}>
            <div className={styles.imageContainer}>
              <Image
                src={data.websiteLogo.srcPath}
                alt={data.websiteLogo.label}
                className={styles.logo}
                priority={true}
                quality={100}
                width={275}
                height={112}
              />
            </div>
          </CustomLink>
          <div
            className={styles.toggler}
            onClick={expandNavMenu}
            aria-expanded={isNavbarDropdownToggled.toString()}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <div className={styles.itemLine}>
            {data.navbarItems.map((item, index) => (
              <NavbarItem
                itemLabel={item.label}
                isItemlLink={true}
                itemLink={item.link}
                itemMenu={item.navbarSubMenuItems}
                key={index}
              />
            ))}
            <SearchBar styleContainer={styles.itemContainer} styleInput={styles.searchBarInput} />
          </div>
        </div>
        <div className={styles.dropdown} aria-expanded={isNavbarDropdownToggled.toString()}>
          <div className={styles.expandedMenuContainer}>
            <SearchBar
              styleContainer={styles.expandedSearchBarContainer}
              styleInput={styles.expandedSearchBarInput}
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
                  <div className={styles.expandedItemContainer} key={index}>
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
