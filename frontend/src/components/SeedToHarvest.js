import React from 'react'
import { Link } from 'react-router-dom';

const SeedToHarvest = () => {
  const steps = [
    { 
      title: "Harvesting Success", 
      img: "https://images.unsplash.com/photo-1708266659900-7e11f838fda4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag1: "FARMING",
      tag2: "CROP"
    },
    { title: "Sustainable Planting",
      img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag1: "ORGANIC",
      tag2: "PROFIT"
     },
    { title: "Quality Grains", 
      img: "https://plus.unsplash.com/premium_photo-1722945635992-8eda6a907978?q=80&w=1060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag1: "AGRICULTURE",
      tag2: "HARVESTING"
     },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-7xl font-bold pr-32 text-green-900">From Planting</h2>
        <h2 className="text-3xl md:text-7xl font-bold pl-32 text-orange-200">to Harvest</h2>
        <div className="grid md:grid-cols-3 gap-4 px-20 z-10 -mt-2">
          {steps.map((step) => (
            <div key={step.title} className="overflow-hidden cursor-pointer">
              <img src={step.img} alt={step.title} className="w-full rounded-md h-96 object-cover" />
              <div className='flex mt-2'>
                <p className='px-2 py-1 text-xs mt-4 text-gray-500 border border-gray-500 rounded-lg'>{step.tag1}</p>
                <p className='px-2 py-1 text-xs mt-4 text-gray-500 border border-gray-500 ml-2 rounded-lg'>{step.tag2}</p>
              </div>
              <h3 className="font-semibold text-left text-gray-900 text-2xl mt-1.5 hover:underline
               transition-all duration-300 cursor-pointer">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
        <Link to={`/solutions`}>
            <button className='bg-orange-200 mt-12 px-6 py-3 rounded-lg text-black h-fit items-center
            font-medium text-sm shadow-xl hover:scale-105 transition-all duration-300'>
              View More
            </button>
        </Link>
      </div>
    </div>
  );
};

export default SeedToHarvest
