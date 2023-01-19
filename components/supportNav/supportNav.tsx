import { useRouter } from "next/router";
import styles from "./supportNav.module.scss";
import Link from "next/link";
import clsx from "clsx";

const navData = [
  { label: "Overview", link: "/support/overview" },
  {
    label: "Getting Started",
    link: "/support/getting-started",
    items: [
      { label: "Access the Console", link: "/support/getting-started#access-the-console" },
      { label: "Pre VM Setup", link: "/support/getting-started#pre-vm-setup" },
      { label: "Associate a floating IP", link: "/support/getting-started#associate-floating-ip" },
      { label: "SSH into your instance", link: "/support/getting-started#ssh-into-instance" },
      { label: "Customize your VM", link: "/support/getting-started#customize-vm" },
    ],
  },
  {
    label: "User Guide",
    link: "/support/user-guide",
    items: [
      {
        label: "Introduction to the Collaboratory",
        link: "/support/user-guide#intro-to-collab",
        items: [
          { label: "Overview", link: "/support/user-guide#overview" },
          { label: "Collaboratory Resource Allocations", link: "/support/user-guide#resource" },
          { label: "Protected Data Resources", link: "/support/user-guide#protected-data" },
          { label: "How can I use an OpenStack cloud?", link: "/support/user-guide#cloud" },
          { label: "OpenStack dashboard", link: "/support/user-guide#dash" },
          { label: "OpenStack dashboard — Project tab", link: "/support/user-guide#project" },
          { label: "Upload and manage images", link: "/support/user-guide#images" },
          {
            label: "Configure access and security for instances",
            link: "/support/user-guide#access",
          },
          { label: "Launch and manage instances", link: "/support/user-guide#launch" },
        ],
      },
      {
        label: "Volumes",
        link: "/support/user-guide#volumes",
        items: [
          { label: "Scope", link: "/support/user-guide#scope" },
          { label: "Introduction", link: "/support/user-guide#intro" },
          { label: "Create a volume", link: "/support/user-guide#create" },
          { label: "Attach a volume to an Instance", link: "/support/user-guide#attach" },
          {
            label: "Identifying volume within your Instance",
            link: "/support/user-guide#identify",
          },
          { label: "Formatting the Volume", link: "/support/user-guide#format" },
          { label: "Mounting the Volume", link: "/support/user-guide#mount" },
          {
            label: "Re-attaching the volume to a different Instance",
            link: "/support/user-guide#different-instance",
          },
          { label: "Re-attach Volume", link: "/support/user-guide#re-attach" },
          { label: "Extend Volume (Grow)", link: "/support/user-guide#extend" },
          { label: "Create and manage object containers", link: "/support/user-guide#containers" },
        ],
      },
    ],
  },
  {
    label: "Best Practices",
    link: "/support/best-practices",
  },

  {
    label: "Glossary of Terms",
    link: "/support/glossary-terms",
  },

  {
    label: "FAQs",
    link: "/support/faqs",
  },
];

const renderNav = (item, asPath, isParentActive = false) => {
  const isActiveSection = asPath.includes(item.link);
  if (item.items && item.items.length > 0) {
    const parentItemLink = item.link;
    return (
      <div>
        <Link href={item.link} className={clsx(isActiveSection && styles.selectedSubItem)}>
          {item.label}
        </Link>
        {(isActiveSection || isParentActive) && (
          <div className={styles.sub}>
            {item.items.map((item) => renderNav(item, asPath, isActiveSection))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link href={item.link} className={clsx(isActiveSection && styles.selectedSubItem)}>
        {item.label}
      </Link>
    );
  }
};

const SupportNav = () => {
  const { asPath } = useRouter();
  return (
    <ul className={styles.navContainer}>
      {navData.map((item, index) => (
        <li key={index}>{renderNav(item, asPath)}</li>
      ))}
    </ul>
  );
};

export default SupportNav;
