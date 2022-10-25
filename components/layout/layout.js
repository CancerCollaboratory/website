import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
