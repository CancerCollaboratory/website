import { attributesToProps } from "html-react-parser";
import Link from "next/link";

export const insertInternalLink = {
  replace: domNode => {
    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return <Link {...props}>{domNode.children[0].data}</Link>;
    }
  },
};

export const insertExternalLink = {
  replace: domNode => {
    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return (
        <a target="_blank" rel="noreferrer" {...props}>
          {domNode.children[0].data}
        </a>
      );
    }
  },
};
