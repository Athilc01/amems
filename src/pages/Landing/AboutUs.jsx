import React, { useEffect } from "react";
import mission from '../../../public/images/missionimg.jpg';
import vision from '../../../public/images/visionimg.jpg';
import background from '../../../public/images/background.jpeg';
import med1 from '../../assets/images/AMOCONOZOLE.png';
import medical from '../../../public/images/custservice.png';
import { motion } from "framer-motion";

const App = () => {
  const productCategories = [
    {
      icon: "fas fa-heartbeat",
      title: "Cardiovascular",
      description: "Advanced treatments for heart conditions and vascular disorders.",
      color: "bg-red-50 text-red-500"
    },
    {
      icon: "fas fa-brain",
      title: "Neurology",
      description: "AMEMS solutions for neurological disorders and conditions.",
      color: "bg-purple-50 text-purple-500"
    },
    {
      icon: "fas fa-pills",
      title: "Pharmaceuticals",
      description: "High-quality medications developed with the latest research.",
      color: "bg-blue-50 text-blue-500"
    },
    {
      icon: "fas fa-microscope",
      title: "Diagnostics",
      description: "Cutting-edge diagnostic tools for accurate medical assessments.",
      color: "bg-green-50 text-green-500"
    }
  ];

  // Set up intersection observer for animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section - Improved for large screens */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xNyAxN2MwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        {/* Adjusted container for better scaling on large screens */}
        <div className="container mx-auto py-40  px-6 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-nulshock text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8">About Us</h1>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
            At AMEMS, we are dedicated to advancing health and well-being through high-quality, science-driven medicinal products. Our mission is to provide safe, effective, and AMEMS healthcare solutions that make a real difference in people's lives.
            </p>
           
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Vision & Mission Section - Improved for large screens */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 px-4 overflow-hidden relative">
  {/* Enhanced Background SVG with wider dimensions */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0fdf4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.6" />
        </linearGradient>
        
        {/* Circle pattern */}
        <pattern id="circlePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1.5" fill="#3b82f6" opacity="0.2" />
        </pattern>
        
        {/* DNA Helix Symbol */}
        <symbol id="dnaHelix" viewBox="0 0 100 300">
          <path d="M30,0 Q50,30 70,0 Q90,30 70,60 Q50,90 30,60 Q10,30 30,0" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.3" />
          <path d="M30,80 Q50,110 70,80 Q90,110 70,140 Q50,170 30,140 Q10,110 30,80" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.3" />
          <path d="M30,160 Q50,190 70,160 Q90,190 70,220 Q50,250 30,220 Q10,190 30,160" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.3" />
          <path d="M30,240 Q50,270 70,240 Q90,270 70,300 Q50,330 30,300 Q10,270 30,240" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.3" />
          
          {/* Connecting lines */}
          <line x1="30" y1="30" x2="70" y2="30" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
          <line x1="30" y1="110" x2="70" y2="110" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
          <line x1="30" y1="190" x2="70" y2="190" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
          <line x1="30" y1="270" x2="70" y2="270" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
        </symbol>
        
        {/* Molecule Symbol */}
        <symbol id="molecule" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="15" fill="#bae6fd" opacity="0.6" />
          <circle cx="160" cy="100" r="10" fill="#a7f3d0" opacity="0.6" />
          <circle cx="40" cy="100" r="10" fill="#a7f3d0" opacity="0.6" />
          <circle cx="100" cy="160" r="10" fill="#a7f3d0" opacity="0.6" />
          <circle cx="100" cy="40" r="10" fill="#a7f3d0" opacity="0.6" />
          
          <line x1="115" y1="100" x2="150" y2="100" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" />
          <line x1="50" y1="100" x2="85" y2="100" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" />
          <line x1="100" y1="115" x2="100" y2="150" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" />
          <line x1="100" y1="50" x2="100" y2="85" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" />
        </symbol>
        
        {/* Hexagon Grid Symbol */}
        <symbol id="hexGrid" viewBox="0 0 300 200">
          <path d="M50,25 L75,0 L100,25 L100,75 L75,100 L50,75 Z" fill="#86efac" stroke="#86efac" strokeWidth="1" opacity="0.3" />
          <path d="M100,25 L125,0 L150,25 L150,75 L125,100 L100,75 Z" fill="#86efac" stroke="#86efac" strokeWidth="1" opacity="0.3" />
          <path d="M150,25 L175,0 L200,25 L200,75 L175,100 L150,75 Z" fill="#86efac" stroke="#86efac" strokeWidth="1" opacity="0.3" />
          <path d="M75,100 L100,75 L125,100 L125,150 L100,175 L75,150 Z" fill="#86efac" stroke="#86efac" strokeWidth="1" opacity="0.3" />
          <path d="M125,100 L150,75 L175,100 L175,150 L150,175 L125,150 Z" fill="#86efac" stroke="#86efac" strokeWidth="1" opacity="0.3" />
        </symbol>
      </defs>
      
      {/* Main background */}
      <rect width="100%" height="100%" fill="url(#bgGradient)" />
      <rect width="100%" height="100%" fill="url(#circlePattern)" />
      
      {/* DNA Helices - Wider spacing */}
      <use href="#dnaHelix" x="50" y="100" width="100" height="300" />
      <use href="#dnaHelix" x="1290" y="100" width="100" height="300" />
      
      {/* Additional molecules for wider layout */}
      <use href="#molecule" x="200" y="50" width="200" height="200" opacity="0.7" />
      <use href="#molecule" x="600" y="300" width="200" height="200" opacity="0.7" />
      <use href="#molecule" x="300" y="500" width="200" height="200" opacity="0.7" />
      <use href="#molecule" x="1000" y="100" width="200" height="200" opacity="0.7" />
      <use href="#molecule" x="900" y="600" width="200" height="200" opacity="0.7" />
      
      {/* Hexagon Grids - Added more to fill space */}
      <use href="#hexGrid" x="400" y="100" width="300" height="200" opacity="0.5" />
      <use href="#hexGrid" x="100" y="400" width="300" height="200" opacity="0.5" />
      <use href="#hexGrid" x="800" y="200" width="300" height="200" opacity="0.5" />
      <use href="#hexGrid" x="600" y="500" width="300" height="200" opacity="0.5" />
      <use href="#hexGrid" x="1100" y="400" width="300" height="200" opacity="0.5" />
      
      {/* More floating circles to fill wider space */}
      <circle cx="250" cy="200" r="5" fill="#3b82f6" opacity="0.3" />
      <circle cx="700" cy="150" r="7" fill="#3b82f6" opacity="0.3" />
      <circle cx="800" cy="450" r="4" fill="#3b82f6" opacity="0.3" />
      <circle cx="150" cy="650" r="6" fill="#3b82f6" opacity="0.3" />
      <circle cx="450" cy="380" r="8" fill="#3b82f6" opacity="0.3" />
      <circle cx="1200" cy="250" r="6" fill="#3b82f6" opacity="0.3" />
      <circle cx="1050" cy="500" r="5" fill="#3b82f6" opacity="0.3" />
      <circle cx="950" cy="300" r="7" fill="#3b82f6" opacity="0.3" />
      <circle cx="1300" cy="550" r="4" fill="#3b82f6" opacity="0.3" />
    </svg>
  </div>
  <div className="mb-10">
  <p className="text-justify text-black font-extrabold text-lg sm:text-xl xl:text-2xl max-w-3xl xl:max-w-5xl mx-auto">
            At AMEMS, we are revolutionizing healthcare in the Middle East and US by integrating cutting-edge medical technology with professional
            expertise.
            We offer a wide range of FDA-approved pharmaceutical products and services that enhance patient care and improve outcomes.
            Global manufacturing presence with 4 plants in the US, Mexico, India, and Afghanistan, enabling efficient worldwide supply.
            Upcoming distribution agreements planned with Germany, Russia, and Macedonia to expand market reach.
            Focused on pharmaceuticals facing international shortages, especially those not available through domestic distributors or suppliers.
            Dedicated to making anti-cancer medicines accessible, particularly in low-income countries with limited government budgets and
            healthcare financing.
            Committed to bridging the gap in global pharmaceutical availability through strategic distribution and partnerships.
            </p>
  </div>

  <div className="container mx-auto max-w-7xl xl:max-w-8xl relative z-10">
    <div className="text-center mb-16">
      <motion.span 
        className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        WHO WE ARE
      </motion.span>
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Our Mission & Vision
      </motion.h2>
      <motion.div 
        className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      ></motion.div>
      <motion.p 
        className="text-gray-600 max-w-3xl xl:max-w-4xl mx-auto text-lg xl:text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Driving pharmaceutical excellence in the Middle East with AMEMS and expertise
      </motion.p>
    </div>
    
    {/* Mission Section - Styled like the image with vertical line */}
    <div className="relative">
      {/* Vertical dotted line */}
      <div className="absolute left-1/2 top-0 bottom-0 border-l border-blue-400 border-dashed" style={{ transform: 'translateX(-50%)' }}></div>
      
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h3>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed italic">
          At AMEMS, we are dedicated to transforming the pharmaceutical landscape in the Middle East by leveraging advanced medical technologies and global expertise. Guided by innovation and professionalism, we aim to deliver life-saving treatments and improve patient outcomes across the region.
        </p>
      </div>
      
      {/* Vision Section - Styled like the image */}
      <div className="text-center relative z-10">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h3>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed italic">
          We strive to be the premier pharmaceutical provider in the Middle East, setting new benchmarks in healthcare excellence. Backed by a diverse team of experts—including cardiologists, anesthesiologists, general practitioners, pediatricians, surgeons, nephrologists, urologists, neurologists, oncologists, and more—we bridge the gap between technological advancement and real-world medical practice to elevate patient care.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Products Section - Improved for large screens */}
      <section className="py-20 px-4 sm:px-8 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${background})` }}>
  {/* Animated background elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90 z-0"></div>
  <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
  
  <div className="container mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-8xl relative z-10">
    <div className="text-center mb-12 sm:mb-16 animate-on-scroll fade-in-up">
      <div className="inline-block py-1 px-3 rounded-full bg-blue-500/20 backdrop-blur-sm mb-3">
        <h5 className="text-blue-200 font-medium uppercase tracking-widest text-sm">Advanced Solutions</h5>
      </div>
      <h2 className="font-nulshock text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
        AMEMS <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">Medical Products</span>
      </h2>
      <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
    </div>

    <p className="text-blue-100 mb-12 leading-relaxed text-lg sm:text-xl xl:text-2xl max-w-4xl xl:max-w-5xl mx-auto text-center animate-on-scroll fade-in-up">
      We address the high prevalence of cardiovascular disorders while tackling
      other serious health challenges with <span className="font-semibold text-white">innovative pharmaceutical solutions</span> developed 
      using cutting-edge technology that meet the highest international standards.
    </p>

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {productCategories.map((product, index) => (
          <div 
            key={index} 
            className="animate-on-scroll fade-in-up group bg-white/10 backdrop-blur-lg p-6 sm:p-7 xl:p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 hover:border-blue-300/30 hover:bg-white/15"
            style={{ transitionDelay: `${(index * 0.1)}s` }}
          >
            <div className={`${product.color} w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <i className={`${product.icon} text-2xl sm:text-3xl`}></i>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl xl:text-2xl mb-3 sm:mb-4 text-white">{product.title}</h3>
            <p className="text-blue-100 text-base sm:text-lg">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="relative lg:order-2 animate-on-scroll fade-in-right">
        <div className="absolute -top-12 -left-12 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl z-0"></div>
        
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-2 sm:p-3 rounded-2xl shadow-2xl overflow-hidden group">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-16 h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          <div className="absolute bottom-0 right-0 w-16 h-2 bg-gradient-to-l from-cyan-400 to-blue-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-16 bg-gradient-to-t from-cyan-400 to-blue-500"></div>
          
          {/* Main image with fancy effects */}
          <div className="relative z-10 overflow-hidden rounded-xl shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            
            <img
              src={med1}
              alt="AMEMS Medical products and pharmaceuticals"
              className="w-full transition-all  duration-700 group-hover:scale-105 "
              style={{ height: "450px", maxHeight: "600px" }}
            />
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent h-1/3 z-20"></div>
          </div>
          
          {/* Interactive label */}
         
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Customer Service Section - Improved for large screens */}
      <div className="items-center container mx-auto px-4 py-12 sm:py-16 items-center xl:py-24 max-w-7xl xl:max-w-8xl">
        <div className="flex flex-col items-center md:flex-col gap-8 xl:gap-16 mb-16 xl:mb-32">
          <div className="w-full bg-transparent md:w-3/4 animate-on-scroll fade-in-left">
            <img 
              src={medical} 
              alt="Healthcare professionals in lab coats" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
          </div>

          <div className="text-center items-center text-justify w-full md:w-[900px] animate-on-scroll fade-in-right flex flex-col justify-center">
            <h2 className="font-nulshock text-4xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">Customer Service</h2>
              <p className="text-lg">We will ensure that the products will reach your organization in time according to our contracts within a timeframe consistent with prescribed orders.
              <br />We will provide education and training to our client and customers and their caregivers in accordance with the prescription and the language understood by your members of staff.
          
              <br />All products we sell and market are in complete compliance with US FDA (Food and Drug Administration).
              </p>
            <a href="/contacts">
              <button className=" bg-blue-700 mt-5 items-center  hover:bg-blue-800 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 xl:py-4 xl:px-10 rounded-md transition duration-300 text-sm sm:text-base xl:text-lg">
                Contact Us Now
              </button>
            </a>
          </div>
        </div>

        <div className="mb-12 animate-on-scroll fade-in-up">
          <h2 className="font-nulshock text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-black mb-4">Anti-Bribery Statement</h2>
          <p className="text-justify  text-gray-600  sm:text-lg  xl:text-xl max-w-6xl xl:text-center max-w-7xl">
            It is AMEMS policy to conduct all of our business in an honest and ethical manner. We take a zero-tolerance approach to bribery and corruption, and we are committed to acting professionally, fairly and with integrity in all our business dealings and relationships. We expect all individuals working for us or on our behalf in any capacity to uphold the spirit of our policy.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        /* Base animation styles */
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        
        .animate-visible {
          opacity: 1;
        }
        
        /* Animation variations */
        .fade-in-up {
          transform: translateY(40px);
        }
        
        .fade-in-up.animate-visible {
          transform: translateY(0);
        }
        
        .fade-in-down {
          transform: translateY(-40px);
        }
        
        .fade-in-down.animate-visible {
          transform: translateY(0);
        }
        
        .fade-in-left {
          transform: translateX(-40px);
        }
        
        .fade-in-left.animate-visible {
          transform: translateX(0);
        }
        
        .fade-in-right {
          transform: translateX(40px);
        }
        
        .fade-in-right.animate-visible {
          transform: translateX(0);
        }

        /* Custom media query for very large screens */
        @media (min-width: 2000px) {
          .container.max-w-8xl {
            max-width: 1680px;
          }
        }
      `}</style>
    </>
  );
};

export default App;