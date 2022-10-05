import styles from "./navbtn.module.scss";

export default function Navbtn() {
  return (
    <div>
      <div>
        <button
          type="button"
          className={styles.collapseBtn}
          data-toggle={styles.navbarToggle}
          data-target="#navbarCollapse"
        >
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
          <span className={styles.iconBar}></span>
        </button>
      </div>
      <div className={styles.navbarToggle} id="navbarCollapse">
        <p>The navbar content will go here.</p>
      </div>
    </div>
  );
}
