import NavbarLink from "../../components/navbarLink/navbarLink";
import navData from "../../data/components/navbar/navbar.json";
import styles from "./supportNav.module.scss";

const SupportNav = () => {
  const supportItemIndex = navData.navbarItems.findIndex(item => item.link.includes("/support"));

  return (
    <ul className={styles.navContainer}>
      {navData.navbarItems[supportItemIndex].navbarSubMenuItems.map((item, index) => (
        <li key={index}>
          {console.log(item.label)}
          <NavbarLink label={item.label} link={item.link} />
        </li>
      ))}
    </ul>
  );
};

export default SupportNav;
