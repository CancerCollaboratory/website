import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavbarLink from "../navbarLink/navbarLink";
import data from "../../data/components/navbar/navbar.json";
import styles from "./subNavbar.module.scss";

const SubNavbar = () => {
  const { asPath } = useRouter();
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(0);
  const researchSectionA = data.navbarItems[2].navbarSubMenuItems[0];
  const researchSectionB = data.navbarItems[2].navbarSubMenuItems[1];

  function getNavbarItemIndex(route) {
    data.navbarItems.map((item, index) =>
      item.navbarSubMenuItems?.map(
        subItem =>
          (subItem.link === route || item.link === route) && setActiveNavbarItemIndex(index)
      )
    );
  }

  useEffect(() => {
    asPath.slice(0, data.navbarItems[3].reducedSlug.length) !== data.navbarItems[3].reducedSlug &&
      asPath !== data.navbarItems[4].link &&
      getNavbarItemIndex(asPath);
  });

  return (
    <>
      {asPath.slice(0, data.navbarItems[3].reducedSlug.length) !==
        data.navbarItems[3].reducedSlug &&
        asPath !== data.navbarItems[4].link && (
          <ul className={styles.subNavbarContainer}>
            {data.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map((item, index) => (
              <li key={index}>
                <NavbarLink
                  label={item.label}
                  link={item.link}
                  styleLink={
                    asPath === item.link ||
                    (item.link.length > asPath.length &&
                      asPath + "#" === item.link.slice(0, asPath.length + 1)) ||
                    asPath.slice(0, data.navbarItems[2].link.length + 1) ===
                      item.link.slice(0, data.navbarItems[2].link.length) + "#" ||
                    ((asPath === researchSectionA.subMenuSection[0].link ||
                      asPath === researchSectionA.subMenuSection[1].link ||
                      asPath === researchSectionA.subMenuSection[2].link ||
                      asPath === researchSectionA.subMenuSection[3].link) &&
                      item.link === researchSectionA.link) ||
                    ((asPath === researchSectionB.subMenuSection[0].link ||
                      asPath === researchSectionB.subMenuSection[1].link ||
                      asPath === researchSectionB.subMenuSection[2].link ||
                      asPath === researchSectionB.subMenuSection[3].link ||
                      asPath === researchSectionB.subMenuSection[4].link) &&
                      item.link === researchSectionB.link)
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
