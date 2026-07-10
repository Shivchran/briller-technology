import {
  FaUserShield,
  FaHeadset,
  FaClock,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserShield />,
    title: "Trusted IT Partner",
    desc: "Reliable solutions for businesses of every size.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Support",
    desc: "Fast technical support whenever you need it.",
  },
  {
    icon: <FaClock />,
    title: "Quick Response",
    desc: "On-time delivery and rapid issue resolution.",
  },
  {
    icon: <FaAward />,
    title: "Quality Service",
    desc: "Professional engineers and industry best practices.",
  },
];

function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Choose Briller Technology?</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;