import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("briller-theme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("briller-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("briller-theme", "light");
    }
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Briller Technology" />
      </div>

      <ul className={menuOpen ? "menu active" : "menu"}>

        <li>
          <a href="/#Home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="/#Services" onClick={closeMenu}>
            Product & Services
          </a>
        </li>

        <li>
          <a href="/#About" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="/#Contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        {/* Mobile Theme Button */}
        <li className="mobile-theme-item">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </li>

      </ul>

      <div className="navbar-actions">

        {/* Desktop Theme Button */}
        <button
          className="theme-toggle desktop-theme"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <a
          href="mailto:sales@briller.com?subject=Quotation Request&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for your services.%0D%0A%0D%0AName:%0D%0APhone:%0D%0ACompany:%0D%0ARequired Service:%0D%0AProject Details:%0D%0A"
          className="quote-btn"
        >
          Get Quote →
        </a>

      </div>

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