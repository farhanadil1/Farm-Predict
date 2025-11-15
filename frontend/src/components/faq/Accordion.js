import { useRef, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqData = [
  {
    title: "What is FarmPredict?",
    content: [
      "FarmPredict is an AI-powered agricultural platform that provides crop prediction, fertilizer recommendations, irrigation analytics, and market forecasting.",
      "It helps farmers make smarter, data-driven decisions to increase yield and reduce resource waste."
    ]
  },
  {
    title: "How does FarmPredict help farmers?",
    content: [
      "FarmPredict analyzes soil, weather, and crop data to give highly accurate recommendations.",
      "It improves productivity, lowers input costs, and prevents crop loss by predicting needs in advance."
    ]
  },
  {
    title: "Is FarmPredict free to use?",
    content: [
      "Yes, FarmPredict offers a free plan with essential features like basic crop prediction and soil insights.",
      "Advanced analytics and premium forecasting tools may require a paid plan in the future."
    ]
  },
  {
    title: "How accurate are the predictions?",
    content: [
      "FarmPredict uses modern ML models trained on large agricultural datasets to deliver high accuracy.",
      "Accuracy improves over time as more real-world data is collected and analyzed."
    ]
  },
  {
    title: "Does FarmPredict store my farm data?",
    content: [
      "Your farm data is securely stored and never shared with third parties without consent.",
      "FarmPredict follows strict data-privacy standards to ensure your information stays protected."
    ]
  },
  {
    title: "Can FarmPredict work without internet?",
    content: [
      "Some basic features may work offline, but advanced analytics and forecasting require an active internet connection.",
      "This ensures real-time weather updates and model calculations remain accurate."
    ]
  },
  {
    title: "Which crops are supported?",
    content: [
      "FarmPredict supports a wide range of crops including rice, wheat, maize, sugarcane, and vegetables.",
      "New crops are added regularly as the model expands."
    ]
  }
];


function SmoothPanel({ open, children }) {
  const ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (open) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setMaxHeight(`${el.scrollHeight}px`);
      });
    } else {
      setMaxHeight(`${el.scrollHeight}px`);
      requestAnimationFrame(() => {
        setMaxHeight("0px");
      });
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      style={{
        maxHeight,
        overflow: "hidden",
        opacity: open ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "max-height 0.5s ease, opacity 0.4s ease"
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="w-full max-w-3xl mx-auto font-para mt-8 divide-y divide-gray-300">
      {faqData.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="px-2 md:px-6 py-2 md:py-3">
              <Disclosure.Button className="flex justify-between w-full text-left text-base font-medium text-gray-800 hover:bg-gray-50 px-4 py-2 md:px-6 md:py-2 rounded-lg transition">
                <span>{item.title}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 md:w-6 md:h-6 text-gray-500 transform transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>

              <SmoothPanel open={open}>
                <div className="px-4 md:px-6 pb-4 pt-2 text-gray-600 space-y-2 md:space-y-3 text-xs md:text-sm">
                  {item.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </SmoothPanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}