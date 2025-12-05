import { FaGraduationCap, FaCode, FaFlask, FaUniversity } from "react-icons/fa";
import img1 from "../../assets/profile_photo/4.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-base-100 text-slate-300 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">About Me</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Profile Image & Quick Info Sidebar */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
                        <div className="bg-slate-900 rounded-2xl p-4 lg:p-6 border border-slate-800 shadow-xl">
                            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl">
                                <img src={img1} className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-2xl font-bold text-white text-center mb-2">Md Abu Ahsan Gilman</h2>
                            <p className="text-primary text-center font-medium mb-6">Genomics & Metagenomics Researcher</p>
                            <div className="mt-8">
                                <a href="/contact" className="btn btn-primary w-full rounded-lg font-bold">Get in Touch</a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:w-2/3 space-y-8">

                        {/* Biography / Intro */}
                        {/* Biography / Intro */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                            <p className="text-slate-400 leading-relaxed text-justify">
                                I’m Md Abu Ahsan Gilman, a researcher specializing in genomics, bioinformatics, and microbiome analysis. I am passionate about transforming biological data into meaningful insights that support advancements in health, agriculture, and environmental sustainability.
                                <br /><br />
                                My academic and research experiences span molecular biology labs, computational analysis platforms, and collaborative scientific projects.
                            </p>
                        </div>

                        {/* Research Focus */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-2xl font-bold text-white">Research Focus</h3>
                            </div>
                            <ul className="text-slate-400 leading-relaxed space-y-2">
                                <li> NGS-driven microbiome profiling, including:
                                    <ul className="ml-6 mt-1 space-y-1">
                                        <li>• 16S rRNA amplicon sequencing</li>
                                        <li>• Shotgun metagenomic sequencing</li>
                                    </ul>
                                </li>
                                <li> Whole-Genome Sequencing (WGS) of bacteria and downstream genomic analysis</li>
                                <li> Microbial community diversity, taxonomic profiling, and functional prediction</li>
                                <li> Genomic data interpretation, variant calling, and molecular characterization</li>
                                <li> Soil and agricultural microbiome research</li>
                                <li> Computational pipelines, workflow automation, and statistical analysis</li>
                            </ul>
                        </div>

                        {/* Current Studies */}
                        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Current Study</h3>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                {/* Left Side: Varsity Logo Placeholder */}
                                <div className="w-24 h-24 shrink-0 bg-white rounded-full flex items-center justify-center p-2">
                                    {/* Replace with actual logo if available */}
                                    <FaUniversity className="text-5xl text-slate-800" />
                                </div>

                                {/* Right Side: Details */}
                                <div className="text-center sm:text-left">
                                    <h4 className="text-xl font-bold text-white">Doctor of Veterinary Medicine (DVM)</h4>
                                    <p className="text-primary font-medium mt-1">
                                        <a href="https://gau.edu.bd/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            Gazipur Agricultural University (GAU), Gazipur-1706, Bangladesh
                                        </a>
                                    </p>
                                    <p className="text-slate-400 text-sm mt-1">Expected Graduation: 22 January 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Academic and Professional Goals */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-4">Academic and Professional Goals</h3>
                            <p className="text-slate-400 leading-relaxed text-justify">
                                I aim to advance my expertise in NGS-based microbiome analysis, whole-genome sequencing, and computational genomics while completing my DVM at GAU. My short-term focus is to strengthen research skills, publish impactful work, and refine both laboratory and bioinformatics competencies.
                                <br /><br />
                                Long-term, I aspire to pursue graduate studies and build a career in genomics, microbiome research, and veterinary biomedical science, contributing to solutions in animal health, antimicrobial resistance, and agricultural sustainability through data-driven science.
                            </p>
                        </div>

                        {/* Personal Interests */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-4">Personal Interests</h3>
                            <p className="text-slate-400 leading-relaxed text-justify">
                                Outside of my academic pursuits, I enjoy exploring the outdoors, engaging in community activities, or staying informed about the latest scientific advancements. I am always eager to connect with others who share my interests in research and science.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;