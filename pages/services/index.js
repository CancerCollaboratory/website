import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";

const Services = () => {
  return (
    <>
      <Jumbotron data={pageData} />
      <LateralColumn data={pageData.lateralColumn1} />
      <LateralColumn data={pageData.lateralColumn2} />
    </>
  );
};

export default Services;
