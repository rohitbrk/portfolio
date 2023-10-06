import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const _path = "src/app/blogs";
  const files = fs.readdirSync(path.join(_path));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const _path = "src/app/blogs";

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

const Page = ({ params }) => {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <h1>{props.fontMatter.title}</h1>

      <MDXRemote source={props.content}></MDXRemote>
    </article>
  );
};

export default Page;
