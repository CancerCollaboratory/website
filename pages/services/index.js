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

const Services = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
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
              title={lateralColumn1.leftColumn.title}
              imageSrcPath={lateralColumn1.leftColumn.imageSrcPath}
              imageAlt={lateralColumn1.leftColumn.imageAlt}
              body={lateralColumn1.leftColumn.body}
            />
          }
          rightColumn={
            <RightColumn
              title={lateralColumn1.rightColumn.title}
              subTitle={lateralColumn1.rightColumn.subTitle}
            />
          }
        />
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn2.leftColumn.title}
              imageSrcPath={lateralColumn2.leftColumn.imageSrcPath}
              imageAlt={lateralColumn2.leftColumn.imageAlt}
              body={lateralColumn2.leftColumn.body}
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
          description={callToAction.description}
          buttonData={callToAction.buttonData}
          styleBackground={utilStyles.gradientBackgroundGray}
        />
      </div>
    </>
  );
};

export default Services;
