import React, { useEffect, useState } from "react";

function ApiFood() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch API");
        }

        const data = await response.json();

        setMeals(data.meals || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          API Food Menu
        </h1>

        {loading && (
          <p className="text-center text-xl">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-xl shadow p-4"
              >

                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-52 object-cover rounded-lg"
                />

                <h2 className="text-lg font-bold mt-3">
                  {meal.strMeal}
                </h2>

                <p className="text-gray-600 mt-2">
                  {meal.strCategory}
                </p>

                <p className="text-gray-600">
                  {meal.strArea}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default ApiFood;