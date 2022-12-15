import Image from "next/image";
import styles from "./barChart.module.scss";

const BarChart = ({ title, subTitle, srcPath, alt }) => {
  if (!title || !subTitle || !srcPath || !alt) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
        <Image
          src={srcPath}
          alt={alt}
          priority={true}
          className={styles.chart}
          quality={100}
          width={550}
          height={550}
        />
      </div>
    );
  }
};

export default BarChart;
