import clsx from "clsx";
import parse from "html-react-parser";
import Image from "next/future/image";
import NavbarLink from "../navbarLink/navbarLink";
import { micromark } from "micromark";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLinks";
import styles from "./jumbotron.module.scss";

const Jumbotron = ({ data }) => {
  return (
    <div
      className={clsx(
        styles.jumbotronContainer,
        !data.jumbotron.body?.text ? styles.stretchBackground : undefined
      )}
    >
      <h1 className={styles.jumbotronTitle}>{data.jumbotron.title}</h1>
      {data.jumbotron.body?.text && (
        <>
          <div className={styles.jumbotronBody}>
            {parse(
              micromark(data.jumbotron.body.text),
              data.jumbotron.body.isLinkExternal === "true"
                ? insertLinkExternal
                : insertLinkInternal
            )}
          </div>
          {data.jumbotron.image?.srcPath && (
            <div className={styles.jumbotronBottom}>
              <Image
                src={data.jumbotron.image.srcPath}
                alt={data.jumbotron.image.label}
                className={styles.jumbotronImage}
                priority={false}
                width={75}
                height={52}
                quality={100}
              />
              <NavbarLink
                label={data.jumbotron.button.label}
                isLinkWrapped={true}
                styleWrap={styles.jumbotronButton}
                isLinkExternal={data.jumbotron.button.isLinkExternal === "true"}
                link={data.jumbotron.button.link}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jumbotron;
