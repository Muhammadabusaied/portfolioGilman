import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate();

    // Determine if the description is long enough to warrant "See more"
    const isLongDescription = blog.description.length > 100;

    // Navigate to FullBlog page
    const redirectToFullBlog = () => {
        navigate(`/blog/${blog.id}`);
    };

    return (
        <article key={blog.id} className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            <img
                className="w-full transform object-cover object-center transition duration-100 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                src={blog.imageUrl}
                alt="blog"
            />
            <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                {blog.category}
            </h2>
            <div className="py-1 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl font-extrabold tracking-wide text-gray-800">
                    {blog.title}
                </h1>

                {/* Truncated description */}
                <p className="mb-3 leading-relaxed text-black-100">
                    {`${blog.description.slice(0, 100)}${isLongDescription ? '...' : ''}`}
                    {isLongDescription && (
                        <span
                            onClick={redirectToFullBlog}
                            className="ml-2 cursor-pointer text-blue-600 hover:underline"
                        >
                            See more
                        </span>
                    )}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                <div className="flex flex-wrap text-sm text-gray-500">
                    <span className="mr-1">{blog.date}</span>
                </div>
                <div className="mt-1">
                    <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                        {blog.views}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default Blog;
