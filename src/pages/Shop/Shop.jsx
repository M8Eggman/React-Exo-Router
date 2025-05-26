import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./Shop.css";
import { Link } from "react-router-dom";

export default function Shop(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProduct(props.data);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [props.data]);

  return (
    <>
      <Nav />
      <section className="sectionShop">
        <h2>Shop</h2>
        <div className="shop">
          {product ? (
            product.map((element) => (
              <article key={element.id} className="card" style={{ width: "18rem" }}>
                <div className="card-price">
                  <p>{element.price} €</p>
                </div>
                <div
                  className="card-img-top"
                  style={{ height: "12rem", width: "18rem", overflow: "hidden" }}
                >
                  <img
                    src={element.img}
                    alt={element.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <Link to={`/Shop/${element.id}`} className="btn btn-primary" aria-label={`Voir le produit ${element.title}`}>
                    Voir Le Produit
                  </Link>
                </div>
              </article>
            ))
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <article
                key={index}
                className="card placeholder-card"
                aria-hidden="true"
                style={{ width: "18rem" }}
              >
                <div className="card-price">
                  <p className="placeholder col-3" />
                </div>
                <div className="card-img-top placeholder-img" />
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
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                    href="#"
                    tabIndex={-1}
                  />
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}
