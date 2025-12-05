import { FaGithub, FaExternalLinkAlt, FaMicroscope, FaCode } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Microbial Diversity Analysis",
            category: "Research",
            description: "A comprehensive study on the genetic diversity of microbial populations in veterinary samples using 16S rRNA gene sequencing.",
            tech: ["R", "Python", "Bioinformatics", "Statistical Analysis"],
            image: "https://via.placeholder.com/400x250/1e293b/38bdf8?text=Microbial+Analysis",
            github: "#",
            live: "#"
        },
        {
            id: 2,
            title: "Metagenomics Data Pipeline",
            category: "Research",
            description: "Developed an automated pipeline for processing high-throughput sequencing data, reducing analysis time by 40%.",
            tech: ["Python", "Bash", "QIIME 2", "Linux"],
            image: "https://via.placeholder.com/400x250/1e293b/36d399?text=Data+Pipeline",
            github: "#",
            live: "#"
        },
        {
            id: 3,
            title: "VetLab Management System",
            category: "Development",
            description: "A MERN stack application for managing veterinary laboratory samples, results, and patient records.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            image: "https://via.placeholder.com/400x250/1e293b/facc15?text=VetLab+System",
            github: "#",
            live: "#"
        },
        {
            id: 4,
            title: "Genomic Data Visualizer",
            category: "Development",
            description: "Interactive web tool for visualizing complex genomic datasets, helping researchers identify patterns easily.",
            tech: ["React", "D3.js", "TailwindCSS"],
            image: "https://via.placeholder.com/400x250/1e293b/f87272?text=Genomic+Viz",
            github: "#",
            live: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 text-slate-300 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">Research & Projects</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A showcase of my work in Metagenomics Research and Web Development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all group hover:-translate-y-2 duration-300 flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${project.category === 'Research' ? 'bg-emerald-500 text-slate-900' : 'bg-sky-500 text-slate-900'}`}>
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-3 bg-slate-800 rounded-full text-white hover:bg-primary transition-colors"><FaGithub size={20} /></a>
                                    <a href={project.live} className="p-3 bg-slate-800 rounded-full text-white hover:bg-primary transition-colors"><FaExternalLinkAlt size={18} /></a>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;