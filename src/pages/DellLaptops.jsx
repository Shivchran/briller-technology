import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dellProducts = [
  {
    category: "Dell Pro",
    name: "Dell Pro 14 Laptop",
    processor: "Intel Core Ultra 5 / Ultra 7 options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '14" display options',
    graphics: "Integrated Intel Graphics",
    os: "Windows 11 Pro",
    use: "Office & professional productivity",
  },
  {
    category: "Dell Pro",
    name: "Dell Pro 16 Laptop",
    processor: "AMD Ryzen 3 / Ryzen 5 / Ryzen AI 5 PRO / AI 7 PRO options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '16" 16:10 display',
    graphics: "Integrated AMD Graphics",
    os: "Windows 11 Pro",
    use: "Business & productivity",
  },
  {
    category: "Dell Pro Essential",
    name: "Dell Pro Essential 15 Laptop",
    processor: "Intel Core Ultra 5 / Ultra 7 options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '15.6" display options',
    graphics: "Integrated Intel Arc Graphics",
    os: "Windows 11 Pro",
    use: "Small business & office",
  },
  {
    category: "Dell Pro Premium",
    name: "Dell Pro 14 Premium Laptop",
    processor: "Intel Core Ultra 5 / Ultra 7 vPro options",
    ram: "Configuration dependent",
    storage: "SSD configurations",
    display: '14" WUXGA display',
    graphics: "Integrated Intel Arc Graphics",
    os: "Windows 11 Pro",
    use: "Premium professional mobility",
  },
  {
    category: "Dell Pro",
    name: "Dell Pro 13 Plus Laptop",
    processor: "Intel Core Ultra 5 235U vPro",
    ram: "16 GB DDR5",
    storage: "512 GB SSD",
    display: '13" FHD+ 1920 × 1200',
    graphics: "Integrated Intel Graphics",
    os: "Windows 11 Pro",
    use: "Mobile business professionals",
  },
  {
    category: "Dell Latitude",
    name: "Dell Latitude 5455",
    processor: "Qualcomm Snapdragon X Plus options",
    ram: "16 GB LPDDR5x",
    storage: "256 GB SSD configuration",
    display: '14" FHD+ 1920 × 1200',
    graphics: "Qualcomm Adreno Graphics",
    os: "Windows 11 Pro",
    use: "Portable professional computing",
  },
];

