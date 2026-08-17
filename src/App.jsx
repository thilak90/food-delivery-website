import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import CategoryLayout from "./pages/CategoryLayout";
import CategoryItems from "./pages/CategoryItems";
import ApiFood from "./pages/ApiFood";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/menu/:id" element={<FoodDetails />} />

        <Route path="/categories" element={<CategoryLayout />}>
          <Route index element={<CategoryItems />} />
          <Route path="breakfast" element={<CategoryItems category="breakfast" />} />
          <Route path="soups" element={<CategoryItems category="soups" />} />
          <Route path="pizza" element={<CategoryItems category="pizza" />} />
          <Route path="burger" element={<CategoryItems category="burger" />} />
          <Route path="pasta" element={<CategoryItems category="pasta" />} />
        </Route>

        <Route path="/api-food" element={<ApiFood />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;