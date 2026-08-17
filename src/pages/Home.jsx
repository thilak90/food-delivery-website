import React, { useContext } from "react";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {
  const {
    cate,
    setCate,
    input,
    showCart,
    setShowCart,
  } = useContext(dataContext);

  const navigate = useNavigate();

  // Filter food according to category
  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );

      setCate(newList);
    }
  }

  // Cart items from Redux
  const items = useSelector((state) => state.cart);

  // Price calculation
  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const deliveryFee = items.length > 0 ? 20 : 0;
  const taxes = subtotal * 0.5 / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  // Place order
  const handlePlaceOrder = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setShowCart(false);
    navigate("/checkout");
  };

  return (
    <div className="bg-slate-200 w-full min-h-screen">

      {/* ================= CATEGORY SECTION ================= */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full px-4 pt-5">

          {Categories.map((item) => (
            <div
              key={item.name}
              onClick={() => filter(item.name)}
              className="
                w-[140px]
                h-[150px]
                bg-white
                flex
                flex-col
                items-start
                gap-5
                p-5
                justify-start
                text-[20px]
                font-semibold
                text-gray-600
                rounded-lg
                shadow-xl
                hover:bg-green-200
                cursor-pointer
                transition-all
                duration-200
              "
            >
              {item.icon}
              {item.name}
            </div>
          ))}

        </div>
      )}

      {/* ================= FOOD CARD SECTION ================= */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">

        {cate.length > 0 ? (
          cate.map((item) => (
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
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            No dish found
          </div>
        )}

      </div>

      {/* ================= CART SIDEBAR ================= */}
      <div
        className={`
          w-full
          md:w-[40vw]
          h-screen
          fixed
          top-0
          right-0
          bg-white
          shadow-xl
          p-6
          z-50
          transition-all
          duration-500
          flex
          flex-col
          items-center
          overflow-auto
          ${
            showCart
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* CART HEADER */}
        <header className="w-full flex justify-between items-center">

          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>

          <RxCross2
            className="
              w-[30px]
              h-[30px]
              text-green-400
              cursor-pointer
              hover:text-gray-600
            "
            onClick={() => setShowCart(false)}
          />

        </header>

        {/* ================= CART CONTENT ================= */}
        {items.length > 0 ? (
          <>

            {/* CART ITEMS */}
            <div className="w-full mt-9 flex flex-col gap-8">

              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}

            </div>

            {/* ================= BILL SUMMARY ================= */}
            <div
              className="
                w-full
                border-t-2
                border-b-2
                border-gray-400
                mt-7
                flex
                flex-col
                gap-2
                p-8
              "
            >

              {/* SUBTOTAL */}
              <div className="w-full flex justify-between items-center">

                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>

                <span className="text-green-400 font-semibold text-lg">
                  Rs {subtotal.toFixed(2)}/-
                </span>

              </div>

              {/* DELIVERY */}
              <div className="w-full flex justify-between items-center">

                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Fee
                </span>

                <span className="text-green-400 font-semibold text-lg">
                  Rs {deliveryFee}/-
                </span>

              </div>

              {/* TAX */}
              <div className="w-full flex justify-between items-center">

                <span className="text-lg text-gray-600 font-semibold">
                  Taxes
                </span>

                <span className="text-green-400 font-semibold text-lg">
                  Rs {taxes.toFixed(2)}/-
                </span>

              </div>

            </div>

            {/* ================= TOTAL ================= */}
            <div className="w-full flex justify-between items-center p-9">

              <span className="text-2xl text-gray-600 font-semibold">
                Total
              </span>

              <span className="text-green-400 font-semibold text-2xl">
                Rs {total}/-
              </span>

            </div>

            {/* ================= CHECKOUT ================= */}
            <button
              className="
                w-[80%]
                p-3
                rounded-lg
                bg-green-500
                text-white
                hover:bg-green-400
                transition-all
              "
              onClick={handlePlaceOrder}
            >
              Proceed to Checkout
            </button>

          </>
        ) : (

          /* ================= EMPTY CART ================= */
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            Empty Cart
          </div>

        )}

      </div>
    </div>
  );
}

export default Home;
