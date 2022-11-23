import Jumbotron from "../../../components/jumbotron/jumbotron";
import pageData from "../../../data/pages/research/technologyCores/training-outreach.json";

const TrainingAndOutreach = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default TrainingAndOutreach;
