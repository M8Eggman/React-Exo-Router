import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./Details.css";

export default function Details(props) {
  const { id } = useParams();
  const produit = props.data.find((item) => item.id === parseInt(id));

  return (
    <>
      <Nav />
      <div className="details">
        {produit ? (
          <div className="detailsCard">
            <img src={produit.img} alt={produit.title} className="detailsImg" />
            <div className="detailsInfo">
              <h1>{produit.title}</h1>
              <p className="detailsDescription">{produit.longDescription}</p>
              <p className="detailsPrice">{produit.price} €</p>
            </div>
          </div>
        ) : (
          <>
            <h2>Produit non trouvé</h2>
            <p>Désolé, ce produit n'existe pas.</p>
          </>
        )}
      </div>
    </>
  );
}
