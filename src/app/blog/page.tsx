import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const Blog = () => {
  const blogDir = "src/app/blogs";
  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".mdx", ""),
      imgUrl: data.imgUrl,
      title: data.title,
      desc: data.desc,
    };
  });

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl m-20">
      <div className="p-2 flex flex-col gap-1 justify-center items-center">
        {" "}
        {blogs.map((item) => (
          <div
            key={item.slug}
            className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`blog/${item.slug}`}>
              <img className="rounded-t-lg" src={item.imgUrl} alt="" />
            </Link>
            <div className="p-5">
              <Link href={`blog/${item.slug}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.desc}
              </p>
              <Link
                href={`blog/${item.slug}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
