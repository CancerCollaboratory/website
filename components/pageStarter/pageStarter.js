import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const PageStarter = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default PageStarter;
