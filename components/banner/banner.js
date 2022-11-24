import clsx from "clsx";
import CloseButton from "../closeButton/clossButton";
import { useState } from "react";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./banner.module.scss";

const Banner = ({ title, description, isDescriptionLinkExternal, children }) => {
  if ((!title && !description) || (title && !description && !children)) {
    return null;
  } else {
    const [showBanner, setShowBanner] = useState(true);

    return (
      showBanner && (
        <div className={styles.container}>
          <div className={clsx(styles.wrapContent, utilStyles.defaultContainerWidth)}>
            <div className={styles.content}>
              {title && <h1 className={styles.title}>{title}</h1>}
              <div className={styles.block}>
                {description &&
                  renderData(
                    description,
                    isDescriptionLinkExternal ? insertLinkExternal : insertLinkInternal
                  )}
                {children}
              </div>
            </div>
            <CloseButton onClick={() => setShowBanner(false)} />
          </div>
        </div>
      )
    );
  }
};

export default Banner;
