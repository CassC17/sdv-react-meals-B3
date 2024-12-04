import { Link, useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = event.target.query.value;
        console.log(query);

        navigate("/search/?query="+ query)
    };

  return (
    <>
        <h1>Les recettes de Susu</h1>
        <nav>
            <ul>
                <Link to={"/"}> Accueil </Link>
                <Link to={"/contact"}> Contact </Link>
                <Link to={"/allreciepes"}> Toutes les recettes </Link>
            </ul>

            <form method="get" onSubmit={handleSubmit}>
            <label>
                Recherche:
                <input type="text" name="search-querry" placeholder="Rechercher" />
            </label>
                
                <button type="submit">Rechercher</button>
            </form>
        </nav>

        
    </>
  )
}
Header();

export default Header