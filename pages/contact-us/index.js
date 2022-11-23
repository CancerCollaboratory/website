import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/contact/contact-us.json";

const ContactUs = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} />;
};

export default ContactUs;
