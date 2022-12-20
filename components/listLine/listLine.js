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
        {items.map(
          (item, index) =>
            item.label && (
              <li
                className={clsx(
                  utilStyles.defaultElementLineHeight,
                  !item.link ? styles.listLabel : undefined
                )}
                key={index}
              >
                {!item.link ? (
                  item.label
                ) : (
                  <CustomLink
                    label={item.label}
                    link={item.link}
                    isLinkExternal={item.isLinkExternal}
                    styleLabel={utilStyles.commonAnchor}
                  />
                )}
              </li>
            )
        )}
      </ul>
    );
  }
};

export default ListLine;
