import clsx from "clsx";
import NavLine from "../navLine/navLine";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./collabCard.module.scss";

const CollabCard = ({ title, description, buttonItems, children }) => {
  if (!title || !description || !buttonItems || !children) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        {children}
        <div className={styles.cardBody}>
          <p className={styles.title}>{title}</p>
          <p className={clsx(styles.description, utilStyles.defaultElementLineHeight)}>
            {description}
          </p>
          <NavLine navItems={buttonItems} />
        </div>
      </div>
    );
  }
};

export default CollabCard;
