import "./aqua.css";
import ModelSelector from "./ModelSelector";

export const metadata = {
  title: "Aqua — UnityESS",
  description:
    "Aqua — a mid-range hybrid Energy Storage System for Open Access Applications, pairing on-site solar with storage for reliable, low-cost power.",
};

export default function AquaPage() {
  return (
    <>
    <main className="wrap" style={{ marginTop: "clamp(6rem,14vh,8rem)", maxWidth: 1040 }}>
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/products">Products</a> / Aqua
      </div>

      {/* HERO */}
      <section className="product-hero">
        <div className="hero-img-wrap">
          <img src="/assets/img/aqua.webp?v=4" alt="Aqua" />
        </div>
        <div>
          <div className="eyebrow">UESS · Commercial &amp; Industrial Series</div>
          <h1>Aqua</h1>
          <div className="badge-row">
            <div className="badge"><div className="num">261 – 3000 kWh</div><div className="label">Capacity</div></div>
            <div className="badge"><div className="num">125 - 1000 kW</div><div className="label">Power</div></div>
            <div className="badge"><div className="num">Outdoor</div><div className="label">Cabinet </div></div>
            <div className="badge"><div className="num">Hybrid</div><div className="label">Solar · Grid · Storage</div></div>
          </div>
          <blockquote>Optimize your operations with an Energy Storage System designed for Open Access Applications. It stores low-cost renewable energy for later utilization and delivers reliable power — solar when available, grid when required, storage always balancing the two.</blockquote>
          <div className="detail-cta">
            <a className="btn" href="/contact" data-hot><span>Request Consultation</span></a>
            <a className="btn ghost" href="/contact?datasheet=/assets/datasheets/aqua.pdf" data-hot><span>Download Datasheet</span></a>
          </div>
        </div>
      </section>

      {/* MODEL SELECTOR */}
      <section className="block" id="selector">
        <div className="eyebrow">Model Selector</div>
        <h2>Find the right system.</h2>
        <p style={{ fontSize: 15, color: "var(--t-mid)", lineHeight: 1.7, maxWidth: 500, margin: "12px 0 28px" }}>
          Select your capacity and required backup hours. Click a row to see the configuration and download the datasheet. All models operate at 415V.
        </p>

        <div className="selector-meta">
          <div className="mi"><div className="ml">Cooling</div><div className="mv">Liquid cooled</div></div>
          <div className="mi"><div className="ml">Chemistry</div><div className="mv">LFP &middot; 314Ah</div></div>
          <div className="mi"><div className="ml">Cycle life</div><div className="mv">8,000+ cycles</div></div>
          <div className="mi"><div className="ml">DC RTE</div><div className="mv">&gt;94%</div></div>
          <div className="mi"><div className="ml">Protection</div><div className="mv">IP54</div></div>
          <div className="mi"><div className="ml">Operating Temperature</div><div className="mv">30°C &ndash; 55°C</div></div>
        </div>

        <ModelSelector />

        <p className="selector-helper">
          <span className="hdot"></span>
          Scalable up to 12 units in parallel. Need a custom configuration? <a href="/contact" data-hot style={{ color: "var(--orange)", textDecoration: "none", fontWeight: 500 }}>Talk to our engineering team →</a>
        </p>
      </section>

      {/* KEY FEATURES */}
      <section className="block">
        <div className="eyebrow">Key Features</div>
        <h2>Solar, grid and storage, working as one</h2>
        <div className="feature-list">
          <div className="feature-item"><span className="mark">—</span><p>Charges from on-site solar when it&apos;s available, from the grid when it&apos;s not</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Storage layer continuously balances the two, so supply never depends on one source alone</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Built for Open Access Applications — captures low-cost renewable energy for later use</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Three-tier BMS prevents overcharge and balances cells for safety and reliability</p></div>
          <div className="feature-item"><span className="mark">—</span><p>AI-enabled EMS monitors operations, controls dispatch strategy, and reports in real time</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Outdoor-rated cabinet, engineered for the same industrial conditions as the rest of the collection</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="block">
        <div className="eyebrow">About Aqua</div>
        <h2>A hybrid platform for sites that generate their own power</h2>
        <div className="about-text">
          <p>Aqua is built for sites that already have — or are planning — on-site solar generation, and need storage that makes that generation actually usable around the clock. It sits between Aura&rsquo;s commercial scale and Ultima&rsquo;s utility scale, sized for industrial sites running Open Access power arrangements.</p>
          <p>Solar, grid and storage in one intelligent platform: solar when it&rsquo;s available, grid when it&rsquo;s required, storage always balancing the two — so the timing of generation stops being the thing that decides whether the lights stay on.</p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="block">
        <div className="eyebrow">Applications</div>
        <h2>Where the Aqua delivers unstoppable performance</h2>
        <div className="detail-app-grid">
          <div className="detail-app-card"><h3>Open Access power sites</h3><p>Capture low-cost renewable energy and deploy it exactly when it&apos;s needed.</p></div>
          <div className="detail-app-card"><h3>Industrial facilities with on-site solar</h3><p>Turn intermittent solar generation into dependable, dispatchable power.</p></div>
          <div className="detail-app-card"><h3>Peak &amp; valley price arbitrage</h3><p>Charge low, discharge high, with automated dispatch.</p></div>
          <div className="detail-app-card"><h3>Renewable integration</h3><p>Seamless deployment pairing on-site generation with storage.</p></div>
          <div className="detail-app-card"><h3>Grid-tied hybrid sites</h3><p>Solar and grid working together, balanced by storage.</p></div>
          <div className="detail-app-card"><h3>Mid-scale commercial &amp; industrial</h3><p>Sized between Aura and Ultima for growing operations.</p></div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="block">
        <div className="eyebrow">Explore More Systems</div>
        <h2>Find the right solution for your needs</h2>
        <div className="explore-grid">
          <a className="explore-card" href="/aura">
            <div><h3>Aura</h3><div className="tag">Commercial Series</div></div>
            <div className="arrow">→</div>
          </a>
          <a className="explore-card" href="/ultima">
            <div><h3>Ultima</h3><div className="tag">Utility Series</div></div>
            <div className="arrow">→</div>
          </a>
        </div>
      </section>

    </main>

    <section className="detail-closing">
      <div className="wrap">
        <div className="cta-text-panel">
          <div className="eyebrow">Get Started</div>
          <h3>Interested in Aqua?</h3>
          <p>Get in touch for specialized pricing, technical consultation, and custom configuration options.</p>
          <div className="btn-row">
            <a className="btn" href="/contact" data-hot><span>Talk to Engineering</span></a>
            <a className="btn ghost" href="/how-it-works" data-hot><span>How It Works</span></a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
