import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import LogoBlockList from "../../components/logoBlockList/logoBlockList";
import CollabCardLayout from "../../components/collabCardLayout/collabCardLayout";
import pageData from "../../data/pages/about/about-funders-collaborators.json";
import utilStyles from "../../styles/utils.module.scss";

const AboutFundersAndCollaborators = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const lateralColumn3 = pageData.lateralColumn3;

  return (
    <>
      <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn1?.leftColumn?.title}
              body={lateralColumn1?.leftColumn?.body}
            />
          }
          rightColumn={
            <RightColumn>
              <LogoBlockList logoBlocks={lateralColumn1?.rightColumn?.logoBlockList?.logoBlocks} />
            </RightColumn>
          }
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
        />
        <LateralColumn
          title={lateralColumn2?.title}
          leftColumn={
            <LeftColumn>
              <CollabCardLayout
                title={lateralColumn2?.leftColumn?.collabCard?.title}
                description={lateralColumn2?.leftColumn?.collabCard?.description}
                buttonItems={lateralColumn2?.leftColumn?.collabCard?.buttonItems}
                logoData={lateralColumn2?.leftColumn?.collabCard?.logo}
              />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <CollabCardLayout
                title={lateralColumn2?.rightColumn?.collabCard?.title}
                description={lateralColumn2?.rightColumn?.collabCard?.description}
                buttonItems={lateralColumn2?.rightColumn?.collabCard?.buttonItems}
                logoData={lateralColumn2?.rightColumn?.collabCard?.logo}
              />
            </RightColumn>
          }
          styleBackground={
            lateralColumn2?.hasBackground ? utilStyles.gradientBackgroundGray : undefined
          }
          hasBorderBottom={lateralColumn2?.hasBorderBottom}
        />
        <LateralColumn
          leftColumn={
            <LeftColumn>
              <CollabCardLayout
                title={lateralColumn3?.leftColumn?.collabCard?.title}
                description={lateralColumn3?.leftColumn?.collabCard?.description}
                buttonItems={lateralColumn3?.leftColumn?.collabCard?.buttonItems}
                logoData={lateralColumn3?.leftColumn?.collabCard?.logo}
              />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <CollabCardLayout
                title={lateralColumn3?.rightColumn?.collabCard?.title}
                description={lateralColumn3?.rightColumn?.collabCard?.description}
                buttonItems={lateralColumn3?.rightColumn?.collabCard?.buttonItems}
                logoData={lateralColumn3?.rightColumn?.collabCard?.logo}
              />
            </RightColumn>
          }
        />
      </div>
    </>
  );
};

export default AboutFundersAndCollaborators;
