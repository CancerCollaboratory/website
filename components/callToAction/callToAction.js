import clsx from "clsx";
import Button from "../button/button";
import Image from "next/future/image";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./callToAction.module.scss";

const CallToAction = ({
  title,
  imageSrcPath,
  imageAlt,
  description,
  isDescriptionLinkExternal,
  buttonData,
  styleBackground,
}) => {
  return (
    <div className={clsx(styles.container, styleBackground, utilStyles.outerContainer)}>
      {title && (
        <div className={styles.titleContainer}>
          {imageSrcPath && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={styles.image}
              width={25}
              height={25}
              quality={100}
            />
          )}
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      {(description || buttonData) && (
        <div className={styles.bodyContainer}>
          {description && (
            <div
              className={clsx(
                styles.description,
                !title && !buttonData ? styles.isolateText : undefined
              )}
            >
              {renderData(
                description,
                isDescriptionLinkExternal === "true" ? insertLinkExternal : insertLinkInternal
              )}
            </div>
          )}
          {buttonData && (
            <div className={styles.actionContainer}>
              {buttonData.map((button, index) => (
                <Button
                  label={button.label}
                  link={button.link}
                  isLinkExternal={button.isLinkExternal}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CallToAction;