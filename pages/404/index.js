import Jumbotron from "../../components/jumbotron/jumbotron";
import PageNotFoundMessage from "../../components/pageNotFoundMessage/pageNotFoundMessage";
import pageData from "../../data/pages/404/404.json";
import utilStyles from "../../styles/utils.module.scss";

const Custom404 = () => {
  const jumbotron = pageData.jumbotron;

  return (
    <>
      <Jumbotron title={jumbotron?.title} />
      <div className={utilStyles.pageBodyContainer}>
        <PageNotFoundMessage />
      </div>
    </>
  );
};

export default Custom404;
