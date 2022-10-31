import pageData from "../../data/pages/research/publications/publications-presentations.json";
import Jumbotron from "../../components/jumbotron/jumbotron";

const PublicationsAndPresentations = () => {
  return (
    <>
      <Jumbotron data={pageData} />
    </>
  );
};

export default PublicationsAndPresentations;
