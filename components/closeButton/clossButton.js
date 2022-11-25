import styles from "./closeButton.module.scss";

const CloseButton = ({ onClick }) => {
  return <div className={styles.cross} onClick={onClick} />;
};

export default CloseButton;
