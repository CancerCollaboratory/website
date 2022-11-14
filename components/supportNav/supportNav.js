import NavbarLink from "../../components/navbarLink/navbarLink";
import { useRouter } from "next/router";
import navData from "../../data/components/navbar/navbar.json";
import styles from "./supportNav.module.scss";

const SupportNav = () => {
  const { asPath } = useRouter();
  const supportItemIndex = navData.navbarItems.findIndex(item => item.link.includes("/support"));
  const supportItem = navData.navbarItems[supportItemIndex];

  return (
    <ul className={styles.navContainer}>
      <li>
        <NavbarLink
          label={supportItem.altLabel}
          link={supportItem.link}
          styleLink={supportItem.link === asPath ? styles.selectedSubItem : undefined}
        />
      </li>
      {supportItem.navbarSubMenuItems.map((item, index) => (
        <li key={index}>
          <NavbarLink
            label={item.label}
            link={item.link}
            styleLink={item.link === asPath ? styles.selectedSubItem : undefined}
          />
        </li>
      ))}
    </ul>
  );
};

export default SupportNav;
