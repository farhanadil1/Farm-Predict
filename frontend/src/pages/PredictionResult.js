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
  const { state } = useLocation();
  const { solution } = state;

  const getPrediction = () => {
    switch (solution) {
      case "Crop Prediction":
        return {
          crop: "Wheat",
          confidence: 92,
          sowing: "November – December",
          soilScore: 87,
          chartData: [
            { month: "Jan", score: 40 },
            { month: "Feb", score: 55 },
            { month: "Mar", score: 80 },
            { month: "Apr", score: 90 },
            { month: "May", score: 60 },
          ],
        };

      case "Fertilizer Recommendation":
        return {
          type: "NPK 20-20-20",
          nitrogen: "+12%",
          phosphorus: "+5%",
          potassium: "-4%",
          pHAdvice: "Ideal pH: 6.0 – 7.0",
          chartData: [
            { nutrient: "N", value: 60 },
            { nutrient: "P", value: 40 },
            { nutrient: "K", value: 55 },
          ],
        };

      case "Irrigation Analytics":
        return {
          water: "4100 litres/acre",
          interval: "Every 3 days",
          moistureLevel: 72,
          stress: "Low Stress",
          chartData: [
            { day: 1, moisture: 60 },
            { day: 2, moisture: 58 },
            { day: 3, moisture: 50 },
            { day: 4, moisture: 72 },
          ],
        };

      case "Market Analysis":
        return {
          price: "₹1,950 / quintal",
          demand: 78,
          bestMonth: "September",
          chartData: [
            { month: "Apr", price: 1500 },
            { month: "May", price: 1650 },
            { month: "Jun", price: 1800 },
            { month: "Jul", price: 1950 },
          ],
        };

      default:
        return {};
    }
  };

  const result = getPrediction();

  return (
    <div className="min-h-screen ">
        <Navbar />
      <div className="max-w-4xl px-6 py-16  bg-white mt-12 text-gray-900 mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">{solution} Result</h1>

          <Link
            to="/solutions"
            className="text-green-600 flex items-center gap-1 text-sm hover:opacity-80"
          >
            <IoMdArrowRoundBack size={18} />
            Back to Solutions
          </Link>
        </div>

        <section className="space-y-6">

          <h2 className="font-medium text-lg">AI Prediction Summary</h2>

          <div className="
            grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 
            text-sm leading-relaxed
          ">
            {solution === "Crop Prediction" && (
              <>
                <Info label="Best Crop" value={result.crop} />
                <Info label="Model Confidence" value={`${result.confidence}%`} />
                <Info label="Best Sowing Period" value={result.sowing} />
                <Info label="Soil Suitability Score" value={`${result.soilScore}%`} />
              </>
            )}

            {solution === "Fertilizer Recommendation" && (
              <>
                <Info label="Recommended Fertilizer" value={result.type} />
                <Info label="Nitrogen Adjustment" value={result.nitrogen} />
                <Info label="Phosphorus Adjustment" value={result.phosphorus} />
                <Info label="Potassium Adjustment" value={result.potassium} />
                <Info label="pH Advisory" value={result.pHAdvice} />
              </>
            )}

            {solution === "Irrigation Analytics" && (
              <>
                <Info label="Water Required" value={result.water} />
                <Info label="Irrigation Interval" value={result.interval} />
                <Info label="Moisture Level" value={`${result.moistureLevel}%`} />
                <Info label="Crop Stress Level" value={result.stress} />
              </>
            )}

            {solution === "Market Analysis" && (
              <>
                <Info label="Expected Price" value={result.price} />
                <Info label="Demand Index" value={`${result.demand}%`} />
                <Info label="Best Selling Month" value={result.bestMonth} />
              </>
            )}
          </div>
        </section>

        <div className="border-t mt-12 mb-10"></div>

        <section>
          <h2 className="font-medium text-lg mb-4">Trend Analysis</h2>

          <div className="w-full h-64">
            <ResponsiveContainer>
              {solution === "Fertilizer Recommendation" ? (
                <AreaChartComponent data={result.chartData} dataKey="value" xKey="nutrient" />
              ) : solution === "Market Analysis" ? (
                <LineChartComponent data={result.chartData} dataKey="price" xKey="month" />
              ) : (
                <AreaChartComponent data={result.chartData} dataKey="score" xKey="month" />
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
    <p className="font-medium mt-0.5">{value}</p>
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
    <Area
      type="monotone"
      dataKey={dataKey}
      stroke="#16a34a"
      fill="#bbf7d0"
      strokeWidth={2}
    />
  </AreaChart>
);

export default PredictionResult;
