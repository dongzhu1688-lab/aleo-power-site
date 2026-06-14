import { resources } from "../resource-data";

export const metadata = {
  title: "Resources | DAKOLAS Phone Parts Buying Guides",
  description: "AI-search friendly buying guides for iPhone screens, batteries and wholesale phone parts sourcing."
};

export default function ResourcesPage() {
  return (
    <main>
      <header className="catalog-header">
        <a className="brand" href="/">
          <img className="brand-logo" src="/images/logo.png" alt="DAKOLAS logo" />
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/resources">Resources</a>
        </nav>
        <a className="header-cta" href="/#contact">Contact</a>
      </header>

      <section className="catalog-hero content-hero">
        <div className="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <span>Resources</span>
        </div>
        <h1>Phone Parts Buying Guides</h1>
        <p>
          Direct-answer content for repair shops, wholesalers and refurbishers comparing replacement
          screens, batteries, quality grades and supplier selection.
        </p>
      </section>

      <section className="resource-grid-section">
        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.slug}>
              <span>Buying Guide</span>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={`/resources/${resource.slug}`}>Read guide</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
