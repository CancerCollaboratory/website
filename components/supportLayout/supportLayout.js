import BannerLayout from "../bannerLayout/bannerLayout";
import Navbar from "../navbar/navbar";
import SupportSidebar from "../supportSidebar/supportSidebar";
import Footer from "../footer/footer";

const SupportLayout = ({ children }) => {
  return (
    <>
      <BannerLayout />
      <Navbar />
      <SupportSidebar />
      {children}
      <Footer />
    </>
  );
};

export default SupportLayout;
