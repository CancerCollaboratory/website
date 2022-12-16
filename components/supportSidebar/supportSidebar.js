import clsx from "clsx";
import SupportNav from "../supportNav/supportNav";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./supportSidebar.module.scss";

const SupportSidebar = () => {
  return (
    <div className={clsx(styles.container, utilStyles.altGradientBackgroundGray)}>
      <SupportNav />
    </div>
  );
};

export default SupportSidebar;
