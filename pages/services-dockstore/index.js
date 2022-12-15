import clsx from "clsx";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import FeatureBoard from "../../components/featureBoard/featureBoard";
import ResourceSection from "../../components/resourceSection/resourceSection";
import pageData from "../../data/pages/services/services-dockstore.json";
import utilStyles from "../../styles/utils.module.scss";

const Dockstore = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn = pageData.lateralColumn;
  const resourceSection = pageData.resourceSection;

  return (
    <>
      <Jumbotron
        title={jumbotron?.title}
        bodyText={jumbotron?.body?.text}
        imageSrcPath={jumbotron?.image?.srcPath}
        imageLabel={jumbotron?.image?.label}
        buttonLabel={jumbotron?.button?.label}
        isButtonLinkExternal={jumbotron?.button?.isLinkExternal}
        buttonLink={jumbotron?.button?.link}
      />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn?.leftColumn?.title}
              imageSrcPath={lateralColumn?.leftColumn?.imageSrcPath}
              imageAlt={lateralColumn?.leftColumn?.imageAlt}
              body={lateralColumn?.leftColumn?.body}
            />
          }
          rightColumn={
            <RightColumn
              title={lateralColumn?.rightColumn?.title}
              body={lateralColumn?.rightColumn?.body}
            >
              <div
                className={clsx(utilStyles.onlyChildContainer, utilStyles.horizontallyCenterItem)}
              >
                <FeatureBoard boards={lateralColumn?.rightColumn?.featureBoard?.boards} />
              </div>
            </RightColumn>
          }
          hasBorderBottom={lateralColumn?.hasBorderBottom}
        />
        <ResourceSection
          title={resourceSection?.title}
          cards={resourceSection?.cards}
          hasBackground={resourceSection?.hasBackground}
        />
      </div>
    </>
  );
};

export default Dockstore;
