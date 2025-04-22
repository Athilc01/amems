import React from 'react'

const Chooseamems = () => {
  return (
    <div className="py-12 bg-[#f5f5f5] font-Satoshi ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 ">
          <div className="text-center">
            <h2 className="text-3xl font-Satoshi font-bold text-gray-900 sm:text-4xl">
              Why Choose Amems
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Discover why we are the best choice.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#1a237e] mb-4">
                  <i className="fas fa-flask text-3xl text-amemsblue "></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900  ">Engineering & Services</h3>
                <p className="mt-2 text-gray-500">
                  {/* Pioneering research and development to create innovative pharmaceutical solutions. */}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#1a237e] mb-4">
                  <i className="fas fa-medal text-3xl text-amemsblue"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Patient Room Solution</h3>
                <p className="mt-2 text-gray-500">
                  {/* Rigorous quality control ensuring the highest standards for all our products. */}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#1a237e] mb-4">
                  <i className="fas fa-globe text-3xl text-amemsblue"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Operating Room Solutions</h3>
                <p className="mt-2 text-gray-500">
                  {/* Serving patients and healthcare providers across more than 100 countries worldwide. */}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#1a237e] mb-4">
                  <i className="fas fa-heartbeat text-3xl text-amemsblue"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mobile Medical Equipment</h3>
                <p className="mt-2 text-gray-500">
                  {/* Committed to improving patient outcomes and enhancing quality of life. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
  )
}

export default Chooseamems
