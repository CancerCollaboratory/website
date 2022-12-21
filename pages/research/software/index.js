import Jumbotron from "../../../components/jumbotron/jumbotron";
import SoftwareBoxLayout from "../../../components/softwareBoxLayout/softwareBoxLayout";
import pageData from "../../../data/pages/research/software/software.json";
import utilStyles from "../../../styles/utils.module.scss";

const SoftwareForResearch = () => {
  const jumbotron = pageData.jumbotron;
  const softwareBoxLayout = pageData.softwareBoxLayout;

  return (
    <>
      <Jumbotron title={jumbotron?.title} bodyText={jumbotron?.body?.text} />
      <div className={utilStyles.pageBodyContainer}>
        <SoftwareBoxLayout SoftwareBoxes={softwareBoxLayout?.softwareBoxes} />
      </div>
    </>
  );
};

export default SoftwareForResearch;
