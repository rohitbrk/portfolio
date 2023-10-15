import { getBlog } from "../../../utils/blog.ts";

import { MDXRemote } from "next-mdx-remote/rsc";

type Props = { params: { slug: string } };

const Page = ({ params }: Props) => {
  const props = getBlog(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <MDXRemote source={props.content}></MDXRemote>
    </article>
  );
};

export default Page;
