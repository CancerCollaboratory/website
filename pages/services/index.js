import Jumbotron from "../../components/jumbotron/jumbotron";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import List from "../../components/list/list";
import pageData from "../../data/pages/services/services.json";
import styles from "./services.module.scss";

const latCol1Left = pageData.lateralColumn1.leftColumn;
const latCol2Left = pageData.lateralColumn2.leftColumn;
const latCol1Right = pageData.lateralColumn1.rightColumn;
const list = pageData.list;

const Services = () => {
  return (
    <>
      {console.log(pageData)}
      <Jumbotron data={pageData} />
      <LateralColumn
        leftColumn={
          <LeftColumn
            title={latCol1Left.title}
            styleImage={styles.latCol1LeftImage}
            body={latCol1Left.body}
          />
        }
        rightColumn={<RightColumn title={latCol1Right.title} subTitle={latCol1Right.subTitle} />}
      />
      <LateralColumn
        leftColumn={
          <LeftColumn
            title={latCol2Left.title}
            styleImage={styles.latCol2LeftImage}
            body={latCol2Left.body}
          />
        }
        rightColumn={
          <RightColumn>
            <List title={list.title} body={list.body} />
          </RightColumn>
        }
      />
    </>
  );
};

export default Services;
