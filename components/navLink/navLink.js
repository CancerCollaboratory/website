import clsx from "clsx";
import Image from "next/future/image";
import LabelLink from "../labelLink/labelLink";
import IconArrow from "../../public/assets/navLink/icon-arrow-red.svg";
import styles from "./navLink.module.scss";

const NavLink = ({ links }) => {
  return (
    <ul className={styles.container}>
      {links.map((item, index) => (
        <li
          className={clsx(
            styles.label,
            item.isLastLink !== "true" ? clsx(styles.borderRight, styles.marginBottom) : undefined
          )}
          key={index}
        >
          {item.label && item.link && <LabelLink label={item.label} link={item.link} />}
          <Image
            src={IconArrow}
            alt={"Icon"}
            className={styles.iconArrow}
            quality={100}
            width={11}
            height={11}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
