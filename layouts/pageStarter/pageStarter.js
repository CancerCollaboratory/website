import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const BasicPage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default BasicPage;
