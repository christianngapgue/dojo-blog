import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Mario");

  const deleteBlog = (blogId) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogId));
  };

  useEffect(() => {
    console.log("use effect ran");
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={deleteBlog} />
      <button
        onClick={() => {
          setName("Luigi");
        }}
      >
        change name
      </button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
