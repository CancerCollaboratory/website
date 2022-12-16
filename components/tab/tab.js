import { useRouter } from "next/router";
import CustomLink from "../customLink/customLink";
import data from "../../data/components/tab/tab.json";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./tab.module.scss";

const Tab = () => {
  const { asPath } = useRouter();
  const tab = data.tab;

  if (!asPath.includes(tab?.CloudResources?.mainPageUrl)) {
    return null;
  } else {
    return (
      <ul className={styles.container}>
        {tab?.CloudResources?.map(
          (item, index)(
            item.label && item.linkedPage && (
              <li className={utilStyles.commonAnchor} key={index}>
                <CustomLink label={item.label} link={item.linkedPage} />
              </li>
            )
          )
        )}
      </ul>
    );
  }
};

export default Tab;
