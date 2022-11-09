import pageData from "../../../data/pages/research/modules/indexing-search-compression.json";
import Jumbotron from "../../../components/jumbotron/jumbotron";

const IndexingSearchAndCompression = () => {
  const jumbotron = pageData.jumbotron;

  return <Jumbotron title={jumbotron.title} bodyText={jumbotron.body.text} />;
};

export default IndexingSearchAndCompression;
