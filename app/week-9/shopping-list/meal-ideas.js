"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();

  return data.meals;
}

async function fetchIngredients(meal) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  const data = await response.json();

  return data.meals;
}

export function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  async function loadMealIdeas() {
    if (ingredient) {
      const meals = await fetchMealIdeas(ingredient);
      setMeals(meals);
    }
  }

  async function loadIngredients() {
    if (ingredient) {
      const recipeArray = await fetchIngredients(selectedMeal);

      const strIngredients = Object.keys(recipeArray[0]).filter((key) =>
        key.includes("strIngredient")
      );
      const recipe = strIngredients.map((ingredient) => ({
        strIngredient: recipeArray[0][ingredient],
        strMeasure: recipeArray[0][ingredient.replace("Ingredient", "Measure")],
      }));

      console.log(strIngredients);
      console.log(recipe);
      setIngredients(recipe);
    }
  }

  const handleMealSelect = (meal) => {
    if (selectedMeal === meal) {
      setSelectedMeal("");
      return;
    }
    setSelectedMeal(meal);
  };

  useEffect(() => {
    loadMealIdeas();
    loadIngredients();
  }, [ingredient, selectedMeal]);

  return (
    <div className="justify-start m-7">
      <h2 className="text-2xl mb-3 font-bold">Meal Ideas for {ingredient}</h2>
      <ul>
        {ingredient != "" && meals ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <li
                className="mb-1 w-80 p-2 bg-gray-800 cursor-pointer hover:bg-slate-400"
                onClick={() => handleMealSelect(meal.strMeal)}
              >
                {meal.strMeal}
              </li>
              {selectedMeal === meal.strMeal && (
                <div className="m-5 p-3 bg-teal-900 rounded-md">
                  <p className="font-bold">Ingredients:</p>
                  <ul>
                    {ingredients.map((ingredient, index) => (
                      <div key={index}>
                        {ingredient.strIngredient !== "" &&
                          ingredient.strIngredient !== null && (
                            <li key={`${ingredient.strIngredient}-${index}`}>
                              {ingredient.strIngredient} -{" "}
                              {ingredient.strMeasure}
                            </li>
                          )}
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </ul>
    </div>
  );
}
