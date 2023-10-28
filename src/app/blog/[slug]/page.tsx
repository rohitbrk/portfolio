// @ts-nocheck
import NodeJs from "../../../blogs/NodeJs";
import ReactJs from "../../../blogs/ReactJs";

type Props = { params: { slug: string } };

const Page = ({ params }: Props) => {
  let ComponentToRender;
  // workaround for now
  switch (params.slug) {
    case "ReactJs":
      ComponentToRender = ReactJs;
      break;
    case "NodeJs":
      ComponentToRender = NodeJs;
      break;
  }

  return (
    <div className="mx-6">
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
        <ComponentToRender />
      </article>
    </div>
  );
};

export default Page;
