import React from "react";
import { useNavigate } from "react-router-dom";
import { food_items } from "../food";

function CategoryItems({ category }) {
  const navigate = useNavigate();

  const foods = category
    ? food_items.filter((item) => item.food_category === category)
    : food_items;

  return (
    <div className="max-w-7xl mx-auto">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {foods.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow"
          >

            <img
              src={item.food_image}
              alt={item.food_name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-3">
              {item.food_name}
            </h2>

            <p className="text-green-500 font-bold">
              Rs {item.price}/-
            </p>

            <button
              onClick={() => navigate(`/menu/${item.id}`)}
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              View Details
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default CategoryItems;