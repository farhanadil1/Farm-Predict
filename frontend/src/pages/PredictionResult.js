import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PredictionResult = () => {
  const location = useLocation();
  const state = location.state || {};
  const form = state.form || {};
  const solution = state.solution || "";

  const getPrediction = () => {
    if (solution === "Crop Prediction") {
      const soil = (form["Soil Type"] || "").toLowerCase();
      const temp = Number(form["Temperature (°C)"]) || 0;
      const rainfall = Number(form["Rainfall (mm)"]) || 0;
      let crop = "Wheat";
      let sowing = "November – December";
      let expectedYield = "28–32 quintals/acre";
      let confidence = 70;
      let soilScore = 60;
      if (soil.includes("clay")) {
        crop = "Rice";
        sowing = "June – July";
        expectedYield = "40–45 quintals/acre";
        soilScore = 85;
        confidence = 88;
      } else if (soil.includes("loam")) {
        crop = "Wheat";
        sowing = "Nov – Dec";
        expectedYield = "30–35 quintals/acre";
        soilScore = 90;
        confidence = 92;
      } else if (soil.includes("sandy")) {
        crop = "Bajra";
        sowing = "May – June";
        expectedYield = "18–22 quintals/acre";
        soilScore = 72;
        confidence = 75;
      }
      if (temp > 32) {
        crop = "Maize";
        sowing = "June – July";
        expectedYield = "25–30 quintals/acre";
        confidence -= 5;
      }
      if (rainfall < 500) {
        expectedYield = "Low Yield (15–20 quintals)";
        confidence -= 10;
      }
      return {
        crop,
        sowing,
        expectedYield,
        confidence: `${confidence}%`,
        soilScore: `${soilScore}%`,
        waterRequirement: rainfall > 1000 ? "Low (2200 L/week)" : "High (4200 L/week)",
        temperatureSuitability: temp > 30 ? "Moderate" : "High",
        chartData: [
          { month: "Jan", score: soilScore - 10 },
          { month: "Feb", score: soilScore - 5 },
          { month: "Mar", score: soilScore + 5 },
          { month: "Apr", score: soilScore + 8 },
          { month: "May", score: soilScore },
        ],
      };
    }

    if (solution === "Fertilizer Recommendation") {
      const N = Number(form["Nitrogen (N)"]) || 0;
      const P = Number(form["Phosphorus (P)"]) || 0;
      const K = Number(form["Potassium (K)"]) || 0;
      const pH = Number(form["Soil pH"]);
      let type = "NPK 20-20-20";
      let recDose = "75 kg/acre";
      if (N < 40) type = "Urea (46% N)";
      if (P < 20) type = "DAP (18-46-0)";
      if (K < 20) type = "MOP (0-0-60)";
      const pHAdvice = isNaN(pH)
        ? "pH not provided"
        : pH < 6
        ? "Add Lime (Low pH)"
        : pH > 8
        ? "Add Gypsum (Alkaline soil)"
        : "Ideal pH";
      return {
        type,
        recommendedDose: recDose,
        nitrogen: N < 40 ? "+20% Needed" : "Sufficient",
        phosphorus: P < 20 ? "+15% Needed" : "Optimal",
        potassium: K < 20 ? "+25% Needed" : "Balanced",
        pHAdvice,
        applicationMethod: "Basal + Top Dressing",
        chartData: [
          { nutrient: "N", value: N },
          { nutrient: "P", value: P },
          { nutrient: "K", value: K },
        ],
      };
    }

    if (solution === "Irrigation Analytics") {
      const moisture = Number(form["Soil Moisture (%)"]) || 0;
      const temp = Number(form["Temperature (°C)"]) || 0;
      let water = "4000 litres/acre";
      let interval = "Every 3 days";
      let stress = "Low";
      if (moisture < 40) {
        water = "6000 litres/acre";
        interval = "Every 1 day";
        stress = "High";
      } else if (moisture < 60) {
        water = "5000 litres/acre";
        interval = "Every 2 days";
        stress = "Moderate";
      }
      if (temp > 35) {
        water = "6500 litres/acre";
        stress = "High Heat Stress";
      }
      return {
        water,
        interval,
        moistureLevel: `${moisture}%`,
        stress,
        evapotranspiration: `${(temp / 8).toFixed(1)} mm/day`,
        optimalIrrigationTime: "6:00 AM – 8:00 AM",
        chartData: [
          { day: "Day 1", moisture },
          { day: "Day 2", moisture: Math.max(0, moisture - 5) },
          { day: "Day 3", moisture: Math.max(0, moisture - 10) },
          { day: "Day 4", moisture: moisture + 8 },
        ],
      };
    }

    if (solution === "Market Analysis") {
      const crop = (form["Crop Type"] || "").toLowerCase();
      const region = (form["Region"] || "").toLowerCase();
      const season = (form["Season"] || "").toLowerCase();
      let price = 1800;
      let demand = 70;
      let bestMonth = "September";
      if (crop === "rice") price = 2200;
      if (crop === "wheat") price = 1950;
      if (region.includes("punjab")) demand = 85;
      if (region.includes("bihar")) demand = 65;
      if (season === "summer") bestMonth = "July";
      if (season === "winter") bestMonth = "January";
      return {
        price: `₹${price} / quintal`,
        demand: `${demand}%`,
        bestMonth,
        competitorSupply: demand < 60 ? "High" : "Low",
        forecast3Months: demand > 70 ? "Positive" : "Neutral",
        chartData: [
          { month: "Apr", price: price - 300 },
          { month: "May", price: price - 150 },
          { month: "Jun", price: price - 50 },
          { month: "Jul", price },
        ],
      };
    }

    return {};
  };

  const result = getPrediction();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl px-6 py-16 bg-white mt-12 text-gray-900 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">{solution} Result</h1>
          <Link to="/solutions" className="text-green-600 flex items-center gap-1 text-sm hover:opacity-80">
            <IoMdArrowRoundBack size={18} />
            Back to Solutions
          </Link>
        </div>

        <section className="space-y-6">
          <h2 className="font-medium text-lg">AI Prediction Summary</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 text-sm leading-relaxed">
            {Object.keys(result).map((key) =>
              key !== "chartData" ? (
                <Info key={key} label={key.replace(/([A-Z])/g, " $1").replace(/^ /, "")} value={result[key]} />
              ) : null
            )}
          </div>
        </section>

        <div className="border-t mt-12 mb-10"></div>

        <section>
          <h2 className="font-medium text-lg mb-4">Trend Analysis</h2>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              {solution === "Fertilizer Recommendation" ? (
                <AreaChartComponent data={result.chartData || []} dataKey="value" xKey="nutrient" />
              ) : solution === "Market Analysis" ? (
                <LineChartComponent data={result.chartData || []} dataKey="price" xKey="month" />
              ) : solution === "Irrigation Analytics" ? (
                <AreaChartComponent data={result.chartData || []} dataKey="moisture" xKey="day" />
              ) : (
                <AreaChartComponent data={result.chartData || []} dataKey="score" xKey="month" />
              )}
            </ResponsiveContainer>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="font-medium mt-0.5">{String(value)}</p>
  </div>
);

const LineChartComponent = ({ data, dataKey, xKey }) => (
  <LineChart data={data}>
    <XAxis dataKey={xKey} stroke="#999" />
    <YAxis stroke="#999" />
    <Tooltip />
    <Line type="monotone" dataKey={dataKey} stroke="#16a34a" strokeWidth={2} dot={{ r: 4 }} />
  </LineChart>
);

const AreaChartComponent = ({ data, dataKey, xKey }) => (
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={xKey} stroke="#999" />
    <Tooltip />
    <Area type="monotone" dataKey={dataKey} stroke="#16a34a" fill="#bbf7d0" strokeWidth={2} />
  </AreaChart>
);

export default PredictionResult;
