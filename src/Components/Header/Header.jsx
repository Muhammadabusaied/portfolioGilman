import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="aboutme">About Me</Link></li>
        <li><Link to="skills">Skills</Link></li>
        {/* <li><Link to="projects">Blogs</Link></li> */}
        <li><Link to="contact">Contact</Link></li>
    </>

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="navbar bg-base-300 rounded-full max-w-screen-lg mx-auto my-2 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-full h-full object-cover" alt="Ahsan Gilman" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Resume ⬇️</a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
