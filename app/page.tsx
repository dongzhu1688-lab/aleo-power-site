const categoryCards = [
  { title: "Apple", image: "phone" },
  { title: "Samsung", image: "tablet" },
  { title: "Battery", image: "battery" },
  { title: "Other", image: "parts" }
];

const classifications = [
  { title: "INCELL LCD", subtitle: "Touch Meets Display, Perfected", theme: "sky" },
  { title: "HARD OLED", subtitle: "Crystal-Clear, Unbendably Real", theme: "snow" },
  { title: "SOFT OLED", subtitle: "Soft Touch, Unyielding Brilliance", theme: "sea" }
];

const seriesTabs = ["DAKOLAS Series", "JK Series", "RJ Series", "ZY Series", "ECO Series"];

const products = [
  "DAKOLAS Soft OLED Assembly Compatible For iPhone 16 Pro Max",
  "DAKOLAS Hard OLED Assembly Compatible For iPhone 15 Pro",
  "DAKOLAS Incell LCD Assembly Compatible For iPhone 14",
  "DAKOLAS LCD Assembly Compatible For iPhone 13",
  "DAKOLAS High Capacity Battery Compatible For iPhone 12",
  "DAKOLAS AMOLED Assembly Compatible For Samsung Galaxy S Series",
  "DAKOLAS iPad Touch Digitizer Replacement Part",
  "DAKOLAS MacBook Battery Replacement Part"
];

const news = [
  "How to determine if your battery needs replacing",
  "The impact of screen quality on phone repair performance",
  "Important notes before buying wholesale replacement screens"
];

function BrandLogo() {
  return <img className="brand-logo" src="/images/logo.png" alt="DAKOLAS logo" />;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  return <span className="social-dot" aria-label={label}>{label.slice(0, 1)}</span>;
}

function DeviceArt({ type = "phone" }: { type?: string }) {
  return (
    <div className={`device-art ${type}`} aria-hidden="true">
      <span className="device-one" />
      <span className="device-two" />
      <span className="device-three" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="faruix-header">
        <a className="faruix-brand" href="/" aria-label="DAKOLAS home">
          <BrandLogo />
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="#apple">Apple⌄</a>
          <a href="#samsung">Samsung⌄</a>
          <a href="/products">Other Accessories⌄</a>
          <a href="#contact">Contact</a>
          <a href="/resources">Resources</a>
        </nav>
        <div className="faruix-tools">
          <SocialIcon label="Facebook" />
          <SocialIcon label="YouTube" />
          <span className="lang">EN</span>
          <SearchIcon />
        </div>
      </header>

      <section className="faruix-hero">
        <div className="hero-banner">
          <img src="/images/banner-no-logo.png" alt="Mobile phone screens batteries tablet and laptop parts" />
        </div>
      </section>

      <section className="quick-categories" aria-label="Product categories">
        {categoryCards.map((card) => (
          <a className="quick-card" href="/products" key={card.title}>
            <div>
              <h2>{card.title}</h2>
              <span>Explore+</span>
            </div>
            <DeviceArt type={card.image} />
          </a>
        ))}
      </section>

      <section className="faruix-section" id="apple">
        <h1>Product Classification</h1>
        <div className="classification-grid">
          {classifications.map((item) => (
            <article className={`classification-card ${item.theme}`} key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
              <div className="triple-phone">
                <span>15</span>
                <span>16</span>
                <span>14</span>
              </div>
              <strong>{item.title}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="faruix-section screen-series" id="samsung">
        <h2>Screen Series</h2>
        <div className="series-tabs">
          {seriesTabs.map((tab, index) => (
            <a className={index === 0 ? "active" : ""} href="/products" key={tab}>{tab}</a>
          ))}
        </div>
        <div className="faruix-product-grid">
          {products.map((product, index) => (
            <article className="faruix-product" key={product}>
              <div className="product-image">
                <DeviceArt type={index === 4 ? "battery" : "phone"} />
              </div>
              <h3>{product}</h3>
              <a href="#contact">Request Quote</a>
            </article>
          ))}
        </div>
      </section>

      <section className="faruix-section news-section" id="about">
        <h2>Latest News</h2>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item}>
              <div className="news-thumb" />
              <h3>{item}</h3>
              <p>DAKOLAS buying guide for mobile phone parts wholesalers and repair shops.</p>
              <a href="/resources">Read more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="faruix-contact" id="contact">
        <div>
          <h2>Contact DAKOLAS</h2>
          <p>Send model list, quality grade, quantity, target market and packaging requirements.</p>
        </div>
        <div className="contact-panel">
          <div className="contact-list">
            <article>
              <h3>Kabbie</h3>
              <a href="mailto:sales@dakolas.com">sales@dakolas.com</a>
              <a className="whatsapp-button" href="https://wa.me/8613531400739">WhatsApp: +86 135 3140 0739</a>
            </article>
            <article>
              <h3>Tom Zhu</h3>
              <a href="mailto:contact@dakolas.com">contact@dakolas.com</a>
              <a className="whatsapp-button" href="https://wa.me/8613558057005">WhatsApp: +86 13558057005</a>
            </article>
          </div>
          <form className="contact-form">
            <input aria-label="Name" placeholder="Name" />
            <input aria-label="Email or WhatsApp" placeholder="Email / WhatsApp" />
            <input aria-label="Country" placeholder="Country / Region" />
            <textarea aria-label="Message" placeholder="Model list + part type + quality grade + quantity" />
            <button type="button">Send RFQ</button>
          </form>
        </div>
      </section>

      <footer className="faruix-footer">
        <BrandLogo />
        <p>DAKOLAS | Mobile phone screens, batteries, tablet parts and laptop replacement parts supplier.</p>
      </footer>
    </main>
  );
}
