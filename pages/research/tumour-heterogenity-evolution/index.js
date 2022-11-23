import Jumbotron from "../../../components/jumbotron/jumbotron";
import pageData from "../../../data/pages/research/modules/tumour-heterogenity-evolution.json";

const TumourHeterogenityAndEvolution = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default TumourHeterogenityAndEvolution;
