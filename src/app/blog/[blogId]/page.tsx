import { getPostData } from "../../../utils/blog";
import Link from "next/link";

export default async function Blog({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  const { title, date, contentHtml } = await getPostData(blogId);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/blog">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
