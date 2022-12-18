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

  useEffect(() => setPagePath(asPath), [asPath]);

  return (
    <div className={clsx(styles.container, utilStyles.outerContainer)}>
      <p>
        {data.pageNotFoundMessage.map((item, index) => (
          <React.Fragment key={index}>
            {item.value && <span>{item.value}</span>}
            {item.insertPagePath && <span>{`"${pagePath}"`}</span>}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default PageNotFoundMessage;
