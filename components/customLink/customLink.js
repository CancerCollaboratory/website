import Link from "next/link";

// To use CustomLink, pass either the label prop OR children prop but not both
const CustomLink = ({ label, link, isLinkExternal, styleLabel, styleWrap, children }) => {
  if (!link || (!children && !label) || (children && label)) {
    return null;
  } else {
    const labelContainer = styleWrap ? <div className={styleWrap}>{label}</div> : label;
    const content = children || labelContainer;

    return isLinkExternal ? (
      <a className={styleLabel} href={link} target="_blank" rel="noreferrer">
        {content}
      </a>
    ) : (
      <Link href={link}>
        <a className={styleLabel}>{content}</a>
      </Link>
    );
  }
};

export default CustomLink;
