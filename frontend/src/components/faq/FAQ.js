import React from "react";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="my-16 px-4 md:px-20">
      <p className='text-xs mx-auto font-medium text-orange-500 border w-fit py-1 px-2 rounded-lg border-orange-400 mb-2'>
              <span>FAQ</span>
      </p>
      <h2 className="font-head text-center font-semibold text-3xl md:text-5xl leading-snug md:leading-tight head-gradient mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion />
      <p className="font-para text-paragraph text-center text-xs font-semibold mt-4">
        More questions? visit our
        <span className="text-orange-500 cursor-pointer ml-1">FAQ library</span>
      </p>
    </div>
  );
}