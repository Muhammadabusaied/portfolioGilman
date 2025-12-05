import { FaGraduationCap, FaCode, FaFlask, FaUniversity, FaMicroscope, FaDna } from "react-icons/fa";
import img1 from "../../assets/profile_photo/1.jpg";
import img2 from "../../assets/profile_photo/2.jpg";
import img3 from "../../assets/profile_photo/3.jpg";
import img4 from "../../assets/profile_photo/4.jpg";

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
                    <div className="w-full lg:w-1/3 sticky top-24">
                        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
                            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl">
                                <div className="carousel w-full h-full rounded-xl">
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <img src={img1} className="w-full h-full object-cover" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide4" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❮</a>
                                            <a href="#slide2" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide2" className="carousel-item relative w-full">
                                        <img src={img2} className="w-full h-full object-cover" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide1" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❮</a>
                                            <a href="#slide3" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide3" className="carousel-item relative w-full">
                                        <img src={img3} className="w-full h-full object-cover" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide2" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❮</a>
                                            <a href="#slide4" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide4" className="carousel-item relative w-full">
                                        <img src={img4} className="w-full h-full object-cover" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide3" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❮</a>
                                            <a href="#slide1" className="btn btn-circle btn-xs sm:btn-sm btn-ghost hover:bg-slate-800/50 text-white">❯</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-white text-center mb-2">MD Abu Ahsan Gilman</h2>
                            <p className="text-primary text-center font-medium mb-6">DVM Student & Researcher</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <FaGraduationCap className="text-xl text-secondary" />
                                    <span>DVM Student, BSMRAU</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <FaFlask className="text-xl text-secondary" />
                                    <span>Metagenomics Researcher</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="/contact" className="btn btn-primary w-full rounded-lg font-bold">Get in Touch</a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:w-2/3 space-y-8">

                        {/* Biography / Intro */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-4">Biography</h3>
                            <p className="text-slate-400 leading-relaxed text-justify">
                                I'm MD Abu Ahsan Gilman. I am a dedicated student of Doctor of Veterinary Medicine (DVM) at Bangabandhu Sheikh Mujibur Rahman Agricultural University, with a deep passion for the rapidly evolving field of metagenomics. My academic journey has allowed me to develop a solid foundation in veterinary science, while my research interests have expanded into the intersection of animal health, microbiology, and cutting-edge genomic technologies.
                            </p>
                        </div>

                        {/* Research Focus */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <div className="flex items-center gap-3 mb-4">
                                <FaMicroscope className="text-2xl text-primary" />
                                <h3 className="text-2xl font-bold text-white">Research Focus</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-justify mb-4">
                                In my current research, I focus on metagenomics, a field that explores the genetic material of microbial communities within specific environments, without the need for traditional culturing methods. This is particularly important in veterinary medicine, as the health of animals is closely tied to the microbiomes they host. By analyzing the genetic diversity of microbial populations, I aim to uncover insights into how these organisms influence animal health, disease resistance, and overall well-being.
                            </p>
                        </div>

                        {/* Technological Approach */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <div className="flex items-center gap-3 mb-4">
                                <FaDna className="text-2xl text-secondary" />
                                <h3 className="text-2xl font-bold text-white">Technological Approach</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-justify">
                                My research primarily involves the use of high-throughput sequencing technologies, bioinformatics tools, and advanced statistical methods to analyze microbial communities. One of the key aspects of my work is the investigation of microbial diversity through 16S rRNA gene sequencing, a method widely used to study bacterial taxonomy and phylogeny. This technique allows me to identify and characterize microbial species present in various samples, contributing to a better understanding of their roles in different biological processes.
                            </p>
                        </div>

                        {/* Current Studies */}
                        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Current Studies</h3>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                {/* Left Side: Varsity Logo Placeholder */}
                                <div className="w-24 h-24 shrink-0 bg-white rounded-full flex items-center justify-center p-2">
                                    {/* Replace with actual logo if available */}
                                    <FaUniversity className="text-5xl text-slate-800" />
                                </div>

                                {/* Right Side: Details */}
                                <div className="text-center sm:text-left">
                                    <h4 className="text-xl font-bold text-white">Doctor of Veterinary Medicine (DVM)</h4>
                                    <p className="text-primary font-medium mt-1">Bangabandhu Sheikh Mujibur Rahman Agricultural University</p>
                                </div>
                            </div>
                        </div>

                        {/* Academic and Professional Goals */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-4">Academic and Professional Goals</h3>
                            <p className="text-slate-400 leading-relaxed text-justify">
                                My ultimate goal is to become an expert researcher in the field of metagenomics. I aspire to deepen my knowledge, conduct impactful research, and contribute valuable insights to the scientific community. I am committed to pursuing excellence in my research endeavors and exploring new frontiers in the study of microbial communities.
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