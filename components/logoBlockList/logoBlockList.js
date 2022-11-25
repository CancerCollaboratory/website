import clsx from "clsx";
import LogoBlock from "../logoBlock/logoBlock";
import styles from "./logoBlockList.module.scss";

const LogoBlockList = ({ logoBlocks }) => {
  if (!logoBlocks) {
    return null;
  } else {
    return (
      <ul className={styles.listContainer}>
        {logoBlocks.map((block, index) => (
          <li
            className={clsx(
              styles.blockContainer,
              block.hasBackground ? styles.blockBackground : undefined,
              index % 2 !== 0 ? styles.addBlockBackground : undefined
            )}
            key={index}
          >
            <LogoBlock block={block} />
          </li>
        ))}
      </ul>
    );
  }
};

export default LogoBlockList;
