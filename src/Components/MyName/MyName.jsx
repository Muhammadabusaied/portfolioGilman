import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const MyName = () => {
    return (
        <div className="p-8 w-full flex justify-center items-center bg-base-200 text-center">
            <h1 className="text-3xl font-bold">
                <br /><br /><br />
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi there,<br>")
                            .pauseFor(100)
                            .typeString(" I'm MD Abu Ahsan Gilman.")
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
    );
};

export default MyName;
