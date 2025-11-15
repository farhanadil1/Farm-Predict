import React from 'react'

const Footer = () => {
  return (
    <div className="relative bg-green-900 text-gray-300 py-16 md:py-24 px-8">
       <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://placehold.co/1920x400/F2E8C6/F2E8C6?text=Wheat+Field')" }}></div>
       <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">VerdaAgro</h2>
            <p className="text-sm">Pioneering the future of agriculture with innovative and sustainable solutions.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/" className="hover:text-yellow-400">Careers</a></li>
              <li><a href="/" className="hover:text-yellow-400">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400">Precision Farming</a></li>
              <li><a href="/" className="hover:text-yellow-400">Data Analytics</a></li>
              <li><a href="/" className="hover:text-yellow-400">Drone Services</a></li>
              <li><a href="/" className="hover:text-yellow-400">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-yellow-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 VerdaAgro. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="hover:text-white">Facebook</a>
            <a href="/" className="hover:text-white">Twitter</a>
            <a href="/" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Footer
