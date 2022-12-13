import clsx from "clsx";
import Image from "next/image";
import CustomLink from "../customLink/customLink";
import IconArrow from "../../public/assets/common/icon-arrow-white.svg";
import { renderData } from "../../lib/functions/renderData";
import styles from "./button.module.scss";

const Button = ({ tag, label, link, isLinkExternal, hasBlueBackground, hasIcon }) => {
  if (!label || !link) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        {tag && <p className={styles.tag}>{tag}</p>}
        <CustomLink link={link} isLinkExternal={isLinkExternal}>
          <div
            className={clsx(
              styles.innerContainer,
              hasBlueBackground ? styles.blueBackground : undefined
            )}
          >
            <div className={styles.label}>{renderData(label)}</div>
            {hasIcon && (
              <Image
                src={IconArrow}
                alt={"Icon"}
                link={link}
                className={styles.iconArrow}
                quality={100}
              />
            )}
          </div>
        </CustomLink>
      </div>
    );
  }
};

export default Button;
