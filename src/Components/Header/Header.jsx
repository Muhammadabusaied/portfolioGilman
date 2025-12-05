import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

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
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="navbar-start w-full lg:w-auto flex justify-between items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl sm:text-2xl font-heading font-bold text-white whitespace-nowrap p-0">
                        <img src={logo} alt="Md Abu Ahsan Gilman" className="h-12 w-auto" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="btn btn-ghost lg:hidden text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`absolute top-full left-0 right-0 bg-base-100 border-b border-slate-800 shadow-xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="menu menu-sm p-4 w-full text-center">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-slate-800 last:border-none">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => `block py-3 ${isActive ? "text-primary font-bold" : "text-slate-300 hover:text-white"}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
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
