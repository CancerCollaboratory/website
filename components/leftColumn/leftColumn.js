import Image from "next/image";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, imageSrcPath, imageAlt, body, children }) => {
  return (
    <div className={styles.container}>
      {(title || imageSrcPath) && (
        <div className={styles.head}>
          {imageSrcPath && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={styles.image}
              quality={100}
              width={62}
              height={62}
            />
          )}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
      )}
      {body?.map(
        (item, index) =>
          item.text && (
            <p className={styles.bodyText} key={index}>
              {item.text}
            </p>
          )
      )}
      {children}
    </div>
  );
};

export default LeftColumn;
