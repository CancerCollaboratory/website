import NavLine from "../../components/navLine/navLine";
import styles from "./collaboratorCard.module.scss";

const CollaboratorCard = ({ title, description, buttonItems, children }) => {
  if (!title || !description || !buttonItems || !children) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        {children}
        <div className={styles.cardBody}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <NavLine navItems={buttonItems} />
        </div>
      </div>
    );
  }
};

export default CollaboratorCard;
