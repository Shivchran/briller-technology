import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const hpPrinters = [
  {
    category: "HP LaserJet Pro",
    name: "HP LaserJet Pro MFP M126nw plus",
    productNumber: "53X75A#ACJ",
    type: "Black & White Multifunction",
    functions: "Print, Copy, Scan",
    paper: "A4",
    speed: "Up to 21 ppm",
    users: "Up to 5 users",
    monthlyVolume: "Up to 2,000 pages/month",
    connectivity: "Wireless",
    use: "Small office & business",
  },
  {
    category: "HP LaserJet Pro",
    name: "HP LaserJet Pro 4004dw Printer",
    productNumber: "2Z615A#ACJ",
    type: "Black & White Laser",
    functions: "Print",
    paper: "A4",
    speed: "Up to 42 ppm",
    users: "Up to 10 users",
    monthlyVolume: "Up to 4,000 pages/month",
    connectivity: "Wireless + Ethernet",
    use: "Business teams",
  },
  {
    category: "HP LaserJet Pro",
    name: "HP LaserJet Pro 4004dn Printer",
    productNumber: "2Z614A#ACJ",
    type: "Black & White Laser",
    functions: "Print",
    paper: "A4",
    speed: "Up to 42 ppm",
    users: "Up to 10 users",
    monthlyVolume: "Up to 4,000 pages/month",
    connectivity: "Ethernet",
    use: "Office & business teams",
  },
  {
    category: "HP LaserJet Pro",
    name: "HP LaserJet Pro MFP 4104dw Printer",
    productNumber: "2Z632A#ACJ",
    type: "Black & White Multifunction",
    functions: "Print, Copy, Scan",
    paper: "A4",
    speed: "Up to 42 ppm",
    users: "Up to 10 users",
    monthlyVolume: "Up to 4,000 pages/month",
    connectivity: "Wireless + Ethernet",
    use: "Professional offices",
  },
  {
    category: "HP Color LaserJet Pro",
    name: "HP Color LaserJet Pro MFP 3303sdw",
    productNumber: "499M6A#ACJ",
    type: "Color Multifunction",
    functions: "Print, Copy, Scan",
    paper: "A4",
    speed: "Up to 25 ppm",
    users: "Up to 7 users",
    monthlyVolume: "Up to 2,500 pages/month",
    connectivity: "Wireless + Ethernet",
    use: "Small & medium businesses",
  },
  {
    category: "HP OfficeJet Pro",
    name: "HP OfficeJet Pro 9720 Wide Format All-in-One",
    productNumber: "53N94C#ACJ",
    type: "Color Inkjet Multifunction",
    functions: "Print, Copy, Scan",
    paper: "A4 + A3",
    speed: "Up to 22 ppm",
    users: "Business users",
    monthlyVolume: "Up to 1,500 pages/month",
    connectivity: "Wireless + Ethernet",
    use: "Office & creative documents",
  },
  {
    category: "HP OfficeJet Pro",
    name: "HP OfficeJet Pro 9730 Wide Format All-in-One",
    productNumber: "537P5C#ACJ",
    type: "Color Inkjet Multifunction",
    functions: "Print, Copy, Scan",
    paper: "A4 + A3",
    speed: "Up to 22 ppm",
    users: "Business users",
    monthlyVolume: "Up to 1,500 pages/month",
    connectivity: "Wireless + Ethernet",
    use: "Professional office printing",
  },
  {
    category: "HP Color LaserJet Pro",
    name: "HP Color LaserJet Pro 4303fdw",
    productNumber: "Not listed here",
    type: "Color Multifunction",
    functions: "Print, Scan, Copy, Fax",
    paper: "A4",
    speed: "Up to 35 ppm",
    users: "Up to 10 users",
    monthlyVolume: "Business volume",
    connectivity: "Wireless + Ethernet",
    use: "Medium business & enterprise teams",
  },
];

