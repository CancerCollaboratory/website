import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "../navbar/navbar.module.scss";
import NavbarMenu from "../navbarMenu/navbarMenu";

const NavbarItem = ({
  itemLabel,
  isItemlLink,
  itemLink,
  styleItemMenu,
  styleItemSubMenu,
  itemMenu,
  isNavbarDropdownExpanded,
}) => {
  const { asPath } = useRouter();
  const [isItemMenuExpanded, setIsItemMenuExpanded] = useState(false);

  useEffect(() => {
    setIsItemMenuExpanded(false);
  }, [asPath, isNavbarDropdownExpanded]);

  function expandSubMenu() {
    !isItemMenuExpanded ? setIsItemMenuExpanded(true) : setIsItemMenuExpanded(false);
  }

  return (
    <>
      {isItemlLink ? (
        <div
          className={styles.navbarItem}
          onMouseOver={() => setIsItemMenuExpanded(true)}
          onMouseLeave={() => setIsItemMenuExpanded(false)}
        >
          <NavbarLink label={itemLabel} link={itemLink} />
          {isItemMenuExpanded && itemMenu && (
            <NavbarMenu
              styleMenu={styleItemMenu}
              styleSubMenu={styleItemSubMenu}
              menuItems={itemMenu}
              hasSubMenuDivison={isItemlLink}
            />
          )}
        </div>
      ) : (
        <div className={styles.expandedMenuItem} onClick={() => expandSubMenu()}>
          <p className={styles.itemName}>{itemLabel}</p>
          {isItemMenuExpanded && itemMenu && (
            <NavbarMenu
              styleMenu={styleItemMenu}
              styleSubMenu={styleItemSubMenu}
              menuItems={itemMenu}
              hasSubMenuDivison={isItemlLink}
            />
          )}
        </div>
      )}
    </>
  );
};

export default NavbarItem;
