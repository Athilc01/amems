import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Chooseamems = () => {
  // Refs for the elements we'll animate
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardRefs = useRef([])

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
      title: 'Pharmaceutical  Supply',
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

  // SVG background for the section
  const backgroundSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <!-- Definitions for reusable elements -->
      <defs>
        <!-- Subtle pattern overlay -->
        <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
          <rect width="2" height="2" fill="rgba(255,255,255,0.03)" />
        </pattern>
        
        <!-- Medical icons for the background -->
        <g id="medical-cross">
          <path d="M-8,0 h16 v-8 h8 v16 h-8 v8 h-16 v-8 h-8 v-16 h8 z" fill="currentColor"/>
        </g>
        
        <g id="pill-icon">
          <ellipse cx="0" cy="0" rx="15" ry="8" fill="currentColor" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFF" stroke-width="1" stroke-dasharray="2,2" />
        </g>
        
        <g id="heart-icon">
          <path d="M0,6 A4,4,0,0,1,-8,0 A4,4,0,0,1,0,-8 A4,4,0,0,1,8,0 A4,4,0,0,1,0,6 z" fill="currentColor" />
        </g>

        <g id="flask-icon">
          <path d="M-5,-10 L-5,0 L-8,6 Q-10,10,0,10 Q10,10,8,6 L5,0 L5,-10 z M-5,-10 L5,-10" fill="none" stroke="currentColor" stroke-width="2" />
        </g>
        
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(129, 140, 248, 0.1)" />
          <stop offset="50%" stop-color="rgba(96, 165, 250, 0.08)" />
          <stop offset="100%" stop-color="rgba(129, 140, 248, 0.1)" />
        </linearGradient>
      </defs>
      
      <!-- Background base color -->
      <rect width="100%" height="100%" fill="#312e81" />
      
      <!-- Grid pattern overlay -->
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
      
      <!-- Decorative top wave -->
      <path d="M0,100 Q250,50 500,100 T1000,80 V0 H0 Z" fill="rgba(255,255,255,0.03)" />
      
      <!-- Decorative bottom wave -->
      <path d="M0,900 Q250,950 500,900 T1000,920 V1000 H0 Z" fill="rgba(255,255,255,0.03)" />
      
      <!-- Flowing wave patterns in the middle -->
      <path d="M0,400 Q200,370 400,400 T800,380 T1000,400" stroke="url(#wave-gradient)" stroke-width="40" fill="none" />
      <path d="M0,600 Q250,570 500,600 T1000,580" stroke="url(#wave-gradient)" stroke-width="30" fill="none" />
      
      <!-- Scattered medical symbols -->
      <g>
        <!-- Crosses -->
        <use href="#medical-cross" x="100" y="150" transform="scale(0.7)" style="color: rgba(255,255,255,0.04);" />
        <use href="#medical-cross" x="800" y="250" transform="scale(0.5)" style="color: rgba(255,255,255,0.03);" />
        <use href="#medical-cross" x="300" y="700" transform="scale(0.6)" style="color: rgba(255,255,255,0.04);" />
        <use href="#medical-cross" x="900" y="800" transform="scale(0.4)" style="color: rgba(255,255,255,0.03);" />
        
        <!-- Pills -->
        <use href="#pill-icon" x="200" y="300" transform="rotate(30) scale(0.8)" style="color: rgba(255,255,255,0.03);" />
        <use href="#pill-icon" x="750" y="180" transform="rotate(-45) scale(0.6)" style="color: rgba(255,255,255,0.02);" />
        <use href="#pill-icon" x="600" y="650" transform="rotate(15) scale(0.7)" style="color: rgba(255,255,255,0.03);" />
        
        <!-- Hearts -->
        <use href="#heart-icon" x="400" y="200" transform="scale(0.9)" style="color: rgba(255,255,255,0.025);" />
        <use href="#heart-icon" x="850" y="600" transform="scale(0.7)" style="color: rgba(255,255,255,0.02);" />
        <use href="#heart-icon" x="150" y="550" transform="scale(0.8)" style="color: rgba(255,255,255,0.025);" />
        
        <!-- Flasks -->
        <use href="#flask-icon" x="300" y="400" transform="scale(1.2)" style="color: rgba(255,255,255,0.03);" />
        <use href="#flask-icon" x="700" y="350" transform="scale(0.8)" style="color: rgba(255,255,255,0.02);" />
        <use href="#flask-icon" x="550" y="800" transform="scale(1)" style="color: rgba(255,255,255,0.03);" />
      </g>
      
      <!-- Hexagon grid pattern - suggesting molecular structure -->
      <g opacity="0.04">
        <path d="M50,100 L100,75 L150,100 L150,150 L100,175 L50,150 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M150,100 L200,75 L250,100 L250,150 L200,175 L150,150 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M250,100 L300,75 L350,100 L350,150 L300,175 L250,150 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M350,100 L400,75 L450,100 L450,150 L400,175 L350,150 Z" fill="none" stroke="#FFF" stroke-width="1" />
        
        <path d="M100,175 L150,150 L200,175 L200,225 L150,250 L100,225 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M200,175 L250,150 L300,175 L300,225 L250,250 L200,225 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M300,175 L350,150 L400,175 L400,225 L350,250 L300,225 Z" fill="none" stroke="#FFF" stroke-width="1" />
        
        <path d="M700,600 L750,575 L800,600 L800,650 L750,675 L700,650 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M800,600 L850,575 L900,600 L900,650 L850,675 L800,650 Z" fill="none" stroke="#FFF" stroke-width="1" />
        <path d="M750,675 L800,650 L850,675 L850,725 L800,750 L750,725 Z" fill="none" stroke="#FFF" stroke-width="1" />
      </g>
      
      <!-- Abstract DNA helix suggestion -->
      <path d="M950,0 Q925,100 950,200 Q975,300 950,400 Q925,500 950,600 Q975,700 950,800 Q925,900 950,1000" 
            stroke="rgba(255,255,255,0.04)" stroke-width="4" fill="none" />
      <path d="M930,0 Q955,100 930,200 Q905,300 930,400 Q955,500 930,600 Q905,700 930,800 Q955,900 930,1000" 
            stroke="rgba(255,255,255,0.03)" stroke-width="2" fill="none" />
    </svg>
  `;

  // Set up GSAP animations on component mount
  useEffect(() => {
    // Animate the title
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )

    // Animate the description
    gsap.fromTo(descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
    )

    // Animate each card with ScrollTrigger
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          },
          delay: index * 0.1 // Stagger the animations
        }
      )
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Add ref to cardRefs array
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el)
    }
  }

  return (
    <div className="flex justify-center w-full px-4 sm:px-8">
      <div className="max-w-7xl w-full bg-gradient-to-b from-gray-50 to-gray-100 font-Satoshi">
        <div className="w-full p-4 sm:p-10 rounded-3xl bg-indigo-900 relative overflow-hidden">
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
                className="text-3xl font-nulshock font-extrabold text-white sm:text-5xl"
              >
                Why Choose AMEMS
              </h2>
              <p
                ref={descriptionRef}
                className="mt-4 max-w-2xl text-xl text-white mx-auto"
              >
                Discover why we are the best choice for your healthcare needs
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    ref={addToRefs}
                    className={`${cardColors[index].bg} p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1`}
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