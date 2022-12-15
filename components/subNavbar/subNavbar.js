import CustomLink from "../customLink/customLink";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import navbarData from "../../data/components/navbar/navbar.json";
import styles from "./subNavbar.module.scss";

const SubNavbar = () => {
  const { asPath } = useRouter();
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(-1);

  function getNavbarItemIndex(route) {
    const navbarItems = navbarData.navbarItems;
    setActiveNavbarItemIndex(-1);

    for (let i = 0; i < navbarItems.length; i++) {
      if (navbarItems[i].link === route) {
        setActiveNavbarItemIndex(i);
        break;
      }
      if (navbarItems[i].navbarSubMenuItems) {
        for (let j = 0; j < navbarItems[i].navbarSubMenuItems.length; j++) {
          if (navbarItems[i].navbarSubMenuItems[j].link === route) {
            setActiveNavbarItemIndex(i);
            break;
          }
          if (navbarItems[i].navbarSubMenuItems[j]?.subMenuSection) {
            for (let k = 0; k < navbarItems[i].navbarSubMenuItems[j].subMenuSection.length; k++) {
              if (navbarItems[i].navbarSubMenuItems[j].subMenuSection[k].link === route) {
                setActiveNavbarItemIndex(i);
                break;
              }
            }
          }
        }
      }
    }
  }

  function doesActiveItemHaveSubMenu() {
    return !!navbarData.navbarItems[activeNavbarItemIndex]?.navbarSubMenuItems;
  }

  useEffect(() => {
    getNavbarItemIndex(asPath);
  }, [asPath]);

  return (
    doesActiveItemHaveSubMenu() && (
      <ul className={styles.subNavbarContainer}>
        {navbarData.navbarItems[activeNavbarItemIndex].navbarSubMenuItems?.map((item, index) => (
          <li key={index}>
            <CustomLink
              label={item.label}
              link={item.link}
              styleLabel={item.link === asPath ? styles.selectedSubNavbarItem : undefined}
            />
          </li>
        ))}
      </ul>
    )
  );
};

export default SubNavbar;
