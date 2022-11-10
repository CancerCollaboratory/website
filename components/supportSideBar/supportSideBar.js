import SupportNav from "../supportNav/supportNav";
import styles from "./supportSideBar.module.scss";

const SupportSideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SupportNav />
    </div>
  );
};

export default SupportSideBar;
