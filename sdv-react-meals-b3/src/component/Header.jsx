import { Link, useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => { //info recup  du nav 
        event.preventDefault(); // enlève le comportement par défaut du nav qui recharge la page
        const query = event.target.query.value;
        console.log(query);

        navigate("/search/?query="+ query) // charge juste le composent avec nos info en étant envoyé sur le lien de la recherche
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
                <input type="text" name="query" placeholder="Rechercher" />
            </label>
                
                <button type="submit">Rechercher</button>
            </form>
        </nav>

        
    </>
  )
}

export default Header