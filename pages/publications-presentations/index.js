import pageData from "../../data/pages/research/publications/publications-presentations.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const PublicationsAndPresentations = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} />;
};

export default PublicationsAndPresentations;
