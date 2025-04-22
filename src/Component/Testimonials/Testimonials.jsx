import React from 'react'

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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "InnovaMed's products have significantly improved our patient outcomes. Their commitment to quality and innovation is unmatched in the industry."
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-user-md text-2xl text-gray-400"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Dr. Emily Johnson</h4>
                  <p className="text-sm text-gray-500">Chief Medical Officer, Central Hospital</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We've been partnering with InnovaMed for over a decade. Their consistent reliability and cutting-edge solutions make them our preferred pharmaceutical supplier."
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-hospital text-2xl text-gray-400"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Procurement Director, HealthFirst Group</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a global healthcare provider, we value InnovaMed's extensive product range and their exceptional customer support. They truly understand our needs."
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-clinic-medical text-2xl text-gray-400"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">CEO, International Medical Network</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="/Reviews  "
              className="!rounded-button whitespace-nowrap inline-flex items-center px-6 py-3 border border-[#1a237e] text-base font-medium rounded-md text-[#1a237e] bg-white hover:bg-gray-50 cursor-pointer"
            >
              Read More Testimonials
            </a>
          </div>
        </div>
      </div>
  )
}

export default Testimonials
