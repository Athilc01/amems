import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AMEMS Info */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-200">AMEMS</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading pharmaceutical company dedicated to improving lives through innovative healthcare solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white pb-1">Home</span>
                </a>
              </li>
              <li>
                <a href="/AboutUs" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white pb-1">About Us</span>
                </a>
              </li>
              <li>
                <a href="/OurProducts" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white pb-1">Our Products</span>
                </a>
              </li>
              <li>
                <a href="/Reviews" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white pb-1">Reviews</span>
                </a>
              </li>
              <li>
                <a href="/Contacts" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="border-b border-transparent hover:border-white pb-1">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-200">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 text-blue-300 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">Las Vegas, USA 9576 Trattoria Street, Las Vegas, 89178, Nevada, USA</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 text-blue-300 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">246-123, Al Habtoor Industrial Area, Al Qusais, Ind. Area 3, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-300 flex-shrink-0" size={16} />
                <a href="tel:+17025953772" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">+1-702-595-3772 (USA)</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-300 flex-shrink-0" size={16} />
                <a href="tel:+971562272323" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">+971 56 2272323 (UAE)</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-300 flex-shrink-0" size={16} />
                <a href="mailto:info@amems.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">info@amems.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-blue-800 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AMEMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;