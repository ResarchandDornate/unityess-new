import "./solar-hybrid.css";
import Link from "next/link";

export default function SolarHybridApplicationPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="Solar panels with UnityESS battery storage hybrid system" /></div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications · Solar + Storage Hybrid</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Solar at noon. <span className="grad">Power at seven.</span></span></span>
          </h1>
          <p className="hero-sub">Capture the energy your panels generate at peak, store it, and dispatch it exactly when your load — or the grid — needs it most.</p>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/applications">Applications</Link>
          <span className="breadcrumb-sep">/</span>
          <span>Solar + Storage Hybrid</span>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="pad" id="challenge">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Challenge</div>
            <h2 className="h2"><span className="line-mask"><span>Solar is abundant.</span></span><span className="line-mask"><span>It just arrives at the wrong time.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>A rooftop or ground-mounted solar plant generates most of its energy between 10am and 3pm. Peak demand — and peak tariffs — arrive between 6pm and 10pm. Without storage, that gap is a permanent revenue leak.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">📉</div>
              <h4>Curtailment and export losses</h4>
              <p>When your solar plant generates more than your load can absorb, the excess is either curtailed or exported at low feed-in tariffs — ₹2–4/kWh — while you import from the grid at ₹8–12/kWh four hours later.</p>
              <span className="pain-stat">₹8/kWh</span>
              <div className="pain-stat-label">Typical gap between solar export rate and peak grid import rate</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">☁️</div>
              <h4>Intermittency and variability</h4>
              <p>Cloud cover, seasonal variation, and the morning/evening ramp mean solar generation is never perfectly predictable. Without storage, you cannot commit to a firm power schedule under a PPA or reduce grid dependency to a target level.</p>
              <span className="pain-stat">±30%</span>
              <div className="pain-stat-label">Typical intraday variability in solar output due to cloud cover</div>
            </div>
            <div className="pain-card reveal">
              <div className="pain-icon">💸</div>
              <h4>Peak demand charges on solar sites</h4>
              <p>Even a solar-heavy site draws from the grid during evening peak hours. The demand charge for those peak imports is calculated on the highest 15-minute window — making solar alone an incomplete answer to the energy bill.</p>
              <span className="pain-stat">15 min</span>
              <div className="pain-stat-label">Demand charge calculation window — the peak that sets the monthly bill</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="pad" id="solution" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow fade">The Solution</div>
            <h2 className="h2"><span className="line-mask"><span>What happens when storage</span></span><span className="line-mask"><span>is added to a solar site.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch" }}>These are the outcomes across Unity ESS solar hybrid projects — from a 261 kWh rooftop system in Maharashtra to a 35 MWh ground-mount in Rajasthan.</p>
          </div>
          <div className="solve-grid">
            <div className="solve-item reveal"><div className="solve-num">01</div><div><div className="solve-title">Capture what the grid cannot absorb</div><div className="solve-body">Excess solar generation that would otherwise be curtailed or exported at ₹3/kWh is stored in the battery. That same energy is dispatched at peak tariff hours — worth ₹10–12/kWh. The arbitrage pays for the system.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">02</div><div><div className="solve-title">Firm power from variable generation</div><div className="solve-body">The Unity EMS smooths variable solar output into a stable, dispatchable profile. For projects operating under PPAs or open access, this enables commitment to firm power schedules that pure solar cannot deliver.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">03</div><div><div className="solve-title">Peak demand eliminated</div><div className="solve-body">The battery discharges automatically during peak demand windows — flattening the 15-minute peak that sets the monthly demand charge. For solar-heavy C&amp;I sites, this is often the single largest bill reduction.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">04</div><div><div className="solve-title">Tariff arbitrage, every day automatically</div><div className="solve-body">The Unity EMS monitors real-time tariff rates and grid frequency, charging during low-rate periods and discharging during high-rate periods — every day, without manual intervention. The economics improve over time as the system learns the site.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">05</div><div><div className="solve-title">DC coupling for maximum efficiency</div><div className="solve-body">Where DC-coupled integration is possible, the Unity Aqua connects directly to the solar DC bus — eliminating the AC conversion loss and increasing total system round-trip efficiency to above 96%.</div></div></div>
            <div className="solve-item reveal"><div className="solve-num">06</div><div><div className="solve-title">Scalable to match the solar plant</div><div className="solve-body">From a single 261 kWh Aqua cabinet on a 100kWp rooftop, to seven Unity Ultima containers on a 50MW ground-mount — the system scales to match the solar plant, not the other way around.</div></div></div>
          </div>
          <div className="app-testimonial reveal">
            <p>"We were exporting at ₹3.20 and importing at ₹9.80 four hours later. The storage arbitrage paid back in under four years. The next fifteen years are pure margin."</p>
            <cite>Energy Manager · Large C&amp;I solar + storage installation · Maharashtra · Year 3</cite>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SYSTEMS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <div className="eyebrow center fade">Recommended Systems</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Sized for</span></span><span className="line-mask"><span className="grad">the solar plant.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "56ch", marginInline: "auto" }}>Two systems cover the full range of solar hybrid applications — from a 100kWp rooftop to a 50MW ground-mount. Both integrate with existing solar infrastructure and run the Unity EMS dispatch intelligence.</p>
          </div>
          <div className="prod-rec-grid two">
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Liquid cooled · C&amp;I solar hybrid</div>
              <h3>Unity Aqua</h3>
              <div className="cap">261 kWh – 2,170 kWh · 125 kW – 1,000 kW · 415V</div>
              <p className="desc">The standard choice for commercial and industrial solar hybrid sites. Integrates with existing rooftop or ground-mount solar. DC or AC coupled. Liquid cooled for efficient operation in high-temperature environments. Scalable to 12 units in parallel.</p>
              <div className="specs">
                <div className="spec-row"><span>Coupling</span><span>AC or DC</span></div>
                <div className="spec-row"><span>Chemistry</span><span>LFP 314Ah</span></div>
                <div className="spec-row"><span>Protection</span><span>IP66</span></div>
                <div className="spec-row"><span>Corrosion</span><span>C3–C5</span></div>
                <div className="spec-row"><span>Best for</span><span>Rooftop solar · C&amp;I hybrid</span></div>
              </div>
              <div className="links">
                <Link className="btn" href="/aqua"><span>View Unity Aqua</span></Link>
                <Link className="btn ghost" href="/aqua#selector"><span>Model selector</span></Link>
              </div>
            </div>
            <div className="glass-panel prod-rec reveal">
              <div className="badge">Containerised · Utility-scale solar hybrid</div>
              <h3>Unity Ultima</h3>
              <div className="cap">3.34 MWh – 6.23 MWh per container · 2.5 MVA</div>
              <p className="desc">For utility-scale solar plants requiring firm power commitment, ramp-rate control, or evening peak shifting at scale. Fully integrated containerised BESS with PCS, EMS, and thermal management in a single 20ft unit.</p>
              <div className="specs">
                <div className="spec-row"><span>Form factor</span><span>20ft container</span></div>
                <div className="spec-row"><span>AC power</span><span>2.5 MVA</span></div>
                <div className="spec-row"><span>Voltage</span><span>690V</span></div>
                <div className="spec-row"><span>Corrosion</span><span>C4</span></div>
                <div className="spec-row"><span>Best for</span><span>Ground-mount solar · IPPs</span></div>
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
            <Link className="hcard" href="/applications/utility-grid"><div className="hbg"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="" /></div>
              <div className="hcard-body"><div className="idx">03</div><h4>Utility Grid Operators</h4><p>Frequency regulation, voltage support, renewable smoothing. Grid stability at scale.</p></div></Link>
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
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Tell Us About Your Solar Site</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>We&rsquo;ll size the storage to</span></span><span className="line-mask"><span className="grad">match your generation profile.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>Send us your load profile and we&rsquo;ll return an arbitrage model within 24 hours.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn"><span>Talk to Engineering</span></Link>
            <Link href="/projects" className="btn ghost"><span>View Projects</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
