import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ciscoProducts = [
  {
    category: "Cisco Catalyst",
    name: "Cisco Catalyst 9200 Series Switches",
    type: "Enterprise Managed Switch",
    ports: "24 / 48 port configurations",
    connectivity: "1G / Multigigabit / uplink options",
    poe: "PoE+ options available",
    management: "Cisco Catalyst Center / cloud monitoring options",
    use: "Branch offices & campus networks",
  },
  {
    category: "Cisco Catalyst",
    name: "Cisco Catalyst 9300 Series Switches",
    type: "Enterprise Access Switch",
    ports: "Multiple 24 / 48 port configurations",
    connectivity: "Gigabit / Multigigabit uplinks",
    poe: "PoE+ options",
    management: "Cisco Catalyst Center",
    use: "Enterprise campus & branch networks",
  },
  {
    category: "Cisco Catalyst",
    name: "Cisco Catalyst 9400 Series Switches",
    type: "Modular Enterprise Switch",
    ports: "Modular chassis configurations",
    connectivity: "High-speed enterprise uplinks",
    poe: "Enterprise PoE options",
    management: "Cisco Catalyst Center",
    use: "Large campus networks",
  },
  {
    category: "Cisco Business",
    name: "Cisco Catalyst 1300 Series Managed Switches",
    type: "Managed SMB Switch",
    ports: "Multiple port configurations",
    connectivity: "Gigabit Ethernet",
    poe: "PoE options available",
    management: "Easy-to-manage",
    use: "Small & medium businesses",
  },
  {
    category: "Cisco Business",
    name: "Cisco Catalyst 1200 Series Smart Switches",
    type: "Smart Managed Switch",
    ports: "Multiple port configurations",
    connectivity: "Gigabit Ethernet",
    poe: "PoE options available",
    management: "Smart management",
    use: "Small & medium businesses",
  },
  {
    category: "Cisco Wireless",
    name: "Cisco Catalyst 9100 Series Access Points",
    type: "Enterprise Wireless Access Point",
    ports: "Model dependent",
    connectivity: "Wi-Fi 6 / Wi-Fi 6E options",
    poe: "PoE powered options",
    management: "Cisco Catalyst Center / cloud options",
    use: "Enterprise wireless networks",
  },
  {
    category: "Cisco Wireless",
    name: "Cisco CW9172I Wi-Fi 7 Access Point",
    type: "Wi-Fi 7 Access Point",
    ports: "2.5 Gbps Ethernet",
    connectivity: "2.4 GHz / 5 GHz / 6 GHz",
    poe: "PoE",
    management: "Cisco wireless management options",
    use: "Modern business wireless networks",
  },
  {
    category: "Cisco Routing",
    name: "Cisco Catalyst 8200 Series Edge Platforms",
    type: "Secure WAN Edge Router",
    ports: "Model dependent",
    connectivity: "WAN / LAN connectivity",
    poe: "Model dependent",
    management: "SD-WAN / Cisco management",
    use: "Branch & WAN networking",
  },
];

