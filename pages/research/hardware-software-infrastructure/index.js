import pageData from "../../../data/pages/research/technologyCores/hardware-software-infrastructure.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const HardwareAndSoftwareInfrastructure = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default HardwareAndSoftwareInfrastructure;
