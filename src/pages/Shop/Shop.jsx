import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./Shop.css";
import { Link } from "react-router-dom";
import dataJSON from "../../data/data.json";

export default function Shop() {
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProduct(dataJSON);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Nav />
      <section className="sectionShop">
        <h2>Shop</h2>
        <div className="shop">
          {product
            ? product.map((element) => (
                <div key={element.id} className="card" style={{ width: "18rem" }}>
                  <div className="card-price">
                    <p>{element.price}€</p>
                  </div>
                  <div className="card-img-top" style={{ height: "12rem", width: "18rem", overflow: "hidden" }}>
                    <img src={element.img} style={{ width: "18rem" }} alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <Link to={`/Shop/${element.id}`} className="btn btn-primary">
                      Voir Le Produit
                    </Link>
                  </div>
                </div>
              ))
            : Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="card" aria-hidden="true" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6" />
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7" />
                      <span className="placeholder col-4" />
                      <span className="placeholder col-4" />
                      <span className="placeholder col-6" />
                      <span className="placeholder col-8" />
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true" />
                  </div>
                </div>
              ))}
        </div>
      </section>
    </>
  );
}
