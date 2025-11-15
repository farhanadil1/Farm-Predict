import { useState } from "react";

const AccordionItem = ({ title, desc }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20 py-3">
      {/* Title Row */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left text-white font-medium text-lg"
      >
        {title}
        <span className="text-yellow-300 text-2xl leading-none">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Smooth Content Wrapper */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="text-sm text-gray-200 leading-relaxed pr-2">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default AccordionItem