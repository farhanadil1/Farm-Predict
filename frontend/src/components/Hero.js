import React from "react";
import { FaTractor } from "react-icons/fa";
import { GiFertilizerBag, GiWaterMill } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[580px] text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="./hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      <div className="relative z-10 h-full max-w-7xl mx-auto">

        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row justify-between px-6 md:px-10 pt-28 gap-6">

          {/* LEFT */}
          <div className="text-left">
            <p className="text-sm md:text-md font-medium text-gray-300">
              Sustainable solutions for modern
            </p>
            <p className="text-4xl md:text-7xl font-semibold text-orange-200 leading-tight">
              Agriculture
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-left md:text-right">
            <p className="text-4xl md:text-7xl font-semibold text-orange-200 leading-tight">
              2000
            </p>
            <p className="text-sm md:text-md font-medium text-gray-300">
              Hectares under sustainable cultivation
            </p>
          </div>

        </div>

        {/* ROW 2 */}
        <div className="absolute bottom-6 md:bottom-12 left-0 w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

          {/* LEFT SIDE */}
          <div>
            <p className="text-xs md:text-sm text-gray-200 leading-tight">
              Our purpose extends beyond cultivation, we’re shaping <br className="hidden md:block" />
              a better tomorrow for people, communities, and the Earth.
            </p>

            {/* GLASSY BUTTONS */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="backdrop-blur-xl bg-white/20 flex items-center px-4 py-3 rounded-xl font-semibold text-white hover:bg-white/30 transition-all shadow-lg">
                <FaTractor className="text-orange-200" size={26} />
                <span className="text-sm ml-2">Crop</span>
              </button>

              <button className="backdrop-blur-xl bg-white/20 flex items-center px-4 py-3 rounded-xl font-semibold text-white hover:bg-white/30 transition-all shadow-lg">
                <GiFertilizerBag className="text-orange-200" size={26} />
                <span className="text-sm ml-2">Fertlizer</span>
              </button>

              <button className="backdrop-blur-xl bg-white/20 flex items-center px-4 py-3 rounded-xl font-semibold text-white hover:bg-white/30 transition-all shadow-lg">
                <GiWaterMill className="text-orange-200" size={26} />
                <span className="text-sm ml-2">Irrigation</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <p className="text-5xl md:text-[80px] leading-none font-semibold text-white">
            Driven by <br className="hidden md:block" /> Innovation
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;
