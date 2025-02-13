import MealSearchInput from "./components/MealSearchInput";


const MealsPage = () => {
  const meals = []
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      // setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
        console.log(error)
        return []
    }
  };
  return (
    <div>
    <div className="grid grid-cols-4 gap-4">
      <MealSearchInput></MealSearchInput>
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
