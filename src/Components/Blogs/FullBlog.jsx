import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    if (fullBlog === null) return <div className="min-h-screen bg-base-100 flex items-center justify-center text-primary">Loading...</div>;
    if (!fullBlog) return <div className="min-h-screen bg-base-100 flex items-center justify-center text-error">Blog not found.</div>;

    return (
        <div className="min-h-screen bg-base-100 text-slate-300">
            <main>
                <article>
                    <header className="mx-auto max-w-screen-xl pt-28 text-center px-4">
                        <p className="text-primary font-medium">Published {fullBlog.date}</p>
                        <h1 className="mt-4 text-3xl font-heading font-bold text-white sm:text-5xl max-w-4xl mx-auto leading-tight">{fullBlog.title}</h1>
                        {fullBlog.imageUrl && (
                            <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 max-w-5xl mx-auto">
                                <img className="w-full object-cover max-h-[600px]" src={fullBlog.imageUrl} alt="Featured Image" />
                            </div>
                        )}
                    </header>

                    {/* Render HTML content with dangerouslySetInnerHTML */}
                    <div
                        dangerouslySetInnerHTML={{ __html: fullBlog.description }}
                        className="mx-auto mt-10 max-w-screen-md space-y-6 px-4 py-10 text-lg leading-relaxed text-slate-300 prose prose-invert prose-lg"
                    ></div>
                </article>
            </main>

            <div className="w-fit mx-auto mt-10 flex space-x-2 opacity-50">
                <div className="h-0.5 w-2 bg-slate-600"></div>
                <div className="h-0.5 w-32 bg-slate-600"></div>
                <div className="h-0.5 w-2 bg-slate-600"></div>
            </div>

            <aside aria-label="Related Articles" className="mx-auto mt-10 max-w-7xl px-4 py-20">
                <h2 className="mb-12 text-center text-4xl font-heading font-bold text-white">More Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.filter(b => b.id !== fullBlog.id).slice(0, 3).map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default FullBlog;
