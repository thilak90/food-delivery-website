import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const items = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          My Orders
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <p className="text-xl text-gray-600">
              No items in your order.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex items-center gap-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div>
                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p>Quantity: {item.qty}</p>

                  <p className="text-green-500 font-bold">
                    Rs {item.price * item.qty}/-
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Orders;