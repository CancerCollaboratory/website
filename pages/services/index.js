import pageData from "../../data/pages/services/services.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const Services = () => {
  const jumbotron = pageData.jumbotron;

  return (
    <Jumbotron
      title={jumbotron.title}
      bodyText={jumbotron.body.text}
      isBodyLinkExternal={jumbotron.body.isLinkExternal}
    />
  );
};

export default Services;
