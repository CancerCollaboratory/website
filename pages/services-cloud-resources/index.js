import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import LogoBlockList from "../../components/logoBlockList/logoBlockList";
import pageData from "../../data/pages/services/services-cloud-resources.json";
import utilStyles from "../../styles/utils.module.scss";

const CloudResources = () => {
  const { asPath } = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const tabSection = pageData.tabSection;
  const tabContent = tabSection?.tabLayout?.tabs[activeTabIndex]?.content;

  function getActiveTabIndex(pagePath) {
    return tabSection?.tabLayout?.tabs?.findIndex((tab) => tab.link === pagePath);
  }

  useEffect(() => {
    setActiveTabIndex(getActiveTabIndex(asPath) === -1 ? 0 : getActiveTabIndex(asPath));
  }, [asPath]);

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
              imageSrcPath={lateralColumn1?.leftColumn?.imageSrcPath}
              imageAlt={lateralColumn1?.leftColumn?.imageAlt}
              body={lateralColumn1?.leftColumn?.body}
            />
          }
          rightColumn={
            <RightColumn>
              <div className={utilStyles.peakWidth}>
                <LogoBlockList
                  logoBlocks={lateralColumn1?.rightColumn?.logoBlockList?.logoBlocks}
                />
              </div>
            </RightColumn>
          }
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
          styleColumnAlignment={utilStyles.verticallyCenterItem}
        />
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn2?.leftColumn?.title}
              isSmallTitle={lateralColumn2?.leftColumn?.isSmallTitle}
              imageSrcPath={lateralColumn2?.leftColumn?.imageSrcPath}
              imageAlt={lateralColumn2?.leftColumn?.imageAlt}
            />
          }
          rightColumn={<RightColumn body={lateralColumn2?.rightColumn?.body} />}
          hasBackground={lateralColumn2?.hasBackground}
        />
      </div>
    </>
  );
};

export default CloudResources;
