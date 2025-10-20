import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHeadset } from "react-icons/fa";
import logo from '../../assets/logo/amems-logo.png';
import QuoteModal from '../QuoteComponent/QuoteComponent';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const mobileButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMobileMenuOpen && 
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target) &&
                mobileButtonRef.current &&
                !mobileButtonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/AboutUs" },
        { name: "Our Products", href: "/OurProducts" },
        { name: "Reviews", href: "/Reviews" },
        { name: "Contact", href: "/Contacts" }
    ];

    const openQuoteModal = () => {
        setQuoteModalOpen(true);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    const closeQuoteModal = () => {
        setQuoteModalOpen(false);
    };

    return (
        <>  
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white shadow-lg py-2' 
                    : 'bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md py-4'
            } w-full overflow-x-hidden`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="group flex-shrink-0">
                            <div className="flex items-center space-x-2 transition-transform duration-300 transform group-hover:scale-105">
                                <img
                                    className="h-14 max-h-14 w-auto object-contain"
                                    src={logo}
                                    alt="AMEMS Logo"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden  md:flex items-center flex-wrap space-x-4 min-w-0">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    to={link.href} 
                                    className={`relative px-2 py-1 font-bold text-[18px] transition-all duration-300 overflow-hidden group min-w-0 ${
                                        activeLink === link.href 
                                            ? 'text-blue-600' 
                                            : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                    onClick={() => setActiveLink(link.href)}
                                >
                                    <span>{link.name}</span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform transition-all duration-300 ${
                                        activeLink === link.href 
                                            ? 'scale-x-100' 
                                            : 'scale-x-0 group-hover:scale-x-100'
                                    }`}></span>
                                </Link>
                            ))}
                        </div>

                        {/* Right side actions */}
                        <div className="hidden md:flex items-center space-x-6 min-w-0">
                            <button 
                                onClick={openQuoteModal}
                                className="ml-4 px-6 py-2 bg-back hover:bg-indigo-800 text-white font-medium rounded-full text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md min-w-0"
                            >
                                Get Quote
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                ref={mobileButtonRef}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300"
                                aria-label="Toggle menu"
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
                <div 
                    ref={mobileMenuRef}
                    className={`md:hidden bg-white rounded-b-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-6 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                                    activeLink === link.href 
                                        ? 'bg-blue-50 text-blue-600 font-medium' 
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                }`}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 pb-2">
                            <button 
                                onClick={openQuoteModal}
                                className="w-full bg-back text-white px-4 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-200/40 transition-all duration-300"
                            >
                                <FaHeadset className="mr-2" />
                                <span>Get Quote</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Render the QuoteModal component */}
            {quoteModalOpen && (
                <QuoteModal 
                    isOpen={quoteModalOpen}
                    onClose={closeQuoteModal}
                />
            )}
        </>
    );
};

export default Navbar;
