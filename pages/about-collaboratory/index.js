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
  const lateralColumn3 = pageData.lateralColumn3;
  const pressReleaseLeft = lateralColumn3?.pressReleaseLeft;
  const pressReleaseRight = lateralColumn3?.pressReleaseRight;

  return (
    <>
      <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          title={lateralColumn1?.title}
          leftColumn={<LeftColumn body={lateralColumn1?.leftColumn?.body} />}
          rightColumn={<RightColumn body={lateralColumn1?.rightColumn?.body} />}
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
        />
        <LateralColumn
          title={lateralColumn2?.title}
          leftColumn={<LeftColumn body={lateralColumn2?.leftColumn?.body} />}
          rightColumn={<RightColumn body={lateralColumn2?.rightColumn?.body} />}
          hasBorderBottom={lateralColumn2?.hasBorderBottom}
        />
        <LateralColumn
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
          styleColumnBorder={utilStyles.columnBorder}
        />
      </div>
    </>
  );
};

export default AboutCollaboratory;
