import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h3>¡Estoy buscando nuevos desafíos!</h3>
        <p>
          Si querés sumar a alguien con experiencia y ganas a tu equipo o
          simplemente querés charlar sobre un proyecto, espero tu mail o tu
          mensaje por LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/stefania-leon/"
          target="_blank"
          className="contact-button"
          rel="noreferrer"
        >
          Contacto
        </a>
      </div>
    </section>
  );
};

export default Contact;
