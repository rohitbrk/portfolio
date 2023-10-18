// @ts-nocheck
import NodeJs from "../../../blogs/NodeJs";
import ReactJs from "../../../blogs/ReactJs";

type Props = { params: { slug: string } };

const Page = ({ params }: Props) => {
  let ComponentToRender;
  if (params.slug === "ReactJs") ComponentToRender = ReactJs;
  if (params.slug === "NodeJs") ComponentToRender = NodeJs;

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <ComponentToRender />
    </article>
  );
};

export default Page;
