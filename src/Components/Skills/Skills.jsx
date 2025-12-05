import { FaCode, FaFileAlt, FaFlask, FaDna } from "react-icons/fa";
import skillsImage from "../../assets/skills/Skills.jpg";

const Skills = () => {
    const skillCategories = [
        {
            title: "Wet Lab",
            icon: <FaFlask className="text-3xl text-primary" />,
            skills: [
                "Bacterial culture and isolation",
                "Gram staining and microscopy",
                "Antibiotic susceptibility testing",
                "DNA/RNA extraction from various samples",
                "Conventional PCR",
                "Gel electrophoresis"
            ]
        },
        {
            title: "Dry Lab",
            icon: <FaDna className="text-3xl text-secondary" />,
            skills: [
                {
                    name: "NGS data analysis:",
                    subSkills: [
                        "WGS",
                        "16S rRNA Amplicon Sequencing",
                        "Shotgun Metagenomics"
                    ]
                }
            ]
        },
        {
            title: "Programming",
            icon: <FaCode className="text-3xl text-accent" />,
            skills: ["Linux Shell", "R", "Python"]
        },
        {
            title: "Technical & Research Skills",
            icon: <FaFileAlt className="text-3xl text-emerald-400" />,
            skills: [
                "Handling large-scale sequencing datasets",
                "Scientific writing and manuscript preparation",
                "Poster and conference presentation"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 text-slate-300 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">Skills</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>

                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 max-w-4xl mx-auto">
                        <p className="text-slate-400 leading-relaxed text-justify">
                            In my academic and professional journey, I have developed a broad skill set that equips me to handle a wide range of challenges effectively. These skills encompass technical proficiency, analytical capabilities, and strong project management abilities. With a focus on precision, problem-solving, and collaboration, I am well-prepared to contribute to and excel in various research and professional environments. Below is a summary of the key skills I bring to my work:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        {typeof skill === 'string' ? (
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                                <span className="text-slate-300 font-medium">{skill}</span>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                                    <span className="text-slate-300 font-medium">{skill.name}</span>
                                                </div>
                                                <div className="ml-8 flex flex-col gap-2 border-l-2 border-slate-700 pl-4 py-1">
                                                    {skill.subSkills.map((sub, subIdx) => (
                                                        <div key={subIdx} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                                                            <span className="text-slate-400 text-sm">{sub}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Image Section */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        <img
                            src={skillsImage}
                            alt="Skills Visualization"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
