import pageData from "../../data/pages/services/services-request-account.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const RequestAccount = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default RequestAccount;
