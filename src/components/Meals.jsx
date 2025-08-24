import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Seafood Meals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.idMeal}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-48 object-cover"
            />
            <p className="text-center text-gray-800 font-semibold py-4 px-2">
              {item.strMeal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
