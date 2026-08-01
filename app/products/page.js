import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14">
          <img src="/assets/img/unityess-container-and-cabinet-systems-on-site.webp?v=2" alt="UnityESS container and cabinet systems on site" />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>The Collection</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Architecture that scales</span></span>
            <span className="line-mask"><span className="grad">from kilowatt to megawatt.</span></span>
          </h1>
        </div>
      </header>

      {/* STATS */}
      <section className="stats">
        <div className="stats-inner">
          <div className="stat reveal"><div className="num"><span data-count="100/150+" data-dec="2" data-suf="%">0</span></div><div className="lbl">Life Sites</div></div>
          <div className="stat reveal"><div className="num">&lt;<span data-count="20">0</span> <b>ms</b></div><div className="lbl">Switchover Speed</div></div>
          <div className="stat reveal"><div className="num"><span data-count="24" data-suf="/7">0</span></div><div className="lbl">Live Monitoring</div></div>
          <div className="stat reveal"><div className="num">Tier 1</div><div className="lbl">Safety Certified</div></div>
        </div>
      </section>

      {/* THE COLLECTION - three systems, side by side */}
      <section className="pad" id="collection">
        <div className="wrap">
          <div className="prod-grid pcards">
            <Link className="card reveal" href="/aura" data-hot>
              <div className="media"><img src="/assets/img/aura.webp?v=4" alt="Unity Aura commercial cabinets on site" /></div>
              <div className="body">
                <span className="btn"><span>Discover Aura</span></span>
              </div>
            </Link>
            <Link className="card reveal" href="/aqua" data-hot>
              <div className="media"><img src="/assets/img/aqua.webp?v=4" alt="Unity Aqua hybrid solar, grid and storage platform" /></div>
              <div className="body">
                <span className="btn"><span>Discover Aqua</span></span>
              </div>
            </Link>
            <Link className="card reveal" href="/ultima" data-hot>
              <div className="media"><img src="/assets/img/unity-ultima-containerised-utility-system.webp?v=3" alt="Unity Ultima containerised utility system" /></div>
              <div className="body">
                <span className="btn"><span>Discover Ultima</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* THE FOUNDATION */}
      <section className="pad" id="foundation" style={{ paddingBottom: "clamp(2rem,5vh,4rem)" }}>
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="eyebrow center fade">The Foundation</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>One family,</span></span><span className="line-mask"><span>one foundation.</span></span></h2>
          </div>
          <div className="found-grid">
            <div className="tcard reveal">
              <div className="tmark">3-Tiered BMS</div>
              <p>Cell, pack, and system-level protection across all three systems.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">AI-Enabled EMS</div>
              <p>Real-time monitoring and reporting, from Reserve to Ultima.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">LFP Chemistry</div>
              <p>Long cycle life, thermal stability, consistent output.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">24/7 Monitoring</div>
              <p>Every deployed system, watched around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIDE BY SIDE */}
      <section className="pad" id="compare" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="eyebrow fade">Side by side</div>
            <h2 className="h2" style={{ marginTop: "1rem" }}><span className="line-mask"><span>Find your system.</span></span></h2>
          </div>
          <div className="glass-panel reveal">
            <div className="compare-scroll">
              <table className="compare">
                <thead>
                  <tr>
                    <th></th>
                    <th><span className="cname">Aura</span><span className="crange">Commercial</span></th>
                    <th><span className="cname">Aqua</span><span className="crange">Industrial</span></th>
                    <th><span className="cname">Ultima</span><span className="crange">Utility</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>Range</th><td>100 &ndash; 225 kWh</td><td>261 &ndash; 3000 kWh</td><td>5 &ndash; 6.25 MWh</td></tr>
                  <tr><th>Power output</th><td>50 kW &ndash; 100 kW</td><td>125 kW &ndash; 1500 kW</td><td>Up to 2.5 MW</td></tr>
                  <tr><th>Discharge duration</th><td>2hr / 4hr configs</td><td>2hr / 4hr configs</td><td>2hr / 4hr configs</td></tr>
                  <tr><th>Cell chemistry</th><td>LFP (314Ah )</td><td>LFP (314Ah )</td><td>LFP (314Ah / 350Ah / 587Ah)</td></tr>
                  <tr><th>Form factor</th><td>Outdoor/Indoor cabinet</td><td>Outdoor cabinet </td><td>Container</td></tr>
                  <tr><th>Cycle life</th><td>8,000+</td><td>8,000+</td><td>8,000+</td></tr>
                  <tr><th>Best for</th><td>Resorts, Hotels, Data centres, CPOs</td><td>Industries, Open Access applications</td><td>Utility-scale solar, grid frequency regulation, IPP/EPC</td></tr>
                  <tr>
                    <th></th>
                    <td><Link className="go" href="/aura" data-hot>Discover <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg></Link></td>
                    <td><Link className="go" href="/aqua" data-hot>Discover <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg></Link></td>
                    <td><Link className="go" href="/ultima" data-hot>Discover <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* TALK TO ENGINEERING */}
      <section className="cta-full" id="talk">
        <div className="cta-media" data-parallax="0.1"><img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" /></div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Talk to Engineering</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Always with you.</span></span><span className="line-mask"><span className="grad">Whatever you&rsquo;re building.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "48ch" }}>Our engineering team can recommend the optimal solution based on your load profile &mdash; proven specifications, not projections.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn" data-hot><span>Talk to Engineering</span></Link>
            <Link href="/how-it-works#how" className="btn ghost" data-hot><span>How we work</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
