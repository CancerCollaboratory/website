import clsx from "clsx";
import parse from "html-react-parser";
import { micromark } from "micromark";
import { insertExternalLink, insertInternalLink } from "../../lib/functions";
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
        <div className={styles.jumbotronBody}>
          {parse(
            micromark(data.jumbotron.body),
            data.jumbotron.isLinkExternal === "true" ? insertExternalLink : insertInternalLink
          )}
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
