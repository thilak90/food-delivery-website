import React, { useContext } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { dataContext } from "../context/UserContext";

function Nav() {
  const { input, setInput, setShowCart } = useContext(dataContext);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const items = useSelector((state) => state.cart);

  const handleSearch = (value) => {
    setInput(value);

    if (value.trim()) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">

          <button
            onClick={() => navigate("/")}
            className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center"
          >
            <MdFastfood className="w-8 h-8 text-green-500" />
          </button>

          <nav className="flex gap-4 flex-wrap text-sm md:text-base">
            <NavLink to="/" className="hover:text-green-500">
              Home
            </NavLink>

            <NavLink to="/menu" className="hover:text-green-500">
              Menu
            </NavLink>

            <NavLink to="/categories" className="hover:text-green-500">
              Categories
            </NavLink>

            <NavLink to="/api-food" className="hover:text-green-500">
              API Food
            </NavLink>

            <NavLink to="/about" className="hover:text-green-500">
              About
            </NavLink>

            <NavLink to="/contact" className="hover:text-green-500">
              Contact
            </NavLink>
          </nav>

          <form
            className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full md:w-72"
            onSubmit={(e) => e.preventDefault()}
          >
            <IoSearch className="text-green-500" />

            <input
              value={searchParams.get("search") || input}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search food..."
              className="outline-none w-full"
            />
          </form>

          <button
            onClick={() => setShowCart(true)}
            className="relative w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center"
          >
            <span className="absolute top-0 right-1 text-green-600 font-bold">
              {items.length}
            </span>

            <LuShoppingBag className="w-7 h-7 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;