function HPPrinters() {
  useEffect(() => {
    document.title =
      "HP Business Printers | HP LaserJet & OfficeJet Pro Supplier | Briller Technology";

    const description =
      "HP business printers for offices and companies. Explore HP LaserJet Pro, Color LaserJet Pro and OfficeJet Pro printers for business, professional and enterprise printing requirements from Briller Technology.";

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
      `${window.location.origin}/hp-business-printers`
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="hp-laptops-page hp-printers-page">

        {/* HERO */}
        <section className="hp-hero hp-printer-hero">

          <div className="hp-hero-content">

            <span className="hp-badge">
              HP BUSINESS PRINTING
            </span>

            <h1>
              HP Business Printers
            </h1>

            <p>
              Explore HP business printers for offices,
              companies, professionals and enterprise teams.
              Briller Technology provides HP LaserJet Pro,
              Color LaserJet Pro and OfficeJet Pro printer
              solutions for business printing requirements.
            </p>

            <div className="hp-hero-buttons">

              <a
                href="#hp-printer-products"
                className="hp-primary-btn"
              >
                View HP Printers
              </a>

              <a
                href="#hp-printer-quote"
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
              HP BUSINESS PRINTERS
            </span>

            <h2>
              HP Printers for Business & Office
            </h2>

            <p>
              Briller Technology provides HP printer solutions
              for offices, businesses, professionals and
              organizations. Choose from black-and-white laser,
              color laser and business inkjet printers according
              to your printing volume, speed, connectivity and
              multifunction requirements.
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
                HP printers designed for documents, reports,
                invoices, presentations and everyday office
                printing.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                ⚡
              </div>

              <h3>
                Fast Printing
              </h3>

              <p>
                Selected HP LaserJet Pro models provide fast
                black-and-white or color printing for busy
                office teams.
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
                Multifunction models combine printing, scanning
                and copying, with selected models also offering
                fax functionality.
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
                Selected HP business printers include security
                and management features designed for professional
                environments.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCT SECTION */}
        <section
          id="hp-printer-products"
          className="hp-products-section"
        >

          <div className="hp-section-heading">

            <span>
              HP PRINTER PRODUCTS
            </span>

            <h2>
              Featured HP Business Printers
            </h2>

            <p>
              Explore selected HP business printer models for
              offices, teams and professional environments.
            </p>

          </div>

          <div className="hp-product-grid">

            {hpPrinters.map((printer, index) => (

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

                <div className="hp-product-number">

                  <span>
                    Product Number:
                  </span>

                  <strong>
                    {printer.productNumber}
                  </strong>

                </div>

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
                      Recommended For
                    </span>

                    <strong>
                      {printer.use}
                    </strong>
                  </div>

                </div>

                <div className="hp-product-buttons">

                  <a
                    href="#hp-printer-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>

                  <a
                    href="https://www.hp.com/in-en/printers/business-printers.html"
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

        {/* PRINTER TYPES */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              HP PRINTER TYPES
            </span>

            <h2>
              Choose the Right HP Printer
            </h2>

            <p>
              HP offers different printer technologies for
              different business printing requirements.
            </p>

          </div>

          <div className="hp-range-grid">

            {/* LASERJET PRO */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🖨️
              </div>

              <h3>
                HP LaserJet Pro
              </h3>

              <p>
                Laser printers designed for fast, professional
                black-and-white and color document printing.
                Suitable for offices and business teams.
              </p>

              <a
                href="https://www.hp.com/in-en/printers/business-printers.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore LaserJet Pro ↗
              </a>

            </div>

            {/* COLOR LASERJET */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🎨
              </div>

              <h3>
                HP Color LaserJet Pro
              </h3>

              <p>
                Professional color laser printing for
                presentations, reports, marketing documents
                and business materials.
              </p>

              <a
                href="https://www.hp.com/in-en/printers/business-printers.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Color LaserJet ↗
              </a>

            </div>

            {/* OFFICEJET */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                📑
              </div>

              <h3>
                HP OfficeJet Pro
              </h3>

              <p>
                Business inkjet all-in-one printers for
                professional color documents, scanning,
                copying and office productivity.
              </p>

              <a
                href="https://www.hp.com/in-en/printers/business-printers.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore OfficeJet Pro ↗
              </a>

            </div>

            {/* SMART TANK */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                💧
              </div>

              <h3>
                HP Smart Tank
              </h3>

              <p>
                Ink-tank printing solutions designed for
                users who need high-volume color printing
                and lower-cost everyday printing.
              </p>

              <a
                href="https://www.hp.com/in-en/printers/business-printers.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Smart Tank ↗
              </a>

            </div>

          </div>

        </section>

        {/* BLACK AND WHITE */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              BLACK & WHITE BUSINESS PRINTING
            </span>

            <h2>
              HP Black & White Laser Printers for Business
            </h2>

            <p>
              HP LaserJet Pro black-and-white printers are a
              practical choice for businesses that primarily
              print invoices, reports, forms, letters and other
              office documents.
            </p>

            <p>
              Depending on your requirements, you can choose
              between print-only printers and multifunction
              printers that combine printing, scanning and
              copying.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Office documents
              </div>

              <div>
                ✓ Invoices & reports
              </div>

              <div>
                ✓ Fast monochrome printing
              </div>

              <div>
                ✓ Duplex printing
              </div>

              <div>
                ✓ Wireless options
              </div>

              <div>
                ✓ Network printing
              </div>

            </div>

          </div>

        </section>

        {/* COLOR PRINTING */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              COLOR BUSINESS PRINTING
            </span>

            <h2>
              HP Color Printers for Business
            </h2>

            <p>
              HP Color LaserJet Pro printers are suitable for
              businesses that need professional-quality color
              documents, presentations, reports and marketing
              materials.
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
                Produce professional color documents for
                customers and internal business use.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                📊
              </div>

              <h3>
                Reports & Presentations
              </h3>

              <p>
                Suitable for presentations, charts, reports
                and business documents.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🏢
              </div>

              <h3>
                Business Teams
              </h3>

              <p>
                Selected HP color models are designed for
                small and medium-sized business teams.
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
                Selected models provide wireless and wired
                network connectivity for office environments.
              </p>

            </div>

          </div>

        </section>

        {/* OFFICEJET */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              HP OFFICEJET PRO
            </span>

            <h2>
              HP OfficeJet Pro Printers for Office Use
            </h2>

            <p>
              HP OfficeJet Pro printers are designed for
              professional color printing and multifunction
              office productivity. Current HP India business
              listings include the OfficeJet Pro 9720 and
              OfficeJet Pro 9730 wide-format all-in-one models.
            </p>

            <p>
              These printers support business workflows that
              require printing, copying and scanning, with
              selected configurations supporting larger A3
              paper sizes.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ A4 printing
              </div>

              <div>
                ✓ A3 printing options
              </div>

              <div>
                ✓ Color documents
              </div>

              <div>
                ✓ Print / Copy / Scan
              </div>

              <div>
                ✓ Wireless connectivity
              </div>

              <div>
                ✓ Office productivity
              </div>

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
              HP Printers for Different Business Requirements
            </h2>

            <p>
              Select the printer according to your document
              volume, color requirements, functions and number
              of users.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                Small Office
              </h3>

              <p>
                Compact HP LaserJet Pro and OfficeJet Pro
                options for everyday office printing,
                scanning and copying.
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
                Network-ready printers for teams sharing
                a printer across multiple workstations.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🎨
              </div>

              <h3>
                Color Printing
              </h3>

              <p>
                HP Color LaserJet Pro and OfficeJet Pro
                options for professional color documents.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                📦
              </div>

              <h3>
                Bulk Deployment
              </h3>

              <p>
                Suitable for organizations requiring multiple
                printers across departments or locations.
              </p>

            </div>

          </div>

        </section>

        {/* SUPPLIER */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              HP PRINTER SUPPLIER
            </span>

            <h2>
              HP Printer Supplier for Business Requirements
            </h2>

            <p>
              Briller Technology provides HP printer solutions
              for offices, companies and organizations. We can
              help you identify suitable HP printers according
              to printing volume, functions, color requirements,
              connectivity and number of users.
            </p>

            <p>
              Whether you need one printer for a small office
              or multiple printers for a larger deployment,
              contact our team with your requirements and
              preferred configuration.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ HP LaserJet Pro
              </div>

              <div>
                ✓ HP Color LaserJet Pro
              </div>

              <div>
                ✓ HP OfficeJet Pro
              </div>

              <div>
                ✓ HP Smart Tank
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
              HP Printer Solutions for Businesses
            </h2>

            <p>
              We help businesses identify suitable printer
              configurations according to their actual
              printing requirements.
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
                Select printers according to expected
                monthly printing requirements.
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
                Compare wireless, Ethernet and other
                connectivity requirements.
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
                Contact our team for current business
                printer requirements and quotations.
              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              HP PRINTER FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <h3>
              Which HP printer is best for business?
            </h3>

            <p>
              The right printer depends on your monthly volume,
              whether you need color, the required functions and
              the number of users. HP LaserJet Pro, Color
              LaserJet Pro and OfficeJet Pro models cover
              different business requirements.
            </p>

            <h3>
              Which HP printer is good for office use?
            </h3>

            <p>
              HP LaserJet Pro models are suitable for many
              document-focused offices, while OfficeJet Pro
              models can be considered when professional color
              printing and multifunction features are important.
            </p>

            <h3>
              What is an HP multifunction printer?
            </h3>

            <p>
              A multifunction printer combines multiple functions
              such as printing, scanning and copying. Selected
              HP models also provide fax functionality.
            </p>

            <h3>
              Does HP have color business printers?
            </h3>

            <p>
              Yes. HP offers Color LaserJet Pro and OfficeJet Pro
              printers for businesses that require professional
              color printing.
            </p>

            <h3>
              Can I buy HP printers in bulk for my company?
            </h3>

            <p>
              Yes. Contact Briller Technology with your required
              quantity, printer type and business requirements
              for a quotation.
            </p>

            <h3>
              Can I get a quotation for HP business printers?
            </h3>

            <p>
              Yes. Use the request-quote option below and provide
              your required printer type, quantity and business
              requirements.
            </p>

          </div>

        </section>

        {/* OFFICIAL HP */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              OFFICIAL HP INFORMATION
            </span>

            <h2>
              Explore HP Business Printers
            </h2>

            <p>
              View HP's official India business-printer
              information and current product portfolio.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🖨️
              </div>

              <h3>
                HP Business Printers
              </h3>

              <p>
                Explore HP's official business printer
                categories and product information.
              </p>

              <a
                href="https://www.hp.com/in-en/printers/business-printers.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit HP Business Printers ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🛒
              </div>

              <h3>
                HP India Business Store
              </h3>

              <p>
                View current HP India business printer
                listings, configurations and availability.
              </p>

              <a
                href="https://www.hp.com/in-en/shop/listings/printers?segment=business"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit HP India Store ↗
              </a>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section
          id="hp-printer-quote"
          className="hp-cta-section"
        >

          <div className="hp-cta-content">

            <span>
              NEED HP PRINTERS?
            </span>

            <h2>
              Get a Quote for HP Business Printers
            </h2>

            <p>
              Tell us your required printer type, quantity,
              color or black-and-white requirement, printing
              volume and business requirements. Our team can
              help you identify a suitable HP printer.
            </p>

          </div>

          <a
            href="mailto:sales@briller.com?subject=HP Business Printer Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for HP business printers.%0D%0A%0D%0APrinter Type:%0D%0ARequired Model:%0D%0AQuantity:%0D%0AColor or Black & White:%0D%0ARequired Functions:%0D%0AExpected Monthly Volume:%0D%0ACompany:%0D%0APhone:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request HP Printer Quote →
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default HPPrinters;