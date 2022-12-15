import CollabCard from "../collabCard/collabCard";
import CustomLink from "../customLink/customLink";
import Image from "next/image";
import { findLink } from "../../lib/functions/findLink";
import styles from "./collabCardLayout.module.scss";

const CollabCardLayout = ({ title, description, buttonItems, logoData }) => {
  return (
    <CollabCard title={title} description={description} buttonItems={buttonItems}>
      <CustomLink link={findLink(buttonItems)} isLinkExternal={logoData?.isLinkExternal}>
        {logoData?.srcPath && logoData?.alt && (
          <Image
            src={logoData.srcPath}
            alt={logoData.alt}
            className={styles.logo}
            priority={logoData?.isLCP}
            quality={100}
            width={286}
            height={63}
          />
        )}
      </CustomLink>
    </CollabCard>
  );
};

export default CollabCardLayout;
