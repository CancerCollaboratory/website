import clsx from "clsx";
import Image from "next/image";
import CustomLink from "../customLink/customLink";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./jumbotron.module.scss";

const Jumbotron = ({
  title,
  bodyText,
  isBodyLinkExternal,
  imageSrcPath,
  imageLabel,
  buttonLabel,
  isButtonLinkExternal,
  buttonLink,
}) => {
  return (
    <div
      className={clsx(styles.jumbotronContainer, !bodyText ? styles.stretchBackground : undefined)}
    >
      <h1 className={styles.jumbotronTitle}>{title}</h1>
      {bodyText && (
        <>
          <div className={clsx(styles.jumbotronBody, utilStyles.commonAnchor)}>
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
                isLinkExternal={isButtonLinkExternal}
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
