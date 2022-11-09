import styles from "./footer.module.scss";
import FooterHead from "../footerHead/footerHead";
import FooterItem from "../footerItem/footerItem";
import data from "../../data/components/footerItems.json";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerHeadContainer}>
        {data.footerHeadItems.map((item, index) => (
          <FooterHead headItem={item} key={index} />
        ))}
      </div>
      <div className={styles.footerTailContainer}>
        {data.footerTailItems.map((item, index) => (
          <FooterItem label={item.label} labelLink={item.link} footerItem={item} key={index} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
