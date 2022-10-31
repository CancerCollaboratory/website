import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/sections/about/about-collaboratory.json";

const AboutCollaboratory = () => {
  console.log(pageData);
  return (
    <>
      <Jumbotron data={pageData} />
    </>
  );
};

export default AboutCollaboratory;
