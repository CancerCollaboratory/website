import clsx from "clsx";
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./pageNotFoundMessage.module.scss";

const PageNotFoundMessage = () => {
  const { asPath } = useRouter();
  const [pagePath, setPagePath] = useState("");

  useEffect(() => setPagePath(asPath), []);
  return (
    <div
      className={clsx(
        styles.container,
        utilStyles.outerContainer,
        utilStyles.outerContainerPadding
      )}
    >
      <p
        className={utilStyles.defaultElementLineHeight}
      >{`The requested page "${pagePath}" could not be found.`}</p>
    </div>
  );
};

export default PageNotFoundMessage;
