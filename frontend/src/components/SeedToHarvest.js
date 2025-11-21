import React from 'react'
import { Link } from 'react-router-dom';

const SeedToHarvest = () => {
  const steps = [
    { 
      title: "Harvesting Success", 
      img: "https://images.unsplash.com/photo-1708266659900-7e11f838fda4?q=80&w=1170&auto=format&fit=crop",
      tag1: "FARMING",
      tag2: "CROP"
    },
    { 
      title: "Sustainable Planting",
      img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1170&auto=format&fit=crop",
      tag1: "ORGANIC",
      tag2: "PROFIT"
    },
    { 
      title: "Quality Grains", 
      img: "https://plus.unsplash.com/premium_photo-1722945635992-8eda6a907978?q=80&w=1060&auto=format&fit=crop",
      tag1: "AGRICULTURE",
      tag2: "HARVESTING"
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-8 md:py-20">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
          font-bold text-green-900
          md:pr-32
        ">
          From Planting
        </h2>

        <h2 className="
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
          font-bold text-orange-200
          md:pl-32
          mt-1
        ">
          to Harvest
        </h2>

        <div className="grid grid-cols-1 md:z-10 md:-mt-2.5 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 px-4 sm:px-10 md:px-20">
          {steps.map((step) => (
            <div
              key={step.title}
              className="overflow-hidden cursor-pointer rounded-lg"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-72 sm:h-80 md:h-96 rounded-lg object-cover shadow-md transition-all duration-300 hover:scale-[1.02]"
              />

              <div className="flex mt-5">
                <p className="px-2 py-1 text-[10px] sm:text-xs text-gray-600 border border-gray-500 rounded-lg">
                  {step.tag1}
                </p>
                <p className="px-2 py-1 text-[10px] sm:text-xs text-gray-600 border border-gray-500 ml-2 rounded-lg">
                  {step.tag2}
                </p>
              </div>

              <h3 className="font-semibold text-left text-gray-900 text-xl sm:text-2xl mt-2 hover:underline transition-all duration-200">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        <Link to={"/solutions"}>
          <button className="bg-orange-200 mt-12 px-6 py-3 rounded-lg text-black font-medium text-sm shadow-xl hover:scale-105 transition-all duration-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SeedToHarvest;
