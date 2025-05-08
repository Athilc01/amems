import { useState } from 'react';
import med1 from '../../../public/images/med.jpeg'
import med2 from '../../../public/images/med2.jpeg'

export default function HealthProductsDisplay() {
  // Added Arrow icon for the "See All Products" link
  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const products = [
    {
      id: 1,
      category: "Nutrition",
      name: "Dietary Supplement",
      description: "Health Products",
      image: med1,
      rating: 4.5,
      originalPrice: 80.00,
      price: 64.00,
      discount: 60,
    },
    {
      id: 2,
      category: "Healthcare",
      name: "Nitrile Disposable",
      description: "gloves 100",
      image: med2,
      rating: 4.5,
      originalPrice: null,
      price: 140.00,
      discount: null,
    },
    {
      id: 3,
      category: "Medicine",
      name: "Women's multi",
      description: "Vitamins A, Biotin- cranberry",
      image: med1,
      rating: 4.5,
      originalPrice: 160.00,
      price: 80.00,
      discount: 60,
    },
    {
      id: 4,
      category: "Wellness",
      name: "Antibacterial Liquid",
      description: "Hand Soap",
      image: med2,
      rating: 4.5,
      originalPrice: null,
      price: 64.00,
      discount: null,
    }
  ];



  return (
    <div className="bg-indigo-900 rounded-3xl p-10">
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Todays Best Deals<br />
            For You!
          </h1>
          <a href="#" className="text-white flex items-center hover:underline">
            SEE ALL PRODUCTS <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="relative p-4">
              
              <div className="flex justify-center items-center h-40">
                <img
                  src={product.image}
                  alt={product.name}
                   className="h-40 w-[250px] transition-transform duration-300 transform hover:scale-110"
                />
              </div>
            </div>
            
            <div className="px-4 pb-4">
              <div className="flex items-center text-sm mb-1">
                <span className="text-gray-400">{product.category}</span>
                <div className="ml-auto flex items-center">
                  <span className="text-orange-400 mr-1">★</span>
                  <span className="text-gray-700">({product.rating})</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-gray-800 font-bold">{product.name}</h3>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}