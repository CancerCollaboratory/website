import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const SupportLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SupportLayout;
