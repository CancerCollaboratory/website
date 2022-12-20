import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../tabLayout/tabLayout.module.scss";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";

const Tab = ({ label, link }) => {
  const { asPath } = useRouter();
  const [isTabActive, setIsTabActive] = useState(false);

  useEffect(() => {
    link === asPath ? setIsTabActive(true) : setIsTabActive(false);
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
