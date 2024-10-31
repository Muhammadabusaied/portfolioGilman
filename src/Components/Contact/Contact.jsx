import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-8">
            <br/><br/><br/><br/>
            <h1 className="text-5xl text-center font-bold">Contact Me</h1>
            <br/><br/>
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4 bg-white text-cyan-500 rounded-lg shadow-md">
                    <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">LOCATION</h3>
                    <p>Bangabandhu Sheikh Mujibur Rahman Agricultural University, Gazipur, Bangladesh</p>
                </div>

                <div className="text-center p-4 bg-white text-cyan-500 rounded-lg shadow-md">
                    <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Phone Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">PHONE NUMBER</h3>
                    <p>+880 1819730054</p>
                </div>

                <div className="text-center p-4 bg-white text-cyan-500 rounded-lg shadow-md">
                    <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">EMAIL</h3>
                    <p>ahsan.gilman@gmail.com</p>
                </div>
                
                <div className="text-center p-4 bg-white text-cyan-500 rounded-lg shadow-md">
                    <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Phone Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">FACEBOOK</h3>
                    <p><Link to={"https://www.facebook.com/ahsangilman"} target="_blank">https://www.facebook.com/ahsangilman</Link></p>
                </div>

                
                <div className="text-center p-4 bg-white text-cyan-500 rounded-lg shadow-md">
                    <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="Phone Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">LINKEDIN</h3>
                    <p><Link to={"https://www.linkedin.com/in/ahsangilman"} target="_blank">https://www.linkedin.com/in/ahsangilman</Link></p>
                </div>


                {/* <div className="text-center p-4 bg-white text-cyan-500 rounded-lg shadow-md">
                    <img src="https://img.icons8.com/ios-filled/50/000000/fax.png" alt="Fax Icon" className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">FAX</h3>
                    <p>1-234-567-8900</p>
                </div> */}

            </div>

            {/* Contact Form and Info */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
                {/* Text Section */}
                {/* <div className="lg:w-1/2 bg-cyan-600 p-8 rounded-lg text-left shadow-lg mb-6 lg:mb-0">
                    <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
                    <p className="mb-6">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="w-full">
                        <img src="https://via.placeholder.com/300" alt="Truck Image" className="rounded-full mb-2" />
                        <p className="text-white">
                            Images from <a href="https://www.freepik.com" className="underline">Freepik</a>
                        </p>
                    </div>
                </div> */}

                {/* Form Section */}
                {/* <div className="lg:w-1/2 bg-white text-cyan-500 p-8 rounded-lg shadow-lg">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-lg">Email</label>
                            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Enter a valid email address" />
                        </div>

                        <div>
                            <label className="block text-lg">Name</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Enter your Name" />
                        </div>

                        <div>
                            <label className="block text-lg">Message</label>
                            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" rows="4" placeholder="Enter your message"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition duration-300">SUBMIT</button>
                    </form>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;
