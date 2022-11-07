import React from "react";
import { useRouter } from "next/router";
import ItemLink from "../itemLink/itemLink";
import styles from "../navbar/navbar.module.scss";

const NavbarMenu = ({ styleMenu, styleSubMenu, menuItems, hasSubMenuDivison }) => {
  const { asPath } = useRouter();

  return (
    <div className={styleMenu}>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <ItemLink
            label={item.label}
            link={item.link}
            styleLink={
              hasSubMenuDivison &&
              (item.link === asPath || asPath + "#" === item.link.slice(0, asPath.length + 1))
                ? styles.activePage
                : undefined
            }
          />
          <ul className={styleSubMenu}>
            {item.subMenuSection?.map((subItem, subIndex) => (
              <li key={subIndex}>
                <ItemLink
                  label={subItem.label}
                  link={subItem.link}
                  styleLink={
                    hasSubMenuDivison && subItem.link === asPath ? styles.activePage : undefined
                  }
                />
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
