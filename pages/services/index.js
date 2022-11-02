import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import Table from "../../components/table/table";

const Services = () => {
  return (
    <>
      <Jumbotron data={pageData} />
      <LateralColumn data={pageData.lateralColumn1} />
      <LateralColumn data={pageData.lateralColumn2}>
        <Table />
      </LateralColumn>
    </>
  );
};

export default Services;
