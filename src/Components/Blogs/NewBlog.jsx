import React from 'react';

const NewBlog = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 mt-24 bg-base-200 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">New Post</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">create a new post then press create button</p>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Blog Title</label>
                                        <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Blog title" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Blog Image</label>
                                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" placeholder="Optional" />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="leading-loose">Blog Content</label>
                                        <textarea
                                            placeholder="Bio"
                                            className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                    </button>
                                    <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBlog;