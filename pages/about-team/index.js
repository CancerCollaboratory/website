import pageData from "../../data/pages/about/about-team.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const AboutTeam = () => {
  return (
    <>
      <Jumbotron data={pageData} />
    </>
  );
};

export default AboutTeam;
