import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "School Management Website",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Office Network Infrastructure",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  },
  {
    title: "CCTV Security Installation",
    category: "Security Solutions",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">

      <h2>Featured Projects</h2>

      <p>
        Some of the IT solutions and services delivered by Briller Technology.
      </p>

      <div className="portfolio-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <button>
                View Details <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Portfolio;