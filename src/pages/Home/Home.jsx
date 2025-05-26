import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="home">
        <div className="homeBody">
          <h1>Bienvenue sur TechShop</h1>
          <p>Découvrez notre sélection de produits tech innovants et performants.</p>
          <Link to="/React-Exo-Router/Shop" className="btn-shop">
            Visiter la boutique
          </Link>
        </div>
      </section>
    </>
  );
}
