import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-green-900 to-green-950 text-gray-300 py-14 sm:py-16 px-4 sm:px-8 md:px-12">

      {/* Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543877087-ebf71f56b1c6?q=80&w=1200&auto=format&fit=crop')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14">

          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="FarmPredict" className="h-10 w-10 sm:h-12 sm:w-12" />
              <h1 className="text-2xl sm:text-3xl ml-3 font-bold text-green-400 tracking-wide">
                FarmPredict
              </h1>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empowering modern agriculture with intelligent predictions,
              sustainable practices, and real-time insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/" className="hover:text-green-300 transition">About Us</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Careers</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Press & Media</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 sm:mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/" className="hover:text-green-300 transition">Crop Prediction</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Fertilizer AI</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Irrigation Insights</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Market Forecasts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/" className="hover:text-green-300 transition">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Terms of Service</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Licensing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-green-800"></div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-400 text-center md:text-left">
            © 2025 FarmPredict. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-5 md:mt-0">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
