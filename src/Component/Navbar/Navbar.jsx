import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHeartbeat, FaSearch } from "react-icons/fa";
import logo from '../../assets/logo/amems-logo.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Detect scroll to add shadow effect on navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
      { name: "Home", href: "/" },
        { name: "About", href: "/AboutUs" },
        { name: "Our Products", href: "/OurProducts" },
        { name: "Reviews", href: "/Reviews" },
        { name: "Contact", href: "/Contacts" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                    <img
                             className="h-[220px] "
            src={logo}
                     />
                </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10 ">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className={`text-gray-700 text-[16px] font-bold hover:text-blue-600  transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="hidden md:flex items-center space-x-6">
                       
                    <button className="bg-amemsblue text-white px-6 py-2 rounded-3xl hover:bg-blue-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    Get Quote
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg rounded-b-xl">
                    <div className="px-4 pt-2 pb-6 space-y-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all duration-300">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;