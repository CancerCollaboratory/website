import pageData from "../../data/pages/contact/contact-us.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const ContactUs = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} />;
};

export default ContactUs;
