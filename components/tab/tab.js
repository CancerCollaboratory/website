import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomLink from "../customLink/customLink";
import data from "../../data/pages/services/services-cloud-resources.json";
import utilStyles from "../../styles/utils.module.scss";
import styles from "../tabLayout/tabLayout.module.scss";

const Tab = ({ label, link }) => {
  const { asPath } = useRouter();
  const [isTabActive, setIsTabActive] = useState(false);
  const tabSection = data.tabSection;

  useEffect(() => {
    link === asPath ||
    (link === tabSection?.tabLayout?.tabs[0]?.link && asPath === tabSection?.mainPageUrl)
      ? setIsTabActive(true)
      : setIsTabActive(false);
  }, [asPath]);

  if (!label || !link) {
    return null;
  } else {
    return (
      <li className={isTabActive ? styles.activeTab : undefined}>
        <CustomLink label={label} link={link} styleLabel={utilStyles.commonAnchor} />
      </li>
    );
  }
};

export default Tab;
