import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 mt-28 mb-24 text-gray-900">

        <div className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight">
            About Our Mission
          </h1>

          <p className="text-gray-600 max-w-2xl mt-4 leading-relaxed text-sm">
            We are building the next generation of AI-powered agricultural intelligence.
            Our mission is simple  to empower farmers, researchers, and industries
            with smart insights that boost productivity, reduce risks, and ensure sustainable
            growth for future generations.
          </p>
        </div>

        <section className="space-y-4 mb-16">
          <h2 className="text-xl font-medium">Our Story</h2>

          <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
            What started as a research initiative evolved into a complete AI ecosystem
            for precision agriculture. Our team realized that farmers struggle with decisions
            regarding crop selection, water usage, fertilizer planning, and market timing.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
            Using machine learning, climate analytics, and market forecasting, 
            we designed tools that simplify these decisions and make agriculture more predictable,
            profitable, and sustainable.
          </p>
        </section>

        <div className="border-t my-10"></div>

        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">What We Do</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-14 text-sm">
            
            <Info
              title="Crop Intelligence"
              desc="We predict the most suitable crops based on soil, weather, and environmental parameters."
            />

            <Info
              title="Smart Fertilization"
              desc="Our models estimate nutrient deficiencies and recommend optimal fertilizer quantities."
            />

            <Info
              title="Irrigation Planning"
              desc="Precise water scheduling based on moisture levels, crop type, and weather dynamics."
            />

            <Info
              title="Market Insights"
              desc="Predictive price modeling helps farmers choose the best time to sell their produce."
            />

          </div>
        </section>

        <div className="border-t my-10"></div>

        <section className="mb-20">
          <h2 className="text-xl font-medium mb-6">Our Team</h2>

          <p className="text-gray-700 text-sm max-w-3xl leading-relaxed mb-8">
           We are a team of Computer Science students driven by a shared passion for AI and 
           sustainable innovation. With backgrounds in machine learning, software development, 
           and data analytics, we are committed to applying modern technology to real agricultural 
           challenges. Our goal is to build intelligent tools that make farming more efficient, 
           data-driven, and accessible for everyone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
            
            <TeamMember name="Md Adil Farhan" role="Project Lead" />
            <TeamMember name="Kunal Sharma" role="" />
            <TeamMember name="Nahid Azad" role="" />
            <TeamMember name="Rishita Saha" role="" />
            <TeamMember name="Debendar Chowdhary" role="" />

          </div>
        </section>

      </div>

      <Footer />
    </section>
  );
};


const Info = ({ title, desc }) => (
  <div className="space-y-1">
    <p className="font-medium text-gray-900">{title}</p>
    <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
  </div>
);

const TeamMember = ({ name, role }) => (
  <div className="space-y-1">
    <p className="font-medium text-gray-900">{name}</p>
    <p className="text-gray-600 text-xs">{role}</p>
  </div>
);

export default About;
