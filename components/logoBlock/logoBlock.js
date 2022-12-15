import CustomLink from "../customLink/customLink";
import Image from "next/image";
import styles from "./logoBlock.module.scss";

const LogoBlock = ({ block }) => {
  const logo = block.logo;
  if (!logo || !logo?.link || !logo?.srcPath || !logo?.alt) {
    return null;
  } else {
    return (
      <CustomLink link={logo.link} isLinkExternal={logo?.isLinkExternal}>
        <Image
          src={logo.srcPath}
          alt={logo.alt}
          className={!logo?.adjustStyling ? styles.logo : styles.adjustLogo}
          quality={100}
          width={90}
          height={70}
        />
      </CustomLink>
    );
  }
};

export default LogoBlock;
