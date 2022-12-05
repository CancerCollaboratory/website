import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import pageData from "../../data/pages/about/about-collaboratory.json";
import utilStyles from "../../styles/utils.module.scss";

const AboutCollaboratory = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn = pageData.lateralColumn;
  return (
    <>
      <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          title={lateralColumn.title}
          leftColumn={<LeftColumn body={lateralColumn.leftColumn.body} />}
          rightColumn={<RightColumn body={lateralColumn.rightColumn.body} />}
        />
      </div>
    </>
  );
};

export default AboutCollaboratory;
