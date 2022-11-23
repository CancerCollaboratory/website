import Jumbotron from "../../../components/jumbotron/jumbotron";
import pageData from "../../../data/pages/research/modules/bioethics-protection-phi.json";

const BioethicsAndProtectionOfPHI = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default BioethicsAndProtectionOfPHI;
