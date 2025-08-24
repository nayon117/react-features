import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This platform completely changed the way I work. Smooth, fast, and reliable!",
      author: "Sarah Ahmed",
    },
    {
      quote:
        "I’ve never experienced such dedication to detail. Truly outstanding.",
      author: "James Miller",
    },
    {
      quote:
        "It feels effortless and intuitive — exactly how modern tools should be.",
      author: "Aisha Khan",
    },
    {
      quote:
        "Every interaction left me more impressed. It’s a game-changer for me.",
      author: "David Lee",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 relative">
        <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">
          “{testimonials[currentIndex].quote}”
        </p>
        <h3 className="text-right font-semibold text-gray-900 text-sm">
          — {testimonials[currentIndex].author}
        </h3>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Next <FaArrowRight />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
