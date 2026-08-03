import "./hospitals.css";

export default function HospitalsApplicationPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14"><img src="/assets/img/solar-energy-for-hospitals-backup.webp" alt="Hospital with UnityESS battery backup system" /></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications · Hospitals</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>The grid that <span className="grad">never goes dark.</span></span></span>
          </h1>
          <p className="hero-sub">Instant switchover, continuous power, and surgical suite backup for hospitals that cannot tolerate a single second of interruption.</p>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/applications">Applications</a>
          <span className="breadcrumb-sep">/</span>
          <span>Hospitals</span>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="pad" id="challenge">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Challenge</div>
            <h2 className="h2"><span className="line-mask"><span>When the power goes out,</span></span><span className="line-mask"><span>someone counts the seconds.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>A grid failure in a hospital is not an inconvenience — it is a clinical event. Every second between the cut and the backup matters. For eleven years of night shifts, the nurse has counted to forty. The generator takes forty seconds to start.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">⏱️</div>
              <h4>Generator switchover time</h4>
              <p>Diesel generators take 30–60 seconds to reach stable output. For a patient on a ventilator, in surgery, or in an ICU, those seconds are not downtime — they are a clinical emergency.</p>
              <span className="pain-stat">40 sec</span>
              <div className="pain-stat-label">Average time before a generator reaches stable voltage</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">🩺</div>
              <h4>Critical load continuity</h4>
              <p>Surgical suites, ICUs, NICU, ventilators, imaging equipment, blood banks — each has its own power sensitivity. A voltage spike on switchover can damage equipment or interrupt a procedure with no warning.</p>
              <span className="pain-stat">100%</span>
              <div className="pain-stat-label">Uptime requirement for surgical and ICU loads</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">🔋</div>
              <h4>UPS battery limitations</h4>
              <p>Hospital UPS systems are designed for minutes, not hours. When a grid failure extends beyond the UPS runtime and the generator has not started cleanly, the gap is unmanaged. Unity ESS closes it.</p>
              <span className="pain-stat">8–12 min</span>
              <div className="pain-stat-label">Typical UPS battery runtime before load drops to generator</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pad" id="solution" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Solution</div>
            <h2 className="h2"><span className="line-mask"><span>What changes when</span></span><span className="line-mask"><span>Unity ESS is installed.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>Not a list of features — what the ward feels different, what the facilities manager stops worrying about.</p>
          </div>
          <div className="solve-grid">
            <div className="solve-item reveal"><div className="solve-num">01</div><div><div className="solve-title">Sub-20ms switchover — no gap</div><div className="solve-body">The system transfers to battery in under 20 milliseconds. The lights do not flicker. The ventilator does not alarm. The surgical suite does not notice. The nurse stops counting.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">02</div><div><div className="solve-title">Critical loads protected separately</div><div className="solve-body">Surgical suites, ICUs, and life-critical equipment are isolated on dedicated circuits. The system prioritises these loads automatically during any grid event, regardless of the rest of the facility.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">03</div><div><div className="solve-title">The generator becomes the backup to the backup</div><div className="solve-body">The Unity ESS bridges the gap until the generator reaches stable output — cleanly, with no voltage spike, no transfer delay. The generator now does exactly what it was designed to do: be the last line of defence.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">04</div><div><div className="solve-title">24/7 monitoring — someone is always watching</div><div className="solve-body">Our operations centre monitors battery health, load profile, and grid status around the clock. If anything changes — a cell degrading, a load spike, a grid anomaly — we know before it becomes a problem.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">05</div><div><div className="solve-title">Blood bank and cold chain protection</div><div className="solve-body">Temperature-sensitive storage requires uninterrupted power. The system maintains continuous power to refrigeration loads through any grid event, protecting stored blood, vaccines, and medications.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">06</div><div><div className="solve-title">Lifecycle planning, not just installation</div><div className="solve-body">We produce simulation reports showing system performance in year one, year five, and year twenty. The hospital administrator knows exactly what they are buying and for how long.</div></div></div>
          </div>
          <div className="app-testimonial reveal">
            <p>"The generator used to start three, four times a week. Since the Unity ESS system went in, the generator has not started once. The staff do not even know there have been grid events."</p>
            <cite>Facilities Manager · 350-bed private hospital, South India · Unity Aura installation · Year 1</cite>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SYSTEMS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <div className="eyebrow center fade">Recommended Systems</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Built for</span></span><span className="line-mask"><span className="grad">critical infrastructure.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch", marginInline: "auto" }}>Two systems cover the full range of hospital load profiles — from a clinic to a 500-bed facility. Both deliver sub-20ms switchover and carry our 20-year service commitment.</p>
          </div>
          <div className="prod-rec-grid two">
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Air cooled · Commercial &amp; Healthcare</div>
              <h3>Unity Aura</h3>
              <div className="cap">100 kWh – 225 kWh · 25 kW – 65 kW</div>
              <p className="desc">The standard choice for clinics, smaller hospitals, and critical-load isolation within a larger facility. Sub-20ms switchover. IP54 rated. Designed to run for 20 years in Indian ambient conditions.</p>
              <div className="specs">
                <div className="spec-row"><span>Switchover</span><span>&lt;20 ms</span></div>
                <div className="spec-row"><span>Chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>Cycle life</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>Protection</span><span>IP54</span></div>
                <div className="spec-row"><span>Best for</span><span>Clinics · Small hospitals</span></div>
              </div>
              <div className="links">
                <a className="btn" href="/aura"><span>View Unity Aura</span></a>
                <a className="btn ghost" href="/aura#selector"><span>Model selector</span></a>
              </div>
            </div>
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Liquid cooled · Large healthcare facilities</div>
              <h3>Unity Aqua</h3>
              <div className="cap">261 kWh – 2,170 kWh · 125 kW – 1,000 kW</div>
              <p className="desc">For larger hospitals and multi-building healthcare campuses where the load profile exceeds a single Aura cabinet. Liquid cooled, IP66 rated, scalable to 12 units. Covers the full facility without gaps.</p>
              <div className="specs">
                <div className="spec-row"><span>Cooling</span><span>Liquid cooled</span></div>
                <div className="spec-row"><span>Chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>Cycle life</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>Protection</span><span>IP66</span></div>
                <div className="spec-row"><span>Best for</span><span>Large hospitals · Campuses</span></div>
              </div>
              <div className="links">
                <a className="btn" href="/aqua"><span>View Unity Aqua</span></a>
                <a className="btn ghost" href="/aqua#selector"><span>Model selector</span></a>
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
            <a className="hcard" href="/applications/utility-grid"><div className="hbg"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">02</div><h4>Utility Grid Operators</h4><p>Frequency regulation, voltage support, renewable smoothing. Grid stability at scale.</p></div></a>
            <a className="hcard" href="/applications/solar-hybrid"><div className="hbg"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">03</div><h4>Solar + Storage Hybrid</h4><p>Capture excess generation, dispatch on demand.</p></div></a>
            <a className="hcard" href="/applications/data-centres"><div className="hbg"><img src="/assets/img/solar-energy-for-data-centers.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">04</div><h4>Data Centres</h4><p>Uninterruptible backup, UPS replacement, peak demand management for critical infrastructure.</p></div></a>
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
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Tell Us About Your Facility</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Our engineering team will</span></span><span className="line-mask"><span className="grad">size the right system for you.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>Send us your critical load profile and we&rsquo;ll respond within 24 hours.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn"><span>Talk to Engineering</span></a>
            <a href="/projects" className="btn ghost"><span>View Projects</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
