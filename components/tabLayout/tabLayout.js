import clsx from "clsx";
import Tab from "../../components/tab/tab";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./tabLayout.module.scss";

const TabLayout = ({ children }) => {
  return (
    <div className={clsx(styles.container, utilStyles.outerContainer)}>
      <div className={utilStyles.onlyChildContainer}>
        <Tab />
      </div>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default TabLayout;
