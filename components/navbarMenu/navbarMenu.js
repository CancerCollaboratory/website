import React from "react";
import CustomLink from "../customLink/customLink";
import { useRouter } from "next/router";
import styles from "../navbar/navbar.module.scss";

const NavbarMenu = ({ styleMenu, menuItems, showActivePage }) => {
  const { asPath } = useRouter();

  return (
    <div className={styleMenu}>
      {menuItems.map((item, index) => (
        <ul key={index}>
          <li>
            <CustomLink
              label={item.label}
              link={item.link}
              styleLabel={showActivePage && item.link === asPath ? styles.activePage : undefined}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default NavbarMenu;
