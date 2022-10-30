import path from "path";
import matter from "gray-matter";

export function getPageData(section, slug) {
  const fullPath = path.join(process.cwd(), `data/pages/sections/${section}`, `${slug}.json`);
  const matterResult = matter.read(fullPath);

  return {
    section,
    slug,
    ...JSON.parse(matterResult.content),
  };
}
