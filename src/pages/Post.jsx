import { Link, useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <>
      <h1>
        {post.id}.- {post.title}
      </h1>
      <p>{post.body}</p>
      <Link to="/blog">Volver al Blog</Link>

    </>
  );
};

export default Post;

export const loaderPost = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!response.ok)
    throw {
      status: response.status,
      statusText: "Post no localizado",
    };

  const post = await response.json();

  return { post };
};
