import React from 'react';
import { useState, useEffect } from 'react';

const Statistics = () => {
  const [isInView, setIsInView] = useState(false);
  
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  // Stats data with enhanced details
  const stats = [
    { 
      value: "107000+", 
      suffix: '+', 
      label: 'Satisfied Cusotmers',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      value: 4, 
      suffix: '+', 
      label: 'Elite Institution',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      value: 100, 
      suffix: '%', 
      label: 'Quality Commitment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      value: 80, 
      suffix: '', 
      label: 'Pharma Supplies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  // Custom counter implementation
  const AnimatedCounter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) start = end;
        setCount(Math.floor(start));
        
        if (start === end) clearInterval(timer);
      }, 16);
      
      return () => clearInterval(timer);
    }, [value, isInView]);
    
    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div id="stats-section" className="px-4">
      <div className="max-w-7xl mx-auto  p-10  rounded-2xl">
        <h2 className="text-5xl font-bold text-center text-black mb-16">Our Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-stat1 rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="text-indigo-600">
                  {stat.icon}
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800 text-center">
                {isInView ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : '0'}
              </h3>
              
              <p className="text-gray-600 font-medium text-center mt-3">{stat.label}</p>
              
              <div className="mt-4 h-1 w-16 bg-indigo-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Statistics;