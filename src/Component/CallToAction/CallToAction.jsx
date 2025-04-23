import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const CallToAction = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16">
      <div className="relative flex items-center justify-center">
        {/* Taller rounded background */}
        <div className="absolute inset-0 bg-blue-100 rounded-full"></div>

        {/* Content with animation */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 text-center flex flex-col items-center justify-center w-full max-w-md px-4 py-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            New to Amems?
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            Contact Us for Assistance
          </p>
          <a 
            href="tel:+97156227323" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            +971 56 2272323
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
