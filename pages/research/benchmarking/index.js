import pageData from "../../../data/pages/research/technologyCores/benchmarking.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const Benchmarking = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default Benchmarking;
