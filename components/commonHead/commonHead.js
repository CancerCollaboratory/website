import Head from "next/head";

const CommonHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        href="/assets/commonHead/favicon.png"
        sizes="16x16 32x32 48x48"
        type="image/png"
      />
    </Head>
  );
};

export default CommonHead;
