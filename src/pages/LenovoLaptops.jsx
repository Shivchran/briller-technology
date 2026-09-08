import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const lenovoProducts = [
  {
    category: "ThinkPad X1",
    name: "Lenovo ThinkPad X1 Carbon Gen 13 Aura Edition",
    processor: "Intel Core Ultra processor options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '14" display',
    graphics: "Integrated Intel Graphics",
    os: "Windows 11 Pro",
    use: "Premium business & executive use",
  },
  {
    category: "ThinkPad X1",
    name: "Lenovo ThinkPad X1 2-in-1 Gen 10 Aura Edition",
    processor: "Intel Core Ultra processor options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '14" 2-in-1 display',
    graphics: "Integrated Intel Graphics",
    os: "Windows 11 Pro",
    use: "Premium mobile professionals",
  },
  {
    category: "ThinkPad L Series",
    name: "Lenovo ThinkPad L14",
    processor: "Intel Core Ultra 7",
    ram: "16 GB",
    storage: "512 GB SSD",
    display: '14" display',
    graphics: "Integrated Intel Graphics",
    os: "Windows 11 Pro",
    use: "Business & office productivity",
  },
  {
    category: "ThinkPad L Series",
    name: "Lenovo ThinkPad L13 Gen 6",
    processor: "Intel Core Ultra processor options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '13.3" display',
    graphics: "Integrated Intel Graphics",
    os: "Windows 11 Pro",
    use: "Mobile business users",
  },
  {
    category: "ThinkBook",
    name: "Lenovo ThinkBook 14",
    processor: "Intel Core 5",
    ram: "16 GB",
    storage: "512 GB SSD",
    display: '14" display',
    graphics: "Integrated Intel Graphics",
    os: "Windows",
    use: "SMB & professional productivity",
  },
  {
    category: "ThinkBook",
    name: "Lenovo ThinkBook 16",
    processor: "Intel Core 7",
    ram: "16 GB",
    storage: "512 GB SSD",
    display: '16" display',
    graphics: "Integrated Intel Graphics",
    os: "Windows",
    use: "Office & productivity workloads",
  },
];

