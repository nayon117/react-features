import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setShowInput(false);
      setBgColor("white");
    }
  };

  const toggleSearch = () => {
    setShowInput(true);
    setBgColor("#1a1a1a");
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {showInput && (
        <div
          className="overlay absolute inset-0 bg-black/40 backdrop-blur-sm transition-all"
          onClick={handleClick}
        ></div>
      )}

      <section
        className="relative z-10 flex items-center gap-3 p-3 rounded-full shadow-lg transition-all duration-500"
        style={{ backgroundColor: bgColor }}
      >
        {showInput ? (
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="px-4 py-2 rounded-full outline-none bg-white text-black w-64 transition-all duration-500"
          />
        ) : (
          <FaSearch
            onClick={toggleSearch}
            className="text-xl cursor-pointer text-gray-700 hover:text-black transition-colors"
          />
        )}
      </section>
    </div>
  );
};

export default HiddenSearchBar;
