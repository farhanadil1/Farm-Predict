import React from "react";
import { FaTractor } from "react-icons/fa";
import { GiFertilizerBag } from "react-icons/gi";
import { GiWaterMill } from "react-icons/gi";




const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="./hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Foreground Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto">

        {/* ROW 1: Left + Right */}
        <div className="flex justify-between px-10 pt-32">

          {/* LEFT TEXT */}
          <div className="text-left">
            <p className="text-md font-medium text-gray-300">Sustainable solutions for modern</p>
            <p className="text-7xl font-semibold text-orange-200">Agriculture</p>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-right">
            <p className="text-7xl font-semibold text-orange-200">2000</p>
            <p className="text-md font-medium text-gray-300">Hectares under sustainable cultivation</p>
          </div>

        </div>

        {/* ROW 2: Left + Right (BOTTOM OF HERO) */}
        <div className="absolute bottom-12 left-0 w-full px-10 flex justify-between">

          {/* LEFT SIDE */}
          <div className="mt-6 pt-6">
  <p className="text-sm text-gray-200 leading-tight">
    Our purpose extends beyond cultivation, we’re shaping <br/>
    a better tomorrow for people, communities, and the Earth.
  </p>

  {/* Glass Buttons */}
  <div className="mt-4 flex gap-4">
    <button className="
      backdrop-blur-xl bg-white/20 flex items-center
      px-4 py-3 rounded-2xl font-semibold text-white
      hover:bg-white/30 transition-all shadow-lg
    ">
      <FaTractor className="text-orange-200" size={30}/>
      <span className="text-sm ml-2">Crop</span>
    </button>

    <button className="
      backdrop-blur-xl bg-white/20 flex items-center 
      px-4 py-3 rounded-2xl font-semibold text-white
      hover:bg-white/30 transition-all shadow-lg
    ">
      <GiFertilizerBag className="text-orange-200" size={30}/>
      <span className="text-sm ml-2">Fertlizer</span>
    </button>
    <button className="
      backdrop-blur-xl bg-white/20 flex items-center 
      px-4 py-3 rounded-2xl font-semibold text-white
      hover:bg-white/30 transition-all shadow-lg
    ">
      <GiWaterMill className="text-orange-200" size={30}/>
      <span className="text-sm ml-2">Irrigation</span>
    </button>
  </div>
</div>


          {/* RIGHT SIDE */}
          <p className="text-[80px] leading-none text-left font-semibold text-white">
            Driven by <br/> Innovation
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;
