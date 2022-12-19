import Jumbotron from "../../components/jumbotron/jumbotron";
import PageNotFoundMessage from "../../components/pageNotFoundMessage/pageNotFoundMessage";
import utilStyles from "../../styles/utils.module.scss";

const Custom404 = () => {
  return (
    <>
      <Jumbotron title={"404 | Page not found"} />
      <div className={utilStyles.pageBodyContainer}>
        <PageNotFoundMessage />
      </div>
    </>
  );
};

export default Custom404;
