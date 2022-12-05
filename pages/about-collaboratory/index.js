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
  const lateralColumn = pageData.lateralColumn;
  const pressReleaseLeft = pageData.pressReleaseLeft;
  const pressReleaseRight = pageData.pressReleaseRight;

  return (
    <>
      <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          title={lateralColumn.title}
          leftColumn={<LeftColumn body={lateralColumn.leftColumn.body} />}
          rightColumn={<RightColumn body={lateralColumn.rightColumn.body} />}
        />
        <LateralColumn
          leftColumn={
            <LeftColumn>
              <PressRelease
                date={pressReleaseLeft.date}
                shortUrl={pressReleaseLeft.shortUrl}
                articleUrl={findLink(pressReleaseLeft.buttonItems)}
                articleTitle={pressReleaseLeft.articleTitle}
                description={pressReleaseLeft.description}
                buttonItems={pressReleaseLeft.buttonItems}
              />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <PressRelease
                date={pressReleaseRight.date}
                shortUrl={pressReleaseRight.shortUrl}
                articleUrl={findLink(pressReleaseRight.buttonItems)}
                articleTitle={pressReleaseRight.articleTitle}
                description={pressReleaseRight.description}
                buttonItems={pressReleaseRight.buttonItems}
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
