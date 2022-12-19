import clsx from "clsx";
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
      <li className={clsx(isTabActive ? styles.activeTab : undefined, utilStyles.commonAnchor)}>
        <CustomLink label={label} link={link} />
      </li>
    );
  }
};

export default Tab;
