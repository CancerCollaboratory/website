import WrapPage from "../components/wrapPage/wrapPage";
import { getPageData } from "../lib/pages";
import { attributesToProps } from "html-react-parser";

const insertLink = {
  replace: domNode => {
    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return (
        <a target="_blank" {...props}>
          {domNode.children[0].data}
        </a>
      );
    }
  },
};

export async function getStaticProps() {
  const pageData = getPageData("home");
  return {
    props: {
      pageData,
    },
  };
}

const Home = ({ pageData }) => {
  return (
    <>
      <WrapPage></WrapPage>
    </>
  );
};

export default Home;
