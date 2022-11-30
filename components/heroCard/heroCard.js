import clsx from "clsx";
import Image from "next/future/image";
import Button from "../button/button";
import styles from "./heroCard.module.scss";

const HeroCard = ({ title, imageSrcPath, imageAlt, button, styleBackground, children }) => {
  if (!title || !imageSrcPath || !children) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.image}
          quality={100}
          width={76}
          height={76}
        />
        <div className={clsx(styles.card, styleBackground)}>
          <h2 className={styles.title}>{title}</h2>
          {children}
          {button && (
            <Button
              tag={button.tag}
              label={button.label}
              link={button.link}
              isLinkExternal={button.isLinkExternal}
              hasIcon={button.hasIcon}
            />
          )}
        </div>
      </div>
    );
  }
};

export default HeroCard;
