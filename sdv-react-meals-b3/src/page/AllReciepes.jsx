import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import useGetMeal from '../hook/useGetMeal';


const AllRecipes = () => {
  const recipes = useGetMeal();

  useEffect(() => {
      fetchRecipes();
  }, []);

  if (recipes.length === 0) {
      return <main>En attente</main>;
  };

      if (recipes.length === 0) {
        return <main>En attente</main>;
      };

      return (
        <main>
          <Header/>
          <p>All recipes :</p>
          {recipes.map((recipe) => (
            <article key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <Link to={`/showmeal/${recipe.idMeal}`}>Voir la recette</Link> {/*template string avec les back ticks ` et le $*/}
        </article>
          ))}
        <Footer/>
        </main>
      );
};


export default AllRecipes; 