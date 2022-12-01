import clsx from "clsx";
import Image from "next/future/image";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./fileLink.module.scss";

const FileLink = ({ links }) => {
  if (!links) {
    return null;
  } else {
    return (
      <ul className={clsx(styles.container, utilStyles.defaultContainerWidth)}>
        {links.map(
          (item, index) =>
            item.icon?.srcPath &&
            item.icon?.alt &&
            item.label &&
            item.link && (
              <li key={index}>
                <Image
                  src={item.icon.srcPath}
                  alt={item.icon.alt}
                  className={styles.icon}
                  quality={100}
                  width={16}
                  height={16}
                />
                <CustomLink label={item.label} link={item.link} isLinkExternal={true} />
              </li>
            )
        )}
      </ul>
    );
  }
};

export default FileLink;
