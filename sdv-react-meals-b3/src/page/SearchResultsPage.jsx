import { useSearchParams, Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import  useGetMeal from "../hook/useGetMeal";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();  // recup param url
  const query = searchParams.get("query");  // recharge avec l'url corespondant notre comp

  const { recipes, isLoading } = useGetMeal(query); 
  
  if(isLoading) {
    return <main>Chargement</main>;
  }

  if (!isLoading && !recipes){
    return <main>Aucune recette trouvée</main>;
  }

  return (
    <main>
          <Header/>
          <p>Search results:</p>
          {recipes.map((recipe) => (
            <article key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <Link to={`/showmeal/${recipe.idMeal}`}>Voir la recette</Link> {/*template string avec les back ticks ` et le $*/}
        </article>
          ))}
        <Footer/>
        </main>
  )
}   

export default SearchResultsPage    