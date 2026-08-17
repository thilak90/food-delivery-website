import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-4xl font-bold text-green-600 mb-5">
          About Our Food Delivery
        </h1>

        <p className="text-gray-700 leading-7">
          Our Food Delivery application provides customers with a simple
          and convenient way to explore meals, view food details, manage
          their cart, and place orders.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="p-5 bg-green-50 rounded-lg">
            <h2 className="font-bold text-xl">Fresh Food</h2>
            <p>Quality meals prepared with fresh ingredients.</p>
          </div>

          <div className="p-5 bg-green-50 rounded-lg">
            <h2 className="font-bold text-xl">Fast Delivery</h2>
            <p>Quick and reliable food delivery service.</p>
          </div>

          <div className="p-5 bg-green-50 rounded-lg">
            <h2 className="font-bold text-xl">Easy Ordering</h2>
            <p>Simple navigation and smooth ordering experience.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;