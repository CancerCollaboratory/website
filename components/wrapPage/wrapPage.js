import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const WrapPage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default WrapPage;
