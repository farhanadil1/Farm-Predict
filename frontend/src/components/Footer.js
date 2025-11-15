import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-green-900 to-green-950 text-gray-300 py-20 px-8">

      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543877087-ebf71f56b1c6?q=80&w=1200&auto=format&fit=crop')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="FarmPredict" className="h-12 w-12" />
              <h1 className="text-3xl ml-3 font-bold text-green-400 tracking-wide">
                FarmPredict
              </h1>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering modern agriculture with intelligent predictions, sustainable practices, and real-time insights.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-green-300 transition">About Us</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Careers</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Press & Media</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-green-300 transition">Crop Prediction</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Fertilizer AI</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Irrigation Insights</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Market Forecasts</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-green-300 transition">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Terms of Service</a></li>
              <li><a href="/" className="hover:text-green-300 transition">Licensing</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-green-800"></div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-400">
            © 2025 FarmPredict. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-5 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="/" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="/" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
