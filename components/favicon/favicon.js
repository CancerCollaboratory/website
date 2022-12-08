import Head from "next/head";

const Favicon = () => {
  return (
    <Head>
      <link
        rel="shortcut icon"
        href="/assets/favicon/favicon.png"
        sizes="16x16 32x32 48x48"
        type="image/png"
      />
    </Head>
  );
};

export default Favicon;
