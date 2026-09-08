import { motion } from "framer-motion";

function Clients() {
  const companies = [
    {
      name: "Dell",
      link: "/dell-business-laptops",
    },
    {
      name: "HP",
      link: "/hp-business-laptops",
    },
    {
      name: "Lenovo",
      link: "/lenovo-business-laptops",
    },
    {
      name: "Cisco",
      link: "/cisco-networking",
    },
    {
      name: "Microsoft",
      link: "/microsoft-business-solutions",
    },
    {
      name: "Canon",
      link: "/canon-business-printers",
    },
    {
      name: "Intel",
      link: "/intel-processors",
    },
    {
      name: "AMD",
      link: "/amd-processors",
    },
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
          <motion.a
            href={company.link}
            className="client-card"
            key={index}
            whileHover={{ scale: 1.08 }}
          >
            {company.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Clients;