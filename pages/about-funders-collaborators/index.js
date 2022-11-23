import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/about/about-funders-collaborators.json";

const AboutFundersAndCollaborators = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default AboutFundersAndCollaborators;
