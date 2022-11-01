import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";

const Services = () => {
  return (
    <>
      <Jumbotron data={pageData} />
      <LateralColumn data={pageData} />
    </>
  );
};

export default Services;
