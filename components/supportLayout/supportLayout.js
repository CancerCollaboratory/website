import clsx from "clsx";
import Navbar from "../navbar/navbar";
import SupportSidebar from "../supportSidebar/supportSidebar";
import Footer from "../footer/footer";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./supportLayout.module.scss";

const SupportLayout = ({ children }) => {
  if (!children) {
    return null;
  } else {
    return (
      <>
        <Navbar />
        <div className={clsx(utilStyles.pageBodyContainer, utilStyles.flexGrow)}>
          <div
            className={clsx(styles.container, utilStyles.outerContainerWidth, utilStyles.flexGrow)}
          >
            <SupportSidebar />
            <div className={clsx(styles.supportPage)}>{children}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default SupportLayout;
