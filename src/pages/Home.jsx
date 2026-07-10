import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <WhyChoose />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;