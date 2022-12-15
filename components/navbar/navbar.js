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
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);

  useEffect(() => {
    setIsDropdownToggled(false);
  }, [asPath]);

  function expandDropdown() {
    !isDropdownToggled ? setIsDropdownToggled(true) : setIsDropdownToggled(false);
  }

  return (
    <EscapeOutside onEscapeOutside={() => setIsDropdownToggled(false)}>
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
            onClick={expandDropdown}
            aria-expanded={isDropdownToggled.toString()}
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
                itemDropdown={item.dropdownItems}
                key={index}
              />
            ))}
            <SearchBar styleContainer={styles.itemContainer} styleInput={styles.searchBarInput} />
          </div>
        </div>
        <div
          className={styles.outerExpandedDropdownContainer}
          aria-expanded={isDropdownToggled.toString()}
        >
          <div className={styles.expandedDropdownContainer}>
            <SearchBar
              styleContainer={styles.expandedSearchBarContainer}
              styleInput={styles.expandedSearchBarInput}
            />
            <div className={styles.wrapExpandedDropdown}>
              {data.navbarItems.map((item, index) =>
                item.dropdownItems ? (
                  <NavbarItem
                    itemLabel={item.label}
                    isItemlLink={false}
                    itemDropdown={item.dropdownItems}
                    isDropdownExpanded={isDropdownToggled}
                    key={index}
                  />
                ) : (
                  <div className={styles.expandedItemContainer} key={index}>
                    <CustomLink label={item.label} link={item.link} styleWrap={styles.noDropdown} />
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
