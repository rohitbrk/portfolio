// @ts-nocheck
"use client";
import Button from "@/components/common/Button";
import Image from "next/image.js";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
  cache: new InMemoryCache(),
});

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await client.query({
        query: gql`
          query Blogs {
            blogs {
              title
              slug
              date
              desc
              imgUrl {
                url
              }
            }
          }
        `,
      });
      setBlogs((prev) => data.data.blogs);
    };
    getData();
  }, []);
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl m-20">
      <div className="p-2 flex flex-col gap-1 justify-center items-center">
        {" "}
        {blogs?.map((item) => (
          <div
            key={item.slug}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow dark:hover:shadow-xl"
          >
            <Link href={`blog/${item.slug}`}>
              <Image
                className="rounded-t-lg"
                width={500}
                height={500}
                src={item.imgUrl.url}
                alt=""
              />
            </Link>
            <div className="p-5">
              <div className="flex justify-between">
                <Link href={`blog/${item.slug}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </Link>
                <p className="font-semibold">{item.date}</p>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.desc}
              </p>
              <Button name="Read more" href={`blog/${item.slug}`} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
