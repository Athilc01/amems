import { useState, useEffect, useRef } from "react";
import doctor from '../../../public/images/doctor.png';
import QuoteModal from "../QuoteComponent/QuoteComponent";

export default function HealthcareBanner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const doctorRef = useRef(null);
  const taglineRef = useRef(null);
  const bulletPointsRef = useRef(null);
  const contactRef = useRef(null);
  const buttonRef = useRef(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false); // State for the quote modal

  const openQuoteModal = () => {
    setQuoteModalOpen(true);
    // Close the mobile menu if it's open
    if (typeof isMobileMenuOpen !== 'undefined' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  useEffect(() => {
    // Import GSAP and ScrollTrigger dynamically to avoid SSR issues
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;
      
      // Register the ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Create a timeline for the banner animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%", // Animation starts when the top of the banner is 80% from the top of viewport
          end: "bottom 20%", // Animation ends when the bottom of the banner is 20% from the top of viewport
          toggleActions: "play none none reverse", // play on enter, reverse on leave
        }
      });

      // Animate the AMEMS title
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
        0
      );
      
      // Animate the doctor image
      tl.fromTo(doctorRef.current, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, 
        0.3
      );
      
      // Animate the tagline
      tl.fromTo(taglineRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        0.6
      );
      
      // Animate the bullet points individually
      const bulletPoints = bulletPointsRef.current.querySelectorAll('li');
      bulletPoints.forEach((point, index) => {
        tl.fromTo(point, 
          { opacity: 0, x: -30 }, 
          { opacity: 1, x: 0, duration: 0.5 }, 
          0.8 + (index * 0.2)
        );
      });
      
      // Animate the contact info
      tl.fromTo(contactRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        1.2
      );
      
      // Animate the button with a bounce effect
      tl.fromTo(buttonRef.current, 
        { opacity: 0, scale: 0 }, 
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" }, 
        1.5
      );
    };

    loadGSAP();

    // Cleanup function
    return () => {
      const ScrollTrigger = window.ScrollTrigger;
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  // SVG Background pattern
  const backgroundSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <!-- Background gradient -->
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#073C3F" />
          <stop offset="100%" stop-color="#0A6E75" />
        </linearGradient>
        
        <!-- Pattern elements -->
        <pattern id="medical-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <!-- Plus symbols -->
          <path d="M20,40 H40 V20 H60 V40 H80 V60 H60 V80 H40 V60 H20 V40 Z" fill="rgba(255,255,255,0.05)" />
          
          <!-- Heartbeat line -->
          <path d="M0,50 L20,50 L30,30 L40,70 L50,40 L60,50 L100,50" stroke="rgba(255,255,255,0.07)" stroke-width="2" fill="none" />
          
          <!-- Circles representing pills/molecules -->
          <circle cx="80" cy="20" r="8" fill="rgba(255,255,255,0.04)" />
          <circle cx="15" cy="85" r="5" fill="rgba(255,255,255,0.03)" />
        </pattern>
      </defs>
      
      <!-- Base background -->
      <rect width="100%" height="100%" fill="url(#bg-gradient)" />
      
      <!-- Pattern overlay -->
      <rect width="100%" height="100%" fill="url(#medical-pattern)" />
      
      <!-- Top decorative wave -->
      <path d="M0,0 Q250,100 500,50 T1000,100 V0 H0 Z" fill="rgba(255,255,255,0.05)" />
      
      <!-- Bottom decorative wave -->
      <path d="M0,1000 Q250,900 500,950 T1000,900 V1000 H0 Z" fill="rgba(255,255,255,0.05)" />
      
      <!-- Scattered small plus symbols -->
      <g fill="rgba(255,255,255,0.06)">
        <path d="M150,150 h10 v-10 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 z" />
        <path d="M850,250 h10 v-10 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 z" />
        <path d="M250,750 h10 v-10 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 z" />
        <path d="M750,800 h10 v-10 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 z" />
        <path d="M550,400 h10 v-10 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 z" />
      </g>
      
      <!-- Subtle DNA helix suggestion -->
      <path d="M900,0 Q875,100 900,200 Q925,300 900,400 Q875,500 900,600 Q925,700 900,800 Q875,900 900,1000" 
            stroke="rgba(255,255,255,0.04)" stroke-width="5" fill="none" />
      <path d="M880,0 Q905,100 880,200 Q855,300 880,400 Q905,500 880,600 Q855,700 880,800 Q905,900 880,1000" 
            stroke="rgba(255,255,255,0.03)" stroke-width="3" fill="none" />
    </svg>
  `;

  return (
    <div className="flex justify-center w-full mt-36 sm:mt-20 md:mt-36 px-2 sm:px-4" ref={bannerRef}>
      <div className="relative bg-back rounded-xl sm:rounded-3xl overflow-hidden py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 text-white max-w-7xl w-full">
        {/* SVG Background overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          dangerouslySetInnerHTML={{ __html: backgroundSvg }}
        />
        
        {/* Main content layout */}
        <div className="relative z-10">
          {/* AMEMS large text with image overlay */}
          <div className="relative mb-4 sm:mb-8 md:mb-10">
            <h1 
              ref={titleRef}
              className="font-nulshock text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center text-white mb-6 sm:mb-10 md:mb-14 font-extrabold" 
            >
              AMEMS
            </h1>
            
            {/* Doctor image positioned to appear centered within the text */}
            <div 
              ref={doctorRef}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{
                top: '165%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                height: 'auto',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img 
                src={doctor} 
                alt="Healthcare professional" 
                className="hidden sm:block w-full max-h-[400px] object-contain"
              />
            </div>
          </div>
          
          {/* Content below the main title */}
          <div className="mt-4">
            {/* Tagline */}
            <h2 ref={taglineRef} className="font-nulshock text-white text-xl sm:text-2xl mb-4 sm:mb-8 text-center sm:text-left">
              Delivering Excellence <br className="hidden xs:block" />in Every Dose
            </h2>

            {/* Two column layout - responsive */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start">
              {/* Left column with bullet points */}
              <div ref={bulletPointsRef} className="w-full sm:w-1/2 md:w-5/12 mb-4 sm:mb-0">
                <ul className="font-nulshock list-disc pl-5 space-y-1 sm:space-y-2">
                  <li className="text-base sm:text-lg">High Quality Medicine</li>
                  <li className="text-base sm:text-lg">Affordable Prices</li>
                  <li className="text-base sm:text-lg">Comprehensive Healthcare Solutions</li>
                </ul>
              </div>

              {/* Right column with contact info and button */}
              <div className="font-nulshock w-full sm:w-1/2 md:w-4/12 text-center sm:text-left flex flex-col items-center sm:items-start">
                <p ref={contactRef} className="text-base sm:text-lg mb-4">
                  Contact us today to <br className="hidden xs:block" />learn more about<br className="hidden xs:block" />our services
                </p>
                
                {/* Quote Button */}
                <button 
                  onClick={openQuoteModal}
                  ref={buttonRef}
                  className="bg-white text-green-700 px-5 py-2 rounded-full font-medium hover:bg-green-50 transition-colors sm:ml-0 md:ml-0 lg:mr-0"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {quoteModalOpen && (
        <QuoteModal 
          isOpen={quoteModalOpen}
          onClose={closeQuoteModal}
        />
      )}
    </div>
  );
}