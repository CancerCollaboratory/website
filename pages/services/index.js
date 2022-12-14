import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import StatGrid from "../../components/statGrid/statGrid";
import ResourceSection from "../../components/resourceSection/resourceSection";
import CallToAction from "../../components/callToAction/callToAction";
import { getCurrentMonth, getCurrentYear } from "../../lib/functions/timeValue";
import pageData from "../../data/pages/services/services.json";
import utilStyles from "../../styles/utils.module.scss";

const Services = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const statGrid = lateralColumn2?.rightColumn?.statGrid;
  const resourceSection = pageData.resourceSection;
  const callToAction = pageData.callToAction;

  return (
    <>
      <Jumbotron
        title={jumbotron?.title}
        bodyText={jumbotron?.body?.text}
        isBodyLinkExternal={jumbotron?.body?.isLinkExternal}
      />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          title={lateralColumn1?.title}
          titleImageSrcPath={lateralColumn1?.imageSrcPath}
          titleImageAlt={lateralColumn1?.imageAlt}
          leftColumn={<LeftColumn body={lateralColumn1?.leftColumn?.body} />}
          rightColumn={<RightColumn body={lateralColumn1?.rightColumn?.body} />}
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
        />
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn2?.leftColumn?.title}
              imageSrcPath={lateralColumn2?.leftColumn?.imageSrcPath}
              imageAlt={lateralColumn2?.leftColumn?.imageAlt}
              body={lateralColumn2?.leftColumn?.body}
            />
          }
          rightColumn={
            <StatGrid
              title={`${statGrid?.title} ${getCurrentMonth()} ${getCurrentYear()}`}
              body={statGrid?.body}
            />
          }
          hasBackground={lateralColumn2?.hasBackground}
          hasBorderBottom={lateralColumn2?.hasBorderBottom}
          styleColumnAlignment={utilStyles.verticallyCenterItem}
        />
        <ResourceSection
          title={resourceSection?.title}
          cards={resourceSection?.cards}
          hasBorderBottom={resourceSection?.hasBorderBottom}
        />
        <CallToAction
          title={callToAction?.title}
          imageSrcPath={callToAction?.imageSrcPath}
          imageAlt={callToAction?.imageAlt}
          description={callToAction?.description}
          buttonData={callToAction?.buttonData}
        />
      </div>
    </>
  );
};

export default Services;
