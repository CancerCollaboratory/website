import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/LateralColumn/LateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";

const Services = () => {
  const jumbotron = pageData.jumbotron;
  const latCol1LeftCol = pageData.lateralColumnTop.leftColumn;
  const latCol1RightCol = pageData.lateralColumnTop.rightColumn;
  const latCol2LeftCol = pageData.lateralColumnBottom.leftColumn;

  return (
    <>
      <Jumbotron
        title={jumbotron.title}
        bodyText={jumbotron.body.text}
        isBodyLinkExternal={jumbotron.body.isLinkExternal}
      />
      <LateralColumn
        leftColumn={<LeftColumn title={latCol1LeftCol.title} body={latCol1LeftCol.body} />}
        rightColumn={
          <RightColumn title={latCol1RightCol.title} subTitle={latCol1RightCol.subTitle} />
        }
      />
      <LateralColumn
        leftColumn={<LeftColumn title={latCol2LeftCol.title} body={latCol2LeftCol.body} />}
      />
    </>
  );
};

export default Services;
