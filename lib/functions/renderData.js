import parse from "html-react-parser";
import { micromark } from "micromark";

export const renderData = (markdown, options) => {
  const parsedMarkdown = micromark(markdown);

  return parse(parsedMarkdown, options);
};
