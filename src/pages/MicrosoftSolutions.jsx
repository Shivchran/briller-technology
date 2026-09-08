import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const microsoftSolutions = [
  {
    category: "Windows",
    name: "Windows 11 Pro",
    type: "Business Operating System",
    benefit: "Business-focused Windows experience",
    use: "Business laptops, desktops & professional PCs",
    suitable: "Office & enterprise users",
  },
  {
    category: "Microsoft 365",
    name: "Microsoft 365 Business",
    type: "Productivity & Collaboration",
    benefit: "Office applications and cloud-based productivity",
    use: "Documents, spreadsheets, email & collaboration",
    suitable: "Small businesses & organizations",
  },
  {
    category: "Microsoft Teams",
    name: "Microsoft Teams",
    type: "Communication & Collaboration",
    benefit: "Chat, meetings, calling and teamwork",
    use: "Remote teams, meetings & business communication",
    suitable: "Organizations with distributed teams",
  },
  {
    category: "Microsoft Surface",
    name: "Microsoft Surface",
    type: "Business Devices",
    benefit: "Premium Windows devices for professional users",
    use: "Mobile professionals & business users",
    suitable: "Executive, professional & mobile work",
  },
  {
    category: "Microsoft 365",
    name: "Microsoft Office Apps",
    type: "Business Productivity",
    benefit: "Word, Excel, PowerPoint and other productivity tools",
    use: "Documents, reports, presentations & spreadsheets",
    suitable: "Everyday business productivity",
  },
  {
    category: "Cloud & Business",
    name: "Microsoft Cloud Solutions",
    type: "Cloud & Digital Services",
    benefit: "Cloud platforms and services for organizations",
    use: "Cloud computing, applications & business services",
    suitable: "Growing and enterprise organizations",
  },
];

