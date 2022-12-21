import Image from "next/image";
import CustomLink from "../customLink/customLink";
import IconArrow from "../../public/assets/navLine/icon-arrow-red.svg";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./navLine.module.scss";

const NavLine = ({ navItems }) => {
  if (!navItems) {
    return null;
  } else {
    return (
      <ul className={styles.container}>
        {navItems.map(
          (item, index) =>
            item.label &&
            item.link && (
              <li className={styles.label} key={index}>
                <CustomLink
                  label={item.label}
                  link={item.link}
                  isLinkExternal={item.isLinkExternal}
                  styleLabel={utilStyles.commonAnchor}
                />
                <Image src={IconArrow} alt={"Icon"} className={styles.iconArrow} quality={100} />
              </li>
            )
        )}
      </ul>
    );
  }
};

export default NavLine;
