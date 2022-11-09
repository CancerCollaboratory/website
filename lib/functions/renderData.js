import { micromark } from "micromark";
import parse from "html-react-parser";

export const renderData = (markdown, options) => {
  const parsedMarkdown = micromark(markdown);

  return parse(parsedMarkdown, options);
};
