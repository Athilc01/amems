import React from "react";
import { useState ,useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);
    const contentRefs = useRef([]);
  
    const faqItems = [
      {
        question: "What pharmaceutical products does Innovative offer?",
        answer: "Innovative offers a wide range of pharmaceutical products, including prescription medications, over-the-counter drugs, specialty medicines, and innovative treatments for various health conditions."
      },
      {
        question: "Are Innovative's products FDA-approved?",
        answer: "Content would go here"
      },
      {
        question: "What if I have a question about a specific product or need assistance?",
        answer: "Content would go here"
      },
      {
        question: "Does Innovative offer discounts for bulk orders?",
        answer: "Content would go here"
      }
    ];
  
    const toggleItem = (index) => {
      setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    
  return (
    <div>
      <section className="mt-[120px] px-8">
        <div className="container mx-auto">
          <div className="bg-amemsblue rounded-full py-8 mb-10  text-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Email Subscription Column */}
            <div className="w-full flex flex-col justify-center">
              <form className="pt-10">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="sample@gmail.com"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Information Column */}
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Get In Touch with Us!
              </h2>

              <p className="text-gray-600 mb-12 max-w-lg">
                Innovative, a leading American Middle East-based pharmaceutical provider, offers top-quality medications to ensure optimal health outcomes for clients worldwide.
              </p>

              <div className="space-y-8">
                {/* Mail Address */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Mail Address</h3>
                    <p className="text-indigo-600 mb-1">innovativeus@mail.com</p>
                    <p className="text-gray-600">info@innovativeamems.com</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <FontAwesomeIcon icon={faPhone} className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600 mb-1">+1 702 595 3772</p>
                    <p className="text-gray-600">+971 56 2272323</p>
                  </div>
                </div>

                {/* Our Address */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <FontAwesomeIcon icon={faLocationDot} className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      246-123, Al Habtoor Industrial Area, Al Qusais, Ind. Area 3, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">F.A.Q.</h1>
        <p className="text-lg text-gray-600">
          Brother set had private his letters observe outward resolve.<br />
          Shutters ye marriage to throwing we as.
        </p>
      </div>

      <div className="mt-8">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full flex justify-between items-center p-5 text-left text-lg font-semibold transition-colors duration-300 ${
                expandedIndex === index 
                  ? 'bg-amemsblue text-white' 
                  : 'bg-gray-50 text-gray-800 border border-gray-200'
              }`}
            >
              {item.question}
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <div className="p-5 bg-gray-50 text-gray-600 border border-gray-200 border-t-0">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-4xl mx-auto my-10 bg-blue-50 rounded-lg px-6 py-8 text-center shadow-md relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Subscribe for Newsletter!</h1>
        
        <p className="text-gray-600 text-lg mb-8 px-4 md:px-12 mx-auto">
          Subscribe to Innovative's newsletter for the latest updates, promotions, and exclusive offers in the pharmaceutical world. Stay connected with new product launches, industry insights, and special discounts.
        </p>
        
        {/* Form */}
        <div className="flex flex-col md:flex-row max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="sample@mail.com"
            className="flex-1 py-4 px-5 border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-800 hover:bg-blue-900 text-white py-4 px-8 rounded-b-lg md:rounded-bl-none md:rounded-r-lg font-medium transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Contacts;