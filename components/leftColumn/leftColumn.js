import Image from "next/future/image";
import styles from "./leftColumn.module.scss";

const LeftColumn = ({ title, imageSrcPath, imageAlt, body, children }) => {
  return (
    <>
      {(title || imageSrcPath) && (
        <div className={styles.head}>
          {imageSrcPath && (
            <Image
              src={imageSrcPath}
              alt={imageAlt}
              className={styles.image}
              width={62}
              height={62}
              quality={100}
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
    </>
  );
};

export default LeftColumn;
