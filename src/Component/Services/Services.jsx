import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  return (
    <div className="min-h-[1024px] bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1 rounded-full text-gray-600 mb-4">
            Services
          </div>
          <h1 className="text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
            Different types of department
            <br />
            we have for your healthcare
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Loop through services to reduce repetition */}
          {[
            {
              icon: "fas fa-baby",
              title: "Pediatrics",
              description:
                "Monitor your child's growth and development to ensure their health at every stage."
            },
            {
              icon: "fas fa-bone",
              title: "Orthopedics",
              description:
                "We assess musculoskeletal health to restore mobility and relieve pain."
            },
            {
              icon: "fas fa-lungs",
              title: "Gastroenterology",
              description:
                "Evaluate your digestive system to manage and treat digestive conditions."
            },
            {
              icon: "fas fa-brain",
              title: "Neurology",
              description:
                "Diagnose and treat neurological conditions, focusing on brain and nerve health."
            },
            {
              icon: "fas fa-heartbeat",
              title: "Cardiology",
              description:
                "Analyze heart health and provide care to treat cardiovascular diseases."
            },
            {
              icon: "fas fa-hospital",
              title: "General care",
              description:
                "Offer health assessments to keep you healthy and address medical concerns."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mb-4 text-indigo-900">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
