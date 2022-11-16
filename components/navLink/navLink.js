import clsx from "clsx";
import Link from "next/link";
import Image from "next/future/image";
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
          {item.label && item.link && <Link href={item.link}>{item.label}</Link>}
          <Image
            src={IconArrow}
            alt={"Icon"}
            className={styles.iconArrow}
            width={11}
            height={11}
            quality={100}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
