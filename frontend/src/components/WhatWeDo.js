import React from 'react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  const services = [
    {
      id: "01.",
      title: "Crop Prediction",
      img: "https://images.unsplash.com/photo-1511735643442-503bb3bd348a",
      desc: "Accurately forecasts crop yield and growth patterns using advanced machine learning models."
    },
    {
      id: "02.",
      title: "Fertilizer Prediction",
      img: "https://images.unsplash.com/photo-1710666184386-9f42d0227237",
      desc: "Recommends the right fertilizer type and quantity to optimize soil health and boost productivity."
    },
    {
      id: "03.",
      title: "Irrigation Analytics",
      img: "https://plus.unsplash.com/premium_photo-1661845609789-635c5e35c4ba",
      desc: "Predicts precise water requirements based on weather, soil moisture, and crop conditions."
    },
    {
      id: "04.",
      title: "Market Analysis",
      img: "https://images.unsplash.com/photo-1610319263685-dffecc4d4a15",
      desc: "Analyzes market trends and price forecasts to help farmers make profitable selling decisions."
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-10 bg-green-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between md:px-10 items-start md:items-center gap-6">

          <div>
            <p className="text-xs font-medium text-orange-300 border w-fit py-1 px-2 rounded-lg border-orange-300 mb-2">
              FARM SOLUTIONS
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
              What Our Agricultural<br className="hidden md:block" /> Platform Offers
            </h2>

            <p className="text-gray-200 max-w-xl mt-3 text-sm sm:text-base">
              Smart, sustainable, and AI-driven agricultural solutions.
            </p>
          </div>

          <Link to={`/solutions`}>
            <button className="bg-orange-200 px-5 sm:px-6 py-3 rounded-lg text-black font-medium text-sm shadow-xl hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </Link>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-14 px-2 sm:px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer 
                         transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              
              {/* SERVICE IMAGE */}
              <img
                src={`${service.img}?w=800&auto=format&fit=crop`}
                alt={service.title}
                className="w-full h-[260px] sm:h-[300px] md:h-[330px] object-cover 
                           transition-transform duration-500 group-hover:scale-105"
              />

              {/* GLASS FADE CONTENT */}
              <div className="
                absolute bottom-0 w-full
                bg-gradient-to-t 
                from-black/50 via-black/20 to-transparent
                backdrop-blur-[3px]
                px-4 py-3
              ">
                <h3 className="text-white font-semibold text-lg">{service.id}</h3>
                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  {service.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
