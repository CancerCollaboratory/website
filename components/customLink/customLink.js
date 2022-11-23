import Link from "next/link";

const CustomLink = ({ label, link, isLinkExternal, styleLabel, styleWrap, children }) => {
  const labelContainer = styleWrap ? <div className={styleWrap}>{label}</div> : label;

  return !link ? null : label && !children ? (
    isLinkExternal ? (
      <a className={styleLabel} href={link} target="_blank" rel="noreferrer">
        {labelContainer}
      </a>
    ) : (
      <Link href={link}>
        <a className={styleLabel}>{labelContainer}</a>
      </Link>
    )
  ) : (
    !label &&
    children &&
    (isLinkExternal ? (
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    ))
  );
};

export default CustomLink;
