import BannerLayout from "../components/bannerLayout/bannerLayout";
import CommonHead from "../components/commonHead/commonHead";
import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.scss";
import "../styles/reset.scss";
import "../styles/default.scss";
import { Open_Sans } from "@next/font/google";
import local from "@next/font/local";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const gothamBold = local({
  src: "../public/assets/Gotham-Bold.otf",
  variable: "--font-gothambold",
});

const WebApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-opensans: ${openSans.style.fontFamily};
          --font-gothambold: ${gothamBold.style.fontFamily};
        }
      `}</style>
      {Component.getLayout ? (
        <div className={utilStyles.mainContainer}>
          <BannerLayout>
            <CommonHead />
            {getLayout(<Component {...pageProps} />)}
          </BannerLayout>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default WebApp;
