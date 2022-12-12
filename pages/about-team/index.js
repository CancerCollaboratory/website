import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import Bio from "../../components/bio/bio";
import TeamList from "../../components/teamList/teamList";
import pageData from "../../data/pages/about/about-team.json";
import utilStyles from "../../styles/utils.module.scss";

const AboutTeam = () => {
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;

  return (
    <>
      <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          title={lateralColumn1?.title}
          leftColumn={
            <LeftColumn>
              <Bio
                imageSrcPath={lateralColumn1?.leftColumn?.imageSrcPath}
                imageAlt={lateralColumn1?.leftColumn?.imageAlt}
                name={lateralColumn1?.leftColumn?.name}
                body={lateralColumn1?.leftColumn?.body}
              />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <Bio
                imageSrcPath={lateralColumn1?.rightColumn?.imageSrcPath}
                imageAlt={lateralColumn1?.rightColumn?.imageAlt}
                name={lateralColumn1?.rightColumn?.name}
                body={lateralColumn1?.rightColumn?.body}
              />
            </RightColumn>
          }
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
        />
        <LateralColumn
          title={lateralColumn2?.title}
          leftColumn={
            <LeftColumn>
              <TeamList list={lateralColumn2?.leftColumn?.list} />
            </LeftColumn>
          }
          rightColumn={
            <RightColumn>
              <TeamList list={lateralColumn2?.rightColumn?.list} />
            </RightColumn>
          }
        />
      </div>
    </>
  );
};

export default AboutTeam;
