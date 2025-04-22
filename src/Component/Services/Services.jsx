// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from "react";

const Services = () => {
  return (
    <div className="min-h-[1024px] bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1 rounded-full text-gray-600 mb-4">
            Services
          </div>
          <h1 className="text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
            Different types of department
            <br />
            we have for your healthcare
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pediatrics */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-indigo-900">
              <i className="fas fa-baby text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Pediatrics
            </h3>
            <p className="text-gray-600">
              Monitor your child's growth and development to ensure their health
              at every stage.
            </p>
          </div>

          {/* Orthopedics */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-indigo-900">
              <i className="fas fa-bone text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Orthopedics
            </h3>
            <p className="text-gray-600">
              We assess musculoskeletal health to restore mobility and relieve
              pain.
            </p>
          </div>

          {/* Gastroenterology */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-indigo-900">
              <i className="fas fa-lungs text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Gastroenterology
            </h3>
            <p className="text-gray-600">
              Evaluate your digestive system to manage and treat digestive
              conditions.
            </p>
          </div>

          {/* Neurology */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-indigo-900">
              <i className="fas fa-brain text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Neurology
            </h3>
            <p className="text-gray-600">
              Diagnose and treat neurological conditions, focusing on brain and
              nerve health.
            </p>
          </div>

          {/* Cardiology */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-indigo-900">
              <i className="fas fa-heartbeat text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Cardiology
            </h3>
            <p className="text-gray-600">
              Analyze heart health and provide care to treat cardiovascular
              diseases.
            </p>
          </div>

          {/* General care */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-indigo-900">
              <i className="fas fa-hospital text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              General care
            </h3>
            <p className="text-gray-600">
              Offer health assessments to keep you healthy and address medical
              concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
