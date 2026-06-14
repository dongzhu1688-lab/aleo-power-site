import { deviceCollections, partTypes, sampleProducts } from "../catalog-data";

export const metadata = {
  title: "Products | DAKOLAS Replacement Parts Catalog",
  description: "Browse DAKOLAS replacement parts by device family, model and part type."
};

export default function ProductsPage() {
  return (
    <main>
      <header className="catalog-header">
        <a className="brand" href="/">
          <img className="brand-logo" src="/images/logo.png" alt="DAKOLAS logo" />
        </a>
        <a className="header-cta" href="/#inquiry">Get a Quote</a>
      </header>

      <section className="catalog-hero">
        <div className="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <span>Products</span>
        </div>
        <h1>Replacement Parts Catalog</h1>
        <p>Repair Outlet style catalog navigation adapted for DAKOLAS: find by device, model and part type, then send a quote request.</p>
        <form className="search-panel">
          <input placeholder="Search iPhone 15 screen, Galaxy battery, iPad LCD..." aria-label="Search product catalog" />
          <button type="button">Search catalog</button>
        </form>
      </section>

      <section className="section finder-section">
        <div className="section-heading">
          <span>Shop by device family</span>
          <h2>Choose a repair parts collection.</h2>
        </div>
        <div className="finder-grid">
          {deviceCollections.map((collection) => (
            <article className="finder-card" key={collection.slug}>
              <h3>{collection.title}</h3>
              <p>{collection.models.join(" / ")}</p>
              <strong>{collection.description}</strong>
              <a href={`/collections/${collection.slug}`}>View collection</a>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-layout">
        <aside className="filter-sidebar">
          <h2>Part type</h2>
          {partTypes.map((type) => (
            <a href="#sample-products" key={type}>{type}</a>
          ))}
        </aside>
        <div className="catalog-content" id="sample-products">
          <div className="catalog-toolbar">
            <strong>Sample SKU structure</strong>
            <span>Use this pattern to add real products later.</span>
          </div>
          <div className="sku-grid">
            {sampleProducts.map((product) => (
              <article className="sku-card" key={product.slug}>
                <div className="sku-visual"><span className="device-screen" /><span className="device-battery" /></div>
                <h3>{product.title}</h3>
                <dl>
                  <div><dt>Model</dt><dd>{product.model}</dd></div>
                  <div><dt>Type</dt><dd>{product.partType}</dd></div>
                  <div><dt>MOQ</dt><dd>{product.moq}</dd></div>
                </dl>
                <a href={`/products/${product.slug}`}>View details</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
