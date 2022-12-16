import Jumbotron from "../../components/jumbotron/jumbotron";
import pageData from "../../data/pages/404/404.json";

const Custom404 = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron?.title} />;
};

export default Custom404;
