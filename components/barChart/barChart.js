import Image from "next/image";
import styles from "./barChart.module.scss";

const BarChart = ({ srcPath, alt }) => {
  return (
    <Image
      src={srcPath}
      alt={alt}
      priority={true}
      className={styles.chart}
      quality={100}
      width={550}
      height={550}
    />
  );
};

export default BarChart;
