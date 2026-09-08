import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const canonPrinters = [
  {
    category: "Canon imageCLASS",
    name: "Canon imageCLASS LBP122dw II",
    type: "Monochrome Laser Printer",
    functions: "Print",
    paper: "A4",
    speed: "Up to 29 ppm",
    users: "Small office / individual users",
    monthlyVolume: "150–2,000 pages/month",
    connectivity: "USB + LAN + Wi-Fi",
    duplex: "Automatic duplex printing",
    use: "Small offices & business documents",
  },
  {
    category: "Canon imageCLASS",
    name: "Canon imageCLASS MF274dn",
    type: "Monochrome Multifunction Laser",
    functions: "Print, Scan, Copy, Fax",
    paper: "A4",
    speed: "Up to 29 ppm",
    users: "Small office teams",
    monthlyVolume: "150–2,000 pages/month",
    connectivity: "USB + Ethernet",
    duplex: "Automatic duplex printing",
    use: "Office documents & multifunction work",
  },
  {
    category: "Canon imageCLASS",
    name: "Canon imageCLASS LBP246dw II",
    type: "Monochrome Laser Printer",
    functions: "Print",
    paper: "A4",
    speed: "Up to 40 ppm",
    users: "Business teams",
    monthlyVolume: "Business volume",
    connectivity: "USB + Ethernet + Wi-Fi",
    duplex: "Automatic duplex printing",
    use: "High-volume office printing",
  },
  {
    category: "Canon imageCLASS",
    name: "Canon imageCLASS MF286dn",
    type: "Monochrome Multifunction Laser",
    functions: "Print, Scan, Copy, Fax",
    paper: "A4",
    speed: "Up to 33 ppm",
    users: "Small & medium businesses",
    monthlyVolume: "250–2,500 pages/month",
    connectivity: "USB + Ethernet",
    duplex: "Automatic duplex printing",
    use: "Business multifunction printing",
  },
  {
    category: "Canon MAXIFY",
    name: "Canon MAXIFY GX6170",
    type: "Color MegaTank Multifunction",
    functions: "Print, Scan, Copy",
    paper: "A4",
    speed: "Business inkjet",
    users: "Small & medium businesses",
    monthlyVolume: "300–2,500 pages/month",
    connectivity: "USB + LAN + Wi-Fi",
    duplex: "Automatic duplex printing",
    use: "High-volume color office printing",
  },
];

