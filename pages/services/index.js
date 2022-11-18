import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import StatGrid from "../../components/statGrid/statGrid";
import ResourceSection from "../../components/resourceSection/resourceSection";
import CallToAction from "../../components/callToAction/callToAction";
import { getCurrentMonth, getCurrentYear } from "../../lib/functions/timeValue";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./services.module.scss";

const Services = () => {
  const jumbotron = pageData.jumbotron;
  const latCol1LeftCol = pageData.lateralColumnTop.leftColumn;
  const latCol1RightCol = pageData.lateralColumnTop.rightColumn;
  const latCol2LeftCol = pageData.lateralColumnBottom.leftColumn;
  const statGrid = pageData.statGrid;
  const resourceSection = pageData.resourceSection;
  const callToAction = pageData.callToAction;

  return (
    <>
      <Jumbotron
        title={jumbotron.title}
        bodyText={jumbotron.body.text}
        isBodyLinkExternal={jumbotron.body.isLinkExternal}
      />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={latCol1LeftCol.title}
              styleTitleImage={styles.iconCloudInfrastructure}
              body={latCol1LeftCol.body}
            />
          }
          rightColumn={
            <RightColumn title={latCol1RightCol.title} subTitle={latCol1RightCol.subTitle} />
          }
        />
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={latCol2LeftCol.title}
              styleTitleImage={styles.iconCloudResources}
              body={latCol2LeftCol.body}
            />
          }
          rightColumn={
            <StatGrid
              title={`${statGrid.title} ${getCurrentMonth()} ${getCurrentYear()}`}
              body={statGrid.body}
            />
          }
          styleBackground={utilStyles.gradientBackgroundGray}
        />
        <ResourceSection title={resourceSection.title} cards={resourceSection.cards} />
        <CallToAction
          title={callToAction.title}
          imageSrcPath={callToAction.imageSrcPath}
          imageAlt={callToAction.imageAlt}
          bodyText={callToAction.bodyText}
          buttonData={callToAction.buttonData}
          styleBackground={utilStyles.gradientBackgroundGray}
        />
      </div>
    </>
  );
};

export default Services;
