import pageData from "../../../data/pages/research/modules/bioethics-protection-phi.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const BioethicsAndProtectionOfPHI = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default BioethicsAndProtectionOfPHI;
