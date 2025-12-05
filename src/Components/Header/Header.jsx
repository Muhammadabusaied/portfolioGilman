import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About me", path: "/aboutme" },
        { name: "Skills", path: "/skills" },
        { name: "Research", path: "/research" },
        { name: "Achievements", path: "/achievements" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-base-100/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-slate-800">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => isActive ? "text-primary font-bold" : "text-slate-300 hover:text-white"}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl sm:text-2xl font-heading font-bold text-white whitespace-nowrap">
                        <span className="text-primary hover:text-white transition-colors">MD Abu Ahsan Gilman</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? "text-primary font-bold bg-slate-800/50" : "text-slate-300 hover:text-white hover:bg-slate-800/30"}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <Link to="/contact" className="btn btn-primary btn-sm rounded-full px-6">Hire Me</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
