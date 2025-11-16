import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const PerformanceDashboard = () => {
  // Sample Data
  const accuracyTrend = [
    { month: "Jan", accuracy: 82, mae: 18 },
    { month: "Feb", accuracy: 85, mae: 16.4 },
    { month: "Mar", accuracy: 88, mae: 14.9 },
    { month: "Apr", accuracy: 90, mae: 13.4 },
    { month: "May", accuracy: 91, mae: 12.5 },
    { month: "Jun", accuracy: 92, mae: 11.9 },
    { month: "Jul", accuracy: 93, mae: 11.3 },
  ];

  const modelComparison = [
    { name: "Crop", accuracy: 92, mae: 11.5 },
    { name: "Fertilizer", accuracy: 89, mae: 14.2 },
    { name: "Irrigation", accuracy: 94, mae: 9.6 },
    { name: "Market", accuracy: 88.5, mae: 13.9 },
  ];

  const maeOverTime = [
    { month: "Jan", MAE: 18 },
    { month: "Feb", MAE: 16.4 },
    { month: "Mar", MAE: 14.9 },
    { month: "Apr", MAE: 13.4 },
    { month: "May", MAE: 12.5 },
  ];

  const modelDistribution = [
    { name: "Crop", value: 35 },
    { name: "Fertilizer", value: 25 },
    { name: "Irrigation", value: 30 },
    { name: "Market", value: 10 },
  ];

  const PIE_COLORS = ["#4F46E5", "#F59E0B", "#10B981", "#EF4444"];

  return (
    <div className="bg-gray-50 min-h-screen py-14 px-4 sm:px-6 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-xs font-medium text-orange-500 border border-orange-400 px-2 py-1 rounded-lg w-fit mx-auto">
          PERFORMANCE DASHBOARD
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mt-3">
          Model Performance Overview
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          A complete evaluation of accuracy, error metrics, and model efficiency.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
        {[
          { title: "Accuracy", value: "91%", color: "text-indigo-600" },
          { title: "MAE", value: "12.5", color: "text-yellow-600" },
          { title: "RMSE", value: "18.2", color: "text-orange-600" },
          { title: "F1 Score", value: "0.92", color: "text-green-600" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className={`text-3xl md:text-4xl font-bold mt-2 ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>


      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-10">
        
        {/* accuracy */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700 mb-4 text-lg">Accuracy Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accuracyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis domain={[75, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="accuracy" stroke="#10B981" strokeWidth={3} dot />
                <Line type="monotone" dataKey="mae" stroke="#F59E0B" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* comparison */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700 mb-4 text-lg">Model Comparison</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="accuracy" fill="#4F46E5" radius={[6, 6, 0, 0]} />
                <Bar dataKey="mae" fill="#F59E0B" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        
        {/* MAE */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700 mb-4 text-lg">MAE Over Time</h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={maeOverTime}>
                <defs>
                  <linearGradient id="maeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="MAE"
                  stroke="#F59E0B"
                  fill="url(#maeGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* distribution */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700 mb-4 text-lg">Model Distribution</h2>
          <div className="h-52 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={modelDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  label
                >
                  {modelDistribution.map((entry, index) => (
                    <Cell key={index} fill={PIE_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PerformanceDashboard;
