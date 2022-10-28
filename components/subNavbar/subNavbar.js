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
        subItem =>
          (subItem.link === route || item.link === route) && setActiveNavbarItemIndex(index)
      )
    );
  }

  useEffect(() => {
    asPath !== data.navbarItems[3].link &&
      asPath !== data.navbarItems[4].link &&
      getNavbarItemIndex(asPath);
  });

  return (
    <>
      {asPath !== data.navbarItems[3].link && asPath !== data.navbarItems[4].link && (
        <ul className={styles.subNavbarContainer}>
          {data.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map((item, index) => (
            <li key={index}>
              <NavbarLink label={item.label} link={item.link} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SubNavbar;
