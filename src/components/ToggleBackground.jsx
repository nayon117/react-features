import { useState } from "react";

const ToggleBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
  };


  const buttonBg = backgroundColor === "white" ? "#1b1b1b" : "white";
  const buttonText = backgroundColor === "white" ? "white" : "#1b1b1b";

  return (
    <div
      style={{ backgroundColor, color: textColor }}
      className="h-screen flex flex-col justify-center items-center transition-colors duration-500"
    >
      <button
        onClick={handleClick}
        className="mb-10 px-6 py-3 rounded-full font-semibold border-2 transition-colors duration-300"
        style={{
          backgroundColor: buttonBg,
          color: buttonText,
          borderColor: textColor,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="text-4xl text-center font-bold leading-snug">
        Welcome to a <br /> Real World
      </section>
    </div>
  );
};

export default ToggleBackground;
