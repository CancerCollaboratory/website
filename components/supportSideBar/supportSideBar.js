import SupportNav from "../supportNav/supportNav";
import styles from "./supportSidebar.module.scss";

const SupportSidebar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SupportNav />
    </div>
  );
};

export default SupportSidebar;
