import pageData from "../../data/pages/services/services-cloud-resources.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const CloudResources = () => {
  const jumbotron = pageData.jumbotron;

  return (
    <Jumbotron
      title={jumbotron.title}
      bodyText={jumbotron.body.text}
      isBodyLinkExternal={jumbotron.body.isLinkExternal}
    />
  );
};

export default CloudResources;
