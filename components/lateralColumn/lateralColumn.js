import clsx from "clsx";
import styles from "./lateralColumn.module.scss";

const LateralColumn = ({ data, styleLeftColumnImage, children }) => {
  return (
    <div className={styles.lateralColumnContainer}>
      <div className={styles.leftColumnContainer}>
        {data.leftColumn.header.title && (
          <div
            className={clsx(
              styles.leftColumnHeader,
              data.leftColumn.header.hasImage === "true" ? styleLeftColumnImage : undefined
            )}
          >
            <h1 className={styles.leftColumnTitle}>{data.leftColumn.header.title}</h1>
          </div>
        )}
        {data.leftColumn.body?.text.map((item, index) => (
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
        {data.rightColumn?.header ? (
          <>
            {data.rightColumn.header.title && (
              <div className={styles.rightColumnHeader}>
                <h1 className={styles.rightColumnTitle}>{data.rightColumn.header.title}</h1>
                {data.rightColumn.header.subTitle && (
                  <h2 className={styles.rightColumnSubTitle}>{data.rightColumn.header.subTitle}</h2>
                )}
              </div>
            )}
            {data.rightColumn.body?.text ? (
              <div className={styles.rightColumnBody}>
                {data.rightColumn.body.text.map((item, index) => (
                  <p
                    className={clsx(
                      styles.rightColumnBodyText,
                      item.isLastSubText !== "true" ? styles.subTextMarginBottom : undefined
                    )}
                    key={index}
                  >
                    {item.subText}
                  </p>
                ))}
              </div>
            ) : (
              children
            )}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default LateralColumn;
