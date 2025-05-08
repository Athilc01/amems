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
    <div className="max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 font-Satoshi">
      <div className="max-w-7xl mx-auto p-10 rounded-3xl sm:px-6 lg:px-8 bg-indigo-900">
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-Satoshi font-extrabold text-white sm:text-5xl bg-clip-text text-transparent bg-black"
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
  )
}

export default Chooseamems