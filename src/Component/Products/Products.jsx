import React from 'react'

const Products = () => {
  return (
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Discover our innovative healthcare solutions designed to improve lives.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://readdy.ai/api/search-image?query=Modern%20pharmaceutical%20pill%20bottle%20with%20blue%20and%20white%20capsules%20on%20a%20clean%20white%20background%2C%20professional%20lighting%2C%20high-resolution%20product%20photography%2C%20minimalist%20pharmaceutical%20product%20presentation%2C%20medical%20grade%20appearance&width=600&height=400&seq=2&orientation=landscape"
                  alt="Pharmaceutical product"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">ImmunoBoost Pro</h3>
                <p className="mt-2 text-gray-500">
                  Advanced immune support formula with clinically proven ingredients to enhance natural defenses.
                </p>
                <div className="mt-4">
                  <a href="#" className="!rounded-button whitespace-nowrap text-[#1a237e] hover:text-[#0d1752] font-medium cursor-pointer">
                    Learn more <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://readdy.ai/api/search-image?query=Modern%20pharmaceutical%20cream%20tube%20and%20box%20packaging%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimalist%20medical%20product%20presentation%2C%20dermatological%20treatment%20appearance%2C%20high-quality%20healthcare%20product&width=600&height=400&seq=3&orientation=landscape"
                  alt="Pharmaceutical product"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">DermaClear Solution</h3>
                <p className="mt-2 text-gray-500">
                  Revolutionary dermatological treatment for chronic skin conditions with minimal side effects.
                </p>
                <div className="mt-4">
                  <a href="#" className="!rounded-button whitespace-nowrap text-[#1a237e] hover:text-[#0d1752] font-medium cursor-pointer">
                    Learn more <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://readdy.ai/api/search-image?query=Modern%20pharmaceutical%20inhalation%20device%20on%20clean%20white%20background%2C%20professional%20medical%20product%20photography%2C%20minimalist%20respiratory%20treatment%20device%2C%20high-tech%20healthcare%20equipment%2C%20precision%20engineered%20medical%20inhaler&width=600&height=400&seq=4&orientation=landscape"
                  alt="Pharmaceutical product"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">RespiClear Inhaler</h3>
                <p className="mt-2 text-gray-500">
                  Next-generation respiratory treatment delivering precise medication directly to the lungs.
                </p>
                <div className="mt-4">
                  <a href="#" className="!rounded-button whitespace-nowrap text-[#1a237e] hover:text-[#0d1752] font-medium cursor-pointer">
                    Learn more <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="#"
              className="!rounded-button whitespace-nowrap inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1a237e] hover:bg-[#0d1752] cursor-pointer"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
  )
}

export default Products
