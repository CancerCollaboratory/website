import FooterHead from "../footerHead/footerHead";
import FooterTail from "../footerTail/footerTail";
import data from "../../data/components/footer/footer.json";
import styles from "./footer.module.scss";

const Footer = () => {
  if (!data.headItems || !data.tailItems) {
    return null;
  } else {
    return (
      <footer className={styles.container}>
        <div className={styles.headContainer}>
          {data.headItems.map((item, index) => (
            <FooterHead headItem={item} key={index} />
          ))}
        </div>
        <div className={styles.tailContainer}>
          {data.tailItems.map((item, index) => (
            <FooterTail
              label={item.label}
              labelLink={item.link}
              subItems={item.subItems}
              key={index}
            />
          ))}
        </div>
      </footer>
    );
  }
};

export default Footer;
