import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/services/services-cloud-resources.json";

const CloudResources = () => {
  const { asPath } = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const jumbotron = pageData.jumbotron;
  const tabLayout = pageData.tabLayout;

  function getActiveTabIndex(currentPath) {
    return tabLayout?.tabs?.findIndex((tab) => tab.link === currentPath);
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
    </>
  );
};

export default CloudResources;
