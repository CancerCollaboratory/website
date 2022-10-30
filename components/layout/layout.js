import Navbar from "../navbar/navbar";
import SubNavbar from "../subNavbar/subNavbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
