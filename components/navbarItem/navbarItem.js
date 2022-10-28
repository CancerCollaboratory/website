import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import EscapeOutside from "react-escape-outside";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "../navbar/navbar.module.scss";
import NavbarMenu from "../navbarMenu/navbarMenu";
import data from "../../content/components/navbarItems.json";

const NavbarItem = ({ itemLabel, isItemlLink, itemLink, itemMenu, isNavbarDropdownExpanded }) => {
  const { asPath } = useRouter();
  const [isItemMenuExpanded, setIsItemMenuExpanded] = useState(false);

  useEffect(() => {
    setIsItemMenuExpanded(false);
  }, [asPath, isNavbarDropdownExpanded]);

  function expandSubMenu() {
    !isItemMenuExpanded ? setIsItemMenuExpanded(true) : setIsItemMenuExpanded(false);
  }

  return (
    <EscapeOutside onEscapeOutside={() => setIsItemMenuExpanded(false)}>
      {isItemlLink ? (
        <div
          className={styles.navbarItem}
          onMouseOver={() => setIsItemMenuExpanded(true)}
          onMouseLeave={() => setIsItemMenuExpanded(false)}
        >
          <NavbarLink
            label={itemLabel}
            link={itemLink}
            styleLink={
              (asPath.slice(0, itemLink.length) === itemLink ||
                itemLink.slice(0, data.navbarItems[0].reducedSlug.length) ===
                  asPath.slice(0, data.navbarItems[0].reducedSlug.length)) &&
              asPath !== data.navbarItems[2].navbarSubMenuItems[2].link &&
              asPath !== data.navbarItems[3].link
                ? styles.selectedNavbarItem
                : undefined
            }
          />
          {isItemMenuExpanded && itemMenu && (
            <NavbarMenu
              styleMenu={styles.subMenuDropdown}
              styleSubMenu={styles.innerSubMenu}
              menuItems={itemMenu}
              hasSubMenuDivison={isItemlLink}
            />
          )}
        </div>
      ) : (
        <div className={styles.expandedMenuItem} onClick={() => expandSubMenu()}>
          <p className={styles.itemName}>{itemLabel}</p>
          {isItemMenuExpanded && (
            <NavbarMenu
              styleMenu={styles.expandedSubMenuItem}
              styleSubMenu={styles.innerExpandedMenu}
              menuItems={itemMenu}
              hasSubMenuDivison={isItemlLink}
            />
          )}
        </div>
      )}
    </EscapeOutside>
  );
};

export default NavbarItem;
