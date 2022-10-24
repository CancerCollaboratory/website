import styles from "./footer.module.scss";
import FooterItem from "../footerItem/footerItem";
import data from "../../content/components/footerItems.json";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerHeadContainer}></div>
      <div className={styles.footerTailContainer}>
        {data.footerItems.map((item, index) => (
          <FooterItem label={item.label} labelLink={item.link} footerItem={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
