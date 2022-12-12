import LateralColumn from "../components/lateralColumn/lateralColumn";
import LeftColumn from "../components/leftColumn/leftColumn";
import RightColumn from "../components/rightColumn/rightColumn";
import Button from "../components/button/button";
import Publication from "../components/publication/publication";
import BarChart from "../components/barChart/barChart";
import Table from "../components/table/table";
import ListLine from "../components/listLine/listLine";
import NavLine from "../components/navLine/navLine";
import pageData from "../data/pages/home/home.json";
import utilStyles from "../styles/utils.module.scss";

const Home = () => {
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const lateralColumn3 = pageData.lateralColumn3;

  return (
    <div className={utilStyles.pageBodyContainer}>
      <LateralColumn
        leftColumn={
          <LeftColumn
            megaTitle={lateralColumn1?.leftColumn?.megaTitle}
            body={lateralColumn1?.leftColumn?.body}
          >
            <Button
              label={lateralColumn1?.leftColumn?.button?.label}
              link={lateralColumn1?.leftColumn?.button?.link}
              isLinkExternal={lateralColumn1?.leftColumn?.button?.isLinkExternal}
              hasIcon={lateralColumn1?.leftColumn?.button?.hasIcon}
            />
            <Publication
              imageSrcPath={lateralColumn1?.leftColumn?.publication?.imageSrcPath}
              imageAlt={lateralColumn1?.leftColumn?.publication?.imageAlt}
              title={lateralColumn1?.leftColumn?.publication?.title}
              titleLink={lateralColumn1?.leftColumn?.publication?.titleLink}
              isTitleLinkExternal={lateralColumn1?.leftColumn?.publication?.isTitleLinkExternal}
              caption={lateralColumn1?.leftColumn?.publication?.caption}
              isCaptionLinkExternal={lateralColumn1?.leftColumn?.publication?.isCaptionLinkExternal}
            />
          </LeftColumn>
        }
        rightColumn={
          <RightColumn
            title={lateralColumn1?.rightColumn?.title}
            subTitle={lateralColumn1?.rightColumn?.subTitle}
          >
            <BarChart
              srcPath={lateralColumn1?.rightColumn?.barChart?.srcPath}
              alt={lateralColumn1?.rightColumn?.barChart?.alt}
            />
            <Table
              title={lateralColumn1?.rightColumn?.table?.title}
              body={lateralColumn1?.rightColumn?.table?.body}
            />
          </RightColumn>
        }
        hasBorderBottom={lateralColumn1?.hasBorderBottom}
      />
      <LateralColumn
        leftColumn={
          <LeftColumn
            title={lateralColumn2?.leftColumn?.title}
            imageSrcPath={lateralColumn2?.leftColumn?.imageSrcPath}
            imageAlt={lateralColumn2?.leftColumn?.imageAlt}
            body={lateralColumn2?.leftColumn?.body}
          >
            <ListLine
              isVertical={lateralColumn2?.leftColumn?.listLine?.isVertical}
              items={lateralColumn2?.leftColumn?.listLine?.items}
            />
            <NavLine navItems={lateralColumn2?.leftColumn?.navLine?.items} />
          </LeftColumn>
        }
        rightColumn={
          <RightColumn
            title={lateralColumn2?.rightColumn?.title}
            imageSrcPath={lateralColumn2?.rightColumn?.imageSrcPath}
            imageAlt={lateralColumn2?.rightColumn?.imageAlt}
            body={lateralColumn2?.rightColumn?.body}
            hasBackground={lateralColumn2?.rightColumn?.hasBackground}
          >
            <NavLine navItems={lateralColumn2?.rightColumn?.navLine?.items} />
          </RightColumn>
        }
        hasBorderBottom={lateralColumn2?.hasBorderBottom}
        hasColumnBorder={lateralColumn2?.hasColumnBorder}
      />
      <LateralColumn
        title={lateralColumn3?.title}
        leftColumn={
          <LeftColumn body={lateralColumn3?.leftColumn?.body}>
            <NavLine navItems={lateralColumn3?.leftColumn?.navLine?.items} />
          </LeftColumn>
        }
        rightColumn={<RightColumn body={lateralColumn3?.rightColumn?.body} />}
        hasBorderBottom={lateralColumn3?.hasBorderBottom}
      />
    </div>
  );
};

export default Home;
