import React from 'react'

const CTABanner = () => {
  return (
    <div className="relative py-32 px-8 text-white text-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x800/466336/F2E8C6?text=Tractor+at+Sunset')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">From Field to Future</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Powering the next generation of agriculture with sustainable and intelligent solutions.
        </p>
        <button className="mt-8 bg-yellow-400 text-green-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-300">
          Our Solutions
        </button>
      </div>
    </div>
  );
};

export default CTABanner
