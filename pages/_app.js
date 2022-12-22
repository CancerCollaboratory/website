import BannerLayout from "../components/bannerLayout/bannerLayout";
import CommonHead from "../components/commonHead/commonHead";
import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.scss";
import "../styles/reset.scss";
import "../styles/default.scss";

const WebApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  if (Component.getLayout) {
    return (
      <div className={utilStyles.mainContainer}>
        <BannerLayout>
          <CommonHead />
          {getLayout(<Component {...pageProps} />)}
        </BannerLayout>
      </div>
    );
  } else {
    return (
      <div className={utilStyles.mainContainer}>
        <BannerLayout>
          <CommonHead />
          <Layout>
            <div className={utilStyles.flexGrow}>
              <Component {...pageProps} />
            </div>
          </Layout>
        </BannerLayout>
      </div>
    );
  }
};

export default WebApp;
