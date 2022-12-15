import EscapeOutside from "react-escape-outside";
import NavbarLink from "../navbarLink/navbarLink";
import NavbarMenu from "../navbarMenu/navbarMenu";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../navbar/navbar.module.scss";

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
          <NavbarLink label={itemLabel} link={itemLink} menuItems={itemMenu} />
          {isItemMenuExpanded && itemMenu && (
            <NavbarMenu
              styleMenu={styles.subMenuDropdown}
              menuItems={itemMenu}
              showActivePage={isItemlLink}
            />
          )}
        </div>
      ) : (
        <div className={styles.expandedMenuItem} onClick={() => expandSubMenu()}>
          <p className={styles.itemName}>{itemLabel + " ▾"}</p>
          {isItemMenuExpanded && (
            <NavbarMenu
              styleMenu={styles.expandedSubMenuItem}
              menuItems={itemMenu}
              showActivePage={isItemlLink}
            />
          )}
        </div>
      )}
    </EscapeOutside>
  );
};

export default NavbarItem;
