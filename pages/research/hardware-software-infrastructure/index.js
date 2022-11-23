import Jumbotron from "../../../components/jumbotron/jumbotron";
import pageData from "../../../data/pages/research/technologyCores/hardware-software-infrastructure.json";

const HardwareAndSoftwareInfrastructure = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default HardwareAndSoftwareInfrastructure;
