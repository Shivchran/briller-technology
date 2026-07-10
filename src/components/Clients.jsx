import { motion } from "framer-motion";

function Clients() {
  const companies = [
    "Dell",
    "HP",
    "Lenovo",
    "Cisco",
    "Microsoft",
    "Canon",
    "Intel",
    "AMD"
  ];

  return (
    <section className="clients">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Trusted Technology Partners
      </motion.h2>

      <div className="client-grid">
        {companies.map((company, index) => (
          <motion.div
            className="client-card"
            key={index}
            whileHover={{ scale: 1.08 }}
          >
            {company}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Clients;