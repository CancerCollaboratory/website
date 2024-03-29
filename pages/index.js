import clsx from "clsx";
import LateralColumn from "../components/lateralColumn/lateralColumn";
import LeftColumn from "../components/leftColumn/leftColumn";
import RightColumn from "../components/rightColumn/rightColumn";
import Button from "../components/button/button";
import BarChart from "../components/barChart/barChart";
import GraphTable from "../components/graphTable/graphTable";
import ListLine from "../components/listLine/listLine";
import NavLine from "../components/navLine/navLine";
import CallToAction from "../components/callToAction/callToAction";
import ResourceSection from "../components/resourceSection/resourceSection";
import pageData from "../data/pages/home/home.json";
import utilStyles from "../styles/utils.module.scss";

const Home = () => {
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const lateralColumn3 = pageData.lateralColumn3;
  const callToAction = pageData.callToAction;
  const resourceSection = pageData.resourceSection;

  return (
    <div className={utilStyles.pageBodyContainer}>
      <LateralColumn
        leftColumn={
          <LeftColumn
            megaTitle={lateralColumn1?.leftColumn?.megaTitle}
            body={lateralColumn1?.leftColumn?.body}
          >
            <div className={clsx(utilStyles.altChildContainer, utilStyles.childContainerAlignment)}>
              <Button
                label={lateralColumn1?.leftColumn?.button?.label}
                link={lateralColumn1?.leftColumn?.button?.link}
                isLinkExternal={lateralColumn1?.leftColumn?.button?.isLinkExternal}
                hasIcon={lateralColumn1?.leftColumn?.button?.hasIcon}
              />
            </div>
          </LeftColumn>
        }
        rightColumn={
          <RightColumn>
            <BarChart
              title={lateralColumn1?.rightColumn?.barChart?.title}
              subTitle={lateralColumn1?.rightColumn?.barChart?.subTitle}
              srcPath={lateralColumn1?.rightColumn?.barChart?.srcPath}
              alt={lateralColumn1?.rightColumn?.barChart?.alt}
            />
            <div
              className={clsx(
                utilStyles.childContainer,
                utilStyles.childContainerAlignment,
                utilStyles.horizontallyCenterItem
              )}
            >
              <GraphTable
                title={lateralColumn1?.rightColumn?.table?.title}
                body={lateralColumn1?.rightColumn?.table?.body}
              />
            </div>
          </RightColumn>
        }
        hasBorderBottom={lateralColumn1?.hasBorderBottom}
        styleColumnAlignment={utilStyles.centerAlignment}
      />
      <LateralColumn
        leftColumn={
          <LeftColumn
            title={lateralColumn2?.leftColumn?.title}
            imageSrcPath={lateralColumn2?.leftColumn?.imageSrcPath}
            imageAlt={lateralColumn2?.leftColumn?.imageAlt}
            body={lateralColumn2?.leftColumn?.body}
          >
            <div className={clsx(utilStyles.altChildContainer, utilStyles.childContainerAlignment)}>
              <ListLine
                isVertical={lateralColumn2?.leftColumn?.listLine?.isVertical}
                items={lateralColumn2?.leftColumn?.listLine?.items}
              />
            </div>
            <div className={clsx(utilStyles.childContainer, utilStyles.childContainerAlignment)}>
              <NavLine navItems={lateralColumn2?.leftColumn?.navLine?.items} />
            </div>
          </LeftColumn>
        }
        rightColumn={
          <RightColumn
            title={lateralColumn2?.rightColumn?.title}
            imageSrcPath={lateralColumn2?.rightColumn?.imageSrcPath}
            imageAlt={lateralColumn2?.rightColumn?.imageAlt}
            body={lateralColumn2?.rightColumn?.body}
          >
            <div className={clsx(utilStyles.childContainer, utilStyles.childContainerAlignment)}>
              <NavLine navItems={lateralColumn2?.rightColumn?.navLine?.items} />
            </div>
          </RightColumn>
        }
        hasBorderBottom={lateralColumn2?.hasBorderBottom}
      />
      <LateralColumn
        title={lateralColumn3?.title}
        leftColumn={
          <LeftColumn body={lateralColumn3?.leftColumn?.body}>
            <div className={clsx(utilStyles.childContainer, utilStyles.childContainerAlignment)}>
              <NavLine navItems={lateralColumn3?.leftColumn?.navLine?.items} />
            </div>
          </LeftColumn>
        }
        rightColumn={<RightColumn body={lateralColumn3?.rightColumn?.body} />}
        hasBorderBottom={lateralColumn3?.hasBorderBottom}
      />
      <CallToAction
        title={callToAction?.title}
        buttonData={callToAction?.buttonData}
        hasBorderBottom={callToAction?.hasBorderBottom}
      />
      <ResourceSection title={resourceSection?.title} cards={resourceSection?.cards}>
        <div className={clsx(utilStyles.childContainer, utilStyles.childContainerAlignment)}>
          <NavLine navItems={resourceSection?.navLine?.items} />
        </div>
      </ResourceSection>
    </div>
  );
};

export default Home;
