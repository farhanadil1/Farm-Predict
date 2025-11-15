import React from 'react'

const WhatWeDo = () => {
  const services = [
    { title: "Crop Prediction", img: "https://placehold.co/400x300/F2E8C6/466336?text=Crops" },
    { title: "Fertilizer Prediction", img: "https://placehold.co/400x300/466336/FFFFFF?text=Tractor" },
    { title: "Irrigation Analytics", img: "https://placehold.co/400x300/F2E8C6/466336?text=Drone+View" },
    { title: "Market Analysis", img: "https://placehold.co/400x300/466336/FFFFFF?text=Analytics" },
  ];

  return (
    <div className="bg-green-900 text-white py-16 md:py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Agricultural Platform Offers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-green-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <h3 className="font-semibold text-xl p-6 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo
