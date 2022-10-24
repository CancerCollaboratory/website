import React from "react";
import NavbarLink from "../navbarLink/navbarLink";
import styles from "../navbar/navbar.module.scss";

const NavbarMenu = ({ styleMenu, styleSubMenu, menuItems, hasSubMenuDivison }) => {
  return (
    <div className={styleMenu}>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <NavbarLink label={item.label} link={item.link} />
          <ul className={styleSubMenu}>
            {item.subMenuSection?.map((subItem, subIndex) => (
              <li key={subIndex}>
                <NavbarLink label={subItem.label} link={subItem.link} />
              </li>
            ))}
          </ul>
          {hasSubMenuDivison && item.subMenuSection && (
            <div className={styles.subMenuDivision}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavbarMenu;
