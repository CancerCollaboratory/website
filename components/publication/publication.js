import clsx from "clsx";
import Image from "next/image";
import CustomLink from "../../components/customLink/customLink";
import { renderData } from "../../lib/functions/renderData";
import { insertLinkExternal, insertLinkInternal } from "../../lib/functions/insertLink";
import utilStyles from "../../styles/utils.module.scss";
import styles from "./publication.module.scss";

const Publication = ({
  imageSrcPath,
  imageAlt,
  title,
  titleLink,
  isTitleLinkExternal,
  caption,
  isCaptionLinkExternal,
}) => {
  if (!imageSrcPath || !imageAlt || !title || !titleLink || !caption) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <Image
          src={imageSrcPath}
          alt={imageAlt}
          className={styles.image}
          quality={100}
          width={100}
          height={115}
        />
        <div className={clsx(styles.block, utilStyles.commonAnchor)}>
          <CustomLink
            label={title}
            link={titleLink}
            isLinkExternal={isTitleLinkExternal}
            styleLabel={styles.title}
          />
          {renderData(caption, isCaptionLinkExternal ? insertLinkExternal : insertLinkInternal)}
        </div>
      </div>
    );
  }
};

export default Publication;
