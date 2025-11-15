import React from 'react'

const SeedToHarvest = () => {
  const steps = [
    { title: "Harvesting Solutions", img: "https://placehold.co/400x300/D1D099/466336?text=Harvesting" },
    { title: "Sustainable Planting", img: "https://placehold.co/400x300/466336/FFFFFF?text=Planting" },
    { title: "Quality Grains", img: "https://placehold.co/400x300/F2E8C6/466336?text=Grains" },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12">From Seed to Harvest</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={step.img} alt={step.title} className="w-full h-56 object-cover" />
              <h3 className="font-semibold text-xl p-6">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-yellow-400 text-green-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SeedToHarvest
