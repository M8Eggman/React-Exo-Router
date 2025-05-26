import Nav from "../../components/Nav/Nav";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <Nav />
      <section className="contact">
        <h1>Contactez-nous</h1>
        {!submit ? (
          <form onSubmit={handleSubmit} className="contactForm">
            <label>
              Nom :
              <input type="text" name="name" required />
            </label>
            <label>
              Email :
              <input type="email" name="email" required />
            </label>
            <label>
              Message :
              <textarea name="message" required />
            </label>
            <button type="submit" className="btnSubmit">
              Envoyer
            </button>
          </form>
        ) : (
          <p>Merci pour votre message, nous vous répondrons rapidement !</p>
        )}
      </section>
    </>
  );
}
