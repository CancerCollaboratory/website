import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/privacy/privacy-policy.json";

const PrivacyPolicy = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} />;
};

export default PrivacyPolicy;
