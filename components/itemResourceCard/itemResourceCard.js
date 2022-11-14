import { renderData } from "../../lib/functions/renderData";
import { insertLinkInternal } from "../../lib/functions/insertLink";
import styles from "./itemResourceCard.module.scss";

const ItemResourceCard = ({ title, bodyText, styleImage }) => {
  return (
    <div className={styles.cardContainer}>
      {styleImage && <div className={styleImage}></div>}
      {title && (
        <div className={styles.cardContent}>
          {title && <p className={styles.title}>{renderData(title, insertLinkInternal)}</p>}
          {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
        </div>
      )}
    </div>
  );
};

export default ItemResourceCard;
