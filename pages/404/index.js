import pageData from "../../data/pages/404/404.json";
import utilStyles from "../../styles/utils.module.scss";

const Custom404 = () => {
  const custom404 = pageData.custom404;

  return (
    <div className={utilStyles.pageBodyContainer}>
      <h1>{custom404?.title}</h1>
      <h2>{custom404?.subTitle}</h2>
    </div>
  );
};

export default Custom404;
