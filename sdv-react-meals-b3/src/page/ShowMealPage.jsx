import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import useGetMealById from "../hook/useGetMealById";

const ShowMealPage = () => {
  const {meal} = useGetMealById();

  if (!meal) {
    return <p>Chargement</p>;
  }

  console.log(meal);

  return (
    <>
      <Header />
      <main key={meal.idMeal}>
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