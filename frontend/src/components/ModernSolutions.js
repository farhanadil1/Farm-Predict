import React from 'react';
import { Link } from 'react-router-dom';

const ModernSolutions = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-24 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-xs font-medium text-orange-500 border border-orange-400 w-fit py-1 px-2 rounded-lg mb-3">
            ABOUT PLATFORM
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 leading-snug">
            Modern Solutions for Traditional Challenges
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            We integrate cutting-edge technology to simplify complex agricultural challenges with time-tested
            agricultural practices to enhance productivity, sustainability, and profitability for farmers worldwide.
            Through advanced crop prediction models, intelligent irrigation forecasting, precise fertilizer 
            recommendations, and real-time market analysis, we empower farmers to make smarter, data-driven decisions 
            at every stage of cultivation.
          </p>

          <Link to="/solutions">
            <button className="bg-orange-200 px-5 sm:px-6 py-3 rounded-lg text-black font-medium text-sm mt-6 shadow-xl 
            hover:scale-105 transition-all duration-300">
              Our Solutions
            </button>
          </Link>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <img
            src="./tractor.jpg"
            alt="Combine Harvester"
            className="rounded-lg shadow-xl w-full max-w-[500px] md:max-w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ModernSolutions;
