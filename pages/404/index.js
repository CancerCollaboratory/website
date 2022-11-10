import Layout404 from "../../components/layout404/layout404";
import pageData from "../../data/pages/404/404.json";
import styles from "./404.module.scss";

const Custom404 = () => {
  return (
    <>
      <h1 className={styles.errorTextLarge}>{pageData.error404.title}</h1>
      <h2 className={styles.errorTextMedium}>{pageData.error404.message}</h2>
    </>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page) {
  return <Layout404>{page}</Layout404>;
};
