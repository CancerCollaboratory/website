import Layout from "../components/layout/layout";
import "../styles/reset.scss";
import "../styles/default.scss";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  if (Component.getLayout) {
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
