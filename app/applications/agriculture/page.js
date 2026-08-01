import "./agriculture.css";
import Link from "next/link";

export default function AgricultureApplicationPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14"><img src="/assets/img/solar-energy-for-agriculture-applications.webp" alt="Agricultural cold storage facility with UnityESS battery backup" /></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications · Agriculture</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>A power cut in a cold store <span className="grad">is a season&rsquo;s income.</span></span></span>
          </h1>
          <p className="hero-sub">Cold storage backup, irrigation power, and post-harvest protection — for farmers and cooperatives who cannot afford what happens when the grid goes dark.</p>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/applications">Applications</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Agriculture</span>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="pad" id="challenge">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Challenge</div>
            <h2 className="h2"><span className="line-mask"><span>The grid does not</span></span><span className="line-mask"><span>understand harvest season.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>In Indian agricultural zones, power cuts are most frequent in summer — which is precisely when cold storage is most critical, when irrigation demand is highest, and when a failure has the most severe consequences.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">🥭</div>
              <h4>Cold storage failure</h4>
              <p>A six-hour power cut in a cold storage facility can destroy an entire season&rsquo;s stored produce. For a mango cooperative storing 40,000 kilos of Alphonso, a single grid failure in April costs ₹15–20 lakh in produce losses.</p>
              <span className="pain-stat">6 hours</span>
              <div className="pain-stat-label">Grid failure duration that can destroy a cold store&rsquo;s entire inventory</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">💧</div>
              <h4>Irrigation dependency on the grid</h4>
              <p>Submersible pumps for irrigation are among the most power-intensive loads on rural grids. When the grid fails during a critical irrigation window — sowing, transplanting, or a dry spell — the crop damage is irreversible.</p>
              <span className="pain-stat">4–8 hrs</span>
              <div className="pain-stat-label">Daily irrigation window during peak season — cannot be rescheduled</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">🌡️</div>
              <h4>Temperature chain breaks</h4>
              <p>Once a temperature break occurs in a cold chain — produce warms above threshold and is cooled again — shelf life is significantly reduced even if the produce appears undamaged. The loss is not always visible at the storage facility.</p>
              <span className="pain-stat">-2°C</span>
              <div className="pain-stat-label">Temperature variance that triggers shelf-life reduction in most produce</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pad" id="solution" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Solution</div>
            <h2 className="h2"><span className="line-mask"><span>What changes when storage is</span></span><span className="line-mask"><span>installed at a farm or cold store.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>Across Unity ESS agricultural installations, these are the outcomes that matter to the people running the operations.</p>
          </div>
          <div className="solve-grid">
            <div className="solve-item reveal"><div className="solve-num">01</div><div><div className="solve-title">Cold storage runs through every cut</div><div className="solve-body">The system detects a grid failure in milliseconds and switches to battery before the compressor notices. Temperature is maintained. The produce is protected. The season is not lost to a six-hour cut in April.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">02</div><div><div className="solve-title">Irrigation is not interrupted</div><div className="solve-body">Submersible pumps and drip systems run continuously through grid events. Irrigation windows are not missed because the grid failed at 6am. The crop receives the water it needs, when it needs it.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">03</div><div><div className="solve-title">Solar integration — charge during the day, protect at night</div><div className="solve-body">Most farms with solar panels export their daytime generation at low rates and import during evening irrigation hours at high rates. Storage closes that gap — charging from solar, dispatching for irrigation.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">04</div><div><div className="solve-title">Post-harvest protection</div><div className="solve-body">The days immediately after harvest are the most vulnerable in the cold chain. The system maintains cold store temperature continuously — through the first 72 hours when temperature control is most critical.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">05</div><div><div className="solve-title">No diesel logistics in the field</div><div className="solve-body">Rural diesel supply for generators is unreliable, expensive, and requires an operator present to start. A Unity ESS system runs automatically, requires no fuel logistics, and is monitored remotely by our operations centre.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">06</div><div><div className="solve-title">Designed for rural India</div><div className="solve-body">IP54 protection, -30 to 55°C operating range, and the durability to handle the dust, heat, and humidity of an Indian agricultural site. Not designed for a controlled environment — designed for the field.</div></div></div>
          </div>
          <div className="app-testimonial reveal">
            <p>"Last year we lost ₹18 lakh in the cold store. This year, the power failed three times during mango season. The system held through all three. We lost nothing."</p>
            <cite>Cooperative Manager · Mango producer cooperative, Andhra Pradesh · Unity Aura installation · Season 1</cite>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SYSTEMS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <div className="eyebrow center fade">Recommended Systems</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Built for</span></span><span className="line-mask"><span className="grad">the field.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch", marginInline: "auto" }}>The Unity Aura covers most agricultural and cold storage applications — from a single cold store to a large cooperative with multiple units. Rugged, self-contained, and monitored remotely.</p>
          </div>
          <div className="prod-rec-grid one">
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Air cooled · Agricultural &amp; Rural</div>
              <h3>Unity Aura</h3>
              <div className="cap">100 kWh – 225 kWh · 25 kW – 65 kW load range</div>
              <p className="desc">The standard choice for cold storage facilities, irrigation pumping, and post-harvest protection. IP54 rated outdoor cabinet. Operating range -30 to 55°C. Designed to run without an on-site operator — monitored remotely by our operations centre.</p>
              <div className="specs">
                <div className="spec-row"><span>Switchover</span><span>&lt;20 ms</span></div>
                <div className="spec-row"><span>Chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>Cycle life</span><span>8,000+ cycles</span></div>
                <div className="spec-row"><span>Protection</span><span>IP54</span></div>
                <div className="spec-row"><span>Temp range</span><span>-30 to 55°C</span></div>
                <div className="spec-row"><span>Monitoring</span><span>24/7 remote</span></div>
                <div className="spec-row"><span>Best for</span><span>Cold storage · Irrigation · Post-harvest</span></div>
              </div>
              <div className="links">
                <Link className="btn" href="/aura"><span>View Unity Aura</span></Link>
                <Link className="btn ghost" href="/aura#selector"><span>Model selector</span></Link>
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
            <Link className="hcard" href="/applications/utility-grid"><div className="hbg"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">03</div><h4>Utility Grid Operators</h4><p>Frequency regulation, voltage support, renewable smoothing. Grid stability at scale.</p></div></Link>
            <Link className="hcard" href="/applications/solar-hybrid"><div className="hbg"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">04</div><h4>Solar + Storage Hybrid</h4><p>Capture excess generation, dispatch on demand.</p></div></Link>
            <Link className="hcard" href="/applications/data-centres"><div className="hbg"><img src="/assets/img/solar-energy-for-data-centers.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">05</div><h4>Data Centres</h4><p>Uninterruptible backup, UPS replacement, peak demand management for critical infrastructure.</p></div></Link>
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
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Tell Us About Your Farm or Cold Store</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Our engineering team will</span></span><span className="line-mask"><span className="grad">size the right system for you.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>Send us your load and we&rsquo;ll respond within 24 hours.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn"><span>Talk to Engineering</span></Link>
            <Link href="/projects" className="btn ghost"><span>View Projects</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
