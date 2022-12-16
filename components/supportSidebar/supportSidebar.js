import SupportNav from "../supportNav/supportNav";
import styles from "./supportSidebar.module.scss";

const SupportSidebar = () => {
  return (
    <div className={styles.container}>
      <SupportNav />
    </div>
  );
};

export default SupportSidebar;
