import clsx from "clsx";
import Button from "../button/button";
import styles from "./callToAction.module.scss";

const CallToAction = ({ title, bodyText, button, styleBackground }) => {
  return (
    <div className={clsx(styles.container, styleBackground)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
      {buttonData && (
        <Button title={button.title} link={button.link} isLinkExternal={button.isLinkExternal} />
      )}
    </div>
  );
};

export default CallToAction;
