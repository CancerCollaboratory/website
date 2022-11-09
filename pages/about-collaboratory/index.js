import pageData from "../../data/pages/about/about-collaboratory.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const AboutCollaboratory = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default AboutCollaboratory;
