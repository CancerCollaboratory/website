import clsx from "clsx";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ data }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      <div className={styles.leftColumnContainer}>
        {data.lateralColumn.leftColumn.header.title && (
          <div
            className={clsx(
              styles.leftColumnHeader,
              data.lateralColumn.leftColumn.header.hasImage === "true"
                ? styles.leftColumnHeaderImage
                : undefined
            )}
          >
            <h1 className={styles.leftColumnTitle}>{data.lateralColumn.leftColumn.header.title}</h1>
          </div>
        )}
        {data.lateralColumn.leftColumn.body.text?.map((item, index) => (
          <p
            className={clsx(
              styles.leftColumnBodyText,
              item.isLastSubText !== "true" ? styles.subTextMarginBottom : undefined
            )}
            key={index}
          >
            {item.subText}
          </p>
        ))}
      </div>
      <div className={styles.rightColumnContainer}>
        {data.lateralColumn.rightColumn.header && (
          <div className={styles.rightColumnHeader}>
            {data.lateralColumn.rightColumn.header.title && (
              <h1 className={styles.rightColumnTitle}>
                {data.lateralColumn.rightColumn.header.title}
              </h1>
            )}
            {data.lateralColumn.rightColumn.header.subTitle && (
              <h2 className={styles.rightColumnSubTitle}>
                {data.lateralColumn.rightColumn.header.subTitle}
              </h2>
            )}
          </div>
        )}
        {data.lateralColumn.rightColumn.body && (
          <>
            {data.lateralColumn.rightColumn.body && (
              <div className={styles.rightColumnBody}>
                {data.lateralColumn.rightColumn.body.text?.map((item, index) => (
                  <p
                    className={clsx(
                      styles.leftColumnBodyText,
                      item.isLastSubText !== "true" ? styles.subTextMarginBottom : undefined
                    )}
                    key={index}
                  >
                    {item.subText}
                  </p>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LateralColumn;
