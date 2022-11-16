import clsx from "clsx";
import Link from "next/link";
import styles from "./navLink.module.scss";

const NavLink = ({ links }) => {
  return (
    <ul className={styles.container}>
      {links.map((item, index) => (
        <li
          className={clsx(
            styles.label,
            item.isLastLink !== "true" ? styles.borderRight : undefined
          )}
          key={index}
        >
          {item.label && item.link && <Link href={item.link}>{item.label}</Link>}
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
