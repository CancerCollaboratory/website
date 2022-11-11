import Navbar from "../navbar/navbar";
import SupportSidebar from "../supportSidebar/supportSidebar";
import Footer from "../footer/footer";

const SupportLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SupportSidebar />
      {children}
      <Footer />
    </>
  );
};

export default SupportLayout;
