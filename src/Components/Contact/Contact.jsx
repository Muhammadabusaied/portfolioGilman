import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_fxpraqr', 'template_7cuxv89', form.current, 'mCXI0_2owg7vwE_HW')
            .then((result) => {
                setLoading(false);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully. I will get back to you soon!',
                    icon: 'success',
                    confirmButtonText: 'Great!',
                    confirmButtonColor: '#0ea5e9', // primary color
                    background: '#1e293b', // slate-800
                    color: '#fff'
                });
                form.current.reset();
            }, (error) => {
                setLoading(false);
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again later or email directly.',
                    icon: 'error',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#f43f5e', // error color
                    background: '#1e293b',
                    color: '#fff'
                });
            });
    };

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
                                        <p className="text-slate-400">Gazipur Agricultural University, Gazipur, Bangladesh</p>
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
                                    <a href="https://orcid.org/0009-0000-4134-6073" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-emerald-500 transition-colors" title="ORCID">
                                        <SiOrcid />
                                    </a>
                                    <a href="https://scholar.google.com/citations?user=8ZmNWSwzS30C&hl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-500 transition-colors" title="Google Scholar">
                                        <SiGooglescholar />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ahsangilman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors" title="LinkedIn">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://github.com/AhsanGilman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-100 transition-colors" title="GitHub">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-300">Name</span>
                                    </label>
                                    <input type="text" name="name" required placeholder="Your Name" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-primary" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-300">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="Your Email" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-primary" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Subject</span>
                                </label>
                                <input type="text" name="subject" required placeholder="Project Inquiry" className="input input-bordered bg-slate-800 border-slate-700 text-white focus:border-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Message</span>
                                </label>
                                <textarea name="message" required className="textarea textarea-bordered h-32 bg-slate-800 border-slate-700 text-white focus:border-primary" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" disabled={loading} className="btn btn-primary w-full font-bold">
                                {loading ? <span className="loading loading-spinner"></span> : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
