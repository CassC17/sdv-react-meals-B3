import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ShowMealPage = () => {
  const [meal, setMeal] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, []);

  if (!meal) {
    return (
      <>
        <main>
          <p>Chargement</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <h1>{meal.strMeal}</h1>
        <p>Catégorie : {meal.strCategory}</p>
        <p>Instructions : </p>
        <p>{meal.strInstructions}</p>

        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <p>Ingrédients :</p>
        <ul>
          {Object.keys(meal)
            .filter((key) => key.includes("Ingredient") && meal[key])
            .map((key) => {
              return (
                <li key={key}>
                  {meal[key]} - {meal[key.replace("Ingredient", "Measure")]}
                </li>
              );
            })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ShowMealPage;