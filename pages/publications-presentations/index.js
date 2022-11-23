import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/research/publications/publications-presentations.json";

const PublicationsAndPresentations = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} />;
};

export default PublicationsAndPresentations;
