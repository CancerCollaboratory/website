import React from "react";
import CustomLink from "../customLink/customLink";
import { useRouter } from "next/router";
import styles from "../navbar/navbar.module.scss";

const NavbarMenu = ({ styleMenu, styleSubMenu, menuItems, hasSubMenuDivison }) => {
  const { asPath } = useRouter();

  return (
    <div className={styleMenu}>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <CustomLink
            label={item.label}
            link={item.link}
            styleLabel={
              hasSubMenuDivison &&
              (item.link === asPath || asPath + "#" === item.link.slice(0, asPath.length + 1))
                ? styles.activePage
                : undefined
            }
          />
          <ul className={styleSubMenu}>
            {item.subMenuSection?.map((subItem, subIndex) => (
              <li key={subIndex}>
                <CustomLink
                  label={subItem.label}
                  link={subItem.link}
                  styleLabel={
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
