import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/services/services-request-account.json";

const RequestAccount = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />;
};

export default RequestAccount;