function LenovoLaptops() {
  useEffect(() => {
    document.title =
      "Lenovo Business Laptops | ThinkPad & ThinkBook Supplier | Briller Technology";

    const description =
      "Buy Lenovo business laptops for offices and companies from Briller Technology. Explore Lenovo ThinkPad and ThinkBook laptops for business, professionals and enterprise requirements.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/lenovo-business-laptops`
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="hp-laptops-page lenovo-laptops-page">

        {/* HERO */}
        <section className="hp-hero lenovo-hero">
          <div className="hp-hero-content">

            <span className="hp-badge">
              LENOVO BUSINESS COMPUTING
            </span>

            <h1>
              Lenovo Business Laptops
            </h1>

            <p>
              Explore Lenovo business laptops for offices,
              companies, professionals, startups and enterprise
              users. Briller Technology provides Lenovo ThinkPad
              and ThinkBook laptop solutions for professional
              productivity, mobility and business computing.
            </p>

            <div className="hp-hero-buttons">

              <a
                href="#lenovo-products"
                className="hp-primary-btn"
              >
                View Lenovo Laptops
              </a>

              <a
                href="#lenovo-quote"
                className="hp-secondary-btn"
              >
                Request a Quote
              </a>

            </div>

          </div>
        </section>

        {/* INTRO */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              LENOVO BUSINESS LAPTOPS
            </span>

            <h2>
              Lenovo Laptops for Business & Office
            </h2>

            <p>
              Briller Technology provides Lenovo laptop solutions
              for businesses, offices, professionals and enterprise
              users. Choose from Lenovo ThinkPad and ThinkBook
              families according to your performance, portability,
              security, display and productivity requirements.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                💼
              </div>

              <h3>
                Business Ready
              </h3>

              <p>
                Lenovo business laptops are designed for
                professional productivity, office applications
                and commercial environments.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                ⚡
              </div>

              <h3>
                Modern Performance
              </h3>

              <p>
                Current Lenovo business laptops include
                Intel Core and Intel Core Ultra processor
                configurations.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                💾
              </div>

              <h3>
                Fast SSD Storage
              </h3>

              <p>
                SSD configurations provide responsive
                application loading and smooth business
                productivity.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🔐
              </div>

              <h3>
                Business Security
              </h3>

              <p>
                Lenovo ThinkPad systems are designed around
                business durability, security and professional
                computing requirements.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCTS */}
        <section
          id="lenovo-products"
          className="hp-products-section"
        >

          <div className="hp-section-heading">

            <span>
              LENOVO LAPTOP PRODUCTS
            </span>

            <h2>
              Featured Lenovo Business Laptops
            </h2>

            <p>
              Explore selected Lenovo ThinkPad and ThinkBook
              configurations for business and professional
              requirements.
            </p>

          </div>

          <div className="hp-product-grid">

            {lenovoProducts.map((product, index) => (

              <article
                className="hp-product-card"
                key={index}
              >

                <div className="hp-product-category">
                  {product.category}
                </div>

                <h3>
                  {product.name}
                </h3>

                <div className="hp-spec-list">

                  <div>
                    <span>
                      Processor
                    </span>

                    <strong>
                      {product.processor}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Memory
                    </span>

                    <strong>
                      {product.ram}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Storage
                    </span>

                    <strong>
                      {product.storage}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Display
                    </span>

                    <strong>
                      {product.display}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Graphics
                    </span>

                    <strong>
                      {product.graphics}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Operating System
                    </span>

                    <strong>
                      {product.os}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Recommended For
                    </span>

                    <strong>
                      {product.use}
                    </strong>
                  </div>

                </div>

                <div className="hp-product-buttons">

                  <a
                    href="#lenovo-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>

                  <a
                    href="https://www.lenovo.com/in/en/c/laptops/thinkpad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official Lenovo ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* LENOVO RANGE */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              LENOVO BUSINESS LAPTOP RANGE
            </span>

            <h2>
              Choose the Right Lenovo Laptop
            </h2>

            <p>
              Lenovo offers different business laptop families
              for professionals, small businesses, enterprise
              users and demanding workloads.
            </p>

          </div>

          <div className="hp-range-grid">

            {/* THINKPAD X1 */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                ⭐
              </div>

              <h3>
                ThinkPad X1
              </h3>

              <p>
                Premium Lenovo business laptops designed for
                professionals and executives who need a
                combination of mobility, performance and
                premium features.
              </p>

              <a
                href="https://www.lenovo.com/in/en/c/laptops/thinkpad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore ThinkPad X1 ↗
              </a>

            </div>

            {/* THINKPAD T */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                💼
              </div>

              <h3>
                ThinkPad T Series
              </h3>

              <p>
                Professional ThinkPad systems for business
                users who require dependable performance,
                security and productivity.
              </p>

              <a
                href="https://www.lenovo.com/in/en/c/laptops/thinkpad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore ThinkPad T ↗
              </a>

            </div>

            {/* THINKPAD L */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                ThinkPad L Series
              </h3>

              <p>
                Business laptops designed to balance
                productivity, reliability and cost for
                growing businesses and professional users.
              </p>

              <a
                href="https://www.lenovo.com/in/en/d/thinkpad-l-series/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore ThinkPad L ↗
              </a>

            </div>

            {/* THINKPAD E */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                💻
              </div>

              <h3>
                ThinkPad E Series
              </h3>

              <p>
                Business-focused ThinkPad laptops suitable
                for small businesses, office users and
                everyday professional workloads.
              </p>

              <a
                href="https://store.lenovo.com/in/en/laptops/thinkpad.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore ThinkPad E ↗
              </a>

            </div>

            {/* THINKPAD P */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🚀
              </div>

              <h3>
                ThinkPad P Series
              </h3>

              <p>
                Mobile workstation solutions for engineering,
                development, design, data-intensive and other
                demanding professional workloads.
              </p>

              <a
                href="https://www.lenovo.com/in/en/c/laptops/thinkpad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore ThinkPad P ↗
              </a>

            </div>

            {/* THINKBOOK */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                📊
              </div>

              <h3>
                ThinkBook
              </h3>

              <p>
                Lenovo ThinkBook laptops combine professional
                business features with modern design and are
                suitable for professionals and small and
                medium businesses.
              </p>

              <a
                href="https://www.lenovo.com/in/en/c/laptops/thinkbook/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore ThinkBook ↗
              </a>

            </div>

          </div>

        </section>

        {/* BUSINESS USE CASES */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              LENOVO BUSINESS LAPTOP SOLUTIONS
            </span>

            <h2>
              Lenovo Business Laptops for Offices and Companies
            </h2>

            <p>
              Looking for reliable{" "}
              <strong>
                Lenovo business laptops
              </strong>{" "}
              for your company or office? Briller Technology
              provides Lenovo laptop solutions for businesses,
              professionals, startups, educational organizations
              and enterprise users.
            </p>

            <p>
              Lenovo ThinkPad laptops are well suited to
              professional environments where reliability,
              productivity and business-focused features are
              important. Lenovo ThinkBook laptops provide
              another option for professionals and growing
              businesses looking for a balance between business
              functionality and modern design.
            </p>

            <h2>
              Lenovo Laptops for Different Business Users
            </h2>

            <div className="hp-benefits-grid">

              <div>
                ✓ Office employees
              </div>

              <div>
                ✓ Management & executives
              </div>

              <div>
                ✓ Sales teams
              </div>

              <div>
                ✓ Software developers
              </div>

              <div>
                ✓ IT professionals
              </div>

              <div>
                ✓ Remote & hybrid workers
              </div>

              <div>
                ✓ Small & medium businesses
              </div>

              <div>
                ✓ Enterprise deployments
              </div>

            </div>

            <h2>
              Lenovo Laptops for Office Work
            </h2>

            <p>
              For everyday office work, Lenovo ThinkPad and
              ThinkBook configurations can be selected based
              on the applications your employees use. Common
              requirements include Microsoft Office, web
              applications, video meetings, business software,
              document management and multitasking.
            </p>

            <h2>
              Lenovo Laptops for IT & Software Professionals
            </h2>

            <p>
              Developers and IT professionals may require
              higher memory, faster SSD storage and more
              capable processors. Lenovo ThinkPad and
              ThinkPad P Series options can be considered
              according to the workload and software
              requirements.
            </p>

          </div>

        </section>

        {/* WHY LENOVO */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              WHY CHOOSE LENOVO BUSINESS LAPTOPS
            </span>

            <h2>
              Lenovo ThinkPad & ThinkBook for Professional Use
            </h2>

            <p>
              Lenovo's business portfolio covers premium,
              mainstream and value-focused professional
              computing requirements.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🛡️
              </div>

              <h3>
                Reliability
              </h3>

              <p>
                ThinkPad systems are designed with business
                durability and professional reliability in mind.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                ⌨️
              </div>

              <h3>
                Business Design
              </h3>

              <p>
                ThinkPad laptops focus on productivity,
                ergonomics and professional usability.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🤖
              </div>

              <h3>
                AI PC Options
              </h3>

              <p>
                Lenovo's current business portfolio includes
                AI-capable ThinkPad and ThinkBook systems.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🌐
              </div>

              <h3>
                Business Portfolio
              </h3>

              <p>
                Multiple ThinkPad and ThinkBook families make
                it easier to match a laptop to different
                business requirements.
              </p>

            </div>

          </div>

        </section>

        {/* SUPPLIER SECTION */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              LENOVO LAPTOP SUPPLIER
            </span>

            <h2>
              Lenovo Laptop Supplier for Business Requirements
            </h2>

            <p>
              Briller Technology provides Lenovo laptop
              solutions for business and organizational
              requirements. We can help you identify suitable
              Lenovo laptops based on quantity, processor,
              RAM, storage, display and operating system
              requirements.
            </p>

            <p>
              If your company requires multiple Lenovo laptops
              for employees, a new office, project deployment
              or IT refresh, contact our team with your
              requirements and preferred configuration.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Lenovo business laptops
              </div>

              <div>
                ✓ ThinkPad solutions
              </div>

              <div>
                ✓ ThinkBook solutions
              </div>

              <div>
                ✓ Business & bulk requirements
              </div>

              <div>
                ✓ Configuration guidance
              </div>

              <div>
                ✓ Quotation support
              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              LENOVO LAPTOP FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <h3>
              Which Lenovo laptop is best for business?
            </h3>

            <p>
              The right Lenovo business laptop depends on the
              user's workload. ThinkPad X1 is positioned for
              premium professional users, while ThinkPad T,
              L and E families cover different business
              requirements. ThinkBook is another option for
              professionals and SMB users.
            </p>

            <h3>
              Is Lenovo ThinkPad good for office work?
            </h3>

            <p>
              Yes. ThinkPad is Lenovo's established business
              laptop family and is designed around professional
              productivity, durability and business use.
            </p>

            <h3>
              What is the difference between ThinkPad and ThinkBook?
            </h3>

            <p>
              ThinkPad is Lenovo's dedicated business-focused
              laptop family, while ThinkBook combines business
              functionality with a more modern design approach
              and is particularly relevant for professionals
              and growing businesses.
            </p>

            <h3>
              Can I buy Lenovo laptops in bulk for my company?
            </h3>

            <p>
              Yes. Contact Briller Technology with your required
              quantity, configuration and company requirements
              for a business quotation.
            </p>

            <h3>
              Does Lenovo offer business laptops with Windows 11 Pro?
            </h3>

            <p>
              Yes. Lenovo's business portfolio includes
              configurations with Windows 11 Pro. The exact
              operating system depends on the selected model
              and configuration.
            </p>

          </div>

        </section>

        {/* OFFICIAL LENOVO */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              OFFICIAL LENOVO INFORMATION
            </span>

            <h2>
              Explore Lenovo Business Laptops
            </h2>

            <p>
              View Lenovo's official product information for
              current ThinkPad and ThinkBook models.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                💼
              </div>

              <h3>
                Lenovo ThinkPad
              </h3>

              <p>
                Explore Lenovo's official ThinkPad business
                laptop portfolio.
              </p>

              <a
                href="https://www.lenovo.com/in/en/c/laptops/thinkpad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Lenovo ThinkPad ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                📊
              </div>

              <h3>
                Lenovo ThinkBook
              </h3>

              <p>
                Explore Lenovo's official ThinkBook portfolio
                for professionals and businesses.
              </p>

              <a
                href="https://www.lenovo.com/in/en/c/laptops/thinkbook/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Lenovo ThinkBook ↗
              </a>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section
          id="lenovo-quote"
          className="hp-cta-section"
        >

          <div className="hp-cta-content">

            <span>
              NEED LENOVO LAPTOPS?
            </span>

            <h2>
              Get a Quote for Lenovo Business Laptops
            </h2>

            <p>
              Tell us your required quantity, processor,
              RAM, storage, display preference and business
              requirements. Our team can help you identify
              suitable Lenovo laptops.
            </p>

          </div>

          <a
            href="mailto:sales@briller.com?subject=Lenovo Business Laptop Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for Lenovo business laptops.%0D%0A%0D%0AQuantity:%0D%0ARequired Model:%0D%0AProcessor:%0D%0ARAM:%0D%0AStorage:%0D%0ACompany:%0D%0APhone:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request Lenovo Quote →
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default LenovoLaptops;