import { motion } from "framer-motion";
import { FaServer, FaNetworkWired, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section id="About" className="about">

      <motion.div
        className="about-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Briller Technology</h2>

        <p>
          Briller Technology is a trusted IT solutions company providing
          Hardware, Networking, CCTV Installation, Website Development,
          Cloud Solutions, and AMC Support for businesses.
        </p>

        <div className="features">

          <div className="feature">
            <FaServer />
            <span>Hardware Solutions</span>
          </div>

          <div className="feature">
            <FaNetworkWired />
            <span>Networking</span>
          </div>

          <div className="feature">
            <FaLaptopCode />
            <span>Website Development</span>
          </div>

        </div>

      </motion.div>

      <motion.div
        className="about-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
          alt="About"
        />
      </motion.div>

    </section>
  );
}

export default About;