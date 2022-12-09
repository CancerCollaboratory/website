import clsx from "clsx";
import Image from "next/image";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./fileLink.module.scss";

const FileLink = ({ links }) => {
  if (!links) {
    return null;
  } else {
    return (
      <ul className={clsx(styles.container, utilStyles.outerContainer)}>
        {links.map((item, index) => {
          if (!item.icon?.srcPath || !item.icon?.alt || !item.label || !item.link) {
            return null;
          } else {
            return (
              <li key={index}>
                <div className={clsx(styles.content, utilStyles.commonAnchor)}>
                  <Image
                    src={item.icon.srcPath}
                    alt={item.icon.alt}
                    className={styles.icon}
                    quality={100}
                    width={18}
                    height={18}
                  />
                  <CustomLink label={item.label} link={item.link} isLinkExternal={true} />
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
};

export default FileLink;
