import pageData from "../../data/pages/contact/contact-us.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const ContactUs = () => {
  return (
    <>
      <Jumbotron data={pageData} />
    </>
  );
};

export default ContactUs;
