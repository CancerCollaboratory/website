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
  hasBorderBottom,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        utilStyles.outerContainerWidth,
        utilStyles.gradientBackgroundGray,
        description ? styles.altContainer : undefined,
        hasBorderBottom ? utilStyles.containerBorderBottom : undefined
      )}
    >
      {title && (
        <div className={styles.titleContainer}>
          {imageSrcPath && imageAlt && (
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
                !title && !buttonData ? styles.isolateText : undefined
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
                  hasBlueBackground={button.hasBlueBackground}
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