function MicrosoftSolutions() {
  useEffect(() => {
    document.title =
      "Microsoft Business Solutions | Windows 11 Pro, Microsoft 365 & Surface | Briller Technology";

    const description =
      "Microsoft business solutions including Windows 11 Pro, Microsoft 365, Teams and Surface devices. Explore Microsoft solutions for business from Briller Technology.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/microsoft-business-solutions`
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="hp-laptops-page microsoft-page">

        {/* HERO */}
        <section className="hp-hero microsoft-hero">
          <div className="hp-hero-content">
            <span className="hp-badge">
              MICROSOFT BUSINESS SOLUTIONS
            </span>

            <h1>Microsoft Solutions for Business</h1>

            <p>
              Explore Microsoft solutions for business
              productivity, collaboration, operating systems
              and professional computing. Briller Technology
              helps organizations identify suitable Microsoft
              solutions according to their business and IT
              requirements.
            </p>

            <div className="hp-hero-buttons">
              <a
                href="#microsoft-solutions"
                className="hp-primary-btn"
              >
                Explore Microsoft Solutions
              </a>

              <a
                href="#microsoft-quote"
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
            <span>MICROSOFT FOR BUSINESS</span>

            <h2>Microsoft Technology for Modern Organizations</h2>

            <p>
              Microsoft provides a broad portfolio of operating
              systems, productivity applications, collaboration
              tools and business technologies. Briller Technology
              helps businesses plan IT hardware and Microsoft
              technology requirements together for a practical
              workplace setup.
            </p>
          </div>

          <div className="hp-feature-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">🪟</div>

              <h3>Windows for Business</h3>

              <p>
                Windows 11 Pro is designed for professional
                and business computing environments.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">📊</div>

              <h3>Microsoft 365</h3>

              <p>
                Productivity applications and cloud services
                can support everyday business workflows.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">💬</div>

              <h3>Microsoft Teams</h3>

              <p>
                Collaboration and communication tools help
                teams work together across locations.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">💻</div>

              <h3>Surface Devices</h3>

              <p>
                Microsoft Surface devices provide Windows-based
                options for mobile and professional users.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section
          id="microsoft-solutions"
          className="hp-products-section"
        >
          <div className="hp-section-heading">
            <span>MICROSOFT PRODUCT CATEGORIES</span>

            <h2>Microsoft Business Solutions</h2>

            <p>
              Explore major Microsoft technology categories
              relevant to business computing and workplace
              productivity.
            </p>
          </div>

          <div className="hp-product-grid">
            {microsoftSolutions.map((product, index) => (
              <article
                className="hp-product-card"
                key={index}
              >
                <div className="hp-product-category">
                  {product.category}
                </div>

                <h3>{product.name}</h3>

                <div className="hp-spec-list">
                  <div>
                    <span>Solution Type</span>
                    <strong>{product.type}</strong>
                  </div>

                  <div>
                    <span>Key Benefit</span>
                    <strong>{product.benefit}</strong>
                  </div>

                  <div>
                    <span>Business Use</span>
                    <strong>{product.use}</strong>
                  </div>

                  <div>
                    <span>Suitable For</span>
                    <strong>{product.suitable}</strong>
                  </div>
                </div>

                <div className="hp-product-buttons">
                  <a
                    href="#microsoft-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>

                  <a
                    href="https://www.microsoft.com/en-in/microsoft-365/business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official Microsoft ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WINDOWS */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>WINDOWS 11 PRO</span>

            <h2>Windows 11 Pro for Business Computers</h2>

            <p>
              Windows 11 Pro is designed for professional
              computing and provides business-focused features
              for supported PCs. It is commonly available on
              business laptops and desktops from manufacturers
              such as HP, Dell and Lenovo.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">🪟</div>

              <h3>Business PCs</h3>

              <p>
                Windows 11 Pro can be deployed on supported
                business laptops and desktops.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🔐</div>

              <h3>Security</h3>

              <p>
                Windows 11 Pro includes business-oriented
                security and management capabilities.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🏢</div>

              <h3>Business Management</h3>

              <p>
                Supported Windows Pro environments can be
                integrated with organizational IT management
                practices.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">💻</div>

              <h3>Professional Productivity</h3>

              <p>
                Suitable for office applications, browsers,
                collaboration and professional software.
              </p>
            </div>
          </div>
        </section>

        {/* MICROSOFT 365 */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              MICROSOFT 365
            </span>

            <h2>Microsoft 365 for Business Productivity</h2>

            <p>
              Microsoft 365 combines productivity applications
              and cloud services that can support modern
              workplace requirements. Businesses can use
              Microsoft 365 for documents, spreadsheets,
              presentations, email, collaboration and other
              supported business workflows.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ Word & document productivity</div>
              <div>✓ Excel & spreadsheets</div>
              <div>✓ PowerPoint presentations</div>
              <div>✓ Business email</div>
              <div>✓ Cloud collaboration</div>
              <div>✓ Team productivity</div>
            </div>
          </div>
        </section>

        {/* TEAMS */}
        <section className="hp-intro">
          <div className="hp-section-heading">
            <span>MICROSOFT TEAMS</span>

            <h2>Microsoft Teams for Business Collaboration</h2>

            <p>
              Microsoft Teams provides communication and
              collaboration capabilities for supported business
              environments. Organizations can use Teams for
              meetings, messaging, teamwork and collaboration.
            </p>
          </div>

          <div className="hp-feature-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">🎥</div>

              <h3>Online Meetings</h3>

              <p>
                Support virtual meetings and communication
                between employees and teams.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">💬</div>

              <h3>Business Chat</h3>

              <p>
                Communicate with colleagues through supported
                Microsoft Teams messaging features.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">👥</div>

              <h3>Team Collaboration</h3>

              <p>
                Organize communication and collaboration
                around teams and business projects.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🌐</div>

              <h3>Hybrid Work</h3>

              <p>
                Support collaboration between employees
                working from offices and remote locations.
              </p>
            </div>
          </div>
        </section>

        {/* SURFACE */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>MICROSOFT SURFACE</span>

            <h2>Microsoft Surface for Professional Users</h2>

            <p>
              Microsoft Surface devices provide Windows-based
              laptops, 2-in-1 devices and other computing
              products for professional and business users.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">💻</div>

              <h3>Business Laptops</h3>

              <p>
                Portable Windows devices for professional
                productivity and everyday business work.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">✍️</div>

              <h3>2-in-1 Computing</h3>

              <p>
                Flexible devices for users who need portable
                productivity and touch-based workflows.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🚀</div>

              <h3>Mobile Professionals</h3>

              <p>
                Portable computing options for professionals
                who work across different locations.
              </p>
            </div>
          </div>
        </section>

        {/* MICROSOFT + HARDWARE */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              MICROSOFT + BUSINESS HARDWARE
            </span>

            <h2>Microsoft Technology with Business Computers</h2>

            <p>
              A productive workplace requires both software
              and suitable hardware. Briller Technology can help
              businesses evaluate laptops, desktops, printers,
              networking equipment and Windows-based computing
              requirements together.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ Business laptops</div>
              <div>✓ Business desktops</div>
              <div>✓ Windows 11 Pro PCs</div>
              <div>✓ Business printers</div>
              <div>✓ Networking solutions</div>
              <div>✓ IT deployment requirements</div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>BUSINESS USE CASES</span>

            <h2>Microsoft Solutions for Different Business Needs</h2>

            <p>
              Select Microsoft products and complete IT
              configurations according to your organization's
              users, applications and workflow.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">📄</div>

              <h3>Office Productivity</h3>

              <p>
                Documents, spreadsheets, presentations,
                email and everyday business applications.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">👥</div>

              <h3>Team Collaboration</h3>

              <p>
                Communication, meetings and collaboration
                for office and hybrid teams.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">💼</div>

              <h3>Professional Users</h3>

              <p>
                Windows devices and productivity software for
                professionals and mobile employees.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🏢</div>

              <h3>Business Deployment</h3>

              <p>
                Plan Microsoft software and compatible
                hardware for larger employee deployments.
              </p>
            </div>
          </div>
        </section>

        {/* SUPPLIER */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              MICROSOFT BUSINESS SOLUTIONS
            </span>

            <h2>Microsoft Business Solutions & IT Requirements</h2>

            <p>
              Briller Technology helps businesses plan their
              Microsoft-related IT requirements alongside
              suitable computer hardware. Share your required
              software, devices, quantity and business
              applications with our team.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ Windows business PCs</div>
              <div>✓ Microsoft 365 requirements</div>
              <div>✓ Teams collaboration requirements</div>
              <div>✓ Surface device requirements</div>
              <div>✓ Business laptops & desktops</div>
              <div>✓ Bulk IT requirements</div>
              <div>✓ Configuration guidance</div>
              <div>✓ Quotation support</div>
            </div>
          </div>
        </section>

        {/* WHY BRILLER */}
        <section className="hp-intro">
          <div className="hp-section-heading">
            <span>WHY CHOOSE BRILLER TECHNOLOGY</span>

            <h2>Microsoft-Focused Business IT Solutions</h2>

            <p>
              We help organizations connect their software and
              hardware requirements to create practical business
              computing environments.
            </p>
          </div>

          <div className="hp-feature-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">⚙️</div>

              <h3>IT Configuration Guidance</h3>

              <p>
                Match software requirements with appropriate
                laptop, desktop and hardware configurations.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🏢</div>

              <h3>Business Requirements</h3>

              <p>
                Solutions for offices, professionals,
                companies and organizational deployments.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">📦</div>

              <h3>Bulk Requirements</h3>

              <p>
                Support for organizations requiring multiple
                systems and business IT equipment.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">💬</div>

              <h3>Quotation Support</h3>

              <p>
                Contact our team with your Microsoft and
                business computing requirements.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              MICROSOFT BUSINESS FAQ
            </span>

            <h2>Frequently Asked Questions</h2>

            <h3>What Microsoft products are useful for business?</h3>

            <p>
              Common Microsoft business technologies include
              Windows 11 Pro, Microsoft 365, Microsoft Teams,
              Surface devices and other Microsoft cloud and
              business services.
            </p>

            <h3>What is Windows 11 Pro?</h3>

            <p>
              Windows 11 Pro is a professional edition of
              Windows designed for supported business and
              professional computing environments.
            </p>

            <h3>What is Microsoft 365?</h3>

            <p>
              Microsoft 365 is a subscription-based collection
              of productivity applications and cloud services.
              Available applications and features depend on
              the selected plan.
            </p>

            <h3>What is Microsoft Teams used for?</h3>

            <p>
              Microsoft Teams supports communication and
              collaboration features such as messaging,
              meetings and teamwork.
            </p>

            <h3>What is Microsoft Surface?</h3>

            <p>
              Microsoft Surface is Microsoft's family of
              Windows-based devices, including laptops and
              other portable computing products.
            </p>

            <h3>Can Briller help with Microsoft business requirements?</h3>

            <p>
              Briller Technology can help businesses plan
              compatible IT hardware and Microsoft-related
              computing requirements. Availability, licensing
              and product eligibility depend on the specific
              Microsoft product and deployment.
            </p>
          </div>
        </section>

        {/* OFFICIAL MICROSOFT */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>OFFICIAL MICROSOFT INFORMATION</span>

            <h2>Explore Microsoft Business Products</h2>

            <p>
              Visit Microsoft's official website for current
              product, feature, pricing and licensing
              information.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">🪟</div>

              <h3>Windows 11 Pro</h3>

              <p>
                Explore Windows 11 and business computing
                information from Microsoft.
              </p>

              <a
                href="https://www.microsoft.com/en-in/windows/business"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Microsoft Windows ↗
              </a>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">📊</div>

              <h3>Microsoft 365 Business</h3>

              <p>
                Explore Microsoft 365 plans and business
                productivity solutions.
              </p>

              <a
                href="https://www.microsoft.com/en-in/microsoft-365/business"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Microsoft 365 ↗
              </a>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">💻</div>

              <h3>Microsoft Surface</h3>

              <p>
                Explore Microsoft's Surface devices and
                product information.
              </p>

              <a
                href="https://www.microsoft.com/en-in/surface"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Microsoft Surface ↗
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="microsoft-quote"
          className="hp-cta-section"
        >
          <div className="hp-cta-content">
            <span>NEED MICROSOFT BUSINESS SOLUTIONS?</span>

            <h2>
              Discuss Your Microsoft IT Requirements
            </h2>

            <p>
              Tell us your required computers, Windows edition,
              Microsoft software requirements, quantity,
              business applications and deployment needs.
              Our team can help you plan a suitable IT setup.
            </p>
          </div>

          <a
            href="mailto:sales@briller.com?subject=Microsoft Business IT Requirement&body=Hello Briller Technology,%0D%0A%0D%0AI would like to discuss my Microsoft business IT requirements.%0D%0A%0D%0ARequired Product / Software:%0D%0AComputer Type:%0D%0AQuantity:%0D%0ARAM:%0D%0AStorage:%0D%0AWindows Requirement:%0D%0ACompany:%0D%0APhone:%0D%0ABusiness Application:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request Microsoft Quote →
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default MicrosoftSolutions;