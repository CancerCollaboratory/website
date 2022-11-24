import styles from "./closeButton.module.scss";

const CloseButton = () => {
  return (
    <div className={styles.container}>
      <a className={styles.cross}></a>
    </div>
  );
};

export default CloseButton;
