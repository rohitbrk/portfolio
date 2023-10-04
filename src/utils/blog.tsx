import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Blog = {
  id: string;
  title: string;
  date: string;
  imgUrl: string;
  desc: string;
};

const postsDirectory = path.relative(process.cwd(), "src/blogs");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const blogPost: Blog = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      imgUrl: matterResult.data.imgUrl,
      desc: matterResult.data.desc,
    };

    return blogPost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: Blog & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
    imgUrl: matterResult.data.imgUrl,
    desc: matterResult.data.desc,
  };

  return blogPostWithHTML;
}
