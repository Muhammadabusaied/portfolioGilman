import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/data/blog.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <div>
      <section className="w-screen py-20 bg-base-200">
        <h1 className="mb-12 mt-12 text-center font-sans text-5xl font-bold">My Blogs</h1>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
