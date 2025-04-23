import React from 'react'
import CountUp from "react-countup"
import { motion } from 'framer-motion'

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
}

const Statistics = () => {
  const stats = [
    { end: 88, suffix: '%', label: 'Projects Done' },
    { end: 20, suffix: '+', label: 'Happy Clients' },
    { end: 988, suffix: '+', label: 'Award Winners' },
    { end: 80, suffix: '', label: 'Pharma Supplies' }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h2 className="text-5xl font-bold text-gray-800">
                <CountUp end={stat.end} duration={2.5} />{stat.suffix}
              </h2>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics
