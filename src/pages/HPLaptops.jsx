import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const hpProducts = [
  {
    category: "HP EliteBook",
    name: "HP EliteBook 8 G1i 14 inch Notebook AI PC",
    productNumber: "DM6M8PT#ACJ",
    processor: "Intel Core Ultra 7 255H",
    ram: "32 GB",
    storage: "1 TB SSD",
    display: '14" WUXGA (1920 × 1200)',
    graphics: "Intel Arc 140T GPU",
    os: "Windows 11 Pro",
  },
  {
    category: "HP EliteBook",
    name: "HP EliteBook 8 G1i 14 inch Notebook AI PC",
    productNumber: "DM6M5PT#ACJ",
    processor: "Intel Core Ultra 5 225H",
    ram: "16 GB",
    storage: "1 TB SSD",
    display: '14" WUXGA (1920 × 1200)',
    graphics: "Intel Arc 130T GPU",
    os: "Windows 11 Pro",
  },
  {
    category: "HP ProBook",
    name: "HP ProBook 4 G2i 14 inch Notebook Next Gen AI PC",
    productNumber: "DK7S2PT#ACJ",
    processor: "Intel Core Ultra 5 325",
    ram: "16 GB",
    storage: "512 GB SSD",
    display: '14" WUXGA (1920 × 1200)',
    graphics: "Intel Graphics",
    os: "Windows 11 Pro",
  },
  {
    category: "HP ProBook",
    name: "HP ProBook 4 G2i 14 inch Notebook Next Gen AI PC",
    productNumber: "DK7S1PT#ACJ",
    processor: "Intel Core Ultra 7 355",
    ram: "16 GB",
    storage: "512 GB SSD",
    display: '14" WUXGA (1920 × 1200)',
    graphics: "Intel Graphics",
    os: "Windows 11 Pro",
  },
  {
    category: "HP ProBook",
    name: "HP ProBook 4 G1i 14 inch Notebook AI PC",
    productNumber: "DK7R9PT#ACJ",
    processor: "Intel Core Ultra 7 255H",
    ram: "16 GB",
    storage: "1 TB SSD",
    display: '14" WUXGA (1920 × 1200)',
    graphics: "Intel Arc Graphics",
    os: "Windows 11 Pro",
  },
  {
    category: "HP ProBook",
    name: "HP ProBook 4 G1i 14 inch Notebook AI PC",
    productNumber: "DK7S0PT#ACJ",
    processor: "Intel Core Ultra 5 225U",
    ram: "16 GB",
    storage: "512 GB SSD",
    display: '14" WUXGA (1920 × 1200)',
    graphics: "Intel Graphics",
    os: "Windows 11 Pro",
  },
];

