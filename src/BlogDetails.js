import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { blogId } = useParams();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + blogId
  );
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogId, { method: "DELETE" }).then(() => {
      navigate(-1)
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
