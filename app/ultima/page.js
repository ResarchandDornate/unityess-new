import "./ultima.css";
import Link from "next/link";
import ModelSelector from "./ModelSelector";

export const metadata = {
  title: "Ultima — UnityESS",
  description:
    "Ultima — a liquid-cooled, containerised utility BESS scaling to 6.60 MWh per unit, for grid support, arbitrage and renewable firming.",
};

export default function UltimaPage() {
  return (
    <>
    <main className="wrap" style={{ marginTop: "clamp(6rem,14vh,8rem)", maxWidth: 1040 }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / Ultima
      </div>

      {/* HERO */}
      <section className="product-hero">
        <div className="hero-img-wrap">
          <img src="/assets/img/unity-ultima-containerised-utility-system.webp?v=3" alt="Ultima" />
        </div>
        <div>
          <div className="eyebrow">UESS · Utility Series</div>
          <h1>Ultima</h1>
          <div className="badge-row">
            <div className="badge"><div className="num">3.0 -6.25 MWh</div><div className="label">Capacity (current SKU)</div></div>
            <div className="badge"><div className="num">2.5 MW</div><div className="label">Power</div></div>
            <div className="badge"><div className="num">20ft</div><div className="label">Form Factor</div></div>
            <div className="badge"><div className="num">C3</div><div className="label">Corrosion Rated</div></div>
          </div>
          <blockquote>Built for India&rsquo;s fast-growing utility-scale solar and hybrid projects — delivering high-density, multi-megawatt-hour storage in a single containerized unit. Plug-and-operate design minimizes civil work for faster commissioning.</blockquote>
          <div className="detail-cta">
            <Link className="btn" href="/contact" data-hot><span>Request Consultation</span></Link>
            <Link className="btn ghost" href="/contact?datasheet=/assets/datasheets/ultima.pdf" data-hot><span>Download Datasheet</span></Link>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="block">
        <div className="eyebrow">Technical Specifications</div>
        <h2>Engineering detail, variant by variant</h2>
        <div className="spec-table-grid">
          <table className="spec-table">
            <tbody>
              <tr><td>Variants</td><td>C-5.00 MWh / C-6.25 MWh</td></tr>
              <tr><td>Operating Temp</td><td>-30°C to 50°C / -30°C to 55°C</td></tr>
            </tbody>
          </table>
          <table className="spec-table">
            <tbody>
              <tr><td>Weight</td><td>42 / 49 tons</td></tr>
              <tr><td>Certification</td><td>IEC62619, UL1973, UL9540A (Cell/Pack/Rack/System level)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MODEL SELECTOR */}
      <section className="block" id="selector">
        <div className="eyebrow">Model Selector</div>
        <h2>Find the right system.</h2>

        <div className="selector-meta">
          <div className="mi"><div className="ml">Cooling</div><div className="mv">Liquid cooled</div></div>
          <div className="mi"><div className="ml">Chemistry</div><div className="mv">LFP &middot; 314Ah / 587Ah</div></div>
          <div className="mi"><div className="ml">Form factor</div><div className="mv">20ft container</div></div>
          <div className="mi"><div className="ml">Cycle life</div><div className="mv">8,000+ cycles</div></div>
          <div className="mi"><div className="ml">Certification</div><div className="mv">UL9540A</div></div>
        </div>

        <ModelSelector />

        <p className="selector-helper">
          <span className="hdot"></span>
          Need a larger utility-scale configuration? <Link href="/contact" data-hot style={{ color: "var(--orange)", textDecoration: "none", fontWeight: 500 }}>Talk to our engineering team →</Link>
        </p>
      </section>

      {/* ENGINEERED FOR PERFORMANCE */}
      <section className="block">
        <div className="eyebrow">Engineered For Performance &amp; Safety</div>
        <h2>Every detail accounted for</h2>
        <div className="eng-grid2">
          <div className="eng-img-wrap2"><img src="/assets/img/unity-model-c-engineered.webp" alt="Ultima engineered container diagram" /></div>
          <div className="eng-list2">
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" /></svg>
              </div>
              <p>High-protection containerised construction rated to C4 corrosion standard, built for demanding outdoor environments</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" /><rect x="20" y="10" width="2" height="4" rx="1" fill="currentColor" /><rect x="6" y="10" width="3" height="4" fill="currentColor" /><rect x="11" y="10" width="3" height="4" fill="currentColor" /></svg>
              </div>
              <p>5 MWh of usable AC liquid-cooled storage in a single 20ft container with built-in fire suppression system</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><line x1="10" y1="7" x2="10" y2="13" stroke="currentColor" strokeWidth="1.6" /></svg>
              </div>
              <p>Integrated HVAC with built-in heater chiller maintains optimal cell temperature across all operating conditions</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.4" /><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </div>
              <p>Fully integrated control stack &mdash; main control box, ESMU, and communication circuit power supply in one unit</p>
            </div>
            <div className="eng-item2">
              <div className="eng-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <p>Multi-layer fire safety: heat detector, deflagration panel, smoke detector, fire alarm control panel, and water FSS port</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="block">
        <div className="eyebrow">Key Features</div>
        <h2>Built for utility-scale demands</h2>
        <div className="feature-list">
          <div className="feature-item"><span className="mark">—</span><p>Configurable as 5 MWh and 6.25 MWh in the same 20-ft form factor</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Highly configurable inverter designed for 2hr / 4hr discharge rates</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Rated for C4 corrosion resistance — functions reliably up to 95% humidity</p></div>
          <div className="feature-item"><span className="mark">—</span><p>AI-enabled EMS for instantaneous switching between power sources</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Advanced thermal management with multi-layer safety architecture</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Fully integrated PCS-BMS-EMS architecture for ramp-rate control and frequency response</p></div>
          <div className="feature-item"><span className="mark">—</span><p>Plug-and-operate design — minimizes civil work and installation time</p></div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="block">
        <div className="eyebrow">Applications</div>
        <h2>Where the Ultima delivers unstoppable performance</h2>
        <div className="detail-app-grid">
          <div className="detail-app-card"><h3>Utility-scale solar &amp; hybrid projects</h3><p>Engineered for maximum performance and unwavering reliability.</p></div>
          <div className="detail-app-card"><h3>Grid frequency regulation</h3><p>Engineered for maximum performance and unwavering reliability.</p></div>
          <div className="detail-app-card"><h3>Peak shaving &amp; load shifting</h3><p>Engineered for maximum performance and unwavering reliability.</p></div>
          <div className="detail-app-card"><h3>Renewable energy integration</h3><p>Engineered for maximum performance and unwavering reliability.</p></div>
          <div className="detail-app-card"><h3>Ramp-rate control</h3><p>Engineered for maximum performance and unwavering reliability.</p></div>
          <div className="detail-app-card"><h3>IPP &amp; EPC deployments</h3><p>Engineered for maximum performance and unwavering reliability.</p></div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="block">
        <div className="eyebrow">Explore More Systems</div>
        <h2>Find the right solution for your needs</h2>
        <div className="explore-grid">
          <Link className="explore-card" href="/aura">
            <div><h3>Aura</h3><div className="tag">Commercial Series</div></div>
            <div className="arrow">→</div>
          </Link>
          <Link className="explore-card" href="/aqua">
            <div><h3>Aqua</h3><div className="tag">Industrial Series</div></div>
            <div className="arrow">→</div>
          </Link>
        </div>
      </section>

    </main>

    <section className="detail-closing">
      <div className="wrap">
        <div className="cta-text-panel">
          <div className="eyebrow">Get Started</div>
          <h3>Interested in Ultima?</h3>
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
