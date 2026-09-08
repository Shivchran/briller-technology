import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_gha66v9",
        "template_zzbdrea",
        form.current,
        "nSlAuy0U7ld5eiAOV"
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        form.current.reset();

        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        alert("❌ " + error.text);

        setLoading(false);
      });
  };

  return (
    <section id="Contact" className="contact">

      <div className="contact-left">

        <h2>Contact Us</h2>

        <p>
          Have a project in mind? Contact Briller Technology today.
        </p>

        <p>
          <FaPhoneAlt /> +91 9990907022
        </p>

        <p>
          <FaEnvelope /> sachin@brillertec.com
        </p>

        <p>
          <FaMapMarkerAlt /> Gurugram, Haryana, India
        </p>

      </div>

      <div className="contact-right">

        <form ref={form} onSubmit={sendEmail}>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            name="service"
            placeholder="Required Service"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;