import { FaProjectDiagram, FaUsers, FaLaptopCode, FaHeadset } from "react-icons/fa";

function Stats() {

    const stats = [
        {
            icon: <FaProjectDiagram />,
            number: "250+",
            title: "Completed Projects",
        },
        {
            icon: <FaUsers />,
            number: "150+",
            title: "Happy Clients",
        },
        {
            icon: <FaLaptopCode />,
            number: "10+",
            title: "IT Services",
        },
        {
            icon: <FaHeadset />,
            number: "24×7",
            title: "Technical Support",
        },
    ];

    return (
        <section className="stats">

            <h2>Our Achievements</h2>

            <div className="stats-grid">

                {stats.map((item, index) => (

                    <div className="stat-card" key={index}>

                        <div className="stat-icon">
                            {item.icon}
                        </div>

                        <h3>{item.number}</h3>

                        <p>{item.title}</p>

                    </div>

                ))}

            </div>

        </section>
    );

}

export default Stats;