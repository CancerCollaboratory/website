import Image from "next/image";
import CustomLink from "../customLink/customLink";
import IconArrow from "../../public/assets/navLine/icon-arrow-red.svg";
import styles from "./navLine.module.scss";

const NavLine = ({ navItems }) => {
  return (
    <ul className={styles.container}>
      {navItems.map((item, index) => (
        <li className={styles.label} key={index}>
          {item.label && item.link && (
            <CustomLink label={item.label} link={item.link} isLinkExternal={item.isLinkExternal} />
          )}
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

export default NavLine;
