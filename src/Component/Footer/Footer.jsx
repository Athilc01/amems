import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amemsblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Flex layout for justify-between */}
        <div className="flex flex-col md:flex-row justify-between gap-8 flex-wrap">
          {/* AMEMS Info */}
          <div className="md:max-w-[25%]">
            <h3 className="text-lg font-semibold mb-4">AMEMS</h3>
            <p className="text-sm text-gray-300 mb-4">
              Leading pharmaceutical company dedicated to improving lives through innovative healthcare solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:max-w-[25%]">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Our Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className=" md:max-w-[40%]">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>246-123, Al Habtoor Industrial Area, Al Qusais, Ind. Area 3, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>+971 56 2272323</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@amems.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Amems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
