import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);

  const deleteBlog = (blogId) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogId));
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={deleteBlog} />}
    </div>
  );
}

export default Home;
