import Link from "next/link";

const NavbarLink = ({ link, label }) => {
  return <Link href={link}>{label}</Link>;
};

export default NavbarLink;
