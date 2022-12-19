import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Jumbotron from "../../components/jumbotron/jumbotron";
import TabSection from "../../components/tabSection/tabSection";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import BasicTable from "../../components/basicTable/basicTable";
import pageData from "../../data/pages/services/services-cloud-resources.json";
import utilStyles from "../../styles/utils.module.scss";

const CloudResources = () => {
  const { asPath } = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const jumbotron = pageData.jumbotron;
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
        <TabSection>
          <LateralColumn
            leftColumn={<LeftColumn body={tabContent?.lateralColumn?.leftColumn?.body} />}
            rightColumn={
              <RightColumn body={tabContent?.lateralColumn?.rightColumn?.body}>
                <BasicTable
                  headRow={tabContent?.lateralColumn?.rightColumn?.basicTable?.headRow}
                  body={tabContent?.lateralColumn?.rightColumn?.basicTable?.body}
                />
              </RightColumn>
            }
          />
        </TabSection>
      </div>
    </>
  );
};

export default CloudResources;
