import Link from "next/link";

const LabelLink = ({ label, link, isLinkExternal }) => {
  return (
    <>
      {label &&
        link &&
        (isLinkExternal ? (
          <a href={link} target="_blank" rel="noreferrer">
            {label}
          </a>
        ) : (
          <Link href={link}>{label}</Link>
        ))}
    </>
  );
};

export default LabelLink;
