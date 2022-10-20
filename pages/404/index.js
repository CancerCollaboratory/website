import Layout404 from "../../components/layout404/layout404";
import styles from "./404.module.scss";

const Custom404 = () => {
  return (
    <>
      <h1 className={styles.errorTextLarge}>404</h1>
      <h2 className={styles.errorTextMedium}>Page Not Found</h2>
    </>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page) {
  return <Layout404>{page}</Layout404>;
};
