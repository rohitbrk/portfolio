import ReactJs from "../../../blogs/ReactJs.mdx";
import NodeJs from "../../../blogs/NodeJs.mdx";

const Page = ({ params }) => {
  let ComponentToRender = null;
  if (params.slug === "react-js") ComponentToRender = ReactJs;
  if (params.slug === "node-js") ComponentToRender = NodeJs;

  return (
    <div className="prose dark:prose-invert text-white mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl m-20">
      <ComponentToRender />
    </div>
  );
};

export default Page;
