import CustomLink from "../customLink/customLink";
import NavLine from "../navLine/navLine";
import styles from "./pressRelease.module.scss";

const PressRelease = ({ date, shortUrl, articleUrl, articleTitle, description, buttonItems }) => {
  if (!date || !shortUrl || !articleUrl || !articleTitle || !description || !buttonItems) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.head}>
          <p className={styles.date}>{date}</p>
          <p className={styles.shortUrl}>{shortUrl}</p>
        </div>
        <CustomLink label={articleTitle} link={articleUrl} isLinkExternal={true} />
        <p className={styles.description}>{description}</p>
        <NavLine navItems={buttonItems} />
      </div>
    );
  }
};

export default PressRelease;
