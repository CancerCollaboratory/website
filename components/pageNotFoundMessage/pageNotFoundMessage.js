import clsx from "clsx";
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../data/pages/404/404.json";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./pageNotFoundMessage.module.scss";

const PageNotFoundMessage = () => {
  const { asPath } = useRouter();
  const [pagePath, setPagePath] = useState("");
  const errorMessage = data.pageNotFoundMessage;

  useEffect(() => setPagePath(asPath), []);

  if (!errorMessage?.part1 || !errorMessage?.part2) {
    return null;
  } else {
    return (
      <div className={clsx(styles.container, utilStyles.outerContainer)}>
        <p>
          <span>{errorMessage.part1}</span>
          {errorMessage?.insertPagePath && <span>{`"${pagePath}"`}</span>}
          <span>{errorMessage.part2}</span>
        </p>
      </div>
    );
  }
};

export default PageNotFoundMessage;
