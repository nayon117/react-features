import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-center text-white">
      <div>
        <h1 className="text-[6rem]">{count}</h1>
      </div>

      <div className="w-[40rem] flex justify-around mt-20">
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 rounded-full text-[2rem] bg-[#141517] text-white cursor-pointer"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 rounded-full text-[2rem] bg-[#141517] text-white cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
