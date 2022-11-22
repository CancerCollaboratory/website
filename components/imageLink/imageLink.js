import Link from "next/link";

const ImageLink = ({ link, isLinkExternal, children }) => {
  return (
    link &&
    children &&
    (isLinkExternal === "true" ? (
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      <Link href={link}>{children}</Link>
    ))
  );
};

export default ImageLink;