function HPLaptops() {
  return (
    <>
      {/* =========================
          HEADER
      ========================== */}
      <Navbar />

      {/* =========================
          MAIN PAGE
      ========================== */}
      <main className="hp-laptops-page">

        {/* =========================
            HERO
        ========================== */}
        <section className="hp-hero">
          <div className="hp-hero-content">

            <span className="hp-badge">
              HP BUSINESS COMPUTING
            </span>

            <h1>
              HP Business Laptops – EliteBook & ProBook
            </h1>

            <p>
              Explore HP business laptops for offices, enterprises and
              professional users. Briller Technology provides HP
              EliteBook and HP ProBook solutions for modern business
              computing requirements.
            </p>

            <div className="hp-hero-buttons">

              <a
                href="#hp-products"
                className="hp-primary-btn"
              >
                View HP Laptops
              </a>

              <a
                href="#hp-quote"
                className="hp-secondary-btn"
              >
                Request a Quote
              </a>

            </div>

          </div>
        </section>


        {/* =========================
            INTRO
        ========================== */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>HP BUSINESS LAPTOPS</span>

            <h2>
              HP Laptops for Business & Office
            </h2>

            <p>
              Briller Technology offers HP business laptop solutions
              for companies, offices, professionals and enterprise
              requirements. Choose from HP EliteBook and HP ProBook
              models according to your performance, mobility,
              storage and productivity needs.
            </p>

          </div>


          {/* FEATURES */}
          <div className="hp-feature-grid">

            <div className="hp-feature-card">
              <div className="hp-feature-icon">
                💼
              </div>

              <h3>
                Business Ready
              </h3>

              <p>
                Suitable for office applications, productivity,
                enterprise workloads and professional users.
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
                Selected configurations feature modern Intel Core
                and Intel Core Ultra processors.
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
                Fast SSD storage configurations for applications,
                documents and business data.
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
                HP business computers are designed with security
                and manageability features for professional use.
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            PRODUCTS
        ========================== */}
        <section
          id="hp-products"
          className="hp-products-section"
        >

          <div className="hp-section-heading">

            <span>
              HP LAPTOP PRODUCTS
            </span>

            <h2>
              Featured HP Business Laptops
            </h2>

            <p>
              Explore selected HP EliteBook and HP ProBook
              configurations for business and office requirements.
            </p>

          </div>


          <div className="hp-product-grid">

            {hpProducts.map((product, index) => (

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


                <div className="hp-product-number">

                  <span>
                    Product Number:
                  </span>

                  <strong>
                    {product.productNumber}
                  </strong>

                </div>


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

                </div>


                <div className="hp-product-buttons">

                  <a
                    href="#hp-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>


                  <a
                    href="https://www.hp.com/in-en/business-solutions/business-computers.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official HP ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =========================
            HP PRODUCT RANGE
        ========================== */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              HP BUSINESS RANGE
            </span>

            <h2>
              Choose the Right HP Business Laptop
            </h2>

            <p>
              HP offers different business laptop families designed
              for different professional requirements.
            </p>

          </div>


          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                💼
              </div>

              <h3>
                HP EliteBook
              </h3>

              <p>
                Premium HP business laptops designed for
                professional users who need mobility, performance
                and advanced business features.
              </p>

              <a
                href="https://www.hp.com/in-en/business-solutions/business-computers.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore HP EliteBook ↗
              </a>

            </div>


            <div className="hp-range-card">

              <div className="hp-range-icon">
                💻
              </div>

              <h3>
                HP ProBook
              </h3>

              <p>
                Business laptops designed for everyday professional
                productivity, office applications and hybrid work.
              </p>

              <a
                href="https://www.hp.com/in-en/shop/laptops-tablets/business-laptops.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore HP ProBook ↗
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            SEO CONTENT
        ========================== */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              BUSINESS LAPTOP SOLUTIONS
            </span>

            <h2>
              HP Business Laptops for Offices and Enterprises
            </h2>

            <p>
              Looking for reliable <strong>HP business laptops</strong>
              for your office or organization? Briller Technology
              provides HP laptop solutions for businesses,
              professional users and enterprise requirements.
            </p>

            <p>
              HP business laptop options include the
              <strong> HP EliteBook</strong> and
              <strong> HP ProBook</strong> families. Depending on
              the configuration, businesses can choose laptops with
              modern processors, fast SSD storage, business-class
              operating systems and different memory configurations.
            </p>

            <p>
              Whether you need laptops for employees, management,
              sales teams, remote workers or office applications,
              our team can help you identify a suitable HP business
              laptop configuration according to your requirements.
            </p>


            <h2>
              Why Choose Briller Technology?
            </h2>

            <div className="hp-benefits-grid">

              <div>
                ✓ Business laptop solutions
              </div>

              <div>
                ✓ HP EliteBook & ProBook options
              </div>

              <div>
                ✓ Product numbers & specifications
              </div>

              <div>
                ✓ Business & bulk requirements
              </div>

              <div>
                ✓ Quotation support
              </div>

              <div>
                ✓ IT hardware solutions
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================== */}
        <section
          id="hp-quote"
          className="hp-cta-section"
        >

          <div className="hp-cta-content">

            <span>
              NEED HP LAPTOPS?
            </span>

            <h2>
              Get a Quote for HP Business Laptops
            </h2>

            <p>
              Tell us your required quantity, configuration and
              business requirements. Our team can help you select
              suitable HP laptops for your organization.
            </p>

          </div>


          <a
            href="mailto:sales@briller.com?subject=HP Business Laptop Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for HP business laptops.%0D%0A%0D%0AQuantity:%0D%0ARequired Configuration:%0D%0ACompany:%0D%0APhone:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request HP Quote →
          </a>

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
}

export default HPLaptops;