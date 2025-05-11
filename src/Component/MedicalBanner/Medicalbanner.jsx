import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import medical from '../../../public/images/medicalbanner-1.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MedicalBanner = () => {
  // Create refs for elements we need to animate
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageContainerRef = useRef(null);
  const blurredShape1Ref = useRef(null);
  const blurredShape2Ref = useRef(null);
  const svgBackgroundRef = useRef(null);

  useEffect(() => {
    // Set up ScrollTrigger for the main container
    const scrollTrigger = {
      trigger: containerRef.current,
      start: 'top bottom-=100',
      toggleActions: 'play none none none',
      threshold: 0.25
    };

    // Animate container coming up
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, scrollTrigger }
    );

    // Animate left side sliding in from left
    gsap.fromTo(leftSideRef.current,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.7, 
        ease: 'power2.out',
        scrollTrigger,
        delay: 0.2
      }
    );

    // Animate right side sliding in from right
    gsap.fromTo(rightSideRef.current,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.7, 
        ease: 'power2.out',
        scrollTrigger,
        delay: 0.2
      }
    );

    // Animate heading fading up
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        scrollTrigger,
        delay: 0.4
      }
    );

    // Animate paragraph fading up
    gsap.fromTo(paragraphRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        scrollTrigger,
        delay: 0.6
      }
    );

    // Animate floating blurred shapes
    gsap.to(blurredShape1Ref.current, {
      y: -20,
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    });

    gsap.to(blurredShape2Ref.current, {
      y: 25,
      duration: 4,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    });
    
    // Animate SVG paths
    const paths = svgBackgroundRef.current.querySelectorAll('path');
    paths.forEach((path, index) => {
      gsap.to(path, {
        opacity: 0.7 + (index * 0.05),
        duration: 2 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Image hover effect
    imageContainerRef.current.addEventListener('mouseenter', () => {
      gsap.to(imageContainerRef.current, {
        scale: 1.03,
        duration: 0.3
      });
    });

    imageContainerRef.current.addEventListener('mouseleave', () => {
      gsap.to(imageContainerRef.current, {
        scale: 1,
        duration: 0.3
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners
      if (imageContainerRef.current) {
        const element = imageContainerRef.current;
        const clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
      }
    };
  }, []);

  return (
    // Added px-4 for small gap on both sides for all screen sizes
    <div className="relative flex justify-center w-full px-4 sm:px-8">
      {/* Blurred background shapes */}
      <div
        ref={blurredShape1Ref}
        className="absolute -z-10 top-10 left-10 w-72 h-72 bg-teal-300 rounded-full opacity-30 blur-3xl"
      />
      <div
        ref={blurredShape2Ref}
        className="absolute -z-10 bottom-0 right-10 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-[100px]"
      />

      <div
        ref={containerRef}
        className="max-w-7xl w-full my-20 rounded-3xl shadow-2xl overflow-hidden opacity-0 relative"
      >
        {/* SVG Background */}
        <svg 
          ref={svgBackgroundRef}
          className="absolute inset-0 w-full h-full -z-10" 
          viewBox="0 0 1200 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#115E59" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0F766E" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {/* Background fill */}
          <rect x="0" y="0" width="100%" height="100%" fill="url(#bgGradient)" />
          
          {/* Medical cross symbol */}
          <path
            d="M1050 150 Q1075 125, 1100 150 Q1125 175, 1100 200 Q1075 225, 1050 200 Q1025 175, 1050 150Z"
            fill="#5EEAD4"
            opacity="0.2"
          />
          <path
            d="M150 450 Q175 425, 200 450 Q225 475, 200 500 Q175 525, 150 500 Q125 475, 150 450Z"
            fill="#5EEAD4"
            opacity="0.15"
          />
          
          {/* Abstract waves */}
          <path
            d="M0,200 C300,250 600,150 1200,250 L1200,600 L0,600 Z"
            fill="url(#waveGradient1)"
            opacity="0.6"
          />
          <path
            d="M0,250 C400,300 700,200 1200,300 L1200,600 L0,600 Z"
            fill="url(#waveGradient2)"
            opacity="0.5"
          />
          <path
            d="M0,300 C500,350 800,250 1200,350 L1200,600 L0,600 Z"
            fill="url(#waveGradient3)"
            opacity="0.4"
          />
          
          {/* Decorative circles */}
          <circle cx="100" cy="100" r="15" fill="#5EEAD4" opacity="0.2" />
          <circle cx="150" cy="150" r="10" fill="#5EEAD4" opacity="0.15" />
          <circle cx="1100" cy="400" r="20" fill="#5EEAD4" opacity="0.1" />
          <circle cx="1050" cy="450" r="15" fill="#5EEAD4" opacity="0.15" />
          
          {/* Pulse animation circles */}
          <circle cx="950" cy="100" r="5" fill="#FFFFFF" opacity="0.6" />
          <circle cx="200" cy="500" r="5" fill="#FFFFFF" opacity="0.6" />
        </svg>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div ref={leftSideRef} className="w-full md:w-1/2 opacity-0">
            <div className="p-6 md:p-10">
              <div
                ref={imageContainerRef}
                className="bg-white rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-200"
              >
                <img
                  src={medical}
                  alt="Healthcare professionals"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div
            ref={rightSideRef}
            className="w-full md:w-1/2 flex items-center opacity-0"
          >
            <div className="py-10 md:py-8 md:pr-12 text-white">
              <h2
                ref={headingRef}
                className="font-nulshock text-2xl p-2 md:text-4xl font-extrabold mb-6 leading-tight text-center md:text-left opacity-0"
              >
                Discover Why We Are the Best Choice
              </h2>

              <p
                ref={paragraphRef}
                className="p-3 text-justify text-lg leading-relaxed opacity-0"
              >
                We address the high prevalence of acquired and congenital cardiovascular disorders
                in the region, as well as other serious health difficulties affecting countries in
                the region. Our team is dedicated to delivering accessible, world-class medical care
                with compassion and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBanner;