import Link from "next/link";

const LabelLink = ({ label, link, isLinkExternal, styleLabel, styleWrap }) => {
  const labelContainer = styleWrap ? <div className={styleWrap}>{label}</div> : label;

  return (
    label &&
    link &&
    (isLinkExternal === "true" ? (
      <a className={styleLabel} href={link} target="_blank" rel="noreferrer">
        {labelContainer}
      </a>
    ) : (
      <Link href={link}>
        <a className={styleLabel}>{labelContainer}</a>
      </Link>
    ))
  );
};

export default LabelLink;
