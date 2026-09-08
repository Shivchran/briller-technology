import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const amdProducts = [
  {
    category: "AMD Ryzen PRO",
    name: "AMD Ryzen 5 PRO",
    type: "Business Processor",
    performance: "Balanced performance for everyday business workloads",
    ai: "Platform dependent",
    graphics: "Integrated Radeon Graphics on supported models",
    platform: "Business laptops & desktops",
    use: "Office, productivity & multitasking",
  },
  {
    category: "AMD Ryzen PRO",
    name: "AMD Ryzen 7 PRO",
    type: "High-Performance Business Processor",
    performance: "Higher performance for demanding multitasking",
    ai: "Platform dependent",
    graphics: "Integrated Radeon Graphics on supported models",
    platform: "Business laptops & desktops",
    use: "Professional work & development",
  },
  {
    category: "AMD Ryzen AI PRO",
    name: "AMD Ryzen AI PRO",
    type: "AI Business Processor",
    performance: "Modern multi-core performance",
    ai: "Dedicated Ryzen AI capabilities on supported platforms",
    graphics: "Integrated Radeon Graphics on supported models",
    platform: "Next-generation business PCs",
    use: "AI-enabled productivity & professional workloads",
  },
  {
    category: "AMD Ryzen",
    name: "AMD Ryzen 5",
    type: "Mainstream Processor",
    performance: "Balanced everyday computing performance",
    ai: "Model dependent",
    graphics: "Radeon Graphics on supported models",
    platform: "Laptop & desktop platforms",
    use: "Office, web & general productivity",
  },
  {
    category: "AMD Ryzen",
    name: "AMD Ryzen 7",
    type: "Performance Processor",
    performance: "Strong performance for multitasking and professional applications",
    ai: "Model dependent",
    graphics: "Radeon Graphics on supported models",
    platform: "Laptop & desktop platforms",
    use: "Development, content creation & professional work",
  },
  {
    category: "AMD Ryzen 9",
    name: "AMD Ryzen 9",
    type: "High-Performance Processor",
    performance: "High-performance computing for demanding workloads",
    ai: "Model dependent",
    graphics: "Model dependent",
    platform: "High-performance laptops & desktops",
    use: "Advanced professional & creator workloads",
  },
];

