import Link from "next/link";
import styles from "./button.module.scss";

export default function Button({ btnText, btnLink, btnColor }) {
  if (btnColor === "red") {
    return (
      <button className={styles.redBtn} type="button">
        <Link href={btnLink}>
          <a>{btnText}</a>
        </Link>
      </button>
    );
  } else if (btnColor === "blue") {
    return (
      <button className={styles.blueBtn} type="button">
        <Link href={btnLink}>
          <a>{btnText}</a>
        </Link>
      </button>
    );
  }
}
