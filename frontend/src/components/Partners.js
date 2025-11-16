import React from "react";

const Partners = () => {
  

const steps = [
  {
    step: "STEP 01",
    title: "Choose Prediction Type",
    desc: "Select what you want to predict crop yield, fertilizer needs, irrigation, or market trends.",
    icon: `./choose.svg`,
  },
  {
    step: "STEP 02",
    title: "Enter Farm Data",
    desc: "Provide essential details such as soil type, weather conditions, crop details, or field information.",
    icon: `./enter.svg`,
  },
  {
    step: "STEP 03",
    title: "AI Analysis",
    desc: "Our machine learning models analyze your inputs using trained agricultural datasets.",
    icon: `./ai.svg`,
  },
  {
    step: "STEP 04",
    title: "Get Predictions",
    desc: "Receive accurate insights and actionable recommendations to improve crop output and resource efficiency.",
    icon: `./prediction.svg`,
  },
];


  return (
    <section className="bg-white pb-20 pt-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <p className="text-xs font-medium mx-auto text-orange-500 border border-orange-400 w-fit py-1 px-2 rounded-lg mb-3">
          WORKING PROCESS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mt-2">
          How Does Our Process Work?
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {steps.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl p-6 shadow-md border border-gray-200 bg-white 
                transition-all duration-300 cursor-pointer group
                hover:bg-green-50 hover:border-green-600 hover:shadow-xl
              "
            >
              {/* Step Label */}
              <div className="-mt-2 mb-4">
                <span className="
                  text-xs font-semibold px-3 py-1 rounded-md bg-yellow-200 text-gray-700
                  transition-all duration-300
                  group-hover:bg-green-600 group-hover:text-white
                ">
                  {item.step}
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center">
              <img 
              src={item.icon} alt={item.title}
              className="mb-4 md:h-32 h-28 items-center"></img>
              </div>
              {/* Title */}
              <h3 className="md:text-lg text-sm font-semibold text-gray-800 mt-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs md:text-sm mt-2">{item.desc}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Partners;
