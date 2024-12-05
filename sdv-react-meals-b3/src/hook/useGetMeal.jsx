import { useEffect, useState } from "react";

//créa hook pour les résult de recherche et récup de toutes les recettes 
//car l'url est le même, juste passer en parm la requête de recherche du user
const useGetMeal = (query = null) => {  //si y'a pas query, alors on récup toutes les recettes  
    const [recipes, setRecipes] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    console.log(recipes);


  useEffect(() => {
    
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    if (query) {
        url ="https://www.themealdb.com/api/json/v1/1/search.php?s=" + query;
    }


    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.meals);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }, [query]); // le tab peut prendre des var pour charger ici c'est si query change
    return {recipes, isLoading}
}

export default useGetMeal