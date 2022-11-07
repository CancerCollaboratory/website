import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavbarLink from "../navbarLink/navbarLink";
import mainNavbarData from "../../data/components/navbarItems.json";
import subNavbarData from "../../data/components/subNavbar.json";
import styles from "./subNavbar.module.scss";

const SubNavbar = () => {
  const { asPath } = useRouter();
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(0);

  function getNavbarItemIndex(pagePath) {
    mainNavbarData.navbarItems.map((item, index) =>
      item.navbarSubMenuItems?.map(
        subItem =>
          (subItem.link === pagePath || item.link === pagePath) && setActiveNavbarItemIndex(index)
      )
    );
  }

  useEffect(() => {
    !subNavbarData.notActiveStatePaths.find(item => item.pathName === asPath) &&
      getNavbarItemIndex(asPath);
  });

  return (
    <>
      {!subNavbarData.notActiveStatePaths.find(item => item.pathName === asPath) && (
        <ul className={styles.subNavbarContainer}>
          {mainNavbarData.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map(
            (item, index) => (
              <li key={index}>
                {console.log(item.link)}
                <NavbarLink
                  label={item.label}
                  link={item.link}
                  styleLink={
                    item.link === asPath ||
                    item.subMenuSection?.find(subItem => subItem.link === asPath) ||
                    item.link.includes(asPath + "#") ||
                    (asPath.includes(subNavbarData.multiSubMenu.pathFormat) &&
                      item.link.includes(subNavbarData.multiSubMenu.pathFormat))
                      ? styles.selectedSubNavbarItem
                      : undefined
                  }
                />
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default SubNavbar;
