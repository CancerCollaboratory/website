import clsx from "clsx";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./fileLink.module.scss";

const FileLink = ({ links }) => {
  if (!links) {
    return null;
  } else {
    return (
      <ul className={clsx(styles.container, utilStyles.outerContainerWidth)}>
        {links.map((item, index) => {
          if (!item.label || !item.link) {
            return null;
          } else {
            return (
              <li key={index}>
                <CustomLink
                  label={item.label}
                  link={item.link}
                  isLinkExternal={true}
                  styleLabel={utilStyles.commonAnchor}
                />
              </li>
            );
          }
        })}
      </ul>
    );
  }
};

export default FileLink;
