import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 mt-28 mb-24 text-gray-900">

        <div className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>

          <p className="text-gray-600 max-w-2xl mt-4 leading-relaxed text-sm">
            Have questions, ideas, or want to collaborate?  
            We’re a team of Computer Science students passionate about building
            AI-driven solutions for sustainable agriculture.
          </p>
        </div>

        <section className="space-y-6 mb-16">
          <h2 className="text-lg font-medium">Get in Touch</h2>

          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 text-sm leading-relaxed">

            <Info label="Email" value="agri.ai.support@example.com" />
            <Info label="Phone" value="+91 98765 43210" />
            <Info label="Location" value="Kolkata, West Bengal, India" />
            <Info label="Team" value="Computer Science Students, MCKVIE" />

          </div>
        </section>

        <div className="border-t my-16"></div>

        <section className="mb-20">
          <h2 className="text-lg font-medium mb-8">Send Us a Message</h2>

          <form className="grid sm:grid-cols-2 gap-x-8 gap-y-10 text-sm">

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full bg-gray-100/60 px-3 py-2 rounded-lg 
                focus:outline-none focus:ring-[1px] focus:ring-green-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full bg-gray-100/60 px-3 py-2 rounded-lg 
                focus:outline-none focus:ring-[1px] focus:ring-green-600"
              />
            </div>

            <div className="space-y-2 col-span-2">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-100/60 px-3 py-2 rounded-lg 
                focus:outline-none focus:ring-[1px] focus:ring-green-600"
              />
            </div>

            <div className="space-y-2 col-span-2">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full bg-gray-100/60 px-3 py-2 rounded-lg 
                focus:outline-none focus:ring-[1px] focus:ring-green-600"
              ></textarea>
            </div>

          </form>

          <div className="flex justify-start mt-12">
            <button
              type="submit"
              className="px-10 py-3 rounded-lg font-medium text-white bg-green-600 
              hover:bg-green-700 transition text-sm tracking-wide"
            >
              Send Message
            </button>
          </div>
        </section>

      </div>

      <Footer />
    </section>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="font-medium mt-0.5">{value}</p>
  </div>
);

export default Contact;
