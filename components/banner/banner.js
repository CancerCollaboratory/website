import CloseButton from "../closeButton/clossButton";
import { useState } from "react";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal, insertLinkExternal } from "../../lib/functions/insertLink";
import styles from "./banner.module.scss";

const Banner = ({ title, description, isDescriptionLinkExternal, children }) => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    showBanner && (
      <div className={styles.outerContainer}>
        {(title || description) && (
          <>
            <div className={styles.content}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {(description || children) && (
                <div className={styles.innerContainer}>
                  {description &&
                    renderData(
                      description,
                      isDescriptionLinkExternal ? insertLinkExternal : insertLinkInternal
                    )}
                  {children}
                </div>
              )}
            </div>
            <CloseButton onClick={() => setShowBanner(false)} />
          </>
        )}
      </div>
    )
  );
};

export default Banner;
