import clsx from "clsx";
import Image from "next/image";
import Button from "../../components/button/button";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./jumbotron.module.scss";

const Jumbotron = ({ title, bodyText, isBodyLinkExternal, imageSrcPath, imageAlt, buttonData }) => {
  if (!title) {
    return null;
  } else {
    return (
      <div className={clsx(styles.container, !bodyText ? styles.stretchBackground : undefined)}>
        <h1 className={styles.title}>{title}</h1>
        {bodyText && (
          <div className={clsx(styles.bodyBlock, utilStyles.embeddedParagraphLineHeight)}>
            {renderData(bodyText, isBodyLinkExternal ? insertLinkExternal : insertLinkInternal)}
          </div>
        )}
        {imageSrcPath && imageAlt && buttonData && (
          <div className={styles.bottomBlock}>
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={styles.image}
              quality={100}
              width={75}
              height={52}
            />
            <Button
              label={buttonData.label}
              link={buttonData.link}
              isLinkExternal={buttonData.isLinkExternal}
              hasBlueBackground={buttonData.hasBlueBackground}
              hasIcon={buttonData.hasIcon}
            />
          </div>
        )}
      </div>
    );
  }
};

export default Jumbotron;
