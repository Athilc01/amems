import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import cta from '../../../public/images/cta.png'

const CallToAction = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500 opacity-20"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-purple-500 opacity-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 py-12 md:py-16">
          {/* Text Content */}
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Quality Medicines Fast?
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100 mb-6">
              Get in touch today and experience premium service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Phone Button */}
              <a 
                href="tel:+97156227323" 
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
              >
                <Phone size={20} />
                <span>+971 56 2272323</span>
              </a>
              
              {/* Contact Us Button */}
              <a 
                href="/Contacts" 
                className="inline-flex items-center justify-center gap-2 bg-indigo-800 hover:bg-indigo-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
              >
                <span>Contact Us</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Right side decorative element */}
          <div className="hidden md:block ">
          <img src={cta} alt="" className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;