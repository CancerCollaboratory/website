import CustomLink from "../../components/customLink/customLink";
import { useRouter } from "next/router";
import navData from "../../data/components/navbar/navbar.json";
import styles from "./supportNav.module.scss";

const SupportNav = () => {
  const { asPath } = useRouter();
  const supportItemIndex = navData.navbarItems?.findIndex((item) =>
    item.link?.includes("/support")
  );
  const supportItem = navData.navbarItems[supportItemIndex];

  if (!supportItem) {
    return null;
  } else {
    return (
      <ul className={styles.navContainer}>
        <li>
          <CustomLink
            label={supportItem.altLabel}
            link={supportItem.link}
            styleLabel={supportItem.link === asPath ? styles.selectedSubItem : undefined}
          />
        </li>
        {supportItem.dropdownItems?.map((item, index) => (
          <li key={index}>
            <CustomLink
              label={item.label}
              link={item.link}
              styleLabel={item.link === asPath ? styles.selectedSubItem : undefined}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default SupportNav;