function DellLaptops() {
  return (
    <>
      <Navbar />

      <main className="hp-laptops-page dell-laptops-page">

        {/* HERO */}
        <section className="hp-hero dell-hero">
          <div className="hp-hero-content">

            <span className="hp-badge">
              DELL BUSINESS COMPUTING
            </span>

            <h1>Dell Business Laptops</h1>

            <p>
              Explore Dell business laptops for offices, companies,
              professionals and enterprise users. Briller Technology
              provides Dell laptop solutions for everyday productivity,
              professional workloads, mobility and business computing.
            </p>

            <div className="hp-hero-buttons">

              <a
                href="#dell-products"
                className="hp-primary-btn"
              >
                View Dell Laptops
              </a>

              <a
                href="#dell-quote"
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

            <span>DELL BUSINESS LAPTOPS</span>

            <h2>
              Dell Laptops for Business & Office
            </h2>

            <p>
              Briller Technology offers Dell business laptop
              solutions for companies, offices, professionals,
              startups and enterprise requirements. Choose from
              Dell Pro and Latitude business laptop options
              according to your performance, mobility, display,
              storage and productivity requirements.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">💼</div>

              <h3>Business Ready</h3>

              <p>
                Dell business laptops are designed for office
                productivity, professional applications and
                workplace requirements.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">⚡</div>

              <h3>Modern Performance</h3>

              <p>
                Current Dell business systems offer Intel Core,
                Intel Core Ultra and AMD Ryzen processor options.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">💾</div>

              <h3>SSD Storage</h3>

              <p>
                Fast SSD configurations provide responsive
                application loading and business productivity.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">🔐</div>

              <h3>Business Security</h3>

              <p>
                Dell commercial systems are designed with
                security and manageability features for
                professional environments.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCTS */}
        <section
          id="dell-products"
          className="hp-products-section"
        >

          <div className="hp-section-heading">

            <span>DELL LAPTOP PRODUCTS</span>

            <h2>
              Featured Dell Business Laptops
            </h2>

            <p>
              Explore selected Dell business laptop families
              and configurations for office and professional
              requirements.
            </p>

          </div>

          <div className="hp-product-grid">

            {dellProducts.map((product, index) => (

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
                    <span>Processor</span>
                    <strong>{product.processor}</strong>
                  </div>

                  <div>
                    <span>Memory</span>
                    <strong>{product.ram}</strong>
                  </div>

                  <div>
                    <span>Storage</span>
                    <strong>{product.storage}</strong>
                  </div>

                  <div>
                    <span>Display</span>
                    <strong>{product.display}</strong>
                  </div>

                  <div>
                    <span>Graphics</span>
                    <strong>{product.graphics}</strong>
                  </div>

                  <div>
                    <span>Operating System</span>
                    <strong>{product.os}</strong>
                  </div>

                  <div>
                    <span>Recommended For</span>
                    <strong>{product.use}</strong>
                  </div>

                </div>

                <div className="hp-product-buttons">

                  <a
                    href="#dell-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>

                  <a
                    href="https://www.dell.com/en-in/shop/business-laptop-notebook-computers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official Dell ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* DELL RANGE */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>DELL BUSINESS LAPTOP RANGE</span>

            <h2>
              Choose the Right Dell Laptop
            </h2>

            <p>
              Dell provides different business laptop families
              for different levels of performance, mobility,
              manageability and business requirements.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">💼</div>

              <h3>Dell Pro</h3>

              <p>
                Dell Pro laptops are designed for professional
                productivity, business workloads and modern
                workplace requirements.
              </p>

              <a
                href="https://www.dell.com/en-in/shop/business-pcs-desktop-computers/sr/all-products/laptops"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Dell Pro ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">💻</div>

              <h3>Dell Latitude</h3>

              <p>
                Dell Latitude systems are designed for
                professional and commercial computing,
                including mobile business users.
              </p>

              <a
                href="https://www.dell.com/en-in/shop/latitude-laptops-and-2-in-1-pcs/scr/laptops"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Dell Latitude ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">🚀</div>

              <h3>Dell Pro Premium</h3>

              <p>
                Premium Dell business laptops for professionals
                who need mobility, performance and advanced
                business features.
              </p>

              <a
                href="https://www.dell.com/en-in/shop/laptops/new-14/spd/dell-pro-pa14250-laptop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Dell Premium ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">🖥️</div>

              <h3>Dell Pro Precision</h3>

              <p>
                Workstation-class Dell systems for engineering,
                design, development and demanding professional
                applications.
              </p>

              <a
                href="https://www.dell.com/en-in/shop/laptop-notebook-computers/dell-pro-precision-5-series-14-laptop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Dell Precision ↗
              </a>

            </div>

          </div>

        </section>

        {/* BUSINESS USE CASES */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              DELL BUSINESS LAPTOP SOLUTIONS
            </span>

            <h2>
              Dell Business Laptops for Offices and Companies
            </h2>

            <p>
              Looking for reliable{" "}
              <strong>Dell business laptops</strong> for your
              office or organization? Briller Technology provides
              Dell laptop solutions for businesses, professionals,
              startups and enterprise requirements.
            </p>

            <p>
              Dell business laptop options can be selected
              according to processor performance, memory,
              storage, display size, portability and operating
              system requirements.
            </p>

            <h2>
              Dell Laptops for Different Business Users
            </h2>

            <div className="hp-benefits-grid">

              <div>✓ Office employees</div>

              <div>✓ Management & executives</div>

              <div>✓ Sales teams</div>

              <div>✓ Software professionals</div>

              <div>✓ Remote & hybrid workers</div>

              <div>✓ Corporate IT deployments</div>

              <div>✓ Small businesses</div>

              <div>✓ Enterprise requirements</div>

            </div>

            <h2>
              Dell Laptop Supplier for Business Requirements
            </h2>

            <p>
              Briller Technology helps businesses source suitable
              Dell laptops according to their required quantity,
              configuration and budget. Whether you need laptops
              for a small office or a larger corporate deployment,
              contact our team for a quotation.
            </p>

          </div>

        </section>

        {/* WHY BRILLER */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              WHY CHOOSE BRILLER TECHNOLOGY
            </span>

            <h2>
              Dell Laptop Solutions for Businesses
            </h2>

            <p>
              We help organizations identify suitable IT hardware
              according to their technical and business
              requirements.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">🏢</div>

              <h3>Business Requirements</h3>

              <p>
                Solutions for offices, companies and
                professional users.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">📦</div>

              <h3>Bulk Requirements</h3>

              <p>
                Support for organizations requiring multiple
                business laptops.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">🧑‍💼</div>

              <h3>Configuration Guidance</h3>

              <p>
                Choose processors, RAM, storage and display
                according to your workload.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">💬</div>

              <h3>Quotation Support</h3>

              <p>
                Contact our team for current configuration and
                business quotation requirements.
              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              DELL LAPTOP FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <h3>
              Which Dell laptops are suitable for business?
            </h3>

            <p>
              Dell Pro and Latitude business laptop families
              are designed for professional and commercial
              computing requirements. The right model depends
              on your workload, portability and configuration.
            </p>

            <h3>
              Can I buy Dell laptops for my company?
            </h3>

            <p>
              Yes. Briller Technology can assist with business
              and bulk Dell laptop requirements. Contact us with
              your quantity and required configuration.
            </p>

            <h3>
              Which Dell laptop is suitable for office work?
            </h3>

            <p>
              Dell Pro and suitable Latitude configurations can
              be considered for office productivity, depending
              on the required applications and workload.
            </p>

            <h3>
              Do Dell business laptops come with Windows 11 Pro?
            </h3>

            <p>
              Many Dell commercial configurations offer Windows
              11 Pro. The exact operating system depends on the
              selected configuration.
            </p>

          </div>

        </section>

        {/* CTA */}
        <section
          id="dell-quote"
          className="hp-cta-section"
        >

          <div className="hp-cta-content">

            <span>
              NEED DELL LAPTOPS?
            </span>

            <h2>
              Get a Quote for Dell Business Laptops
            </h2>

            <p>
              Tell us your required quantity, configuration,
              company details and business requirements. Our
              team can help you identify suitable Dell laptops.
            </p>

          </div>

          <a
            href="mailto:sales@briller.com?subject=Dell Business Laptop Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for Dell business laptops.%0D%0A%0D%0AQuantity:%0D%0ARequired Configuration:%0D%0ACompany:%0D%0APhone:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request Dell Quote →
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default DellLaptops;