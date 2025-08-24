import { useState } from "react";

const Calculater = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => setInputValue("");
  const display = (value) => setInputValue(inputValue + value);
  const calculate = () => setInputValue(eval(inputValue));

  const buttons = [
    { label: "C", type: "action" },
    { label: "/", type: "operator" },
    { label: "*", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "-", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "+", type: "operator" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "0", type: "number" },
    { label: "00", type: "number" },
    { label: ".", type: "number" },
    { label: "=", type: "calculate" },
  ];

  const getClass = (type) => {
    if (type === "action") return "bg-red-500 hover:bg-red-600 text-white";
    if (type === "operator") return "bg-gray-700 hover:bg-gray-600 text-white";
    if (type === "calculate") return "bg-green-500 hover:bg-green-600 text-white";
    return "bg-gray-800 hover:bg-gray-700 text-white"; 
  };

  const handleClick = (btn) => {
    if (btn.label === "C") clear();
    else if (btn.label === "=") calculate();
    else display(btn.label);
  };

  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <form className="bg-gray-900 p-6 rounded-3xl shadow-xl w-[320px]">
        <input
          type="text"
          value={inputValue}
          readOnly
          className="w-full mb-6 text-right text-3xl p-4 rounded-lg bg-gray-800 text-white outline-none"
        />
        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn) => (
            <span
              key={btn.label}
              onClick={() => handleClick(btn)}
              className={`cursor-pointer select-none text-center text-xl font-semibold p-4 rounded-lg transition ${getClass(btn.type)}`}
            >
              {btn.label}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Calculater;
