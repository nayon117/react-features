import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(" ");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: crypto.randomUUID(),
      });
    });
    setInput("");
  };

  const handleremove = (id) => {
    setTodos((todos) => todos.filter((t) => t.id != id));
  };

  return (
    <div className="h-screen bg-[#f5f9eb] flex justify-center items-center">
      <div className="bg-[#fcfff3] p-12 rounded-2xl shadow-lg w-[450px]">
        <div className="flex items-center mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>e.key === "Enter" && handleSubmit()}
            placeholder="Write Todo"
            className="p-4 bg-[#f5f9eb] w-[300px] rounded-md outline-none border-none mr-3"
          />
          <button
            onClick={handleSubmit}
            className="rounded-full bg-[#454545] px-6 py-3 text-white cursor-pointer hover:bg-black transition"
          >
            submit
          </button>
        </div>
        <ul className="mt-6 space-y-3">
          {todos?.map(({ text, id }) => (
            <li
              key={id}
              className="flex justify-between items-center bg-[#f5f9eb] px-5 py-3 rounded-md font-sans shadow-sm"
            >
              <span className="text-gray-800">{text}</span>
              <button
                onClick={() => handleremove(id)}
                className="px-3 py-1 rounded-md bg-red-500 text-white cursor-pointer hover:bg-red-600 transition"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
