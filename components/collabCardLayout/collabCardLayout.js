import CollabCard from "../collabCard/collabCard";
import CustomLink from "../customLink/customLink";
import Image from "next/future/image";
import styles from "./collabCardLayout.module.scss";

const CollabCardLayout = ({ title, description, buttonItems, logoData }) => {
  return (
    <CollabCard title={title} description={description} buttonItems={buttonItems}>
      <CustomLink
        link={buttonItems.find((item) => item.link).link}
        isLinkExternal={logoData.isLinkExternal}
      >
        <Image
          src={logoData.srcPath}
          alt={logoData.alt}
          className={styles.logo}
          quality={100}
          width={286}
          height={63}
        />
      </CustomLink>
    </CollabCard>
  );
};

export default CollabCardLayout;
