import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/services/services-dockstore.json";

const Dockstore = () => {
  const jumbotron = pageData.jumbotron;

  return (
    <Jumbotron
      title={jumbotron.title}
      bodyText={jumbotron.body.text}
      imageSrcPath={jumbotron.image.srcPath}
      imageLabel={jumbotron.image.label}
      buttonLabel={jumbotron.button.label}
      isButtonLinkExternal={jumbotron.button.isLinkExternal}
      buttonLink={jumbotron.button.link}
    />
  );
};

export default Dockstore;
