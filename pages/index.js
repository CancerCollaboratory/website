import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
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

export default function Home({ pageData }) {
  return (
    <div>
      <Navbar></Navbar>
      <Head>
        <title>Cloud Computing for Big Data Genomics | Cancer Genome Collaboratory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const pageData = getPageData("home");
  return {
    props: {
      pageData,
    },
  };
}
