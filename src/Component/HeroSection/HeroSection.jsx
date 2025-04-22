import React, { useState } from "react";
import logo from '../../assets/logo/pharma.png'
import doctor from '../../../public/images/DocProduct-1.png'


const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className=" bg-white">
      {/* Navigation Bar */}
     
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-12 mt-20 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
         

       <div className="">
       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-Satoshi">
            American Middle Eastern{" "} 
            
            <span className="relative inline-block ">
              <span className="bg-blue-100 absolute inset-0 rounded-full transform -rotate-3"></span>
              <span className="relative">Drug Store</span>
            </span>{" "}
          </h1>
          <p className=" text-2xl"> Revolutionizing Healthcare in the Middle East</p>

       </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-amemsblue text-white px-6 py-3 rounded-3xl hover:bg-blue-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Book Now
            </button>
            {/* <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Learn more
            </button> */}
          </div>
        </div>

        {/* Right Column */}
        <div className=" md:w-1/2  ">
          <div className="  overflow-hidden ">
            <img
              src={logo}
              alt="Doctor"
              className=" "
            />


          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
