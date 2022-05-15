import React from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { blogId } = useParams();
  
  return (
    <div id="blog-details">
      <h2>Blog Details - {blogId}</h2>
    </div>
  );
}

export default BlogDetails;
