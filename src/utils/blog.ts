import fs from "fs";
import path from "path";
import matter from "gray-matter";

const _path = "src/blogs";

const getBlogs = () => {
  const files = fs.readdirSync(path.join(_path));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(_path, filename), "utf-8");

    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".mdx", ""),
      imgUrl: data.imgUrl,
      title: data.title,
      desc: data.desc,
      date: data.date,
    };
  });

  return blogs;
};

function getBlog({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join(_path, slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export { getBlogs, getBlog };
