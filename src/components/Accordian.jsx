import { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "What is this platform?",
      content: "It’s a modern tool designed to simplify your daily workflow.",
    },
    {
      title: "How secure is my data?",
      content: "Your data is protected with end-to-end encryption and safe storage.",
    },
    {
      title: "Can I use it for free?",
      content: "Yes, you can start with the free plan and upgrade anytime.",
    },
    {
      title: "Is support available?",
      content: "Our team is available 24/7 to assist you with any issue.",
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border-b py-4 cursor-pointer select-none"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <span className="text-2xl font-bold text-indigo-600">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
