import clsx from "clsx";
import parse from "html-react-parser";
import Image from "next/future/image";
import NavbarLink from "../navbarLink/navbarLink";
import { micromark } from "micromark";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions";
import styles from "./jumbotron.module.scss";

const Jumbotron = ({ data }) => {
  return (
    <div
      className={clsx(
        styles.jumbotronContainer,
        !data.jumbotron.body ? styles.stretchBackground : undefined
      )}
    >
      <h1 className={styles.jumbotronTitle}>{data.jumbotron.title}</h1>
      {data.jumbotron.body && (
        <>
          <div className={styles.jumbotronBody}>
            {parse(
              micromark(data.jumbotron.body),
              data.jumbotron.isLinkExternal === "true" ? insertLinkExternal : insertLinkInternal
            )}
          </div>
          {data.jumbotron.imageSrcPath && (
            <div className={styles.jumbotronBottom}>
              <Image
                src={data.jumbotron.imageSrcPath}
                alt={data.jumbotron.imageLabel}
                className={styles.jumbotronImage}
                priority={false}
                width={75}
                height={52}
                quality={100}
              />
              <NavbarLink
                label={data.jumbotron.buttonLabel}
                isLinkWrapped={true}
                styleWrap={styles.jumbotronButton}
                isLinkExternal={data.jumbotron.isLinkExternal === "true"}
                link={data.jumbotron.buttonLink}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jumbotron;
