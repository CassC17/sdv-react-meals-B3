import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <h1>Les recettes de Susu</h1>
        <nav>
            <ul>
                <Link to={"/"}> Accueil </Link>
                <Link to={"/contact"}> Contact </Link>
            </ul>
        </nav>
    </>
  )
}
Header();

export default Header