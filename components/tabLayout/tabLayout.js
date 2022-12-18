import { useRouter } from "next/router";
import Tab from "../tab/tab";
import data from "../../data/pages/services/services-cloud-resources.json";
import styles from "./tabLayout.module.scss";

const TabLayout = () => {
  const { asPath } = useRouter();
  const tabSection = data.tabSection;

  if (!asPath.includes(tabSection?.mainPageUrl)) {
    return null;
  } else {
    return (
      <ul className={styles.container}>
        {tabSection?.tabLayout?.tabs?.map((tab, index) => (
          <Tab label={tab.label} link={tab.link} key={index} />
        ))}
      </ul>
    );
  }
};

export default TabLayout;
