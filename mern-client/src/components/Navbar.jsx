import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBlog, FaTimes } from "react-icons/fa";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    // const { user } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 ${isSticky ? "bg-blue-300" : ""}`}>
            <nav className="py-4 lg:px-24 px-4">
                <div className="flex justify-between items-center text-base gap-8">
                    <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2"> 
                        <FaBlog className="inline-block" />Books
                    </Link>
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{link}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="space-x-12 hidden lg:flex items-center">
                        <button onClick={toggleMenu}><FaBars className="w-5 hover:text-blue-700" /></button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isMenuOpen ? <FaTimes className="h-5 w-5 text-black" /> : <FaBars className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-9 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <div key={path}>
                            <Link to={path} className="block text-base text-black text-white uppercase cursor-pointer">{link}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
