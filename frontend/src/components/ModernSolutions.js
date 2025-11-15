import React from 'react'

const ModernSolutions = () => {
  return (
    <div className="bg-white py-16 md:py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Modern Solutions for Traditional Challenges</h2>
          <p className="mt-4 text-gray-600">
            We integrate cutting-edge technology to simplify complex agricultural challenges with time-tested
             agricultural practices to enhance 
            productivity, sustainability, and profitability for farmers worldwide. Through advanced 
            crop prediction models, intelligent irrigation forecasting, precise fertilizer recommendations,
             and real-time market analysis, we empower farmers to make smarter, data-driven decisions at 
             every stage of cultivation. 
          </p>
          <button className="mt-8 bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700">
            Learn More
          </button>
        </div>
        <div>
          <img src="./tractor.jpg" alt="Combine Harvester" className="rounded-lg shadow-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default ModernSolutions