function CanonPrinters() {
  useEffect(() => {
    document.title =
      "Canon Business Printers | imageCLASS & MAXIFY Supplier | Briller Technology";

    const description =
      "Canon business printers for offices and companies. Explore Canon imageCLASS and MAXIFY printers for laser, multifunction, monochrome and color business printing from Briller Technology.";

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
      `${window.location.origin}/canon-business-printers`
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="hp-laptops-page canon-printers-page">

        {/* HERO */}
        <section className="hp-hero canon-printer-hero">
          <div className="hp-hero-content">

            <span className="hp-badge">
              CANON BUSINESS PRINTING
            </span>

            <h1>
              Canon Business Printers
            </h1>

            <p>
              Explore Canon business printers for offices,
              companies, professionals and enterprise
              environments. Briller Technology provides Canon
              imageCLASS and MAXIFY printer solutions for
              professional document printing, scanning,
              copying and business workflows.
            </p>

            <div className="hp-hero-buttons">

              <a
                href="#canon-products"
                className="hp-primary-btn"
              >
                View Canon Printers
              </a>

              <a
                href="#canon-quote"
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
              CANON BUSINESS PRINTERS
            </span>

            <h2>
              Canon Printers for Business & Office
            </h2>

            <p>
              Briller Technology provides Canon printer
              solutions for offices, companies, professionals
              and organizations. Choose from Canon laser,
              multifunction and color printer options
              according to your printing volume, functions,
              connectivity and business requirements.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🖨️
              </div>

              <h3>
                Business Printing
              </h3>

              <p>
                Canon printers are suitable for documents,
                reports, invoices, forms and everyday office
                printing.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                ⚡
              </div>

              <h3>
                Fast Laser Printing
              </h3>

              <p>
                Canon imageCLASS laser printers provide
                fast monochrome printing for business
                documents.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                📄
              </div>

              <h3>
                Multifunction
              </h3>

              <p>
                Selected Canon multifunction printers combine
                printing, scanning, copying and faxing.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🌐
              </div>

              <h3>
                Network Connectivity
              </h3>

              <p>
                Selected models support Ethernet and Wi-Fi
                connectivity for shared office printing.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCTS */}
        <section
          id="canon-products"
          className="hp-products-section"
        >

          <div className="hp-section-heading">

            <span>
              CANON PRINTER PRODUCTS
            </span>

            <h2>
              Featured Canon Business Printers
            </h2>

            <p>
              Explore selected Canon imageCLASS and MAXIFY
              printer configurations for business and office
              requirements.
            </p>

          </div>

          <div className="hp-product-grid">

            {canonPrinters.map((printer, index) => (

              <article
                className="hp-product-card"
                key={index}
              >

                <div className="hp-product-category">
                  {printer.category}
                </div>

                <h3>
                  {printer.name}
                </h3>

                <div className="hp-spec-list">

                  <div>
                    <span>
                      Printer Type
                    </span>

                    <strong>
                      {printer.type}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Functions
                    </span>

                    <strong>
                      {printer.functions}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Paper Size
                    </span>

                    <strong>
                      {printer.paper}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Printing Speed
                    </span>

                    <strong>
                      {printer.speed}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Recommended Users
                    </span>

                    <strong>
                      {printer.users}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Monthly Volume
                    </span>

                    <strong>
                      {printer.monthlyVolume}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Connectivity
                    </span>

                    <strong>
                      {printer.connectivity}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Duplex
                    </span>

                    <strong>
                      {printer.duplex}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Recommended For
                    </span>

                    <strong>
                      {printer.use}
                    </strong>
                  </div>

                </div>

                <div className="hp-product-buttons">

                  <a
                    href="#canon-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>

                  <a
                    href="https://in.canon/en/business/products/search?category=printing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official Canon ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CANON RANGE */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              CANON BUSINESS PRINTER RANGE
            </span>

            <h2>
              Choose the Right Canon Printer
            </h2>

            <p>
              Canon offers different printer families for
              small offices, professional businesses and
              larger enterprise printing environments.
            </p>

          </div>

          <div className="hp-range-grid">

            {/* IMAGECLASS */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🖨️
              </div>

              <h3>
                Canon imageCLASS
              </h3>

              <p>
                Canon imageCLASS printers provide
                monochrome and multifunction laser printing
                solutions for business documents and office
                workflows.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore imageCLASS ↗
              </a>

            </div>

            {/* MAXIFY */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🎨
              </div>

              <h3>
                Canon MAXIFY
              </h3>

              <p>
                Canon MAXIFY printers are designed for
                home-office and small-business environments,
                including color MegaTank options.
              </p>

              <a
                href="https://in.canon/en/consumer/maxify"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore MAXIFY ↗
              </a>

            </div>

            {/* IMAGERUNNER */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                Canon imageRUNNER
              </h3>

              <p>
                Canon imageRUNNER multifunction systems are
                designed for professional office and larger
                business document workflows.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing&subCategory=multi-functional-devices"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore imageRUNNER ↗
              </a>

            </div>

            {/* IMAGEFORCE */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🚀
              </div>

              <h3>
                Canon imageFORCE
              </h3>

              <p>
                Canon imageFORCE systems are positioned for
                advanced business printing and multifunction
                requirements.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore imageFORCE ↗
              </a>

            </div>

            {/* IMAGEPRESS */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                📚
              </div>

              <h3>
                Canon imagePRESS
              </h3>

              <p>
                Professional production printing solutions
                for organizations with demanding commercial
                print requirements.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore imagePRESS ↗
              </a>

            </div>

            {/* IMAGEPROGRAF */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                📐
              </div>

              <h3>
                Canon imagePROGRAF
              </h3>

              <p>
                Large-format printing solutions for
                professional graphics, CAD, technical
                documents and specialized workflows.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore imagePROGRAF ↗
              </a>

            </div>

          </div>

        </section>

        {/* LASER PRINTING */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CANON LASER PRINTERS
            </span>

            <h2>
              Canon Laser Printers for Business
            </h2>

            <p>
              Canon imageCLASS laser printers are suitable for
              businesses that primarily print documents such
              as invoices, reports, letters, forms and other
              office paperwork.
            </p>

            <p>
              Businesses can choose between print-only
              monochrome laser printers and multifunction
              systems that combine printing, scanning,
              copying and faxing.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Monochrome laser printing
              </div>

              <div>
                ✓ Fast document printing
              </div>

              <div>
                ✓ Automatic duplex options
              </div>

              <div>
                ✓ Network connectivity
              </div>

              <div>
                ✓ Print / Scan / Copy options
              </div>

              <div>
                ✓ Business document workflows
              </div>

            </div>

          </div>

        </section>

        {/* COLOR PRINTING */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              CANON COLOR PRINTING
            </span>

            <h2>
              Canon Color Printers for Business
            </h2>

            <p>
              Canon MAXIFY color printers provide options for
              professional color documents, office reports,
              presentations and everyday business printing.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🎨
              </div>

              <h3>
                Color Documents
              </h3>

              <p>
                Suitable for business documents,
                presentations and customer-facing material.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                💧
              </div>

              <h3>
                MegaTank Options
              </h3>

              <p>
                Selected MAXIFY MegaTank models are designed
                for high-volume color printing requirements.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🏢
              </div>

              <h3>
                Small Business
              </h3>

              <p>
                MAXIFY printers can be considered for
                home-office and small-business environments.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🌐
              </div>

              <h3>
                Network Printing
              </h3>

              <p>
                Selected models provide wired and wireless
                connectivity for shared office environments.
              </p>

            </div>

          </div>

        </section>

        {/* BUSINESS USE CASES */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              BUSINESS USE CASES
            </span>

            <h2>
              Canon Printers for Different Business Requirements
            </h2>

            <p>
              Select a Canon printer according to your
              document volume, functions, color requirements
              and number of users.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏠
              </div>

              <h3>
                Home Office
              </h3>

              <p>
                Compact Canon printers for professionals
                working from home or small office environments.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                Small Office
              </h3>

              <p>
                Business printer options for invoices,
                reports, documents and everyday office work.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                👥
              </div>

              <h3>
                Business Teams
              </h3>

              <p>
                Network-connected Canon printers can be
                shared by multiple users in an office.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏭
              </div>

              <h3>
                Enterprise Workflows
              </h3>

              <p>
                Canon multifunction and production systems
                can support larger professional document
                workflows.
              </p>

            </div>

          </div>

        </section>

        {/* SUPPLIER */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CANON PRINTER SUPPLIER
            </span>

            <h2>
              Canon Printer Supplier for Business Requirements
            </h2>

            <p>
              Briller Technology provides Canon printer
              solutions for offices, companies and
              organizations. We can help you select a
              suitable Canon printer according to your
              printing volume, required functions,
              connectivity and business requirements.
            </p>

            <p>
              Whether you need a single Canon printer for
              a small office or multiple printers for a
              corporate deployment, contact our team with
              your requirements and preferred configuration.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Canon imageCLASS
              </div>

              <div>
                ✓ Canon MAXIFY
              </div>

              <div>
                ✓ Canon imageRUNNER
              </div>

              <div>
                ✓ Canon imageFORCE
              </div>

              <div>
                ✓ Business & bulk requirements
              </div>

              <div>
                ✓ Quotation support
              </div>

            </div>

          </div>

        </section>

        {/* WHY BRILLER */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              WHY CHOOSE BRILLER TECHNOLOGY
            </span>

            <h2>
              Canon Printer Solutions for Businesses
            </h2>

            <p>
              We help businesses identify printer solutions
              according to their actual document and
              workflow requirements.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🏢
              </div>

              <h3>
                Business Requirements
              </h3>

              <p>
                Printer solutions for offices, companies,
                teams and professional users.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                📊
              </div>

              <h3>
                Volume Guidance
              </h3>

              <p>
                Select a printer according to your expected
                monthly document volume.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🔌
              </div>

              <h3>
                Connectivity
              </h3>

              <p>
                Compare USB, Ethernet and wireless
                connectivity according to your office setup.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                💬
              </div>

              <h3>
                Quotation Support
              </h3>

              <p>
                Contact our team for current Canon printer
                configurations and business quotations.
              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CANON PRINTER FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <h3>
              Which Canon printer is best for business?
            </h3>

            <p>
              The right Canon printer depends on your
              printing volume, required functions, color
              requirements and number of users. Canon
              imageCLASS and MAXIFY cover different
              business requirements.
            </p>

            <h3>
              Is Canon imageCLASS good for office use?
            </h3>

            <p>
              Canon imageCLASS printers are designed for
              document printing and multifunction office
              workflows, making suitable configurations
              useful for many business environments.
            </p>

            <h3>
              What is Canon MAXIFY?
            </h3>

            <p>
              Canon MAXIFY is a printer family focused on
              home-office and small-business printing,
              including color and MegaTank options.
            </p>

            <h3>
              Does Canon have multifunction printers?
            </h3>

            <p>
              Yes. Canon offers multifunction printers that
              combine functions such as printing, scanning,
              copying and, on selected models, faxing.
            </p>

            <h3>
              Can I buy Canon printers in bulk for my company?
            </h3>

            <p>
              Yes. Contact Briller Technology with your
              required quantity, printer type and business
              requirements for a quotation.
            </p>

            <h3>
              Can I get a quotation for Canon business printers?
            </h3>

            <p>
              Yes. Use the request-quote option below and
              provide your required printer type, quantity
              and business requirements.
            </p>

          </div>

        </section>

        {/* OFFICIAL CANON */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              OFFICIAL CANON INFORMATION
            </span>

            <h2>
              Explore Canon Business Printers
            </h2>

            <p>
              View Canon India's official business printing
              portfolio and current product information.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🖨️
              </div>

              <h3>
                Canon Business Printers
              </h3>

              <p>
                Explore Canon India's official business
                printing portfolio.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Canon Business ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                Canon Multifunction Devices
              </h3>

              <p>
                Explore Canon's official multifunction
                business printing systems.
              </p>

              <a
                href="https://in.canon/en/business/products/search?category=printing&subCategory=multi-functional-devices"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Canon MFDs ↗
              </a>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section
          id="canon-quote"
          className="hp-cta-section"
        >

          <div className="hp-cta-content">

            <span>
              NEED CANON PRINTERS?
            </span>

            <h2>
              Get a Quote for Canon Business Printers
            </h2>

            <p>
              Tell us your required printer type, quantity,
              color or monochrome requirement, printing
              volume and business requirements. Our team
              can help you identify a suitable Canon printer.
            </p>

          </div>

          <a
            href="mailto:sales@briller.com?subject=Canon Business Printer Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for Canon business printers.%0D%0A%0D%0APrinter Type:%0D%0ARequired Model:%0D%0AQuantity:%0D%0AColor or Black & White:%0D%0ARequired Functions:%0D%0AExpected Monthly Volume:%0D%0ACompany:%0D%0APhone:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request Canon Printer Quote →
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default CanonPrinters;