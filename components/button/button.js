import Link from "next/link";
import Image from "next/future/image";
import IconArrow from "../../public/assets/common/icon-arrow-white.svg";
import styles from "./button.module.scss";

const Button = ({ label, link, isLinkExternal, hasIcon }) => {
  const buttonContent = (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      {hasIcon === "true" && (
        <Image
          src={IconArrow}
          alt={"Icon"}
          link={link}
          className={styles.iconArrow}
          quality={100}
          width={12}
          height={12}
        />
      )}
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
