import pageData from "../../data/pages/privacy/privacy-policy.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const PrivacyPolicy = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} />;
};

export default PrivacyPolicy;
