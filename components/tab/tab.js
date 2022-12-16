import { useRouter } from "next/router";
import CustomLink from "../customLink/customLink";
import data from "../../data/pages/services/services-cloud-resources.json";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./tab.module.scss";

const Tab = () => {
  const { asPath } = useRouter();
  const tabLayout = data.tabLayout;

  if (!asPath.includes(tabLayout?.mainPageUrl)) {
    return null;
  } else {
    return (
      <ul className={styles.container}>
        {tabLayout?.tabs?.map(
          (item, index) =>
            item.label &&
            item.link && (
              <li className={utilStyles.commonAnchor} key={index}>
                <CustomLink label={item.label} link={item.link} />
              </li>
            )
        )}
      </ul>
    );
  }
};

export default Tab;
