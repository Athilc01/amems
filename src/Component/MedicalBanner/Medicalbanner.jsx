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
    <div className="relative max-w-7xl mx-auto my-20">
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
        className="max-w-7xl bg-gradient-to-r from-teal-600 to-teal-400 rounded-3xl shadow-2xl overflow-hidden opacity-0"
      >
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
                className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-center md:text-left opacity-0"
              >
                Discover Why We Are the Best Choice
              </h2>

              <p
                ref={paragraphRef}
                className="text-justify text-lg leading-relaxed opacity-0"
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