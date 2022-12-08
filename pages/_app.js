import BannerLayout from "../components/bannerLayout/bannerLayout";
import CommonHead from "../components/commonHead/commonHead";
import Layout from "../components/layout/layout";
import "../styles/reset.scss";
import "../styles/default.scss";

const WebApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  if (Component.getLayout) {
    return (
      <BannerLayout>
        <CommonHead />
        {getLayout(<Component {...pageProps} />)}
      </BannerLayout>
    );
  } else {
    return (
      <BannerLayout>
        <CommonHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BannerLayout>
    );
  }
};

export default WebApp;
