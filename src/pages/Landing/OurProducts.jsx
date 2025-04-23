import React from 'react';
import logo from '../../assets/logo/Pharma.png';
import doctor from '../../../public/images/DocProduct-1.png';
import med1 from '../../../public/images/med.jpeg'
import med2 from '../../../public/images/med2.jpeg'

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Nolable Parns 60mg ",
      description:
        "Nolable Parn is a trusted pain relief medication designed to quickly alleviate moderate to severe pain",
      image: med1 ,
    },
    {
      id: 2,
      name: "Molizoc 100 Adiems",
      description: "Molizoc is a broad-spectrum antibiotic used to treat various bacterial infections effectively. ",
      image: med2,
    },
    {
      id: 3,
      name: "Paracetamol 650mg",
      description:
        "Crystal clear audio with long battery life in a compact design",
      image: med1,
    },
    {
      id: 4,
      name: "Dolo 650mg",
      description: "Powerful sound in a portable package for music anywhere",
      image: med2,
    },
    {
      id: 5 ,
      name: "Nolable Parns 60mg ",
      description:
        "Nolable Parn is a trusted pain relief medication designed to quickly alleviate moderate to severe pain",
      image: med1 ,
    },
    {
      id: 6,
      name: "Molizoc 100 Adiems",
      description: "Molizoc is a broad-spectrum antibiotic used to treat various bacterial infections effectively. ",
      image: med2,
    },
    {
      id: 7,
      name: "Paracetamol 650mg",
      description:
        "Crystal clear audio with long battery life in a compact design",
      image: med1,
    },
    {
      id: 8,
      name: "Dolo 650mg",
      description: "Powerful sound in a portable package for music anywhere",
      image: med2,
    },
  ];

  return (
    <div>
      <section className="mt-[120px] px-8">
        <div className="container mx-auto">
          <div className="bg-blue-100 rounded-full py-[80px] mb-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
          </div>
        </div>
      </section>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img
                src={doctor}
                alt="Healthcare professional in white coat with stethoscope"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="max-w-lg">
              <span className="text-orange-500 font-medium uppercase tracking-wide">
                INNOVATIVE
              </span>
              <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                Leading the Way in Pharmaceutical Innovation
              </h1>
              <div className="mt-6 text-gray-500 space-y-4">
                <p className="text-justify font-bold">
                  Discover a comprehensive range of high-quality pharmaceutical
                  products at Innovative. From essential medications to
                  innovative treatments, our product section is your gateway to
                  excellence in healthcare. Browse our extensive catalog to find
                  FDA-approved solutions tailored to meet your needs. Explore
                  now and experience the difference with Innovative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-5xl mb-10">
            <h2 className="font-extrabold">Our Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group relative h-[300px]"
        >
          {/* Image container taking full space */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={product.image || product.logo}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
          </div>
          
          {/* Content area that slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-transparent">
            <h3 className="text-lg font-semibold text-white mb-2">
              {product.name}
            </h3>
            <p className="text-gray-200 text-sm">
              {product.description}
            </p>
            
            {/* Optional view details button */}
            <button className="mt-4 text-sm font-medium text-white bg-blue-600 bg-opacity-70 hover:bg-opacity-100 px-4 py-2 rounded-md transition-all duration-300 inline-flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
          <div className="z-10 md:w-1/2">
            <p className="text-orange-500 font-medium mb-2 uppercase tracking-wide">
              CONTACT INFO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Need Medicines?
            </h2>
            <p className="text-gray-700 mb-6">
              Contact Us Now for First Free Visit
            </p>

            <a
              href="tel:+97156227223"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +971 56 2272323
            </a>
          </div>

          <div className="mt-8 md:mt-0 z-10">
            <img
              src={logo}
              alt="Amepoxx Medicine Bottle"
              className="max-h-72 object-contain"
            />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-50 rounded-full opacity-40 -ml-12 -mb-12"></div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
