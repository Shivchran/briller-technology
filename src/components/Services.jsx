import {
  FaDesktop,
  FaNetworkWired,
  FaVideo,
  FaCode,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDesktop />,
    title: "Hardware Solutions",
    desc: "Desktop, Laptop, Printer & Server Support",
  },
  {
    icon: <FaNetworkWired />,
    title: "Networking",
    desc: "LAN, WAN, WiFi, Router & Switch Configuration",
  },
  {
    icon: <FaVideo />,
    title: "CCTV Installation",
    desc: "Professional Surveillance System Setup",
  },
  {
    icon: <FaCode />,
    title: "Website Development",
    desc: "Modern React & WordPress Websites",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Cloud Backup & Microsoft 365 Services",
  },
  {
    icon: <FaTools />,
    title: "AMC Support",
    desc: "Annual Maintenance Contracts for Businesses",
  },
];

function Services() {
  return (
    <section id="Services" className="services">

      <h2>Our Services</h2>

      <p className="service-subtitle">
        Complete IT Infrastructure & Business Technology Solutions
      </p>

      <div className="service-grid">

        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;