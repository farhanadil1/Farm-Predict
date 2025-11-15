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
    <section className="py-20 px-10 bg-[#8B9271] text-white">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-between md:px-16 items-center'>
          <div>
            {/* Heading */}
            <p className='text-xs font-normal text-orange-300 border w-fit py-1 px-2 rounded-lg border-orange-300 mb-2'>
              FARM SOLUTIONS
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-left">
              What Our Agricultural<br/> Platform Offers
            </h2>
            <p className="text-left text-gray-200 max-w-2xl mb-12 mt-3">
              Smart, sustainable, and AI-driven agricultural solutions.
            </p>
            </div>
            <Link to={`/solutions`}>
            <button className='bg-orange-200 px-6 py-3 rounded-lg text-black h-fit items-center
            font-medium shadow-xl hover:scale-105 transition-all duration-300'>
              Learn More
            </button>
            </Link>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg 
                         group cursor-pointer transition-all duration-500 
                         hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={`${service.img}?w=800&auto=format&fit=crop`}
                alt={service.title}
                className="w-full h-[340px] object-cover transition-transform duration-500 
                           group-hover:scale-105"
              />

              {/* Bottom Glass Fade */}
              <div
                className="
                  absolute bottom-0 w-full
                  bg-gradient-to-t 
                  from-black/40 via-black/10 to-transparent
                  backdrop-blur-[4px]
                  px-4 py-2
                "
              >
                <h3 className="text-white font-semibold text-left text-lg drop-shadow-xl">
                  {service.id}
                </h3>
                <h3 className="text-white font-semibold text-left text-lg drop-shadow-xl">
                  {service.title}
                </h3>
                <h3 className="text-gray-200 text-left text-xs drop-shadow-xl">
                  {service.desc}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
