import "./industrial.css";

export default function IndustrialApplicationPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14"><img src="/assets/img/solar-energy-for-manufacturing-plants.webp" alt="Industrial factory with UnityESS battery storage" /></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications · Industrial</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>The production line <span className="grad">that never stops.</span></span></span>
          </h1>
          <p className="hero-sub">Peak load shifting, demand charge reduction, and backup for factories that cannot afford to go dark — even for a minute.</p>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep">/</span>
          <a href="/applications">Applications</a>
          <span className="breadcrumb-sep">/</span>
          <span>Industrial</span>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="pad" id="challenge">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Challenge</div>
            <h2 className="h2"><span className="line-mask"><span>What keeps factory managers</span></span><span className="line-mask"><span>up at night.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>India's industrial grid is unreliable by design — built for a demand that is still growing. For a factory floor, that unreliability has a cost that shows up on the P&amp;L every month.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">⚡</div>
              <h4>Unplanned power cuts</h4>
              <p>A cut during a production run is not just lost time — it is scrapped material, reset costs, missed dispatch windows, and a call to a client explaining why the order is late. Every time.</p>
              <span className="pain-stat">4–6</span>
              <div className="pain-stat-label">Average unplanned cuts per month in industrial zones</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">📊</div>
              <h4>Peak demand surcharges</h4>
              <p>The highest kW demand in any 15-minute window sets the demand charge for the entire month. When a shift starts and every machine turns on at once, that spike costs significantly for 30 days.</p>
              <span className="pain-stat">20–35%</span>
              <div className="pain-stat-label">Of industrial electricity bills attributable to demand charges</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">🔧</div>
              <h4>Generator dependency</h4>
              <p>Diesel generators start in 40 seconds — long enough to lose a production run. They require fuel logistics, maintenance contracts, and a dedicated operator. And they still fail when you need them most.</p>
              <span className="pain-stat">40 sec</span>
              <div className="pain-stat-label">Average generator start time — enough to halt a production line</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pad" id="solution" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Solution</div>
            <h2 className="h2"><span className="line-mask"><span>What a Unity ESS system</span></span><span className="line-mask"><span>does for a factory.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>Not a list of features. What actually changes on the floor — the first week, the first month, the first year.</p>
          </div>
          <div className="solve-grid">
            <div className="solve-item reveal"><div className="solve-num">01</div><div><div className="solve-title">The line does not stop</div><div className="solve-body">Sub-20ms switchover — faster than a blink. When the grid fails, the system has already taken over. Your operators never notice. Your production run continues. The call to the client does not happen.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">02</div><div><div className="solve-title">Peak demand is managed automatically</div><div className="solve-body">The Unity EMS monitors your load 24/7 and shaves demand peaks before they reach the meter. Shift start surges, heavy machine cycles, compressor loads — flattened. Demand charges fall month on month.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">03</div><div><div className="solve-title">Solar energy is captured and used</div><div className="solve-body">If the factory has rooftop solar, the system charges during peak generation hours and dispatches during peak demand hours. The energy you were selling back to the grid at ₹3/kWh is now replacing grid energy at ₹11/kWh.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">04</div><div><div className="solve-title">The diesel generator stays off</div><div className="solve-body">Most factories keep the generator as a backup to the backup. Once the Unity ESS system is running, the generator becomes a last resort — not a weekly necessity. Fuel costs drop. Maintenance costs drop. The noise stops.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">05</div><div><div className="solve-title">Someone is always watching</div><div className="solve-body">Our operations centre monitors every system we deploy, 24/7. If something shifts — in load, in battery health, in grid behaviour — we know before you do. You talk to a person who knows your site.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">06</div><div><div className="solve-title">The numbers work</div><div className="solve-body">A 100 kWh system saving ₹18,000 per avoided cut, plus demand charge reduction of ₹40,000–80,000 per month, returns the capital investment in 3–5 years. After that, the savings are yours for the remaining 15 years of asset life.</div></div></div>
          </div>
          <div className="app-testimonial reveal">
            <p>"Since commissioning, our grid cuts are invisible to the production floor. We have not made a single call to a client about a delay caused by power. That is a first in eleven years of running this plant."</p>
            <cite>Operations Manager · Industrial plant, Maharashtra · Unity Aura installation · Year 2</cite>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SYSTEMS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <div className="eyebrow center fade">Recommended Systems</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Built for the</span></span><span className="line-mask"><span className="grad">industrial floor.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch", marginInline: "auto" }}>Two systems cover the full range of industrial load profiles — from a 25 kW production line to a 1,000 kW manufacturing campus. Both run the Unity EMS and carry our 20-year service commitment.</p>
          </div>
          <div className="prod-rec-grid two">
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Air cooled · Commercial &amp; Industrial</div>
              <h3>Unity Aura</h3>
              <div className="cap">100 kWh – 225 kWh · 25 kW – 65 kW load range</div>
              <p className="desc">The standard choice for factories, warehouses, and industrial operations with load profiles between 25 kW and 65 kW. Outdoor-rated IP54 cabinet. Built for Indian ambient conditions.</p>
              <div className="specs">
                <div className="spec-row"><span>Switchover speed</span><span>&lt;20 ms</span></div>
                <div className="spec-row"><span>Cell chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>Cycle lifetime</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>Protection rating</span><span>IP54</span></div>
                <div className="spec-row"><span>Best for</span><span>SME factories · Warehouses</span></div>
              </div>
              <div className="links">
                <a className="btn" href="/aura"><span>View Unity Aura</span></a>
                <a className="btn ghost" href="/aura#selector"><span>Model selector</span></a>
              </div>
            </div>
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Liquid cooled · Large industrial</div>
              <h3>Unity Aqua</h3>
              <div className="cap">261 kWh – 2,170 kWh · 125 kW – 1,000 kW</div>
              <p className="desc">For larger industrial sites — foundries, large manufacturers, industrial campuses — where the load profile demands more than a single Aura cabinet. Liquid cooled, IP66 rated, scalable to 12 units in parallel.</p>
              <div className="specs">
                <div className="spec-row"><span>Cooling method</span><span>Liquid cooled</span></div>
                <div className="spec-row"><span>Cell chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>Cycle lifetime</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>Protection rating</span><span>IP66</span></div>
                <div className="spec-row"><span>Best for</span><span>Large plants · Campuses</span></div>
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
            <a className="hcard" href="/applications/hospitals"><div className="hbg"><img src="/assets/img/solar-energy-for-hospitals-backup.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">01</div><h4>Hospitals</h4><p>Instant switchover, continuous power, surgical suite backup. The grid that never goes dark.</p></div></a>
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
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Tell Us About Your Factory</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Our engineering team will</span></span><span className="line-mask"><span className="grad">size the right system for you.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>Send us your load profile and we&rsquo;ll respond with a proposal within 24 hours.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn"><span>Talk to Engineering</span></a>
            <a href="/projects" className="btn ghost"><span>View Projects</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
