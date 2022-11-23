import Jumbotron from "../../../components/jumbotron/jumbotron";
import pageData from "../../../data/pages/research/modules/drug-target-identification.json";

const DrugTargetIdentification = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default DrugTargetIdentification;
