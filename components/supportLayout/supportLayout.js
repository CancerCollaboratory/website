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
        <div className={utilStyles.pageBodyContainer}>
          <div className={clsx(styles.container, utilStyles.outerContainer)}>
            <SupportSidebar />
            {children}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default SupportLayout;
