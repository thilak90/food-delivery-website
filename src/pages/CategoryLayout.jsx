import React from "react";
import { Link, Outlet } from "react-router-dom";

function CategoryLayout() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Food Categories
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">

        <Link
          to="/categories/breakfast"
          className="px-5 py-3 bg-white rounded-lg shadow"
        >
          Breakfast
        </Link>

        <Link
          to="/categories/soups"
          className="px-5 py-3 bg-white rounded-lg shadow"
        >
          Soups
        </Link>

        <Link
          to="/categories/pizza"
          className="px-5 py-3 bg-white rounded-lg shadow"
        >
          Pizza
        </Link>

        <Link
          to="/categories/burger"
          className="px-5 py-3 bg-white rounded-lg shadow"
        >
          Burger
        </Link>

        <Link
          to="/categories/pasta"
          className="px-5 py-3 bg-white rounded-lg shadow"
        >
          Pasta
        </Link>

      </div>

      <Outlet />
    </div>
  );
}

export default CategoryLayout;