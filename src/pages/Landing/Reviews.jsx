import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import test1 from '../../assets/images/Testimonial-1.jpg';
import test2 from '../../assets/images/Testimonial-2.jpg';
import test3 from '../../../public/images/man.jpeg'
import test4 from '../../../public/images/women.jpeg'
const Reviews = () => {

  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "As a healthcare professional, I only trust the best for my patients. That's why I always recommend Amems pharmaceutical products. Their commitment to research and development ensures that my patients receive the most advanced treatments available.",
      name: "Dr. Michael S",
      role: "Doctor",
      avatar: test1
    },
    {
      id: 2,
      stars: 5,
      text: "I've been using Amems medications for years, and I can confidently say they're top-notch. Not only are their products effective, but their customer service is also exceptional. Thank you, Amems, for making a positive difference in my health journey.",
      name: "Sarah H",
      role: "Consumer",
      avatar: test2
    },
    {
      id: 3,
      stars: 4.5,
      text: "Amems pharmaceutical products have truly transformed my life. Their cutting-edge treatments have helped me manage my condition effectively, allowing me to live life to the fullest. I'm grateful for their commitment to excellence in healthcare.",
      name: "David John",
      role: "Consumer",
      avatar: test3
    },
    {
      id: 4,
      stars: 4.5,
      text: "Amems medications have been a game-changer for me. Not only do they effectively manage my symptoms, but they also give me peace of mind knowing that I'm receiving top-quality care. Thank you, Amems, for prioritizing patient well-being.",
      name: "Lisa R",
      role: "Consumer",
      avatar: test4
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-blue-700"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-blue-700"></i>);
    }
    
    // Add empty stars to make total of 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-blue-700"></i>);
    }
    
    return stars;
  };

  return (
    <div>
      <section className="mt-[120px] px-8">
        <div className="container mx-auto">
          <div className="bg-blue-100 rounded-full py-[80px] mb-16 text-center">
            <motion.h1 
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Testimonials
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            More Than 107k+ People
          </motion.h2>
          
          <div className="relative mb-12">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Trust Us
            </motion.h3>
          </div>
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 mb-16 leading-relaxed text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            At Amems Solutions, we're dedicated to pushing the boundaries of healthcare 
            innovation. Our cutting-edge products and services are designed to revolutionize 
            the way you approach wellness. From advanced pharmaceutical treatments to 
            state-of-the-art medical devices, we're committed to delivering excellence at every 
            turn. Experience the future of healthcare today with Amems Solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative pt-14"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + testimonial.id * 0.2 }}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full border-4 border-blue-700 overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
