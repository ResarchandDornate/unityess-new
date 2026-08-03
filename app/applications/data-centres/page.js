import "./data-centres.css";

export default function DataCentresApplicationPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14"><img src="/assets/img/solar-energy-for-data-centers.webp" alt="Data centre with UnityESS battery backup power" /></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications · Data Centres</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Uptime is <span className="grad">not negotiable.</span></span></span>
          </h1>
          <p className="hero-sub">Sub-20ms switchover, UPS replacement, and peak demand management for data centres and critical IT infrastructure that operate at 100% availability.</p>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/applications">Applications</a>
          <span className="breadcrumb-sep">/</span>
          <span>Data Centres</span>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="pad" id="challenge">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Challenge</div>
            <h2 className="h2"><span className="line-mask"><span>The economics of data centre</span></span><span className="line-mask"><span>downtime are brutal.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>A data centre is not a building — it is a promise. Every SLA, every uptime guarantee, every co-location contract is built on the assumption that the power never fails. When it does, the costs are immediate and reputational.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">💻</div>
              <h4>Downtime cost</h4>
              <p>An unplanned outage in a tier-3 data centre costs an average of ₹40–80 lakh per incident in direct costs — hardware damage, data recovery, SLA penalties, and client attrition. The reputational cost is harder to quantify.</p>
              <span className="pain-stat">₹40–80L</span>
              <div className="pain-stat-label">Average cost per unplanned outage incident in a mid-size data centre</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">📊</div>
              <h4>Peak demand charges on continuous load</h4>
              <p>Data centres draw continuous, high-density power 24/7. The demand charge structure penalises exactly this load profile — high baseline demand with occasional AI workload spikes that set the peak used to calculate the monthly bill.</p>
              <span className="pain-stat">40%</span>
              <div className="pain-stat-label">Proportion of data centre energy bills attributable to demand charges</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">🔋</div>
              <h4>VRLA battery replacement cycles</h4>
              <p>Traditional UPS systems use VRLA batteries with 3–5 year replacement cycles. In Indian humidity and temperature conditions, that cycle shortens further. The replacement cost, downtime, and disposal logistics are significant recurring costs.</p>
              <span className="pain-stat">3–5 yr</span>
              <div className="pain-stat-label">VRLA battery replacement cycle — shortened by Indian ambient conditions</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pad" id="solution" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Solution</div>
            <h2 className="h2"><span className="line-mask"><span>What a Unity ESS system</span></span><span className="line-mask"><span>does for a data centre.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>From UPS replacement to demand charge reduction — the outcomes across Unity ESS data centre installations.</p>
          </div>
          <div className="solve-grid">
            <div className="solve-item reveal"><div className="solve-num">01</div><div><div className="solve-title">Sub-20ms switchover — below UPS transfer time</div><div className="solve-body">Unity ESS transfers to battery in under 20 milliseconds — faster than most UPS systems, and certainly faster than any generator. The IT load sees no interruption, no voltage sag, no restart cycle.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">02</div><div><div className="solve-title">UPS replacement for Tier 2 and Tier 3 facilities</div><div className="solve-body">For facilities currently relying on VRLA UPS banks, Unity ESS provides a direct replacement with longer life, lower maintenance, and no hazardous battery disposal. LFP cells deliver 8,000+ cycles versus 500–800 for VRLA.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">03</div><div><div className="solve-title">Peak demand shaving for AI workloads</div><div className="solve-body">GPU cluster activation, training runs, and inference peaks create sudden, sharp demand spikes. The Unity EMS detects these and discharges the battery to absorb the spike — preventing it from registering at the demand meter.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">04</div><div><div className="solve-title">Power density in a small footprint</div><div className="solve-body">Unity Aura delivers 261 kWh in a compact outdoor cabinet — high energy density for the floor space available in a data centre environment. Multiple units scale to meet the facility&rsquo;s full backup requirement.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">05</div><div><div className="solve-title">DC round-trip efficiency above 94%</div><div className="solve-body">Higher round-trip efficiency means less energy wasted in the storage cycle — directly reducing the operating cost of every kWh of backup capacity. At data centre scale, the efficiency difference matters.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">06</div><div><div className="solve-title">24/7 monitoring with predictive alerts</div><div className="solve-body">The Unity EMS monitors battery health, cell temperature, state of charge, and grid status continuously. Predictive alerts flag degradation trends before they become failures — months before a VRLA system would show any symptom.</div></div></div>
          </div>
          <div className="app-testimonial reveal">
            <p>"We decommissioned 40 VRLA battery strings and replaced them with two Unity ESS cabinets. The footprint is smaller, the maintenance is gone, and we have not had a single transfer event that the IT team noticed."</p>
            <cite>Infrastructure Director · Tier 3 data centre, Bangalore · Unity Aura installation · Year 2</cite>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SYSTEMS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <div className="eyebrow center fade">Recommended Systems</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Built for continuous</span></span><span className="line-mask"><span className="grad">critical load.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch", marginInline: "auto" }}>The Unity Aura covers most data centre backup requirements in a compact, high-density cabinet. For larger facilities, multiple units scale to full-facility coverage.</p>
          </div>
          <div className="prod-rec-grid one">
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Air cooled · Critical infrastructure</div>
              <h3>Unity Aura</h3>
              <div className="cap">100 kWh – 225 kWh · 25 kW – 65 kW per unit · Scalable</div>
              <p className="desc">The standard choice for data centre UPS replacement and peak demand management. Sub-20ms transfer, LFP cells with 8,000+ cycle life, and 94%+ round-trip efficiency. Outdoor-rated IP54 for flexible placement. Multiple units scale to full-facility backup.</p>
              <div className="specs">
                <div className="spec-row"><span>Switchover</span><span>&lt;20 ms</span></div>
                <div className="spec-row"><span>Chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>DC RTE</span><span>&gt;94%</span></div>
                <div className="spec-row"><span>Cycle life</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>Protection</span><span>IP54</span></div>
                <div className="spec-row"><span>Best for</span><span>UPS replacement · Peak shaving · Colocation</span></div>
              </div>
              <div className="links">
                <a className="btn" href="/aura"><span>View Unity Aura</span></a>
                <a className="btn ghost" href="/aura#selector"><span>Model selector</span></a>
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
            <a className="hcard" href="/applications/industrial"><div className="hbg"><img src="/assets/img/solar-energy-for-manufacturing-plants.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">01</div><h4>Industrial</h4><p>Peak load shifting, demand charge reduction, backup for production lines.</p></div></a>
            <a className="hcard" href="/applications/hospitals"><div className="hbg"><img src="/assets/img/solar-energy-for-hospitals-backup.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">02</div><h4>Hospitals</h4><p>Instant switchover, continuous power, surgical suite backup. The grid that never goes dark.</p></div></a>
            <a className="hcard" href="/applications/utility-grid"><div className="hbg"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">03</div><h4>Utility Grid Operators</h4><p>Frequency regulation, voltage support, renewable smoothing. Grid stability at scale.</p></div></a>
            <a className="hcard" href="/applications/solar-hybrid"><div className="hbg"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">04</div><h4>Solar + Storage Hybrid</h4><p>Capture excess generation, dispatch on demand.</p></div></a>
            <a className="hcard" href="/applications/agriculture"><div className="hbg"><img src="/assets/img/solar-energy-for-agriculture-applications.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">05</div><h4>Agriculture</h4><p>Cold storage backup, irrigation power, post-harvest protection.</p></div></a>
            <a className="hcard" href="/applications"><div className="hbg"><img src="/assets/img/unityess-containers-in-farmland-solar-field.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">06</div><h4>All Applications</h4><p>See every use case and recommended system on one page.</p></div></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-full" id="talk">
        <div className="cta-media" data-parallax="0.1"><img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" /></div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Tell Us About Your Data Centre</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Our engineering team will</span></span><span className="line-mask"><span className="grad">size the right system for you.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>Send us your load profile and we&rsquo;ll return a proposal within 24 hours.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn"><span>Talk to Engineering</span></a>
            <a href="/projects" className="btn ghost"><span>View Projects</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
