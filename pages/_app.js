import Layout from "../components/layout/layout";
import "../styles/reset.scss";
import "../styles/default.scss";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  if (
    getLayout(<Component {...pageProps} />).type.length > 0 &&
    getLayout(<Component {...pageProps} />).type.name !== "Home"
  ) {
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
