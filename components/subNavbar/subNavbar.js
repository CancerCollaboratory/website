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
      if (navbarItems[i].dropdownItems) {
        for (let j = 0; j < navbarItems[i].dropdownItems.length; j++) {
          if (navbarItems[i].dropdownItems[j].link === route) {
            setActiveNavbarItemIndex(i);
            break;
          }
        }
      }
    }
  }

  function doesActiveItemHaveDropdown() {
    return !!navbarData.navbarItems[activeNavbarItemIndex]?.dropdownItems;
  }

  useEffect(() => {
    getNavbarItemIndex(asPath);
  }, [asPath]);

  return (
    doesActiveItemHaveDropdown() && (
      <ul className={styles.container}>
        {navbarData.navbarItems[activeNavbarItemIndex].dropdownItems.map((item, index) => (
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
