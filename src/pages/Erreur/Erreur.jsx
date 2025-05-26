import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./Erreur.css";

export default function Erreur() {
  return (
    <>
      <Nav />
      <div className="erreur">
        <h1>404</h1>
        <p>Oups ! La page que vous cherchez n'existe pas.</p>
        <Link to="/React-Exo-Router" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}
