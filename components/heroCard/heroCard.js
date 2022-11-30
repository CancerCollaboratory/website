import clsx from "clsx";
import Image from "next/future/image";
import Button from "../button/button";
import styles from "./heroCard.module.scss";

const HeroCard = ({ title, imageSrcPath, imageAlt, body, button, hasBackground }) => {
  if (!title || !imageSrcPath || !body) {
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
        <div className={clsx(styles.card, hasBackground ? styles.background : undefined)}>
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
