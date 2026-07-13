import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Briller Technology" />
      </div>

      <ul className={menuOpen ? "menu active" : "menu"}>

        <li>
          <a href="#Home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#Services" onClick={closeMenu}>
            Product & Services
          </a>
        </li>

        <li>
          <a href="#About" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#Contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

      </ul>

      <a
        href="mailto:sales@briller.com?subject=Quotation Request&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for your services.%0D%0A%0D%0AName:%0D%0APhone:%0D%0ACompany:%0D%0ARequired Service:%0D%0AProject Details:%0D%0A"
        className="quote-btn"
      >
        Get Quote →
      </a>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>

  );

}

export default Navbar;