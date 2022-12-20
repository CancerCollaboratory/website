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
          styleColumnAlignment={utilStyles.verticallyCenterItem}
        />
      </div>
    </>
  );
};

export default CloudResources;
