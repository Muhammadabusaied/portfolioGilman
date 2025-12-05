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

    // Slicing the description and adding "..." only if it’s longer than 100 characters
    const shortDescription = `${blog.description.slice(0, 100)}${isLongDescription ? '...' : ''}`;

    return (
        <article className="group h-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col">
            <div className="relative overflow-hidden h-48 shrink-0">
                <img
                    className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
                    src={blog.imageUrl}
                    alt={blog.title}
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                        {blog.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h2
                    onClick={redirectToFullBlog}
                    className="text-xl font-bold text-white mb-3 cursor-pointer hover:text-primary transition-colors line-clamp-2"
                >
                    {blog.title}
                </h2>

                <div className="text-slate-400 text-sm mb-4 flex-grow">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: isLongDescription ? shortDescription : blog.description,
                        }}
                    ></span>
                    {isLongDescription && (
                        <span
                            onClick={redirectToFullBlog}
                            className="ml-2 cursor-pointer text-primary hover:underline font-medium"
                        >
                            Read more
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-500">
                    <span>{blog.date}</span>
                    <span>5 min read</span>
                </div>
            </div>
        </article>
    );
};

export default Blog;
