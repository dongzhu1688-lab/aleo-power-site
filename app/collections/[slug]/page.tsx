import { deviceCollections, sampleProducts } from "../../catalog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return deviceCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const collection = deviceCollections.find((item) => item.slug === slug);
  return {
    title: `${collection?.seoTitle ?? "Replacement Parts Supplier"} | DAKOLAS`,
    description: collection?.description
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = deviceCollections.find((item) => item.slug === slug) ?? deviceCollections[0];
  const products = sampleProducts.filter((product) => product.collection === collection.slug);

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
          <a href="/products">Products</a>
          <span>/</span>
          <span>{collection.title}</span>
        </div>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
        <form className="search-panel">
          <input placeholder="Search model, part type or part number" aria-label="Search model or part" />
          <button type="button">Send model list</button>
        </form>
      </section>

      <section className="catalog-layout">
        <aside className="filter-sidebar">
          <h2>Filter by model</h2>
          {collection.models.map((model) => (
            <a href="#quote" key={model}>{model}</a>
          ))}
          <h2>Part type</h2>
          {collection.parts.map((part) => (
            <a href="#quote" key={part}>{part}</a>
          ))}
        </aside>
        <div className="catalog-content">
          <div className="catalog-toolbar">
            <strong>{products.length || 1} sample items</strong>
            <span>No public prices. Quote by model, grade and quantity.</span>
          </div>
          <div className="sku-grid">
            {(products.length ? products : sampleProducts.slice(0, 3)).map((product) => (
              <article className="sku-card" key={product.slug}>
                <div className="sku-visual"><span className="device-screen" /><span className="device-battery" /></div>
                <h3>{product.title}</h3>
                <dl>
                  <div><dt>Model</dt><dd>{product.model}</dd></div>
                  <div><dt>Type</dt><dd>{product.partType}</dd></div>
                  <div><dt>Grade</dt><dd>{product.grade}</dd></div>
                </dl>
                <a href={`/products/${product.slug}`}>View details</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="quote-bar">
        <div>
          <h2>Have a long model list?</h2>
          <p>Send model + part type + quality grade + quantity + target market. DAKOLAS will check and quote.</p>
        </div>
        <a className="btn primary" href="/#inquiry">Get a Quote</a>
      </section>
    </main>
  );
}
