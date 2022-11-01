import { useRouter } from "next/router";
import NavbarLink from "../navbarLink/navbarLink";
import navData from "../../data/components/navbarItems.json";
import footerData from "../../data/components/footerItems.json";
import styles from "./subNavbar.module.scss";
import React, { useEffect, useState } from "react";

const SubNavbar = () => {
  const { asPath } = useRouter();
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(0);

  function getNavbarItemIndex(route) {
    navData.navbarItems.map((item, index) =>
      item.navbarSubMenuItems?.map(
        subItem =>
          (subItem.link === route || item.link === route) && setActiveNavbarItemIndex(index)
      )
    );
  }

  useEffect(() => {
    asPath.slice(0, navData.navbarItems[3].reducedSlug.length) !==
      navData.navbarItems[3].reducedSlug &&
      asPath !== navData.navbarItems[4].link &&
      asPath !== "/" &&
      asPath !== footerData.footerHeadItems[1].links[1].link;
    getNavbarItemIndex(asPath);
  });

  return (
    <>
      {asPath.slice(0, navData.navbarItems[3].reducedSlug.length) !==
        navData.navbarItems[3].reducedSlug &&
        asPath !== navData.navbarItems[4].link &&
        asPath !== "/" &&
        asPath !== footerData.footerHeadItems[1].links[1].link && (
          <ul className={styles.subNavbarContainer}>
            {navData.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map((item, index) => (
              <li key={index}>
                <NavbarLink
                  label={item.label}
                  link={item.link}
                  styleLink={
                    item.link === asPath ||
                    asPath + "#" === item.link.slice(0, asPath.length + 1) ||
                    asPath.slice(0, navData.navbarItems[activeNavbarItemIndex].link.length + 1) ===
                      item.link.slice(0, navData.navbarItems[activeNavbarItemIndex].link.length) +
                        "#" ||
                    item.subMenuSection?.find(element => element.link === asPath)
                      ? styles.selectedSubNavbarItem
                      : undefined
                  }
                />
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

export default SubNavbar;
