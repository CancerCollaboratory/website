import pageData from "../../../data/pages/research/modules/variant-identification-consequence.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const VariantIdentificationAndConsequence = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default VariantIdentificationAndConsequence;
