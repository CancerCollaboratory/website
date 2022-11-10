import pageData from "../../../data/pages/research/modules/tumour-heterogenity-evolution.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const TumourHeterogenityAndEvolution = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default TumourHeterogenityAndEvolution;
