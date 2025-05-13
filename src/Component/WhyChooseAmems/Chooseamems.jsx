import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Chooseamems = () => {
  // Use a single ref for the entire section
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardsContainerRef = useRef(null)

  // Updated color palette with indigo, green, blue, and red
  const cardColors = [
    {
      bg: "bg-card1",
      iconBg: "bg-white",
      iconColor: "text-indigo-600",
      border: "border-indigo-200",
      title: "text-black",
    },
    {
      bg: "bg-card2",
      iconBg: "bg-white",
      iconColor: "text-black",
      border: "border-green-200",
      title: "text-black"
    },
    {
      bg: "bg-card3",
      iconBg: "bg-white",
      iconColor: "text-blue-600",
      border: "border-blue-200",
      title: "text-black"
    },
    {
      bg: "bg-card4",
      iconBg: "bg-white",
      iconColor: "text-red-600",
      border: "border-red-200",
      title: "text-black"
    }
  ];

  const features = [
    {
      icon: 'fas fa-flask',
      title: 'Pharmaceutical Supply',
      desc: 'FDA approved pharmacueticals and GMP/WHO/USFDA-certified manufacturing.'
    },
    {
      icon: 'fas fa-medal',
      title: 'Healthcare Delivery',
      desc: 'On-site, high quality healthcare with 24/7 consultation with medical professionals.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Solutions',
      desc: 'Treatment coordination with top US hospitals and international medication sourcing.'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Mobile Medical Equipment',
      desc: 'Committed to improving patient outcomes and enhancing quality of life.'
    }
  ];

  // Simplified SVG background - reduced complexity
  const backgroundSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <!-- Background base color -->
      <rect width="100%" height="100%" fill="#312e81" />
      
      <!-- Simplified grid pattern overlay -->
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
      
      <!-- Simplified wave patterns -->
      <path d="M0,100 Q250,50 500,100 T1000,80 V0 H0 Z" fill="rgba(255,255,255,0.03)" />
      <path d="M0,900 Q250,950 500,900 T1000,920 V1000 H0 Z" fill="rgba(255,255,255,0.03)" />
      
      <defs>
        <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
          <rect width="2" height="2" fill="rgba(255,255,255,0.03)" />
        </pattern>
      </defs>
    </svg>
  `;

  // Set up GSAP animations on component mount with performance optimizations
  useEffect(() => {
    // Create a single timeline for all animations
    const tl = gsap.timeline();
    
    // Initial animations that don't depend on scrolling
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    ).fromTo(descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      "-=0.3" // Slightly overlap with previous animation
    );
    
    // Create a single ScrollTrigger for the cards
    const cards = cardsContainerRef.current.querySelectorAll('.feature-card');
    
    // Use a single ScrollTrigger for all cards
    ScrollTrigger.create({
      trigger: cardsContainerRef.current,
      start: 'top bottom-=100',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          stagger: 0.1, // Stagger the animations
          ease: 'power2.out',
        });
      },
      once: true // Only trigger once for better performance
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="flex justify-center w-full px-4 sm:px-8">
      <div className="max-w-7xl w-full font-Satoshi">
        <div ref={sectionRef} className="w-full p-4 sm:p-10 rounded-3xl bg-indigo-900 relative overflow-hidden">
          {/* SVG Background overlay */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              pointerEvents: 'none'
            }}
            dangerouslySetInnerHTML={{ __html: backgroundSvg }}
          />
          
          {/* Content with higher z-index */}
          <div className="relative z-10">
            <div className="text-center">
              <h2
                ref={titleRef}
                className="text-3xl font-nulshock font-extrabold text-white sm:text-5xl will-change-transform"
              >
                Why Choose AMEMS
              </h2>
              <p
                ref={descriptionRef}
                className="mt-4 max-w-2xl text-xl text-white mx-auto will-change-opacity"
              >
                Discover why we are the best choice for your healthcare needs
              </p>
            </div>

            <div ref={cardsContainerRef} className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className={`feature-card ${cardColors[index].bg} p-6 rounded-xl shadow-md transition-all duration-300 transform opacity-0 translate-y-8 will-change-transform`}
                  >
                    <div className={`${cardColors[index].iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-5`}>
                      <i className={`${item.icon} text-2xl ${cardColors[index].iconColor}`}></i>
                    </div>
                    <h3 className={`text-xl font-bold ${cardColors[index].title} mb-3`}>{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chooseamems