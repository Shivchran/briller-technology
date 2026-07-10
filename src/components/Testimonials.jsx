import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "ABC Traders",
    review:
      "Briller Technology provided excellent networking and hardware support. Their response time was fast and professional.",
  },
  {
    name: "Priya Sharma",
    company: "XYZ School",
    review:
      "The website developed by Briller Technology exceeded our expectations. Great design and smooth performance.",
  },
  {
    name: "Amit Verma",
    company: "Tech Solutions",
    review:
      "Highly recommended for CCTV installation and annual maintenance services. Very reliable team.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">

        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.company}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;