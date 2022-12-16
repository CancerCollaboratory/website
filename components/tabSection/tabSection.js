import clsx from "clsx";
import TabLayout from "../tabLayout/tabLayout";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./tabSection.module.scss";

const TabSection = ({ children }) => {
  if (!children) {
    return null;
  } else {
    return (
      <div className={clsx(styles.container, utilStyles.outerContainer)}>
        <div className={utilStyles.onlyChildContainer}>
          <TabLayout />
        </div>
        <div className={styles.innerContainer}>{children}</div>
      </div>
    );
  }
};

export default TabSection;
