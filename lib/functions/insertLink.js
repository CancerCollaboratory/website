import Link from "next/link";
import { attributesToProps } from "html-react-parser";
import utilStyles from "../../styles/utils.module.scss";

export const insertLinkInternal = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return (
        <Link {...props} legacyBehavior>
          <a className={utilStyles.commonAnchor}>{domNode.children[0].data}</a>
        </Link>
      );
    }
  },
};

export const insertLinkExternal = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return (
        <a className={utilStyles.commonAnchor} target="_blank" rel="noreferrer" {...props}>
          {domNode.children[0].data}
        </a>
      );
    }
  },
};
