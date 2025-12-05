import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaDna, FaCode, FaMicroscope } from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen bg-base-100 text-slate-300">
            {/* Hero Section */}
            <div className="hero min-h-[90vh] bg-gradient-to-br from-base-100 via-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="hero-content flex-col lg:flex-row-reverse z-10 max-w-7xl w-full justify-between px-4 sm:px-6 lg:px-8">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full border-4 border-primary/30 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm overflow-hidden">
                                {/* Placeholder for Profile Image or 3D Element */}
                                <FaDna className="text-9xl text-primary opacity-80" />
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute -top-4 -right-4 p-4 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 animate-bounce delay-100">
                                <FaMicroscope className="text-4xl text-emerald-400" />
                            </div>
                            <div className="absolute bottom-10 -left-10 p-4 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 animate-bounce delay-300">
                                <FaCode className="text-4xl text-sky-400" />
                            </div>
                            <div className="absolute -bottom-4 right-10 p-4 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 animate-bounce delay-500">
                                <span className="text-2xl font-bold text-orange-400">DVM</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
                        <h2 className="text-primary font-bold tracking-wide uppercase mb-4">Welcome to my world</h2>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MD Abu Ahsan Gilman</span>
                        </h1>
                        <div className="text-2xl lg:text-3xl font-bold text-slate-400 mb-8 h-20">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Metagenomics Researcher',
                                        'DVM Student',
                                        'Bioinformatics Analyst'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </div>
                        <p className="py-6 text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">
                            Bridging the gap between Veterinary Science and Technology. I explore the intersection of animal health, microbiology, and genomic technologies to uncover insights into microbial communities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/research" className="btn btn-primary rounded-full px-8 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                                View Research & Projects
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-secondary rounded-full px-8 hover:bg-secondary hover:text-white transition-all">
                                Contact Me
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-2xl"><FaGithub /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-2xl"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats / Focus Areas */}
            <div className="py-20 bg-base-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all group">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <FaMicroscope className="text-3xl text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Metagenomics</h3>
                            <p className="text-slate-400">Analyzing genetic diversity of microbial populations to understand their influence on animal health.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-secondary/50 transition-all group">
                            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                <FaDna className="text-3xl text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Bioinformatics</h3>
                            <p className="text-slate-400">Using Python, R, and advanced statistical methods to interpret complex biological data.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-accent/50 transition-all group">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <FaCode className="text-3xl text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                            <p className="text-slate-400">Building tools and applications using the MERN stack to visualize and manage research data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
