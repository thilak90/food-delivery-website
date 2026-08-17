import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItem = () => {
    dispatch(
      AddItem({
        id,
        name,
        price,
        image,
        qty: 1,
      })
    );

    toast.success("Item added");
  };

  return (
    <div className="w-[300px] min-h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg">

      <div className="w-full h-56 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-xl font-semibold">
        {name}
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">
          Rs {price}/-
        </div>

        <div className="flex gap-2 text-green-500">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">

        <button
          onClick={addItem}
          className="flex-1 p-3 rounded-lg bg-green-500 text-white"
        >
          Add
        </button>

        <button
          onClick={() => navigate(`/menu/${id}`)}
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white"
        >
          Details
        </button>

      </div>
    </div>
  );
}

export default Card;