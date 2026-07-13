import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <img src={logo} alt="Briller Technology" className="footer-logo" />

          <p>
            Briller Technology , Unit 1X30 , First Floor , Ild Trade Center,
            Subash Chock , Gurugram,
            PinCode : 122018
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Services</h3>

          <ul>
            <li>Hardware Support</li>
            <li>Networking</li>
            <li>CCTV Installation</li>
            <li>Website Development</li>
            <li>Cloud Solutions</li>
            <li>AMC Services</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 9990907022</p>

          <p><FaEnvelope /> Sunny@brillertec.com</p>

          <p><FaMapMarkerAlt /> Gurugram, Haryana</p>

          <div className="social-icons">

            <a href="https://www.linkedin.com/company/briller-technology/"><FaLinkedinIn /></a>

            <a href="https://www.youtube.com/@brillertechnology"><FaYoutube /></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Briller Technology. All Rights Reserved. 

      </div>

    </footer>
  );
}

export default Footer;