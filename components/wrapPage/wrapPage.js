import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const WrapPage = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WrapPage;
