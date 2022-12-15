import clsx from "clsx";
import Image from "next/image";
import Button from "../button/button";
import styles from "./heroCard.module.scss";

const HeroCard = ({ title, imageSrcPath, imageAlt, body, button, hasBackground }) => {
  if (!title || !imageSrcPath || !imageAlt || !body) {
    return null;
  } else {
    return (
      <div className={clsx(!body.description ? styles.container : styles.customContainer)}>
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.image}
          quality={100}
          width={74}
          height={74}
        />
        <div
          className={clsx(
            !body.description ? styles.card : styles.customCard,
            hasBackground ? styles.background : undefined
          )}
        >
          <h2 className={styles.title}>{title}</h2>
          {body.description && <p className={styles.description}>{body.description}</p>}
          {body.list?.items && (
            <ul className={clsx(styles.list, body.list.hasBullets ? styles.bullet : undefined)}>
              {body.list.items.map((item, index) => (
                <li key={index}>{item.value}</li>
              ))}
            </ul>
          )}
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
