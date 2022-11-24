import BannerLayout from "../bannerLayout/bannerLayout";
import Navbar from "../navbar/navbar";
import SubNavbar from "../subNavbar/subNavbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <BannerLayout />
      <Navbar />
      <SubNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
