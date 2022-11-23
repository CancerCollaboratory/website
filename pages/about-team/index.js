import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/about/about-team.json";

const AboutTeam = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default AboutTeam;
