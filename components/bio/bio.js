import Image from "next/image";
import styles from "./bio.module.scss";

const Bio = ({ imageSrcPath, imageAlt, name, body }) => {
  if (!imageSrcPath || !imageAlt || !name || !body) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.image}
          quality={100}
          width={100}
          height={100}
        />
        <div className={styles.innerContainer}>
          <p className={styles.name}>{name}</p>
          <ul className={styles.description}>
            {body.map((item, index) => item.text && <li key={index}>{item.text}</li>)}
          </ul>
        </div>
      </div>
    );
  }
};

export default Bio;
