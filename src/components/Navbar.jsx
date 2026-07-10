import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Briller Technology" />
      </div>

      <ul className="menu">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Services">Product & Services</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <a
  href="mailto:sales@briller.com?subject=Quotation Request&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for your services.%0D%0A%0D%0AName:%0D%0APhone:%0D%0ACompany:%0D%0ARequired Service:%0D%0AProject Details:%0D%0A"
  className="quote-btn"
>
  Get Quote →
</a>
    </nav>
  );
}

export default Navbar;