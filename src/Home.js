import React from "react";
import {useState} from 'react'
import BlogList from './BlogList'

function Home() {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
  ])

  const deleteBlog = (blogId) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogId))
  }
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={deleteBlog}/>
    </div>
  );
}

export default Home;
