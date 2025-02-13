"use client";
import { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
        console.log(error)
        return []
    }
  };
  useEffect(() => {
    fetchMeals();
  }, [search]);
  return (
    <div>
    <div>
        <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {
        meals?.map(singleMeal => {
            return (
                <div key={singleMeal.idMeal	}>
                    <p className="text-2xl font-bold">{singleMeal?.strMeal}</p>
                    <p>{singleMeal?.strInstructions}</p>
                </div>
            )
        })
      }
    </div>
    </div>
  );
};

export default MealsPage;
