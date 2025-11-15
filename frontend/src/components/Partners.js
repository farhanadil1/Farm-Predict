import React from 'react'

const Partners = () => {
  const partners = ["AgriTech", "EcoFarm", "BioStrive", "Harvest+", "TerraGro"];
  return (
    <div className="bg-gray-50 py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-8">
        {partners.map((partner) => (
          <div key={partner} className="text-gray-500 font-semibold text-lg opacity-70">
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners
