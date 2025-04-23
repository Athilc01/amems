import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const Testimonials = () => {
  return (
    <div className="py-12 bg-[#f5f5f5] font-Satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Trusted by healthcare professionals and institutions worldwide.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonials */}
          {[
            {
              rating: 5,
              text: '"Amems products have significantly improved our patient outcomes. Their commitment to quality and innovation is unmatched in the industry."',
              name: 'Dr. Emily Johnson',
              position: 'Chief Medical Officer, Central Hospital',
              icon: 'fas fa-user-md text-2xl text-gray-400'
            },
            {
              rating: 5,
              text: '"We\'ve been partnering with Amems for over a decade. Their consistent reliability and cutting-edge solutions make them our preferred pharmaceutical supplier."',
              name: 'Michael Chen',
              position: 'Procurement Director, HealthFirst Group',
              icon: 'fas fa-hospital text-2xl text-gray-400'
            },
            {
              rating: 4.5,
              text: '"As a global healthcare provider, we value Amems extensive product range and their exceptional customer support. They truly understand our needs."',
              name: 'Sarah Williams',
              position: 'CEO, International Medical Network',
              icon: 'fas fa-clinic-medical text-2xl text-gray-400'
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`${
                        i < testimonial.rating ? 'fas fa-star' : 'fas fa-star-half-alt'
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <i className={testimonial.icon}></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/Reviews"
            className="!rounded-button whitespace-nowrap inline-flex items-center px-6 py-3 border border-[#1a237e] text-base font-medium rounded-md text-[#1a237e] bg-white hover:bg-gray-50 cursor-pointer"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
