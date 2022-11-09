import pageData from "../../../data/pages/research/technologyCores/management-finance.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const ManagementAndFinance = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default ManagementAndFinance;
