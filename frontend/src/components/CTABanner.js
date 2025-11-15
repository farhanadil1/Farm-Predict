import React from 'react'
import AccordionItem from './AccordionItem';

const CTABanner = () => {
  return (
    <div className="relative py-32 px-8 text-white min-h-[550px]">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1613062500018-7b2515c9c40b?q=80&w=1170&auto=format&fit=crop')" 
        }}
      ></div>

      {/* Right Half Blur + Smooth Fade */}
      <div className="absolute inset-y-0 right-0 w-1/2 -z-10">
        
        {/* Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-xl"></div>

        {/* Smooth Fade Mask */}
        <div className="
          absolute inset-0
          bg-gradient-to-l
          from-black/50 via-black/10 to-transparent
        "></div>

      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2">

        {/* LEFT EMPTY AREA (sharp image) */}
        <div></div>

        {/* RIGHT CONTENT */}
        <div className="pl-10">
          <p className='text-xs font-normal text-white border w-fit py-1 px-2 rounded-lg border-white mb-2'>
              TRUSTED FARMING SOLUTIONS
            </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            From Field to Future
          </h2>

          <div className="mt-6">
  <AccordionItem 
    title="Higher Yields" 
    desc="Improve crop outcomes with precise predictions and data-driven insights."
  />

  <AccordionItem 
    title="Cost Efficiency" 
    desc="Optimize inputs like water and fertilizer to reduce waste and save money."
  />

  <AccordionItem 
    title="Smart Planning" 
    desc="Plan ahead with intelligent forecasts for crops, irrigation, and markets."
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
