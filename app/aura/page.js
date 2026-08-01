import "./aura.css";
import Link from "next/link";
import ModelSelector from "./ModelSelector";

export const metadata = {
  title: "Aura — UnityESS",
  description:
    "Aura — a liquid-cooled commercial BESS built on 314Ah LFP cells, for peak shaving, backup and solar integration at factories, campuses and data centres.",
};

export default function AuraPage() {
  return (
    <>
    <main className="wrap" style={{ marginTop: "clamp(6rem,14vh,8rem)", maxWidth: 1040 }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / Aura
      </div>

      {/* HERO */}
      <section className="product-hero">
        <div className="hero-img-wrap">
          <img src="/assets/img/aura.webp?v=4" alt="Aura" />
        </div>
        <div>
          <div className="eyebrow">QESS · Commercial Series</div>
          <h1>Aura</h1>
          <div className="badge-row">
            <div className="badge"><div className="num">100–225kWh</div><div className="label">Capacity </div></div>
            <div className="badge"><div className="num">50-100kW</div><div className="label">Power</div></div>
            <div className="badge"><div className="num">8,000</div><div className="label">Cycles</div></div>
            <div className="badge"><div className="num">94%</div><div className="label">DC RTE</div></div>
          </div>
          <blockquote>Power your operations with a BESS built for India&rsquo;s toughest industrial conditions. Delivers clean, reliable, and uninterrupted power — reducing diesel usage, cutting energy bills, and stabilizing your plant during peak loads.</blockquote>
          <div className="detail-cta">
            <Link className="btn" href="/contact" data-hot><span>Request Consultation</span></Link>
            <Link className="btn ghost" href="/contact?datasheet=/assets/datasheets/aura.pdf" data-hot><span>Download Datasheet</span></Link>
          </div>
        </div>
      </section>

      {/* MODEL SELECTOR */}
      <section className="block" id="selector">
        <div className="eyebrow">Model Selector</div>
        <h2>Find the right system.</h2>
        <p style={{ fontSize: 15, color: "var(--t-mid)", lineHeight: 1.7, maxWidth: 500, margin: "12px 0 28px" }}>
          Select your load in kW and required backup hours. Click a row to see the configuration and download the datasheet.
        </p>

        <div className="selector-meta">
          <div className="mi"><div className="ml">Cooling</div><div className="mv">Air cooled</div></div>
          <div className="mi"><div className="ml">Chemistry</div><div className="mv">LFP &middot; 314Ah</div></div>
          <div className="mi"><div className="ml">Cycle life</div><div className="mv">8,000+ cycles</div></div>
          <div className="mi"><div className="ml">Switchover</div><div className="mv">&lt;20 ms</div></div>
          <div className="mi"><div className="ml">Operating temp</div><div className="mv">-30 to 55&deg;C</div></div>
          <div className="mi"><div className="ml">Protection</div><div className="mv">IP54</div></div>
        </div>

        <ModelSelector />

        <p className="selector-helper">
          <span className="hdot"></span>
          Don&rsquo;t see your configuration? <Link href="/contact" data-hot style={{ color: "var(--orange)", textDecoration: "none", fontWeight: 500 }}>Talk to our engineering team →</Link>
        </p>
      </section>

      {/* KEY FEATURES */}
      <section className="block">
        <div className="eyebrow">Key Features</div>
        <h2>Built for scale, engineered for safety</h2>
        <div className="feature-list">
          <div className="feature-item"><span className="mark">—</span><p>LFP cells form modules, modules combine into clusters for scalable, reliable capacity growth</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Bidirectional PCS enables DC-AC and AC-DC charging, discharging and grid support</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Liquid cooling (HVAC) maintains optimal temperatures, maximizing efficiency and lifespan</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Three-tier BMS prevents overcharge and balances cells for safety and reliability</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Corrosion-proof enclosure, rated IP54 for dust and water protection</p></div>
          <div className="feature-item"><span className="mark">—</span><p>AI-enabled EMS monitors operations, controls strategies, and reports real-time analytics</p></div>
        </div>
      </section>

      {/* ENGINEERED FOR PERFORMANCE */}
      <section className="block">
        <div className="eyebrow">Engineered For Performance &amp; Safety</div>
        <h2>Every detail accounted for</h2>
        <div className="eng-grid2">
          <div className="eng-img-wrap2"><img src="/assets/img/unity-model-a-engineered.webp" alt="Aura engineered cabinet diagram" /></div>
          <div className="eng-list2">
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
              <p>Normalized, high-protection grade construction design</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4.6v9.8L12 21l-8-4.6V6.6L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
              <p>Batteries are designed to be completely self-contained</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 11l8-7 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
              <p>Suitable for installations and use in a variety of environments</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </div>
              <p>Advanced BMS control for maximum DC output efficiency</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
              <p>Separate space for batteries &amp; electrics enhances fire safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="block">
        <div className="eyebrow">About Aura</div>
        <h2>A compact, reliable system for commercial and industrial use</h2>
        <div className="about-text">
          <p>Aura is a compact and reliable energy storage system made for commercial and industrial use. It comes with advanced battery technology, smart BMS, efficient cooling, and built-in fire safety for smooth and safe performance.</p>
          <p>The system has separate battery and electrical sections, which helps improve safety, cooling, and overall reliability. Its outdoor cabinet design makes it suitable for different environments and weather conditions.</p>
          <p>Aura is easy to install and maintain, making it a practical solution for backup power, peak load management, and renewable energy support. It is designed for businesses looking for a safe, efficient, and scalable energy storage solution.</p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="block">
        <div className="eyebrow">Applications</div>
        <h2>Where the Aura delivers unstoppable performance</h2>
        <div className="detail-app-grid">
          <div className="detail-app-card"><h3>Factories &amp; warehouses</h3><p>Eliminate downtime with industrial-grade power that never stops delivering.</p></div>
          <div className="detail-app-card"><h3>Data centers</h3><p>Ultra-reliable energy backbone for always-on digital infrastructure.</p></div>
          <div className="detail-app-card"><h3>Commercial buildings</h3><p>Smart energy management that slashes costs and keeps operations seamless.</p></div>
          <div className="detail-app-card"><h3>EV charging stations</h3><p>High-power charging infrastructure that scales with electric mobility.</p></div>
          <div className="detail-app-card"><h3>Solar storage</h3><p>Capture every ray — store solar energy and deploy it when it matters most.</p></div>
          <div className="detail-app-card"><h3>Peak load management</h3><p>Shave peak demand charges and optimize your energy spend intelligently.</p></div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="block">
        <div className="eyebrow">Explore More Systems</div>
        <h2>Find the right solution for your needs</h2>
        <div className="explore-grid">
          <Link className="explore-card" href="/aqua">
            <div><h3>Aqua</h3><div className="tag">Industrial Series</div></div>
            <div className="arrow">→</div>
          </Link>
          <Link className="explore-card" href="/ultima">
            <div><h3>Ultima</h3><div className="tag">Utility Series</div></div>
            <div className="arrow">→</div>
          </Link>
        </div>
      </section>

    </main>

    <section className="detail-closing">
      <div className="wrap">
        <div className="cta-text-panel">
          <div className="eyebrow">Get Started</div>
          <h3>Interested in Aura?</h3>
          <p>Get in touch for specialized pricing, technical consultation, and custom configuration options.</p>
          <div className="btn-row">
            <Link className="btn" href="/contact" data-hot><span>Talk to Engineering</span></Link>
            <Link className="btn ghost" href="/how-it-works" data-hot><span>How It Works</span></Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
