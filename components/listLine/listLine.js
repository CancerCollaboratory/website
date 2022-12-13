import clsx from "clsx";
import CustomLink from "../customLink/customLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./listLine.module.scss";

const ListLine = ({ isVertical, items }) => {
  if (!items) {
    return null;
  } else {
    return (
      <ul className={clsx(styles.container, isVertical ? styles.verticalList : undefined)}>
        {items.map((item, index) => (
          <li className={utilStyles.commonAnchor} key={index}>
            <CustomLink label={item.label} link={item.link} isLinkExternal={item.isLinkExternal} />
          </li>
        ))}
      </ul>
    );
  }
};

export default ListLine;
