import styles from "./closeButton.module.scss";

const CloseButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cross}></div>
    </div>
  );
};

export default CloseButton;
