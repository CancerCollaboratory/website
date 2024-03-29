import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import PressRelease from "../../components/pressRelease/pressRelease";
import { findLink } from "../../lib/functions/findLink";
import pageData from "../../data/pages/about/about-collaboratory.json";
import utilStyles from "../../styles/utils.module.scss";

const AboutCollaboratory = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const pressReleaseLeft = lateralColumn2?.pressReleaseLeft;
  const pressReleaseRight = lateralColumn2?.pressReleaseRight;

  return (
    <>
      <Jumbotron
        title={jumbotron?.title}
        bodyText={jumbotron?.body?.text}
        isBodyLinkExternal={jumbotron?.body?.isLinkExternal}
      />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn1?.leftColumn?.title}
              centerHead={lateralColumn1?.leftColumn?.centerHead}
              body={lateralColumn1?.leftColumn?.body}
            />
          }
          rightColumn={
            <RightColumn
              title={lateralColumn1?.rightColumn?.title}
              centerHead={lateralColumn1?.rightColumn?.centerHead}
              body={lateralColumn1?.rightColumn?.body}
            />
          }
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
        />
        <LateralColumn
          title={lateralColumn2?.title}
          leftColumn={
            <LeftColumn>
              <PressRelease
                date={pressReleaseLeft?.date}
                shortUrl={pressReleaseLeft?.shortUrl}
                articleUrl={findLink(pressReleaseLeft?.buttonItems)}
                articleTitle={pressReleaseLeft?.articleTitle}
                description={pressReleaseLeft?.description}
                buttonItems={pressReleaseLeft?.buttonItems}
              />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <PressRelease
                date={pressReleaseRight?.date}
                shortUrl={pressReleaseRight?.shortUrl}
                articleUrl={findLink(pressReleaseRight?.buttonItems)}
                articleTitle={pressReleaseRight?.articleTitle}
                description={pressReleaseRight?.description}
                buttonItems={pressReleaseRight?.buttonItems}
              />
            </RightColumn>
          }
          hasColumnBorder={lateralColumn2?.hasColumnBorder}
        />
      </div>
    </>
  );
};

export default AboutCollaboratory;
