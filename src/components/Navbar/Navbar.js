import React, { useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img
          src="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2025/02/StefiLeon-firma.png"
          alt="StefiLeon firma"
          className="logo-img"
        />
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul
        className={`nav-links ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <li>
          <a href="#hero">Inicio</a>
        </li>
        <li>
          <a href="#quien-soy">¿Quién soy?</a>
        </li>
        <li>
          <a href="#que-hago">¿Qué hago?</a>
        </li>
        <li>
          <a href="#about-us">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
