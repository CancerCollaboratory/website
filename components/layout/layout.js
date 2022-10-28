import Navbar from "../navbar/navbar";
import SubNavbar from "../subNavbar/subNavbar";
import Jumbotron from "../jumbotron/jumbotron";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Jumbotron />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
