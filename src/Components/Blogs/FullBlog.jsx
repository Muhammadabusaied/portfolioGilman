import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Blog from './Blog';

const FullBlog = () => {
    const { id } = useParams();
    const [fullBlog, setFullBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/data/blog.json')
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
                const foundBlog = data.find((item) => item.id === parseInt(id, 10));
                setFullBlog(foundBlog);
            })
            .catch((error) => console.error('Error fetching blog data:', error));
    }, [id]);


    if (fullBlog === null) return <div>Loading...</div>;
    if (!fullBlog) return <div>Blog not found.</div>;


    return (
        <div className="bg-base-200">

            <main>
                <article>
                    <header className="mx-auto max-w-screen-xl pt-28 text-center">
                        <p className="text-gray-500">Published {fullBlog.date}</p>
                        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{fullBlog.title}</h1>
                        {/* <p className="mt-6 text-lg text-gray-700">You're doing marketing the wrong way</p> */}
                        {/* <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
                            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing</button>
                            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
                            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
                            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
                        </div> */}
                        {fullBlog.imageUrl && <img className="sm:h-[34rem] mt-10 w-full object-contain" src={fullBlog.imageUrl} alt="Featured Image" />}
                    </header>

                    <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
                        <p>{fullBlog.description}</p>
                    </div>
                </article>
            </main>

            <div className="w-fit mx-auto mt-10 flex space-x-2">
                <div className="h-0.5 w-2 bg-gray-600"></div>
                <div className="h-0.5 w-32 bg-gray-600"></div>
                <div className="h-0.5 w-2 bg-gray-600"></div>
            </div>

            <aside aria-label="Related Articles" className="mx-auto mt-10 max-w-screen-xl py-20">
    <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">More Blogs</h2>
    <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {blogs.slice(0, 3).map((blog) => (  // Limit to the first 6 blogs
            <Blog key={blog.id} blog={blog} />
        ))}
    </div>
</aside>

        </div>
    );
};

export default FullBlog;
