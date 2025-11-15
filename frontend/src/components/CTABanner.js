import React from "react";

const PerformanceDashboard = () => {
  return (
    <div className="min-h-screen min-[1560px]:min-h-[400px] bg-gradient-to-br from-green-900 to-green-800 text-white py-16 px-20">
      
      {/* Title */}
      <p className='text-xs mx-auto font-normal text-orange-300 border w-fit py-1 px-2 rounded-lg border-orange-300 mb-2'>
              <span>PERFORMANCE</span>
      </p>
      <h1 className="text-5xl font-semibold mb-10 text-center">
        Model Performance Overview
      </h1>

      {/* Bento Grid */}
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 max-w-7xl mx-auto">

        {/*Accuracy Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl col-span-1 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">Accuracy</h2>
          <p className="text-5xl font-bold text-green-300 mt-4">91%</p>
          <p className="text-sm text-gray-300 mt-2">Overall model accuracy</p>
        </div>

        {/*Error Metrics */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl col-span-1 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">MAE</h2>
          <p className="text-5xl font-bold text-yellow-300 mt-4">12.5</p>
          <p className="text-sm text-gray-300 mt-2">Mean Absolute Error</p>
        </div>

        {/*RMSE */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl col-span-1 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">RMSE</h2>
          <p className="text-5xl font-bold text-orange-300 mt-4">18.2</p>
          <p className="text-sm text-gray-300 mt-2">Root Mean Square Error</p>
        </div>

        {/*F1 Score */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl col-span-1 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">F1 Score</h2>
          <p className="text-5xl font-bold text-green-400 mt-4">0.92</p>
          <p className="text-sm text-gray-300 mt-2">Classification performance</p>
        </div>

        {/*Chart Placeholder (Big Bento Box) */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl col-span-2 h-64 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Accuracy Trend</h2>
          <div className="flex-1 flex items-center justify-center text-gray-300">
            <span className="opacity-60">Chart coming soon...</span>
          </div>
        </div>

        {/*Comparison Box */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl col-span-2 h-64 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Model Comparison</h2>

          <table className="text-sm w-full text-gray-300">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-2">Model</th>
                <th className="p-2">Accuracy</th>
                <th className="p-2">MAE</th>
                <th className="p-2">Train Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center border-white/10">
                <td className="p-2">Crop Prediction</td>
                <td className="p-2">92%</td>
                <td className="p-2">11.5</td>
                <td className="p-2">1.2 hrs</td>
              </tr>
              <tr className="border-b text-center border-white/10">
                <td className="p-2">Fertilizer Model</td>
                <td className="p-2">89%</td>
                <td className="p-2">14.2</td>
                <td className="p-2">1.0 hrs</td>
              </tr>
              <tr className="text-center">
                <td className="p-2">Irrigation Model</td>
                <td className="p-2">94%</td>
                <td className="p-2">9.6</td>
                <td className="p-2">1.4 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default PerformanceDashboard;
