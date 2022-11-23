import clsx from "clsx";
import Image from "next/future/image";
import CustomLink from "../customLink/customLink";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import { renderData } from "../../lib/functions/renderData";
import styles from "./jumbotron.module.scss";

const Jumbotron = ({
  title,
  bodyText,
  isBodyLinkExternal,
  imageSrcPath,
  imageLabel,
  buttonLabel,
  buttonIsLinkExternal,
  buttonLink,
}) => {
  return (
    <div
      className={clsx(styles.jumbotronContainer, !bodyText ? styles.stretchBackground : undefined)}
    >
      <h1 className={styles.jumbotronTitle}>{title}</h1>
      {bodyText && (
        <>
          <div className={styles.jumbotronBody}>
            {renderData(bodyText, isBodyLinkExternal ? insertLinkExternal : insertLinkInternal)}
          </div>
          {imageSrcPath && (
            <div className={styles.jumbotronBottom}>
              <Image
                src={imageSrcPath}
                alt={imageLabel}
                className={styles.jumbotronImage}
                quality={100}
                width={75}
                height={52}
              />
              <CustomLink
                label={buttonLabel}
                link={buttonLink}
                isLinkExternal={buttonIsLinkExternal}
                styleWrap={styles.jumbotronButton}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jumbotron;
