import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from '../../assets/logo/pharma.png';
import doctor from '../../../public/images/DocProduct-1.png';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-8 py-12 mt-20 flex flex-col md:flex-row items-center"
      >
        {/* Left Column */}
        <motion.div 
          variants={fadeIn}
          className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0"
        >
          <div className="">
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-Satoshi"
            >
              American Middle Eastern{" "} 
              
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="bg-blue-100 absolute inset-0 rounded-full"
                  animate={{ rotate: [-3, 0, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
                <span className="relative">Drug Store</span>
              </motion.span>{" "}
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-2xl"
            > 
              Revolutionizing Healthcare in the Middle East
            </motion.p>
          </div>

          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.button 
              variants={buttonAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amemsblue text-white px-6 py-3 rounded-3xl hover:bg-blue-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          variants={fadeIn}
          className="md:w-1/2"
        >
          <motion.div 
            className="overflow-hidden"
            variants={imageAnimation}
            whileHover={floatingAnimation.animate}
          >
            <motion.img
              src={logo}
              alt="Doctor"
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;