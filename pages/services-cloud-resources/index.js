import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/services/services-cloud-resources.json";

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
