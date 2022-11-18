import Link from "next/link";
import Image from "next/future/image";
import IconArrow from "../../public/assets/common/icon-arrow-white.svg";
import styles from "./button.module.scss";

const Button = ({ label, link, isLinkExternal }) => {
  const buttonContent = (
    <div className={styles.innerContainer}>
      <p className={styles.label}>{label}</p>
      <Image
        src={IconArrow}
        alt={"Icon"}
        link={link}
        className={styles.iconArrow}
        width={12}
        height={12}
        quality={100}
      />
    </div>
  );

  return isLinkExternal === "true" ? (
    <a href={link} target="_blank" rel="noreferrer">
      {buttonContent}
    </a>
  ) : (
    <Link href={link}>{buttonContent}</Link>
  );
};

export default Button;
