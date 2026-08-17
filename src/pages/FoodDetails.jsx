import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { food_items } from "../food";
import { toast } from "react-toastify";

function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const food = food_items.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500">
          Food not found
        </h1>
      </div>
    );
  }

  const addToCart = () => {
    dispatch(
      AddItem({
        id: food.id,
        name: food.food_name,
        price: food.price,
        image: food.food_image,
        qty: 1,
      })
    );

    toast.success("Food added to cart");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6">

        <button
          onClick={() => navigate(-1)}
          className="mb-5 bg-gray-200 px-4 py-2 rounded-lg"
        >
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-96 object-cover rounded-xl"
          />

          <div className="flex flex-col justify-center gap-5">

            <h1 className="text-4xl font-bold">
              {food.food_name}
            </h1>

            <p className="text-gray-600">
              Category: {food.food_category}
            </p>

            <p className="text-gray-600">
              Type: {food.food_type}
            </p>

            <p className="text-3xl text-green-500 font-bold">
              Rs {food.price}/-
            </p>

            <button
              onClick={addToCart}
              className="bg-green-500 text-white p-3 rounded-lg"
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FoodDetails;