import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { blogId } = useParams();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + blogId
  );

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
