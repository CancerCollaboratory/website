import Jumbotron from "../../components/jumbotron/jumbotron";
import FileLink from "../../components/fileLink/fileLink";
import pageData from "../../data/pages/privacy/privacy-policy.json";
import utilStyles from "../../styles/utils.module.scss";

const PrivacyPolicy = () => {
  const jumbotron = pageData.jumbotron;
  const fileLink = pageData.fileLink;

  return (
    <>
      <Jumbotron title={jumbotron?.title} />
      <div className={utilStyles.pageBodyContainer}>
        <FileLink links={fileLink?.links} />
      </div>
    </>
  );
};

export default PrivacyPolicy;
