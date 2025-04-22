import React from "react";
import logo from '../../assets/logo/Pharma.png'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-[1024px] w-full bg-white">
      <AboutUs />
      <Products />
      <CustomerServiceSection/>
          </div>
  );
};


const AboutUs = () => {
  return (
    <section className="py-[110px] px-8">
      <div className="container mx-auto">
        <div className="bg-blue-100 rounded-full py-8 mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        </div>

        <SectionBlock
          title="Mission"
          content="At Innovation, we are revolutionizing the pharmaceutical landscape in the Middle East through the integration of cutting-edge medical technology and a commitment to professional expertise. Drawing from our experience and knowledge base sourced from the United States and Europe, we strive to provide access to innovative drugs and medical solutions that enhance patient care and save lives."
          imageUrl="https://readdy.ai/api/search-image?query=A%20professional%20medical%20scientist%20or%20doctor%20in%20a%20lab%20coat%20working%20with%20advanced%20medical%20equipment%2C%20analyzing%20data%20on%20computer%20screens%20with%20medical%20charts%20and%20graphs%2C%20clean%20modern%20laboratory%20environment%2C%20soft%20blue%20lighting%2C%20professional%20medical%20setting&width=600&height=400&seq=1&orientation=landscape"
          imageAlt="Medical professional working with technology"
        />

        <SectionBlock
          title="Vision"
          content="Our vision at Innovation is to be the premier provider of pharmaceuticals in the Middle East, setting new standards of excellence in healthcare delivery. By leveraging our team's diverse expertise, including cardiologists, anesthesiologists, general practitioners, pediatricians, surgeons, nephrologists, urologists, neurologists, oncologists, and specialists from various disciplines, we aim to bridge the gap between technological advancement and medical practice."
          imageUrl="https://readdy.ai/api/search-image?query=A%20diverse%20team%20of%20healthcare%20professionals%20collaborating%20in%20a%20modern%20hospital%20setting%2C%20doctors%20and%20specialists%20reviewing%20medical%20data%2C%20high-tech%20medical%20environment%20with%20blue%20accents%2C%20professional%20healthcare%20setting%20with%20advanced%20equipment&width=600&height=400&seq=2&orientation=landscape"
          imageAlt="Healthcare professionals collaborating"
          reverse={true}
        />
      </div>
    </section>
  );
};

const SectionBlock = ({ title, content, imageUrl, imageAlt, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-16 mb-20`}>
      {!reverse ? (
        <>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">{content}</p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-80 overflow-hidden rounded-lg order-2 md:order-1">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-justify ">{content}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Products = () => {
    const productCategories = [
      {
        icon: "fas fa-heartbeat",
        title: "Cardiovascular",
        description: "Advanced treatments for heart conditions and vascular disorders.",
        color: "bg-red-50 text-red-500"
      },
      {
        icon: "fas fa-brain",
        title: "Neurology",
        description: "Innovative solutions for neurological disorders and conditions.",
        color: "bg-purple-50 text-purple-500"
      },
      {
        icon: "fas fa-pills",
        title: "Pharmaceuticals",
        description: "High-quality medications developed with the latest research.",
        color: "bg-blue-50 text-blue-500"
      },
      {
        icon: "fas fa-microscope",
        title: "Diagnostics",
        description: "Cutting-edge diagnostic tools for accurate medical assessments.",
        color: "bg-green-50 text-green-500"
      }
    ];
  
    return (
      <section className="py-16 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h5 className="text-blue-600 font-medium mb-2 uppercase tracking-wider">Our Solutions</h5>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Innovative Medical Products
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          {/* text */}
          <div className="">
              <p className="text-gray-700 mb-8  leading-relaxed text-lg">
                We address the high prevalence of acquired and congenital
                cardiovascular disorders in the region while tackling
                other serious health challenges. Our pharmaceutical products are developed with
                cutting-edge technology and meet the highest international
                standards for quality and efficacy.
              </p>
              </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
           
              <div className="grid sm:grid-cols-2 gap-6">
                {productCategories.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className={`${product.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                      <i className={`${product.icon} text-2xl`}></i>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{product.title}</h3>
                    <p className="text-gray-60 ">{product.description}</p>
                    
                  </div>
                ))}
              </div>
            
            <div className="relative  lg:order-2">
              <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
              <img
                  src={logo}
                  alt="Medical products and pharmaceuticals"
                  className="w-full h-96 object-cover object-center rounded-lg relative z-10"
                />
                <div className="bg-blue-600 text-white py-3 px-6 rounded-lg absolute bottom-8 left-8 z-20 shadow-md">
                  <p className="font-bold">Trusted by 500+ Healthcare Providers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md">
              Browse Products
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-lg border border-blue-200 transition-colors shadow-sm">
              Request Catalog
            </button>
          </div>
        </div>
      </section>
    );
  };

  const CustomerServiceSection = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Customer Service Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <img 
              src={logo} 
              alt="Healthcare professionals in lab coats" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Customer Service</h2>
            
            <p className="text-gray-600 mb-4 text-justify">
              We will ensure that the products will arch organization in time according to our contracts within a timeframe consistent with prescribed orders.
            </p>
            
            <p className="text-gray-600 mb-4 text-justify">
              We will provide education and training to our client and customers and their care gives in accordance with the prescription and the language understood by your members of staff.
            </p>
            
            <p className="text-gray-600 mb-8 text-justify">
              All products we sell and market in complete compliance with US FDA (Food and Drug Administration).
            </p>
            
            <Link to="/Contacts"><button  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Contact Us Now
            </button>
            </Link>
          </div>
        </div>
        
        {/* Anti-Bribery Statement Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Anti-Bribery Statement</h2>
          
          <p className="text-gray-600 text-justify">
            It is INNOVATIVE US's policy to conduct all of our business in an honest and ethical manner. We take a zero-tolerance approach to bribery and corruption, and we are committed to acting professionally, fairly and with integrity in all our business dealings and relationships. We expect all individuals working for us or on our behalf in any capacity to uphold the spirit of our policy.
          </p>
        </div>
      </div>
    );
  };


export default App;