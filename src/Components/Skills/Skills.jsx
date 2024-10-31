import { Link } from "react-router-dom";


const Skills = () => {
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content"> 
                    <div className="max-w-md">
                        <br/><br/><br/><br/><br/>
                        <h1 className="text-5xl text-center font-bold">Skills</h1>
                        <br />
                        {/* <h1 className=" text-3xl text-start">A Passion for Veterinary Medicine and Metagenomics:</h1> */}
                        <p className="text-justify">
                        In my academic and professional journey, I have developed a broad skill set that equips me to handle a wide range of challenges effectively. These skills encompass technical proficiency, analytical capabilities, and strong project management abilities. With a focus on precision, problem-solving, and collaboration, I am well-prepared to contribute to and excel in various research and professional environments. Below is a summary of the key skills I bring to my work:
                        </p>
                        <br />
                        
                        <h1 className=" text-3xl text-start">Technical Skills:</h1>                        
                        
                        <ul className="text-justify list-disc list-inside">
                            <li>Metagenomic Sequencing</li>
                            <li>Bioinformatics Analysis</li>
                            <li>Data Analysis and Visualization</li>
                        </ul>
                        <br />
                        
                        <h1 className=" text-3xl text-start">Programming Language:</h1>                        
                        <ul className="text-justify list-disc list-inside">
                            <li>R</li>
                            <li>Pythion</li>
                            <li>Javascript</li>
                        </ul>
                        <br />
                        
                        <h1 className=" text-3xl text-start">Adobe Skills:</h1>                        
                        <ul className="text-justify list-disc list-inside">
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                        </ul>
                        <br />
                        
                        <h1 className=" text-3xl text-start">Microsoft Skills:</h1>                        
                        <ul className="text-justify list-disc list-inside">
                            <li>Microsoft Word</li>
                            <li>Microsoft Excel</li>
                            <li>Microsoft PowerPoint</li>
                        </ul>
                        {/* <br />
                        
                        <h1 className=" text-3xl text-start">Skills:</h1>                        
                        <p className="text-justify">
                            Starting
                        </p> */}
                    </div>
                </div>
            </div>
    );
};

export default Skills;