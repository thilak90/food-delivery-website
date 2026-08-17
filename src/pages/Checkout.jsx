import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  address: "",
  phone: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Checkout() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.address || !state.phone) {
      toast.error("Please complete all fields");
      return;
    }

    toast.success("Order placed successfully");

    dispatch({ type: "RESET" });

    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <div>
            <label>Delivery Address</label>

            <textarea
              value={state.address}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  field: "address",
                  value: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
              rows="4"
            />
          </div>

          <div>
            <label>Phone Number</label>

            <input
              value={state.phone}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  field: "phone",
                  value: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded-lg"
          >
            Place Order
          </button>

        </form>
      </div>
    </div>
  );
}

export default Checkout;