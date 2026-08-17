import React from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { food_items } from "../food";

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "default";

  let foods = food_items.filter((item) =>
    item.food_name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
    foods = [...foods].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    foods = [...foods].sort((a, b) => b.price - a.price);
  }

  const changeSort = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-5">

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-green-600">
            Food Menu
          </h1>

          <select
            value={sort}
            onChange={(e) => changeSort(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="default">Default</option>
            <option value="low">Price Low to High</option>
            <option value="high">Price High to Low</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {foods.length > 0 ? (
            foods.map((item) => (
              <Card
                key={item.id}
                name={item.food_name}
                image={item.food_image}
                price={item.price}
                id={item.id}
                type={item.food_type}
              />
            ))
          ) : (
            <p className="text-xl text-red-500">
              No food found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;