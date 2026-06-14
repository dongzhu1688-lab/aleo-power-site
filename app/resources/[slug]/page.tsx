import { resources } from "../../resource-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  return {
    title: `${resource?.title ?? "Phone Parts Buying Guide"} | DAKOLAS`,
    description: resource?.description
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug) ?? resources[0];

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

      <article className="article-layout">
        <div className="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/resources">Resources</a>
          <span>/</span>
          <span>{resource.title}</span>
        </div>
        <h1>{resource.title}</h1>
        <section className="answer-box">
          <span>Direct Answer</span>
          <p>{resource.answer}</p>
        </section>

        <section>
          <h2>Comparison Table</h2>
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Best for</th>
                <th>Key point</th>
                <th>Buying advice</th>
              </tr>
            </thead>
            <tbody>
              {resource.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => <td key={cell}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Wholesale Buying Checklist</h2>
          <ul>
            <li>Compatible model and part type</li>
            <li>Quality grade and target market</li>
            <li>MOQ, sample support and lead time</li>
            <li>Packaging requirement and warranty handling</li>
            <li>Model list quotation format</li>
          </ul>
        </section>

        <section className="faq-block">
          <h2>FAQ</h2>
          <details open>
            <summary>Does DAKOLAS show public prices?</summary>
            <p>No. DAKOLAS uses quote-based B2B pricing because model mix, grade and quantity affect the final offer.</p>
          </details>
          <details>
            <summary>What should I send for a fast quote?</summary>
            <p>Send model + part type + quality grade + quantity + target market + packaging requirement.</p>
          </details>
        </section>

        <section className="article-cta">
          <h2>Send your model list to DAKOLAS</h2>
          <p>Kabbie: sales@dakolas.com · WhatsApp: +86 135 3140 0739</p>
          <p>Tom Zhu: contact@dakolas.com · WhatsApp: +86 13558057005</p>
        </section>
      </article>
    </main>
  );
}
