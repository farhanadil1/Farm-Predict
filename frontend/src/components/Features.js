import React from 'react'

const Features = () => {
  const featureList = [
    { title: "Risk Management", icon: "🛡️" },
    { title: "Farming Solutions", icon: "🌱" },
    { title: "Market Access", icon: "📈" },
    { title: "Pest & Disease", icon: "🐞" },
    { title: "Management & Water", icon: "💧" },
    { title: "Advisory & Training", icon: "🧑‍🏫" },
  ];

  return (
    <div className="bg-white py-16 md:py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Your Agriculture Partner</h2>
          <p className="mt-4 text-gray-600">
            We provide a comprehensive suite of tools and services to support you at every stage of the agricultural lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {featureList.map((feature) => (
            <div key={feature.title}>
              <div className="bg-yellow-100 text-yellow-600 rounded-full h-12 w-12 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-green-900">{feature.title}</h3>
              <p className="mt-1 text-gray-500 text-sm">Description of the feature goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features
