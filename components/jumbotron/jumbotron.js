import clsx from "clsx";
import Image from "next/future/image";
import NavbarLink from "../navbarLink/navbarLink";
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
            {renderData(
              bodyText,
              isBodyLinkExternal === "true" ? insertLinkExternal : insertLinkInternal
            )}
          </div>
          {imageSrcPath && (
            <div className={styles.jumbotronBottom}>
              <Image
                src={imageSrcPath}
                alt={imageLabel}
                className={styles.jumbotronImage}
                width={75}
                height={52}
                quality={100}
              />
              <NavbarLink
                label={buttonLabel}
                isLinkWrapped={true}
                styleWrap={styles.jumbotronButton}
                isLinkExternal={buttonIsLinkExternal === "true"}
                link={buttonLink}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jumbotron;
