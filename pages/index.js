import Link from "next/link"
import { client } from "../libs/client";

export default function Home({ blog, totalCount }) {
  return (
    <div>
      <div>
        件数:{totalCount}件
      </div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
}
