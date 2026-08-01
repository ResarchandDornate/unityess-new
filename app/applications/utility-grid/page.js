import "./utility-grid.css";
import Link from "next/link";

export default function UtilityGridApplicationPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="Utility scale BESS installation for grid operators" /></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications · Utility Grid Operators</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Grid stability <span className="grad">at scale.</span></span></span>
          </h1>
          <p className="hero-sub">Frequency regulation, voltage support, and renewable smoothing — designed for IPPs, utilities, and grid operators managing India&rsquo;s fast-growing renewable capacity.</p>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/applications">Applications</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Utility Grid Operators</span>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="pad" id="challenge">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Challenge</div>
            <h2 className="h2"><span className="line-mask"><span>The grid problem that only</span></span><span className="line-mask"><span>gets harder as renewables grow.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>Every megawatt of solar added to the grid is a megawatt that peaks at noon and disappears at dusk. Without storage, the grid has to balance that variability through expensive, fast-response fossil capacity — or accept instability.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">📈</div>
              <h4>Ramp-rate volatility</h4>
              <p>Solar generation ramps up fast in the morning and ramps down fast in the evening. Without storage, the grid has to absorb that rate of change through spinning reserves and demand curtailment — both expensive and limited.</p>
              <span className="pain-stat">±50%</span>
              <div className="pain-stat-label">Solar output change in under 30 minutes at sunrise and sunset</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">⚡</div>
              <h4>Frequency regulation gaps</h4>
              <p>India&rsquo;s grid frequency target is 50Hz. Deviations above and below cause equipment damage, protection trips, and cascading failures. Battery storage is the fastest-responding tool available for frequency regulation.</p>
              <span className="pain-stat">49.9–50.1 Hz</span>
              <div className="pain-stat-label">Acceptable grid frequency range under CEA regulations</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">🌇</div>
              <h4>Evening peak without solar</h4>
              <p>Peak demand in India is 6–10pm — after solar has stopped generating. Without storage, utilities have to fire up thermal capacity that sat idle all day to cover a 4-hour peak window. That is the most expensive electricity on the grid.</p>
              <span className="pain-stat">6–10 PM</span>
              <div className="pain-stat-label">Peak demand window — 4 hours after solar generation ends</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pad" id="solution" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Solution</div>
            <h2 className="h2"><span className="line-mask"><span>What utility-scale storage</span></span><span className="line-mask"><span>does for the grid.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>Not theoretical — these are the applications running on Unity Ultima systems deployed across Rajasthan and Maharashtra.</p>
          </div>
          <div className="solve-grid">
            <div className="solve-item reveal"><div className="solve-num">01</div><div><div className="solve-title">Ramp-rate control, automated</div><div className="solve-body">The Unity Ultima system smooths solar generation ramp-up and ramp-down automatically — maintaining a stable MW/minute ramp rate that the grid can absorb without frequency deviation.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">02</div><div><div className="solve-title">Frequency response in milliseconds</div><div className="solve-body">Battery storage responds to frequency deviations in under 100ms — faster than any thermal plant. The Unity EMS monitors grid frequency in real time and dispatches automatically when a deviation is detected.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">03</div><div><div className="solve-title">Evening peak shifting</div><div className="solve-body">Solar energy captured at noon is stored and dispatched at 7pm — replacing the most expensive thermal capacity on the grid with the cheapest generation of the day. The economics are straightforward.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">04</div><div><div className="solve-title">Renewable smoothing for hybrid projects</div><div className="solve-body">For solar + storage hybrid projects, the Ultima system smooths variable PV output into a stable, schedulable generation profile — enabling developers to commit to firm power schedules under PPA agreements.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">05</div><div><div className="solve-title">CEA and CERC compliance built in</div><div className="solve-body">The Unity Ultima is designed for Indian regulatory requirements from the ground up — CEA, CERC, and state-level compliance requirements are designed in, not retrofitted. Our engineering team handles the documentation.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">06</div><div><div className="solve-title">Scalable from 3 MWh to 35 MWh+</div><div className="solve-body">A single container delivers 3.34–6.23 MWh. Multiple containers deploy in parallel for larger projects — 7 containers at Phalodi, Rajasthan delivered 35 MWh as a single commissioned project.</div></div></div>
          </div>
          <div className="app-testimonial reveal">
            <p>"The ramp-rate compliance reports have not flagged a single violation since commissioning. Before the storage, we were getting penalty notices every quarter."</p>
            <cite>O&amp;M Manager · 50MW solar plant with Unity Ultima storage · Rajasthan · Year 1</cite>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SYSTEMS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <div className="eyebrow center fade">Recommended Systems</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Built for</span></span><span className="line-mask"><span className="grad">utility scale.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch", marginInline: "auto" }}>The Unity Ultima is the only Unity ESS product designed specifically for utility-scale grid applications — containerised, C4 rated, with a fully integrated PCS-BMS-EMS stack in a single 20ft unit.</p>
          </div>
          <div className="prod-rec-grid one">
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Containerised · Utility scale · C4 rated</div>
              <h3>Unity Ultima</h3>
              <div className="cap">3.34 MWh – 6.23 MWh per container · 2.5 MVA · 690V</div>
              <p className="desc">A fully integrated 20ft containerised BESS — batteries, PCS, liquid thermal management, fire protection, and Unity EMS in one deployable unit. Engineered for demanding site conditions and high-irradiance zones. Three sub-series: C314, C350, C587.</p>
              <div className="specs">
                <div className="spec-row"><span>Form factor</span><span>20ft container</span></div>
                <div className="spec-row"><span>AC power</span><span>2.5 MVA</span></div>
                <div className="spec-row"><span>Voltage</span><span>690V</span></div>
                <div className="spec-row"><span>Corrosion rating</span><span>C4</span></div>
                <div className="spec-row"><span>Cycle life</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>DC RTE</span><span>&gt;94%</span></div>
                <div className="spec-row"><span>Best for</span><span>Grid operators · IPPs · Utilities</span></div>
              </div>
              <div className="links">
                <Link className="btn" href="/ultima"><span>View Unity Ultima</span></Link>
                <Link className="btn ghost" href="/ultima#selector"><span>Model selector</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER APPLICATIONS */}
      <section className="pad" id="also-powering" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
          <div className="eyebrow fade">Also Powering</div>
          <h2 className="h2"><span className="line-mask"><span>Other applications.</span></span></h2>
        </div>
        <div className="wrap">
          <div className="app-grid">
            <Link className="hcard" href="/applications/industrial"><div className="hbg"><img src="/assets/img/solar-energy-for-manufacturing-plants.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">01</div><h4>Industrial</h4><p>Peak load shifting, demand charge reduction, backup for production lines.</p></div></Link>
            <Link className="hcard" href="/applications/hospitals"><div className="hbg"><img src="/assets/img/solar-energy-for-hospitals-backup.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">02</div><h4>Hospitals</h4><p>Instant switchover, continuous power, surgical suite backup. The grid that never goes dark.</p></div></Link>
            <Link className="hcard" href="/applications/solar-hybrid"><div className="hbg"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">03</div><h4>Solar + Storage Hybrid</h4><p>Capture excess generation, dispatch on demand.</p></div></Link>
            <Link className="hcard" href="/applications/data-centres"><div className="hbg"><img src="/assets/img/solar-energy-for-data-centers.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">04</div><h4>Data Centres</h4><p>Uninterruptible backup, UPS replacement, peak demand management for critical infrastructure.</p></div></Link>
            <Link className="hcard" href="/applications/agriculture"><div className="hbg"><img src="/assets/img/solar-energy-for-agriculture-applications.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">05</div><h4>Agriculture</h4><p>Cold storage backup, irrigation power, post-harvest protection.</p></div></Link>
            <Link className="hcard" href="/applications"><div className="hbg"><img src="/assets/img/unityess-containers-in-farmland-solar-field.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">06</div><h4>All Applications</h4><p>See every use case and recommended system on one page.</p></div></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-full" id="talk">
        <div className="cta-media" data-parallax="0.1"><img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" /></div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Tell Us About Your Project</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Our engineering team works</span></span><span className="line-mask"><span className="grad">directly with IPPs and utilities.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>We respond within 24 hours.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn"><span>Talk to Engineering</span></Link>
            <Link href="/projects" className="btn ghost"><span>View Projects</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
