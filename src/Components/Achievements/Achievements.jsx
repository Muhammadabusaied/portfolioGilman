import React from 'react';
import { FaCalendarAlt, FaAward, FaMicrophoneAlt } from 'react-icons/fa';
import gnobbPoster from "../../assets/achievements/gnobb_poster.jpg";
import reviewCert from "../../assets/achievements/review_certificate.jpg";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Mapping Soil Microbiomes of Bangladesh",
            event: "GNOBB 6th International Conference of Biotechnology on Health and Agriculture",
            type: "Poster Presentation",
            date: "September 26–27, 2025",
            image: gnobbPoster,
            icon: <FaMicrophoneAlt />
        },
        {
            id: 2,
            title: "Peer Reviewer - Open Veterinary Journal",
            event: "Reviewed one manuscript for the journal as part of the peer-review process.",
            type: "Certificate of Appreciation",
            date: "November 30, 2025",
            image: reviewCert,
            icon: <FaAward />
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 text-slate-300 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">Achievements</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Highlights of my academic contributions, conference presentations, and professional recognitions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {achievements.map((item) => (
                        <div key={item.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all group hover:-translate-y-2 duration-300 flex flex-col shadow-xl">
                            <div className="relative h-64 overflow-hidden bg-slate-800">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-slate-700">
                                    {item.type}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    {item.icon}
                                    <span className="font-bold tracking-wide text-sm uppercase">{item.type}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 mb-4 flex-grow font-medium">
                                    {item.event}
                                </p>
                                <div className="pt-6 border-t border-slate-800 mt-auto flex items-center text-slate-500 text-sm">
                                    <FaCalendarAlt className="mr-2" />
                                    {item.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