function AMDProcessors() {
  useEffect(() => {
    document.title =
      "AMD Processors for Business | Ryzen, Ryzen AI & Ryzen PRO | Briller Technology";

    const description =
      "AMD processors for business laptops, desktops and professional computing. Explore AMD Ryzen, Ryzen AI and Ryzen PRO solutions from Briller Technology.";

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
      `${window.location.origin}/amd-processors`
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="hp-laptops-page amd-processors-page">

        {/* HERO */}
        <section className="hp-hero amd-hero">
          <div className="hp-hero-content">
            <span className="hp-badge">
              AMD BUSINESS COMPUTING
            </span>

            <h1>AMD Processors for Business</h1>

            <p>
              Explore AMD processor solutions for business
              laptops, desktops and professional computing.
              Briller Technology helps organizations select
              AMD-powered systems according to performance,
              AI, graphics, memory, storage and workload needs.
            </p>

            <div className="hp-hero-buttons">
              <a href="#amd-products" className="hp-primary-btn">
                Explore AMD Processors
              </a>

              <a href="#amd-quote" className="hp-secondary-btn">
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="hp-intro">
          <div className="hp-section-heading">
            <span>AMD PROCESSORS</span>

            <h2>AMD CPU Solutions for Business & Professional Use</h2>

            <p>
              AMD processors power a broad range of business
              laptops, desktops and professional systems.
              Briller Technology provides IT hardware solutions
              featuring AMD processor platforms for offices,
              professionals and business environments.
            </p>
          </div>

          <div className="hp-feature-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">⚡</div>
              <h3>Business Performance</h3>
              <p>
                Select AMD processor configurations according
                to everyday productivity, multitasking and
                professional workload requirements.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🤖</div>
              <h3>AI Computing</h3>
              <p>
                Selected AMD Ryzen AI platforms provide
                dedicated AI processing capabilities for
                supported applications and workloads.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">💻</div>
              <h3>Laptops & Desktops</h3>
              <p>
                AMD processors are available across business
                laptops, desktops and professional computer
                platforms.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🏢</div>
              <h3>Professional Computing</h3>
              <p>
                AMD platforms can support development,
                content creation, engineering and other
                demanding professional workloads.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESSOR RANGE */}
        <section id="amd-products" className="hp-products-section">
          <div className="hp-section-heading">
            <span>AMD PROCESSOR RANGE</span>

            <h2>Featured AMD Processor Families</h2>

            <p>
              Explore AMD Ryzen, Ryzen AI and Ryzen PRO
              processor families for different business and
              professional computing requirements.
            </p>
          </div>

          <div className="hp-product-grid">
            {amdProducts.map((product, index) => (
              <article className="hp-product-card" key={index}>
                <div className="hp-product-category">
                  {product.category}
                </div>

                <h3>{product.name}</h3>

                <div className="hp-spec-list">
                  <div>
                    <span>Processor Type</span>
                    <strong>{product.type}</strong>
                  </div>

                  <div>
                    <span>Performance</span>
                    <strong>{product.performance}</strong>
                  </div>

                  <div>
                    <span>AI</span>
                    <strong>{product.ai}</strong>
                  </div>

                  <div>
                    <span>Graphics</span>
                    <strong>{product.graphics}</strong>
                  </div>

                  <div>
                    <span>Platform</span>
                    <strong>{product.platform}</strong>
                  </div>

                  <div>
                    <span>Recommended For</span>
                    <strong>{product.use}</strong>
                  </div>
                </div>

                <div className="hp-product-buttons">
                  <a href="#amd-quote" className="hp-product-quote">
                    Request Quote
                  </a>

                  <a
                    href="https://www.amd.com/en/products/processors/laptop/ryzen.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-official-btn"
                  >
                    Official AMD ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RYZEN PRO */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>AMD RYZEN PRO</span>

            <h2>AMD Ryzen PRO for Business PCs</h2>

            <p>
              AMD Ryzen PRO processors are designed for
              business computing and are available in
              supported business laptops and desktops.
              Platform capabilities vary by model and system.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">🏢</div>

              <h3>Business Productivity</h3>

              <p>
                Suitable configurations can support office
                productivity, communication and everyday
                business applications.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🔐</div>

              <h3>Business Security</h3>

              <p>
                Supported AMD PRO platforms include
                business-focused security technologies.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">⚙️</div>

              <h3>Manageability</h3>

              <p>
                Selected Ryzen PRO platforms provide
                technologies designed for business IT
                management and deployment.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">📦</div>

              <h3>Business Deployment</h3>

              <p>
                Ryzen PRO systems can be considered for
                employee PCs and larger organizational
                deployments.
              </p>
            </div>
          </div>
        </section>

        {/* RYZEN AI */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              AMD RYZEN AI
            </span>

            <h2>AMD Ryzen AI for Modern Business PCs</h2>

            <p>
              AMD Ryzen AI processors bring dedicated AI
              processing capabilities to supported PCs.
              These systems can be useful for modern
              AI-enabled applications and productivity
              workflows.
            </p>

            <p>
              Actual AI capabilities depend on the specific
              processor, computer platform, software and
              application requirements.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ AI-enabled productivity</div>
              <div>✓ AI application support</div>
              <div>✓ Modern business laptops</div>
              <div>✓ Professional multitasking</div>
              <div>✓ Integrated graphics on supported models</div>
              <div>✓ Next-generation PC platforms</div>
            </div>
          </div>
        </section>

        {/* RYZEN */}
        <section className="hp-intro">
          <div className="hp-section-heading">
            <span>AMD RYZEN</span>

            <h2>AMD Ryzen Processors for Office & Professional Work</h2>

            <p>
              AMD Ryzen processors are available across a wide
              range of laptops and desktops. Businesses can
              choose different performance levels according
              to applications, multitasking, graphics and
              budget requirements.
            </p>
          </div>

          <div className="hp-feature-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">📄</div>
              <h3>Office Productivity</h3>
              <p>
                Email, documents, spreadsheets, web
                applications and video conferencing.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🧑‍💻</div>
              <h3>Development</h3>
              <p>
                Development environments, coding tools,
                local databases and multitasking.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🎨</div>
              <h3>Content Creation</h3>
              <p>
                Selected higher-performance Ryzen systems
                can support photo, video and creative workloads.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">🎮</div>
              <h3>Graphics Workloads</h3>
              <p>
                Choose the complete PC configuration according
                to graphics requirements, including dedicated
                GPU needs where applicable.
              </p>
            </div>
          </div>
        </section>

        {/* AMD BUSINESS TECHNOLOGIES */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              AMD BUSINESS TECHNOLOGIES
            </span>

            <h2>AMD Technologies for Business Computing</h2>

            <p>
              AMD business platforms combine processor
              performance with technologies designed for
              security, manageability, graphics and modern
              computing. The exact features depend on the
              processor and computer model.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ AMD PRO technologies</div>
              <div>✓ Ryzen AI capabilities</div>
              <div>✓ Radeon Graphics</div>
              <div>✓ Multi-core performance</div>
              <div>✓ Business laptop platforms</div>
              <div>✓ Professional desktop platforms</div>
            </div>
          </div>
        </section>

        {/* AMD + BRANDS */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>AMD-POWERED BUSINESS COMPUTERS</span>

            <h2>AMD Processors in Business Laptops & Desktops</h2>

            <p>
              AMD processors are available in computers from
              major manufacturers. Briller Technology can help
              businesses compare AMD-powered systems according
              to processor, RAM, SSD, display, graphics and
              workload requirements.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">💻</div>

              <h3>AMD Business Laptops</h3>

              <p>
                Select AMD-powered business laptops for office,
                professional and mobile computing requirements.
              </p>

              <a href="/business-laptops">
                Explore Business Laptops →
              </a>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🏢</div>

              <h3>AMD Business Desktops</h3>

              <p>
                AMD-powered desktop configurations for offices,
                workstations and professional environments.
              </p>

              <a href="/business-laptops">
                Explore Computer Solutions →
              </a>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">⚙️</div>

              <h3>Custom Business Requirements</h3>

              <p>
                Share your required processor, memory, storage,
                graphics and quantity for a suitable business
                computer configuration.
              </p>

              <a href="#amd-quote">
                Request Configuration →
              </a>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>BUSINESS USE CASES</span>

            <h2>AMD Processors for Different Workloads</h2>

            <p>
              Select the complete AMD-powered system according
              to the applications and workload of each user.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">📄</div>

              <h3>Office Work</h3>

              <p>
                Documents, spreadsheets, email, browsers,
                accounting and online meetings.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">💻</div>

              <h3>Software Development</h3>

              <p>
                IDEs, compilers, local development tools,
                containers and multitasking.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🎬</div>

              <h3>Content Creation</h3>

              <p>
                Photo, video and creative applications can
                benefit from suitable high-performance
                processor and GPU configurations.
              </p>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🏢</div>

              <h3>Business Deployment</h3>

              <p>
                Employee computers, professional systems and
                larger organizational PC deployments.
              </p>
            </div>
          </div>
        </section>

        {/* SELECTION GUIDE */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              AMD PROCESSOR SELECTION
            </span>

            <h2>How to Choose an AMD Processor</h2>

            <p>
              Processor selection should be based on actual
              workload requirements. Consider applications,
              multitasking, RAM, SSD storage, graphics,
              portability and future requirements before
              selecting a business computer.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ Basic office work → Mainstream Ryzen</div>
              <div>✓ Business deployment → Ryzen PRO</div>
              <div>✓ AI workloads → Ryzen AI</div>
              <div>✓ Development → Higher-performance Ryzen</div>
              <div>✓ Content creation → Ryzen + suitable GPU</div>
              <div>✓ Professional workloads → Higher-performance platforms</div>
            </div>
          </div>
        </section>

        {/* SUPPLIER */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              AMD BUSINESS SOLUTIONS
            </span>

            <h2>AMD Processor Supplier for Business Computing</h2>

            <p>
              Briller Technology provides IT hardware solutions
              featuring AMD processor platforms. We help
              businesses identify suitable laptops and desktops
              according to processor, RAM, SSD, graphics,
              operating system and workload requirements.
            </p>

            <p>
              Whether you are equipping a small office,
              replacing employee computers or planning a larger
              IT deployment, contact our team with your
              requirements.
            </p>

            <div className="hp-benefits-grid">
              <div>✓ AMD Ryzen systems</div>
              <div>✓ AMD Ryzen PRO systems</div>
              <div>✓ AMD Ryzen AI platforms</div>
              <div>✓ Business laptops & desktops</div>
              <div>✓ Bulk requirements</div>
              <div>✓ Configuration guidance</div>
              <div>✓ Enterprise IT requirements</div>
              <div>✓ Quotation support</div>
            </div>
          </div>
        </section>

        {/* WHY BRILLER */}
        <section className="hp-intro">
          <div className="hp-section-heading">
            <span>WHY CHOOSE BRILLER TECHNOLOGY</span>

            <h2>AMD-Powered Business Computing Solutions</h2>

            <p>
              We help organizations select complete computing
              systems based on real business workloads rather
              than processor specifications alone.
            </p>
          </div>

          <div className="hp-feature-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">⚙️</div>

              <h3>Configuration Guidance</h3>

              <p>
                Match AMD processor performance with RAM, SSD,
                graphics and operating-system requirements.
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

              <h3>Bulk Deployments</h3>

              <p>
                Support for organizations requiring multiple
                computers for employees or projects.
              </p>
            </div>

            <div className="hp-feature-card">
              <div className="hp-feature-icon">💬</div>

              <h3>Quotation Support</h3>

              <p>
                Contact our team for current AMD-powered
                business computer requirements.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="hp-seo-section">
          <div className="hp-seo-content">
            <span className="hp-seo-label">
              AMD PROCESSOR FAQ
            </span>

            <h2>Frequently Asked Questions</h2>

            <h3>What is an AMD processor?</h3>

            <p>
              An AMD processor is a CPU designed by AMD and used
              in laptops, desktops, workstations and other
              computing platforms.
            </p>

            <h3>What is AMD Ryzen?</h3>

            <p>
              AMD Ryzen is a family of processors used across
              laptops and desktops, covering everyday,
              professional and high-performance computing.
            </p>

            <h3>What is AMD Ryzen PRO?</h3>

            <p>
              AMD Ryzen PRO processors and platforms are
              designed for supported business PCs and include
              business-focused security and manageability
              technologies.
            </p>

            <h3>What is AMD Ryzen AI?</h3>

            <p>
              AMD Ryzen AI refers to supported Ryzen processors
              and platforms with dedicated AI processing
              capabilities for compatible applications.
            </p>

            <h3>Is AMD Ryzen good for business laptops?</h3>

            <p>
              Yes. AMD Ryzen processors are used in many
              business and professional laptop platforms.
              The right processor depends on the applications,
              performance requirements and complete system
              configuration.
            </p>

            <h3>Can I buy AMD-powered computers for my company?</h3>

            <p>
              Yes. Briller Technology can help businesses
              identify suitable AMD-powered laptops and
              desktops according to their required
              configuration and quantity.
            </p>
          </div>
        </section>

        {/* OFFICIAL AMD */}
        <section className="hp-range-section">
          <div className="hp-section-heading">
            <span>OFFICIAL AMD INFORMATION</span>

            <h2>Explore AMD Processor Information</h2>

            <p>
              Visit AMD's official website for current processor
              specifications and product information.
            </p>
          </div>

          <div className="hp-range-grid">
            <div className="hp-range-card">
              <div className="hp-range-icon">⚡</div>

              <h3>AMD Ryzen</h3>

              <p>
                Explore AMD Ryzen processors and available
                processor platforms.
              </p>

              <a
                href="https://www.amd.com/en/products/processors.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit AMD Processors ↗
              </a>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🤖</div>

              <h3>AMD Ryzen AI</h3>

              <p>
                Explore AMD Ryzen AI processors and AI PC
                technologies.
              </p>

              <a
                href="https://www.amd.com/en/products/processors/ai-pc.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit AMD Ryzen AI ↗
              </a>
            </div>

            <div className="hp-range-card">
              <div className="hp-range-icon">🏢</div>

              <h3>AMD Business Solutions</h3>

              <p>
                Explore AMD business processor and
                professional computing technologies.
              </p>

              <a
                href="https://www.amd.com/en/products/processors/business.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit AMD Business ↗
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="amd-quote"
          className="hp-cta-section"
        >
          <div className="hp-cta-content">
            <span>NEED AMD-POWERED COMPUTERS?</span>

            <h2>
              Get a Quote for AMD Business Computing
            </h2>

            <p>
              Tell us your required processor, RAM, SSD,
              laptop or desktop requirement, quantity and
              business workload. Our team can help you
              identify a suitable AMD-powered system.
            </p>
          </div>

          <a
            href="mailto:sales@briller.com?subject=AMD Business Computing Quotation&body=Hello Briller Technology,%0D%0A%0D%0AI would like to request a quotation for AMD-powered business computers.%0D%0A%0D%0ARequired Processor:%0D%0AComputer Type:%0D%0AQuantity:%0D%0ARAM:%0D%0AStorage:%0D%0AGraphics:%0D%0ACompany:%0D%0APhone:%0D%0AWorkload / Application:%0D%0AAdditional Requirements:"
            className="hp-cta-button"
          >
            Request AMD Quote →
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default AMDProcessors;