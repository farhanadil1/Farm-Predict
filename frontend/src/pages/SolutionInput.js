import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoMdArrowRoundBack } from "react-icons/io";


const inputFields = {
  0: ["Soil Type", "Rainfall (mm)", "Temperature (°C)"],
  1: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)", "Soil pH"],
  2: ["Soil Moisture (%)", "Temperature (°C)", "Crop Type"],
  3: ["Crop Type", "Region", "Season"],
};

const solutionNames = [
  "Crop Prediction",
  "Fertilizer Recommendation",
  "Irrigation Analytics",
  "Market Analysis",
];

const SolutionInput = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handlePredict = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/prediction/${id}`, {
        state: { form, solution: solutionNames[id] },
      });
    }, 1500);
  };

  return (
    <section className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 mt-28 mb-20">   

        <div className="mb-12">
          <p className="text-xs uppercase tracking-wide text-green-700 font-medium mb-2">
            {solutionNames[id]}
          </p>

          <h1 className="text-3xl font-semibold text-gray-900">
            Provide Required Details
          </h1>

          <p className="text-gray-600 mt-2 max-w-xl text-sm leading-relaxed">
            Enter the parameters below. Our AI engine will analyze your inputs and generate a prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {inputFields[id].map((field, idx) => (
            <div key={idx} className="space-y-2">
              <label className="text-sm text-gray-700 font-medium">
                {field}
              </label>

              <input
                type="text"
                placeholder={field}
                onChange={(e) => handleChange(field, e.target.value)}
                className="
                  w-full px-3 py-2 bg-gray-100/60 rounded-lg 
                  text-gray-800 text-sm focus:outline-none
                  focus:ring-[0.5px] focus:ring-green-500 transition
                "
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 items-center">
        <Link
          to="/solutions"
          className="text-green-700 mr-10 text-sm font-medium hover:underline inline-flex items-center gap-1 mb-8"
        >
          <span className="items-center flex pt-7"><IoMdArrowRoundBack className="mr-1"/> Back to Solutions</span>
        </Link>
          <button
            onClick={handlePredict}
            disabled={loading}
            className={`
              px-10 py-3 rounded-lg font-medium text-white text-sm tracking-wide
              transition-all 
              ${loading 
                ? "bg-green-300 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700 shadow-sm"
              }
            `}
          >
            {loading ? "Processing..." : "Run Prediction"}
          </button>
        </div>

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
          </div>
        )}

      </div>

      <Footer />
    </section>
  );
};

export default SolutionInput;