function CiscoNetworking() {
  useEffect(() => {
    document.title =
      "Cisco Networking Products | Switches, Routers & Wi-Fi | Briller Technology";

    const description =
      "Cisco networking products for businesses and enterprises. Explore Cisco Catalyst switches, wireless access points, routers and networking solutions from Briller Technology.";

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
      `${window.location.origin}/cisco-networking`
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="hp-laptops-page cisco-networking-page">

        {/* HERO */}
        <section className="hp-hero cisco-hero">
          <div className="hp-hero-content">

            <span className="hp-badge">
              CISCO BUSINESS NETWORKING
            </span>

            <h1>
              Cisco Networking Products
            </h1>

            <p>
              Explore Cisco networking solutions for offices,
              businesses, enterprises, campuses and branch
              locations. Briller Technology provides Cisco
              switches, routers, wireless access points and
              networking solutions for professional IT
              environments.
            </p>

            <div className="hp-hero-buttons">

              <a
                href="#cisco-products"
                className="hp-primary-btn"
              >
                View Cisco Products
              </a>

              <a
                href="#cisco-quote"
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
              CISCO NETWORKING
            </span>

            <h2>
              Cisco Network Solutions for Business
            </h2>

            <p>
              Briller Technology provides Cisco networking
              solutions for small businesses, medium-sized
              companies, enterprises, offices, campuses and
              branch locations. Select networking hardware
              according to the number of users, ports,
              connectivity, wireless coverage and network
              architecture.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🔀
              </div>

              <h3>
                Network Switching
              </h3>

              <p>
                Cisco managed and smart switches for connecting
                computers, servers, access points, IP phones
                and other network devices.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                📡
              </div>

              <h3>
                Wireless Networking
              </h3>

              <p>
                Cisco wireless access points provide business
                Wi-Fi solutions for offices, campuses and
                professional environments.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🌐
              </div>

              <h3>
                Routing & WAN
              </h3>

              <p>
                Cisco routing platforms support branch,
                WAN and enterprise networking requirements.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🛡️
              </div>

              <h3>
                Secure Networking
              </h3>

              <p>
                Cisco networking solutions are designed with
                security, visibility and centralized management
                capabilities.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCTS */}
        <section
          id="cisco-products"
          className="hp-products-section"
        >

          <div className="hp-section-heading">

            <span>
              CISCO NETWORKING PRODUCTS
            </span>

            <h2>
              Featured Cisco Networking Products
            </h2>

            <p>
              Explore selected Cisco switches, wireless
              access points and routing platforms for
              business networking requirements.
            </p>

          </div>

          <div className="hp-product-grid">

            {ciscoProducts.map((product, index) => (

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
                      Product Type
                    </span>

                    <strong>
                      {product.type}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Ports
                    </span>

                    <strong>
                      {product.ports}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Connectivity
                    </span>

                    <strong>
                      {product.connectivity}
                    </strong>
                  </div>

                  <div>
                    <span>
                      PoE
                    </span>

                    <strong>
                      {product.poe}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Management
                    </span>

                    <strong>
                      {product.management}
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
                    href="#cisco-quote"
                    className="hp-product-quote"
                  >
                    Request Quote
                  </a>

                  <a
                    href="https://www.cisco.com/site/in/en/products/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official Cisco ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* NETWORKING CATEGORIES */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              CISCO NETWORKING RANGE
            </span>

            <h2>
              Choose the Right Cisco Networking Solution
            </h2>

            <p>
              Cisco provides networking products for
              access networks, wireless connectivity,
              routing, campus networks and data centers.
            </p>

          </div>

          <div className="hp-range-grid">

            {/* SWITCHES */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🔀
              </div>

              <h3>
                Cisco Network Switches
              </h3>

              <p>
                Cisco Catalyst and Cisco Business switches
                connect computers, servers, access points,
                IP phones and other network devices.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/switches/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Cisco Switches ↗
              </a>

            </div>

            {/* ROUTERS */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🌐
              </div>

              <h3>
                Cisco Routers
              </h3>

              <p>
                Cisco routers provide WAN, branch, edge and
                enterprise routing capabilities for different
                network environments.
              </p>

              <a
                href="https://www.cisco.com/c/en_in/products/routers/product-listing.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Cisco Routers ↗
              </a>

            </div>

            {/* WIRELESS */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                📡
              </div>

              <h3>
                Cisco Wireless Access Points
              </h3>

              <p>
                Cisco Catalyst and cloud-managed wireless
                access points provide secure Wi-Fi for
                offices, campuses and business environments.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/wireless/access-points/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Cisco Wireless ↗
              </a>

            </div>

            {/* MANAGEMENT */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🖥️
              </div>

              <h3>
                Network Management
              </h3>

              <p>
                Cisco Catalyst Center and Meraki management
                solutions provide visibility and management
                capabilities for modern networks.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/access-networking/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Management ↗
              </a>

            </div>

            {/* SECURITY */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🛡️
              </div>

              <h3>
                Secure Networking
              </h3>

              <p>
                Cisco networking can be combined with
                security and policy capabilities to help
                protect users, devices and network traffic.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Cisco Security ↗
              </a>

            </div>

            {/* DATA CENTER */}
            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                Data Center Networking
              </h3>

              <p>
                Cisco Nexus platforms provide networking
                solutions for data center and cloud
                environments.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Data Center Networking ↗
              </a>

            </div>

          </div>

        </section>

        {/* SWITCHES */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CISCO NETWORK SWITCHES
            </span>

            <h2>
              Cisco Switches for Business Networks
            </h2>

            <p>
              Cisco switches provide the wired connectivity
              required to connect computers, servers, IP
              phones, wireless access points, printers and
              other network devices.
            </p>

            <p>
              Cisco's portfolio includes enterprise Catalyst
              switches as well as solutions designed for
              small and medium-sized businesses. Catalyst
              9200, 9300 and 9400 series address different
              campus and access-network requirements, while
              Catalyst 1200 and 1300 are positioned for
              smaller business environments.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Gigabit Ethernet
              </div>

              <div>
                ✓ Multigigabit options
              </div>

              <div>
                ✓ PoE / PoE+ options
              </div>

              <div>
                ✓ Managed switching
              </div>

              <div>
                ✓ Enterprise networking
              </div>

              <div>
                ✓ Small business networking
              </div>

            </div>

          </div>

        </section>

        {/* WIRELESS */}
        <section className="hp-intro">

          <div className="hp-section-heading">

            <span>
              CISCO WIRELESS NETWORKING
            </span>

            <h2>
              Cisco Wi-Fi Access Points for Business
            </h2>

            <p>
              Cisco wireless access points provide Wi-Fi
              connectivity for modern offices, campuses,
              branches and professional environments.
              Cisco's current wireless portfolio includes
              Wi-Fi 6, Wi-Fi 6E and Wi-Fi 7 solutions.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                📡
              </div>

              <h3>
                Wi-Fi 6 / 6E
              </h3>

              <p>
                Business wireless solutions designed for
                modern high-density and hybrid-work
                environments.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🚀
              </div>

              <h3>
                Wi-Fi 7
              </h3>

              <p>
                Cisco's current wireless portfolio includes
                next-generation Wi-Fi 7 access points.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🏢
              </div>

              <h3>
                Enterprise Wi-Fi
              </h3>

              <p>
                Designed for offices, campuses, branches
                and demanding professional environments.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🌐
              </div>

              <h3>
                Cloud Management
              </h3>

              <p>
                Selected Cisco and Meraki wireless solutions
                support cloud-managed network operations.
              </p>

            </div>

          </div>

        </section>

        {/* ROUTING */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CISCO ROUTING
            </span>

            <h2>
              Cisco Routers for Branch and Enterprise Networks
            </h2>

            <p>
              Cisco routing solutions connect branch offices,
              enterprise locations, data centers and cloud
              environments. Cisco's current routing portfolio
              includes Catalyst edge platforms, secure routers,
              SD-WAN solutions and service-provider routing.
            </p>

            <p>
              The appropriate router depends on your WAN
              connectivity, number of users, bandwidth,
              security requirements and network architecture.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Branch networking
              </div>

              <div>
                ✓ WAN connectivity
              </div>

              <div>
                ✓ SD-WAN
              </div>

              <div>
                ✓ Secure routing
              </div>

              <div>
                ✓ Enterprise edge
              </div>

              <div>
                ✓ Cloud connectivity
              </div>

            </div>

          </div>

        </section>

        {/* USE CASES */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              BUSINESS NETWORKING USE CASES
            </span>

            <h2>
              Cisco Networking for Different Organizations
            </h2>

            <p>
              Cisco networking products can be selected
              according to your organization size,
              architecture and connectivity requirements.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏢
              </div>

              <h3>
                Small Business
              </h3>

              <p>
                Cisco Business and Catalyst networking
                solutions for offices and growing businesses.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏫
              </div>

              <h3>
                Campus Networks
              </h3>

              <p>
                Enterprise switching and wireless solutions
                for offices, educational institutions and
                large campuses.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🏭
              </div>

              <h3>
                Industrial Networks
              </h3>

              <p>
                Cisco industrial Ethernet and networking
                solutions for demanding environments.
              </p>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                ☁️
              </div>

              <h3>
                Enterprise & Cloud
              </h3>

              <p>
                Networking infrastructure for enterprise,
                data center and cloud-connected environments.
              </p>

            </div>

          </div>

        </section>

        {/* SUPPLIER */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CISCO NETWORKING SUPPLIER
            </span>

            <h2>
              Cisco Networking Products Supplier
            </h2>

            <p>
              Briller Technology provides Cisco networking
              solutions for businesses, offices, institutions
              and enterprise environments. We can help you
              identify suitable switches, routers, wireless
              access points and networking equipment according
              to your technical requirements.
            </p>

            <p>
              Whether you need networking equipment for a new
              office, network expansion, IT infrastructure
              upgrade or multi-location deployment, contact
              our team with your requirements.
            </p>

            <div className="hp-benefits-grid">

              <div>
                ✓ Cisco switches
              </div>

              <div>
                ✓ Cisco routers
              </div>

              <div>
                ✓ Cisco wireless
              </div>

              <div>
                ✓ Cisco Catalyst
              </div>

              <div>
                ✓ Cisco Meraki
              </div>

              <div>
                ✓ Business & bulk requirements
              </div>

              <div>
                ✓ Network equipment quotation
              </div>

              <div>
                ✓ Enterprise IT requirements
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
              Cisco Networking Solutions for Businesses
            </h2>

            <p>
              We help organizations identify networking
              hardware according to their users, ports,
              connectivity, wireless coverage and network
              architecture.
            </p>

          </div>

          <div className="hp-feature-grid">

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🔀
              </div>

              <h3>
                Switch Selection
              </h3>

              <p>
                Choose suitable Cisco switches based on
                ports, PoE, uplinks and network size.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                📡
              </div>

              <h3>
                Wireless Planning
              </h3>

              <p>
                Select access-point solutions according to
                coverage, density and connectivity needs.
              </p>

            </div>

            <div className="hp-feature-card">

              <div className="hp-feature-icon">
                🌐
              </div>

              <h3>
                Network Requirements
              </h3>

              <p>
                Match networking hardware to your office,
                branch or enterprise environment.
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
                Contact our team for current Cisco product
                configurations and business quotations.
              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="hp-seo-section">

          <div className="hp-seo-content">

            <span className="hp-seo-label">
              CISCO NETWORKING FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <h3>
              What Cisco networking products are available?
            </h3>

            <p>
              Cisco provides switches, routers, wireless
              access points, network management platforms,
              data-center networking and other networking
              solutions.
            </p>

            <h3>
              Which Cisco switch is suitable for a small business?
            </h3>

            <p>
              Cisco Catalyst 1200 and 1300 families are
              positioned for small and medium-sized business
              networks. The correct model depends on ports,
              PoE and connectivity requirements.
            </p>

            <h3>
              Which Cisco switch is suitable for enterprise networks?
            </h3>

            <p>
              Cisco Catalyst 9200, 9300 and 9400 families
              address different enterprise access and campus
              networking requirements.
            </p>

            <h3>
              Does Cisco provide Wi-Fi 7 access points?
            </h3>

            <p>
              Yes. Cisco's current wireless portfolio includes
              Wi-Fi 7 access points such as the CW9170 series.
            </p>

            <h3>
              Does Cisco provide routers for businesses?
            </h3>

            <p>
              Yes. Cisco provides routing solutions for branch,
              WAN, enterprise edge, SD-WAN and other network
              environments.
            </p>

            <h3>
              Can I buy Cisco networking equipment in bulk?
            </h3>

            <p>
              Yes. Contact Briller Technology with your
              required products, quantities and technical
              requirements for a business quotation.
            </p>

          </div>

        </section>

        {/* OFFICIAL CISCO */}
        <section className="hp-range-section">

          <div className="hp-section-heading">

            <span>
              OFFICIAL CISCO INFORMATION
            </span>

            <h2>
              Explore Cisco Networking
            </h2>

            <p>
              View Cisco's official India networking portfolio
              and current product information.
            </p>

          </div>

          <div className="hp-range-grid">

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🌐
              </div>

              <h3>
                Cisco Networking
              </h3>

              <p>
                Explore Cisco's official networking products
                and solutions.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Cisco Networking ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                🔀
              </div>

              <h3>
                Cisco Switches
              </h3>

              <p>
                Explore Cisco's official network-switch
                portfolio.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/switches/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Cisco Switches ↗
              </a>

            </div>

            <div className="hp-range-card">

              <div className="hp-range-icon">
                📡
              </div>

              <h3>
                Cisco Wireless
              </h3>

              <p>
                Explore Cisco wireless access points and
                wireless networking solutions.
              </p>

              <a
                href="https://www.cisco.com/site/in/en/products/networking/wireless/access-points/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Cisco Wireless ↗
              </a>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section
          id="cisco-quote"
          className="hp-cta-section"
        >

          <div className="hp-cta-content">

            <span>
              NEED CISCO NETWORKING?
            </span>

            <h2>
              Get a Quote for Cisco Networking Products
            </h2>

            <p>
              Tell us your required switches, routers,
              wireless access points, number of users,
              ports and networking requirements. Our team
              can help you identify suitable Cisco products.
            </p>

          </div>

          <a
            href="mailto:sales@briller.com?subject=Cisco Networking Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for Cisco networking products.%0D%0A%0D%0ARequired Product:%0D%0AQuantity:%0D%0ANumber of Users:%0D%0ARequired Ports:%0D%0APoE Requirement:%0D%0AWireless Requirement:%0D%0ACompany:%0D%0APhone:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request Cisco Quote →
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default CiscoNetworking;