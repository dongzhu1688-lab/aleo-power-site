import { sampleProducts } from "../../catalog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sampleProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = sampleProducts.find((item) => item.slug === slug);
  return {
    title: `${product?.title ?? "Replacement Part"} | DAKOLAS`,
    description: product?.description
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = sampleProducts.find((item) => item.slug === slug) ?? sampleProducts[0];

  return (
    <main>
      <header className="catalog-header">
        <a className="brand" href="/">
          <img className="brand-logo" src="/images/logo.png" alt="DAKOLAS logo" />
        </a>
        <a className="header-cta" href="/#inquiry">Get a Quote</a>
      </header>

      <section className="product-detail">
        <div className="detail-visual">
          <span className="device-screen" />
          <span className="device-battery" />
          <span className="device-chip" />
        </div>
        <div className="detail-copy">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products">Products</a>
            <span>/</span>
            <span>{product.model}</span>
          </div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <dl className="detail-specs">
            <div><dt>Compatible model</dt><dd>{product.model}</dd></div>
            <div><dt>Part type</dt><dd>{product.partType}</dd></div>
            <div><dt>Quality grade</dt><dd>{product.grade}</dd></div>
            <div><dt>MOQ</dt><dd>{product.moq}</dd></div>
            <div><dt>Lead time</dt><dd>{product.leadTime}</dd></div>
          </dl>
          <div className="detail-actions">
            <a className="btn primary" href="/#inquiry">Get a Quote</a>
            <a className="btn secondary" href="/products">Back to catalog</a>
          </div>
        </div>
      </section>
    </main>
  );
}
