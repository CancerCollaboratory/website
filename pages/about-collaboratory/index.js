import { getPageData } from "../../lib/pages";
import Jumbotron from "../../components/jumbotron/jumbotron";

export async function getStaticProps() {
  const pageData = getPageData("about", "about-collaboratory");
  return {
    props: {
      pageData,
    },
  };
}

const AboutCollaboratory = ({ pageData }) => {
  return (
    <>
      <Jumbotron data={pageData} />
    </>
  );
};

export default AboutCollaboratory;
