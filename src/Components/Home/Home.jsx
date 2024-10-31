import { Link } from "react-router-dom";
import pic from "../../assets/pic1.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-2/5 h-full lg:h-screen">
                <img src={pic} className="w-full h-full object-cover lg:rounded-r-lg" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-3/5 lg:ml-auto h-full lg:h-screen  flex justify-center items-center">
                <div className="p-8 w-full h-full bg-base-200 text-center">
                    <h1 className="text-3xl font-bold">
                        <br /><br /><br />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi there,<br>")
                                    .pauseFor(100)
                                    .typeString(" I'm Ahsan Gilman.")
                                    .start();
                            }}
                        />
                    </h1>
                    {/* <p className="py-6">
                        If you want to hire a MERN stack web developer, please read <Link to='/aboutme'>About Me</Link> and visit my <Link to='/projects'>projects</Link>, and <Link to='/contact'>contact me</Link> if you are satisfied.
                    </p>
                    <Link to='/aboutme'>
                        <button className="btn btn-primary">About Me</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
