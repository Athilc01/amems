import React from 'react';
import { motion } from 'framer-motion';
import test1 from '../../assets/images/Testimonial-1.jpg';
import test2 from '../../assets/images/Testimonial-2.jpg';
import test3 from '../../../public/images/man.jpeg';
import test4 from '../../../public/images/women.jpeg';

const Reviews = () => {
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "As a healthcare professional, I only trust the best for my patients. That's why I always recommend AMEMS pharmaceutical products. Their commitment to research and development ensures that my patients receive the most advanced treatments available.",
      name: "Dr. Michael S",
      role: "Doctor",
      avatar: test1,
      color: "from-blue-50 to-indigo-50 border-blue-200"
    },
    {
      id: 2,
      stars: 5,
      text: "I've been using AMEMS medications for years, and I can confidently say they're top-notch. Not only are their products effective, but their customer service is also exceptional. Thank you, AMEMS, for making a positive difference in my health journey.",
      name: "Sarah H",
      role: "Consumer",
      avatar: test2,
      color: "from-purple-50 to-pink-50 border-purple-200"
    },
    {
      id: 3,
      stars: 4.5,
      text: "AMEMS pharmaceutical products have truly transformed my life. Their cutting-edge treatments have helped me manage my condition effectively, allowing me to live life to the fullest. I'm grateful for their commitment to excellence in healthcare.",
      name: "David John",
      role: "Consumer",
      avatar: test3,
      color: "from-emerald-50 to-teal-50 border-emerald-200"
    },
    {
      id: 4,
      stars: 4.5,
      text: "AMEMS medications have been a game-changer for me. Not only do they effectively manage my symptoms, but they also give me peace of mind knowing that I'm receiving top-quality care. Thank you, AMEMS, for prioritizing patient well-being.",
      name: "Lisa R",
      role: "Consumer",
      avatar: test4,
      color: "from-amber-50 to-yellow-50 border-amber-200"
    }
  ];

  // Function to render stars based on rating with SVG
  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => {
          // Full star
          if (star <= rating) {
            return (
              <svg key={star} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            );
          } 
          // Half star
          else if (star - 0.5 <= rating) {
            return (
              <div key={star} className="relative">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            );
          }
          // Empty star
          else {
            return (
              <svg key={star} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="font-sans">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xNyAxN2MwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto py-40 px-6 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-nulshock text-4xl md:text-6xl font-bold text-white mb-6">Client Testimonials</h1>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
              Discover what our clients have to say about their experience with AMEMS' pharmaceutical solutions
            </p>
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                More Than &nbsp;
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                107,000+ People
              </motion.span>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto mb-8"
            />
            
            <motion.h3 
              className="font-nulshock text-3xl md:text-4xl font-bold text-indigo-800 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Trust Our Solutions
            </motion.h3>
            
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              At AMEMS Solutions, we're dedicated to pushing the boundaries of healthcare 
              innovation. Our cutting-edge products and services are designed to revolutionize 
              the way you approach wellness. From advanced pharmaceutical treatments to 
              state-of-the-art medical devices, we're committed to delivering excellence at every 
              turn. Experience the future of healthcare today with AMEMS Solutions.
            </motion.p>
          </motion.div>
          
          {/* Testimonials Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={fadeInUp}
                className={`bg-gradient-to-br ${testimonial.color} border border-opacity-30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col`}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Quote Icon */}
                <div className="flex justify-end mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-200">
                    <path d="M10.6667 17.3333C11.7778 17.3333 12.7222 17.7222 13.5 18.5C14.2778 19.2778 14.6667 20.2222 14.6667 21.3333C14.6667 22.4444 14.2778 23.3889 13.5 24.1667C12.7222 24.9444 11.7778 25.3333 10.6667 25.3333C9.55556 25.3333 8.61111 24.9444 7.83333 24.1667C7.05556 23.3889 6.66667 22.4444 6.66667 21.3333C6.66667 20.8889 6.72222 20.4444 6.83333 20C6.94444 19.5556 7.13889 19.0556 7.41667 18.5L11.6667 10.6667H15.3333L10.6667 17.3333ZM24 17.3333C25.1111 17.3333 26.0556 17.7222 26.8333 18.5C27.6111 19.2778 28 20.2222 28 21.3333C28 22.4444 27.6111 23.3889 26.8333 24.1667C26.0556 24.9444 25.1111 25.3333 24 25.3333C22.8889 25.3333 21.9444 24.9444 21.1667 24.1667C20.3889 23.3889 20 22.4444 20 21.3333C20 20.8889 20.0556 20.4444 20.1667 20C20.2778 19.5556 20.4722 19.0556 20.75 18.5L25 10.6667H28.6667L24 17.3333Z" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.stars)}
                  </div>
                  
                  <p className="text-gray-700 mb-6 flex-grow text-center italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
         
        </div>
      </section>
    </div>
  );
}

export default Reviews;