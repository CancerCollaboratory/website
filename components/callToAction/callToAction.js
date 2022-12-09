import clsx from "clsx";
import Image from "next/image";
import Button from "../button/button";
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
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        utilStyles.gradientBackgroundGray,
        utilStyles.outerContainer
      )}
    >
      {title && (
        <div className={styles.titleContainer}>
          {imageSrcPath && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={styles.image}
              quality={100}
              width={25}
              height={25}
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
                !title && !buttonData ? styles.isolateText : undefined,
                utilStyles.commonAnchor
              )}
            >
              {renderData(
                description,
                isDescriptionLinkExternal ? insertLinkExternal : insertLinkInternal
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
                  hasIcon={button.hasIcon}
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
