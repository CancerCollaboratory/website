import Navbar from "../navbar/navbar";
import SupportSidebar from "../supportSidebar/supportSidebar";
import Footer from "../footer/footer";
import styles from "./supportLayout.module.scss";

const SupportLayout = ({ children }) => {
  if (!children) {
    return null;
  } else {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <SupportSidebar />
          {children}
        </div>
        <Footer />
      </>
    );
  }
};

export default SupportLayout;
