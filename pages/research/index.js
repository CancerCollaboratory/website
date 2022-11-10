import pageData from "../../data/pages/research/research.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const Research = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default Research;
