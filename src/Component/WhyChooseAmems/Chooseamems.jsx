import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const Chooseamems = () => {
  return (
    <div className="py-12 bg-[#f5f5f5] font-Satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-Satoshi font-bold text-gray-900 sm:text-4xl"
          >
            Why Choose Amems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            Discover why we are the best choice.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'fas fa-flask',
                title: 'Engineering & Services',
                desc: 'Pioneering research and development to create innovative pharmaceutical solutions.'
              },
              {
                icon: 'fas fa-medal',
                title: 'Patient Room Solution',
                desc: 'Rigorous quality control ensuring the highest standards for all our products.'
              },
              {
                icon: 'fas fa-globe',
                title: 'Operating Room Solutions',
                desc: 'Serving patients and healthcare providers across more than 100 countries worldwide.'
              },
              {
                icon: 'fas fa-heartbeat',
                title: 'Mobile Medical Equipment',
                desc: 'Committed to improving patient outcomes and enhancing quality of life.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-[#1a237e] mb-4">
                  <i className={`${item.icon} text-3xl text-amemsblue`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chooseamems
