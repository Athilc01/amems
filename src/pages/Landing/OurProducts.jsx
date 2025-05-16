import React, { useEffect, useRef } from 'react';
import logo from '../../assets/logo/Pharma.png';
import doctor from '../../../public/images/DocProduct-1.png';
import med1 from '../../../public/images/Amemlyte.png';
import med2 from '../../../public/images/AME-FLEX.png';
import med3 from '../../../public/images/AMEMPROZOLE.png';
import med4 from '../../../public/images/AMEMRA-1.png';
import med5 from '../../../public/images/AMEMRA.png';
import med6 from '../../../public/images/AMEMSGEL.png';
import med7 from '../../../public/images/AMEOCATE.png';
import med8 from '../../../public/images/AMEXBIO.png';
import med9 from '../../../public/images/ALFAMEMS.png';
import med10 from '../../../public/images/AMOCONOZOLE.png';
import med11 from '../../../public/images/AMPIAPERX.png';
import med12 from '../../../public/images/AMPROLIDE-7.5.png';
import med13 from '../../../public/images/BORTAMEMS.png';
import med14 from '../../../public/images/BOTOX.png';
import med15 from '../../../public/images/CEFOMEMS.png';
import med16 from '../../../public/images/ELECTROCIDE.png';
import med17 from '../../../public/images/FRUITS_AMEMS.png';
import med18 from '../../../public/images/GLIUCASMIN.png';
import med19 from '../../../public/images/GLUCOAMIN.png';
import med20 from '../../../public/images/HEPAMEMS.png';
import med21 from '../../../public/images/INVOSMIL.png';
import med22 from '../../../public/images/LIQUID_IV_US.png';
import med23 from '../../../public/images/LIQUID_IV_US2.png';
import med24 from '../../../public/images/LIQUID_IV_US3.png';
import med25 from '../../../public/images/LIQUID_IV_US4.png';
import med26 from '../../../public/images/LITHIUM_CARBONATE.png';
import med27 from '../../../public/images/OLEXIUM.png';
import med28 from '../../../public/images/OTIAMEMS.png';
import med29 from '../../../public/images/PAPAVERINE.png';
import med30 from '../../../public/images/PROPANOLOL.png';
import med31 from '../../../public/images/RIFAMES.png';
import med32 from '../../../public/images/VEGGIES.png';
 

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  // Refs for animation targets
  const headerRef = useRef(null);
  const heroTextRef = useRef(null);
  const doctorSectionRef = useRef(null);
  const doctorImageRef = useRef(null);
  const doctorTextRef = useRef(null);
  const dealsRef = useRef(null);
  const productRefs = useRef([]);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.timeline();
    
    heroTimeline.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    heroTimeline.from(heroTextRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // Doctor section animation
    const doctorTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: doctorSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    doctorTimeline.from(doctorImageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    doctorTimeline.from(doctorTextRef.current.children, {
      x: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.8");

    // Deals section animation
    const dealsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: dealsRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    dealsTimeline.from(dealsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    // Products animation
    productRefs.current.forEach((product, index) => {
      gsap.from(product, {
        scrollTrigger: {
          trigger: product,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out"
      });
    });

    // Contact section animation
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    contactTimeline.from(contactSectionRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    contactTimeline.from(contactSectionRef.current.querySelectorAll(".animate-item"), {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const products= [
    {
      id: 1,
      category: "Nutrition",
      name: "AMEMLYTE 200mg",
      description: "Health Products",
      image: med1,
      rating: 5,
  
    },
    {
      id: 2,
      category: "Nutrition",
      name: "AME-FLEX Joint-Health",
      description: "Health Products",
      image: med2,
      rating: 4.9,
  
    },
    {
      id: 3,
      category: "Nutrition",
      name: "AMEPROZOLE",
      description: "Health Products",
      image: med3,
      rating: 4.5,
  
    },
    {
      id: 4,
      category: "Nutrition",
      name: "AMEMRA",
      description: "Health Products",
      image: med4,
      rating: 4.6,
  
    },
    {
      id: 5,
      category: "Nutrition",
      name: "AMEMRA-Tocilzumab ",
      description: "Health Products",
      image: med5,
      rating: 4.5,
  
    },
    {
      id: 6,
      category: "Nutrition",
      name: "AMEMS GEL ",
      description: "Health Products",
      image: med6,
      rating: 4.3,
  
    },
    {
      id: 7,
      category: "Nutrition",
      name: "AMEOCATE ",
      description: "Health Products",
      image: med7,
      rating: 4.4,
  
    },
    {
      id: 8,
      category: "Nutrition",
      name: "AMEXBIO",
      description: "Health Products",
      image: med8,
      rating: 4.8,
  
    },
    {
      id: 9,
      category: "Nutrition",
      name: "ALFAMEMS 1mcg",
      description: "Health Products",
      image: med9,
      rating: 4.5,
  
    },
    {
      id: 10,
      category: "Nutrition",
      name: "AMOCONOZOLE 2mg/ml",
      description: "Health Products",
      image: med10,
      rating: 5,
  
    },
    {
      id: 11,
      category: "Nutrition",
      name: "AMPIAPERX-Adult Diaper",
      description: "Health Products",
      image: med11,
      rating: 5,
  
    },
    {
      id: 12,
      category: "Nutrition",
      name: "AMPROLIDE 7.5mg",
      description: "Health Products",
      image: med12,
      rating: 4.3,
  
    },
    {
      id: 13,
      category: "Nutrition",
      name: "BORTAMEMS-Lyophilized",
      description: "Health Products",
      image: med13,
      rating: 4.2,
  
    },
    {
      id: 14,
      category: "Nutrition",
      name: "BOTOX-Stock Solution",
      description: "Health Products",
      image: med14,
      rating: 4.6,
  
    },
    {
      id: 15,
      category: "Nutrition",
      name: "CEFOAMEMS 750mg ",
      description: "Health Products",
      image: med15,
      rating: 4.8,
  
    },
    {
      id: 16,
      category: "Nutrition",
      name: "ELECTROCIDE ",
      description: "Health Products",
      image: med16,
      rating: 4.5,
  
    },
    {
      id: 17,
      category: "Nutrition",
      name: "FRUITS-AMEMS",
      description: "Health Products",
      image: med17,
      rating: 4.5,
  
    },
    {
      id: 18,
      category: "Nutrition",
      name: "GLUCASMIN CHONDROTIN",
      description: "Health Products",
      image: med18,
      rating: 4.5,
  
    },
    {
      id: 19,
      category: "Nutrition",
      name: "GLUCOAMIN",
      description: "Health Products",
      image: med19,
      rating: 4.5,
  
    },
    {
      id: 20,
      category: "Nutrition",
      name: "HEPAMEMS 5000IU/5ML",
      description: "Health Products",
      image: med20,
      rating: 4.5,
  
    },
    {
      id: 21,
      category: "Nutrition",
      name: "INVOSMIL",
      description: "Health Products",
      image: med21,
      rating: 4,
  
    },
    {
      id: 22,
      category: "Nutrition",
      name: "LIQUID_IV_US (LEMON LIME)",
      description: "Health Products",
      image: med22,
      rating: 4.9,
  
    },
    {
      id: 23,
      category: "Nutrition",
      name: "LIQUID_IV_US (BLACKBERRY PEACH)",
      description: "Health Products",
      image: med23,
      rating: 4.7,
  
    },
    {
      id: 24,
      category: "Nutrition",
      name: "LIQUID_IV_US (MANGO PASSION FRUIT)",
      description: "Health Products",
      image: med24,
      rating: 4.6,
  
    },
    {
      id: 25,
      category: "Nutrition",
      name: "LIQUID_IV_US (LEMON & PEACH) ",
      description: "Health Products",
      image: med25,
      rating: 4.4,
  
    },
    {
      id: 26,
      category: "Nutrition",
      name: "LITHIUM CARBONATE 450mg ",
      description: "Health Products",
      image: med26,
      rating: 5,
  
    },
    {
      id:27,
      category: "Nutrition",
      name: "OLEXIUM",
      description: "Health Products",
      image: med27,
      rating: 4.7,
  
    },
    {
      id: 28,
      category: "Nutrition",
      name: "OTIAMEMS-40",
      description: "Health Products",
      image: med28,
      rating: 4.8,
  
    },
    {
      id: 29,
      category: "Nutrition",
      name: "PAPARIN INJECTION 40mg",
      description: "Health Products",
      image: med29,
      rating: 4.5,
  
    },
    {
      id: 30,
      category: "Nutrition",
      name: "PROPRANOLOL 1mg/ml",
      description: "Health Products",
      image: med30,
      rating: 4.5,
  
    },{
      id: 31,
      category: "Nutrition",
      name: "RIFAMES 150mg",
      description: "Health Products",
      image: med31,
      rating: 5,
  
    }, 
    {
      id: 32,
      category: "Nutrition",
      name: "VEGGIES 10 ",
      description: "Health Products",
      image: med32,
      rating: 5,
  
    }
  ];
    
 
  return (
    <div>
      <section ref={headerRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xNyAxN2MwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto py-40  px-6 relative">
          <div 
            ref={heroTextRef}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-nulshock text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
              Discover our carefully curated range of products designed to meet your needs and style. Each item is selected with quality and satisfaction in mind — explore what we have to offer and find your next favorite today.
            </p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <div ref={doctorSectionRef} className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div ref={doctorImageRef} className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img
                src={doctor}
                alt="Healthcare professional in white coat with stethoscope"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          <div ref={doctorTextRef} className="w-full md:w-1/2 md:pl-8">
            <div className="max-w-lg">
              <span className="text-gray-500 font-nulshock  uppercase tracking-wide">
                AMEMS
              </span>
              <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                Leading the Way in Pharmaceutical Innovation
              </h1>
              <div className="mt-6 text-gray-500 space-y-4">
                <p className="text-justify font-bold">
                  Discover a comprehensive range of high-quality pharmaceutical
                  products at AMEMS. From essential medications to
                  AMEMS treatments, our product section is your gateway to
                  excellence in healthcare. Browse our extensive catalog to find
                  FDA-approved solutions tailored to meet your needs. Explore
                  now and experience the difference with AMEMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div ref={dealsRef} className="bg-indigo-900 rounded-3xl p-10">
          <div className="max-w-6xl mx-auto mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-4xl font-bold leading-tight">
                Todays Best Deals<br />
                For You!
              </h1>
            
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative p-4">
                  <div className="flex justify-center items-center h-40 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-[250px] transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="flex items-center text-sm mb-1">
                    <span className="text-gray-400">{product.category}</span>
                    <div className="ml-auto flex items-center">
                      <span className="text-orange-400 mr-1">★</span>
                      <span className="text-gray-700">({product.rating})</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-800 font-bold">{product.name}</h3>
                    <p className="text-gray-700 text-sm">{product.description}</p>
                    {product.discount && (
                      <div className="mt-2">
                       
                      </div>
                    )}
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div 
          ref={contactSectionRef}
          className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6 relative overflow-hidden"
        >
          <div className="z-10 md:w-1/2">
            <p className="text-orange-500 font-medium mb-2 uppercase tracking-wide animate-item">
              CONTACT INFO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 animate-item">
              Need Medicines?
            </h2>
            <p className="text-gray-700 mb-6 animate-item">
              Contact Us Now for First Free Visit
            </p>

            <a
              href="tel:+97156227223"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded-md transition-colors duration-300 animate-item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +971 56 2272323
            </a>
          </div>

          <div className="mt-8 md:mt-0 z-10 animate-item">
            <img
              src={logo}
              alt="Amepoxx Medicine Bottle"
              className="max-h-72 object-contain"
            />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-50 rounded-full opacity-40 -ml-12 -mb-12"></div>
        </div>
      </div>
      
         </div>
  );
};

export default OurProducts;