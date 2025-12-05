import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen bg-base-100 text-slate-300 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">Get In Touch</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <FaMapMarkerAlt className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Location</h4>
                                        <p className="text-slate-400">Bangabandhu Sheikh Mujibur Rahman Agricultural University, Gazipur, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <FaPhone className="text-secondary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Phone</h4>
                                        <p className="text-slate-400">+880 1819730054</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                        <FaEnvelope className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Email</h4>
                                        <p className="text-slate-400">ahsan.gilman@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com/ahsangilman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                        <FaFacebook />
                                    </a>
                                    <a href="https://linkedin.com/in/ahsangilman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-300">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-primary" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-300">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-primary" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Subject</span>
                                </label>
                                <input type="text" placeholder="Project Inquiry" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-32 bg-slate-800 border-slate-700 text-white focus:border-primary" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button className="btn btn-primary w-full font-bold">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
