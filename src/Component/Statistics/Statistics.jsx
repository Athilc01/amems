import React from 'react'
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-16 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp end={88} duration={2.5} />%
          </h2>
          <p className="text-gray-600 mt-2">Projects Done</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp end={20} duration={2.5} />+
          </h2>
          <p className="text-gray-600 mt-2">Happy Clients</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp end={988} duration={2.5} />+
          </h2>
          <p className="text-gray-600 mt-2">Award Winners</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp end={80} duration={2.5} />
          </h2>
          <p className="text-gray-600 mt-2">Pharma Supplies</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Statistics
