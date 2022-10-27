import { useRouter } from "next/router";
import NavbarLink from "../navbarLink/navbarLink";
import data from "../../content/components/navbarItems.json";
import styles from "./subNavbar.module.scss";
import React, { useEffect, useState } from "react";

const SubNavbar = () => {
  const { asPath } = useRouter();
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(0);

  function getNavbarItemIndex(route) {
    data.navbarItems.map((item, index) =>
      item.navbarSubMenuItems?.map(
        subItem => subItem.link === route && setActiveNavbarItemIndex(index)
      )
    );
  }

  useEffect(() => {
    asPath !== data.navbarItems[3].label && getNavbarItemIndex(asPath);
  });

  return (
    <ul className={styles.subNavbarContainer}>
      {data.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map((item, index) => (
        <li key={index}>
          <NavbarLink label={item.label} link={item.link} />
        </li>
      ))}
    </ul>
  );
};

export default SubNavbar;
