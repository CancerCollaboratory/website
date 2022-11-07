import Jumbotron from "../../components/jumbotron/jumbotron";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import pageData from "../../data/pages/services/services.json";

const Services = () => {
  return (
    <>
      <Jumbotron data={pageData} />
      <LateralColumn leftColumn={<LeftColumn />} rightColumn={<RightColumn />} />
    </>
  );
};

export default Services;
