import clsx from "clsx";
import Button from "../button/button";
import Image from "next/future/image";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./callToAction.module.scss";

const CallToAction = ({ title, imageSrcPath, imageAlt, bodyText, buttonData, styleBackground }) => {
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
      {(bodyText || buttonData) && (
        <div className={styles.bodyContainer}>
          {bodyText && (
            <p
              className={clsx(
                styles.bodyText,
                !title && !buttonData ? styles.isolateText : undefined
              )}
            >
              {bodyText}
            </p>
          )}
          {buttonData && (
            <div className={styles.buttonContainer}>
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
