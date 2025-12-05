import { FaExternalLinkAlt, FaBookOpen, FaQuoteRight } from "react-icons/fa";
import paper1 from "../../assets/research/paper1.png";
import paper2 from "../../assets/research/paper2.png";
import paper3 from "../../assets/research/paper3.jpg";
import paper4 from "../../assets/research/paper4.jpg";

const Projects = () => {
    const publications = [
        {
            id: 1,
            title: "Genomic and In Vitro Analysis of Pediococcus pentosaceus MBBL4 Implicated Its Therapeutic Use Against Mastitis Pathogens and as a Potential Probiotic",
            journal: "Probiotics and Antimicrobial Proteins",
            description: "Pediococcus pentosaceus has the potential to be used as probiotics and biologics amid rising trends of global antimicrobial resistance (AMR) and non-communicable diseases. This study analyzed the genome of P. pentosaceus MBBL4, isolated from healthy cow milk, to assess its probiotic properties and antimicrobial efficacy.",
            doi: "https://doi.org/10.1007/s12602-025-10484-8",
            image: paper1
        },
        {
            id: 2,
            title: "Genomic insights into multidrug resistant Escherichia coli from bovine mastitis in Bangladesh",
            journal: "BMC Microbiology",
            description: "Mastitis is an inflammatory condition that leads to pathological changes in the mammary glandular tissue. It incurs substantial economic losses in dairy industry by adversely affecting animal health, compromising milk quality, and leading to substantial financial losses for dairy farmers.",
            doi: "https://doi.org/10.1186/s12866-025-04514-2",
            image: paper2
        },
        {
            id: 3,
            title: "Microbiome diversity in soils of the agro-ecological zones of Bangladesh",
            journal: "Microbiology Resource Announcements",
            description: "Soil microbiome plays an important role in maintaining soil health, plant productivity, and soil ecosystem services. Bangladesh heavily relies on intensive agriculture for food security. This study investigates the microbiome key to nutrient cycling and soil productivity.",
            doi: "https://doi.org/10.1128/mra.01237-24",
            image: paper3
        },
        {
            id: 4,
            title: "Mapping of urban garden soil microbiomes in Bangladesh",
            journal: "Microbiology Resource Announcements",
            description: "Urbanization alters land use and soil conditions, influencing microbial diversity and ecosystem functions. Soil microorganisms are essential for nutrient cycling and plant health but are increasingly threatened by urban pollution, waste, and farming practices.",
            doi: "https://doi.org/10.1128/mra.00375-25",
            image: paper4
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 text-slate-300 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">Research & Publications</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Selected publications focusing on Metagenomics, Microbiome Analysis, and Veterinary Science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {publications.map((item) => (
                        <div key={item.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all group hover:-translate-y-2 duration-300 flex flex-col shadow-lg">
                            <div className="relative h-56 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700 flex items-center gap-2">
                                        <FaBookOpen className="text-primary" />
                                        {item.journal}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <div className="flex-grow">
                                    <div className="flex gap-2 mb-3">
                                        <FaQuoteRight className="text-slate-600 text-sm shrink-0 mt-1" />
                                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-800">
                                    <a
                                        href={item.doi}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary w-full gap-2 rounded-lg font-bold group-hover:bg-primary group-hover:text-black transition-all"
                                    >
                                        <span>Read Publication</span>
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>
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