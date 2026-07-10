import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section id="Home" className="hero">

      <div className="hero-left">

        <motion.span
          className="badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🚀 Trusted IT Solutions Company
        </motion.span>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Businesses with
          <span> Smart IT Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Briller Technology delivers reliable Hardware Support,
          Networking, CCTV Installation, Website Development,
          Cloud Solutions and AMC Services for businesses of all sizes.
        </motion.p>

        <div className="hero-btns">
          <div className="hero-buttons">

  <div className="hero-btns">

  <a href="#Services" className="primary-btn">
    Get Started
  </a>

  <a href="tel:+919990907022" className="secondary-btn">
    Contact Us
  </a>

</div>

</div>
        </div>

      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <img src={heroImg} alt="IT Solutions" />
      </motion.div>

    </section>
  );
}

export default Hero;