import React from 'react';
import { motion } from 'framer-motion';
import test1 from '../../assets/images/Testimonial-1.jpg'
import test2 from '../../assets/images/Testimonial-2.jpg'
import test3 from '../../../public/images/women.jpeg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom ease for smoother animation
    }
  }
};

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: '"AMEMS products have significantly improved our patient outcomes. Their commitment to quality and innovation is unmatched in the industry."',
      name: 'Dr. David Johnson',
      position: 'Chief Medical Officer, Central Hospital',
      avatar: test1, // Placeholder for avatar
      color: 'bg-blue-50 border-blue-100'
    },
    {
      rating: 5,
      text: '"We\'ve been partnering with AMEMS for over a decade. Their consistent reliability and cutting-edge solutions make them our preferred pharmaceutical supplier."',
      name: 'Ann Marie',
      position: 'Procurement Director, HealthFirst Group',
      avatar: test2, // Placeholder for avatar
      color: 'bg-purple-50 border-purple-100'
    },
    {
      rating: 4.5,
      text: '"As a global healthcare provider, we value Amems extensive product range and their exceptional customer support. They truly understand our needs."',
      name: 'Sarah Williams',
      position: 'CEO, International Medical Network',
      avatar: test3, // Placeholder for avatar
      color: test2,
    }
  ];

  return (
    <div className="py-16  font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-test rounded-3xl p-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What Our <span className="text-indigo-800">Clients</span> Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto leading-relaxed">
            Trusted by healthcare professionals and institutions worldwide
          </p>
          <div className="mt-3 flex justify-center">
            <div className="h-1 w-20 bg-indigo-600 rounded"></div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${testimonial.color} border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden`}
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-2 -left-2 text-gray-200 opacity-10 text-8xl font-serif">
                "
              </div>
              
              <div className="flex items-center mb-5">
                <div className="text-yellow-400 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  
                  {testimonial.rating % 1 !== 0 && (
                    <div className="relative">
                      <svg 
                        className="w-5 h-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <div 
                        className="absolute top-0 left-0 overflow-hidden" 
                        style={{ width: `${(testimonial.rating % 1) * 100}%` }}
                      >
                        <svg 
                          className="w-5 h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10">{testimonial.text}</p>
              
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow" 
                    src={testimonial.avatar}
                    alt={testimonial.name} 
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/Reviews"
            className="inline-flex items-center px-8 py-3 border-2 border-indigo-800 text-base font-medium rounded-full text-indigo-800 bg-white hover:bg-indigo-50 transition-colors duration-300 shadow-sm hover:shadow"
          >
            <span>Read More Testimonials</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;