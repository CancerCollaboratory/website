import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import List from "../../components/list/list";
import utilStyles from "../../styles/utils.module.scss";

const Services = () => {
  return (
    <>
      <Jumbotron data={pageData} />
      <LateralColumn data={pageData.lateralColumn1} />
      <LateralColumn
        data={pageData.lateralColumn2}
        styleBackground={utilStyles.sectionContainerBackground}
      >
        <List data={pageData.list1} />
      </LateralColumn>
    </>
  );
};

export default Services;
