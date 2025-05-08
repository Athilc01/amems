import { useState, useEffect, useRef } from "react";
import doctor from '../../../public/images/doctor.png';

export default function HealthcareBanner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const doctorRef = useRef(null);
  const taglineRef = useRef(null);
  const bulletPointsRef = useRef(null);
  const contactRef = useRef(null);
  const buttonRef = useRef(null);

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

  return (
    <div className="flex justify-center w-full mt-36 px-4" ref={bannerRef}>
      <div className="relative bg-back rounded-3xl overflow-hidden py-8 px-10 text-white max-w-7xl w-full">
        {/* Main content layout */}
        <div className="relative">
          {/* AMEMS large text with image overlay */}
          <div className="relative mb-10 ">
            <h1 
              ref={titleRef}
              className="font-nulshock  text-6xl sm:text-center text-white mb-14 sm:text-9xl font-extrabold" 
            
            >
              AMEMS
            </h1>
            
            {/* Doctor image positioned to appear centered within the text */}
            <div 
              ref={doctorRef}
              className="absolute " 
              style={{ 
                left: '50%', 
                top: '140%', 
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                height: '280%'
              }}
            >
              <img 
                src={doctor} 
                alt="Healthcare professional" 
                className="hidden sm:block h-[400px] object-contain"
              />
            </div>
          </div>
          
          {/* Content below the main title */}
          <div className="mt-4">
            {/* Tagline */}
            <h2 ref={taglineRef} className="font-semibold text-white text-xl mb-8">
              Revolutionizing Healthcare in Middle East
            </h2>

            {/* Two column layout */}
            <div className="flex flex-wrap justify-between">
              {/* Left column with bullet points */}
              <div ref={bulletPointsRef} className="w-full md:w-5/12">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-lg">High Quality Medicine</li>
                  <li className="text-lg">Affordable Prices</li>
                  <li className="text-lg">Comprehensive Healthcare Solutions</li>
                </ul>
              </div>

              {/* Right column with contact info and button */}
              <div className="w-full md:w-5/12 flex flex-col items-start md:items-end mt-6 md:mt-0">
                <p ref={contactRef} className="text-lg mb-4">
                  Contact us today to learn more about<br />our services
                </p>
                
                {/* Quote Button */}
                <button 
                  ref={buttonRef}
                  className="bg-white text-green-700 sm:mr-36 px-8 py-2 rounded-full font-medium hover:bg-green-50 transition-colors"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}