import BannerLayout from "../components/bannerLayout/bannerLayout";
import Layout from "../components/layout/layout";
import "../styles/reset.scss";
import "../styles/default.scss";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  if (Component.getLayout) {
    return <BannerLayout>{getLayout(<Component {...pageProps} />)}</BannerLayout>;
  } else {
    return (
      <BannerLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BannerLayout>
    );
  }
}
