import NavbarLink from "../navbarLink/navbarLink";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import navbarData from "../../data/components/navbarItems.json";
import styles from "./subNavbar.module.scss";

const SubNavbar = () => {
  const { asPath } = useRouter();
  const [showSubNav, setShowSubNav] = useState(0);
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(0);
  const notActiveStatePaths = ["/", "/contact-us", "/privacy-policy"];

  function getNavbarItemIndex(route) {
    navbarData.navbarItems.map((item, index) =>
      item.navbarSubMenuItems?.map(
        subItem =>
          (subItem.link === route || item.link === route) && setActiveNavbarItemIndex(index)
      )
    );
  }

  useEffect(() => {
    setShowSubNav(!notActiveStatePaths.includes(asPath) && !asPath.includes("/support"));
    showSubNav && getNavbarItemIndex(asPath);
  });

  return (
    <>
      {showSubNav && (
        <ul className={styles.subNavbarContainer}>
          {navbarData.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map((item, index) => (
            <li key={index}>
              <NavbarLink
                label={item.label}
                link={item.link}
                styleLink={
                  item.link === asPath ||
                  item.subMenuSection?.find(subItem => subItem.link === asPath)
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
