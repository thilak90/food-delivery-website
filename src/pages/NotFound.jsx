import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">

      <h1 className="text-6xl font-bold text-red-500">
        404
      </h1>

      <p className="text-xl text-gray-600 mt-3">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;