import YouVideo from "@/components/YouVideo";
import HomeEffects from "@/components/HomeEffects";

export default function Home() {
  return (
    <>
      <HomeEffects />

      {/* YOU — brand intro: Built for You → UNITY ESS */}
      <section className="you" id="you" aria-label="Unity ESS — built for you. Energy, when you need it.">
        <div className="you-media">
          <YouVideo />
        </div>
        <div className="you-scrim"></div>
        <div className="you-stage">
          <h2 className="you-line" id="youLine" aria-hidden="true">
            <span className="you-anchor" id="youAnchor">
              <span className="you-prefixes">
                <span className="you-prefix">Built for</span>
                <span className="you-prefix">Always with</span>
                <span className="you-prefix">Always</span>
              </span>
              <span className="you-word" id="youWord">You</span>
            </span>
          </h2>
          <div className="you-logo" id="youLogo" aria-hidden="true">
            <img className="yl-img" id="ylImg" src="/assets/img/unity-ess-logo.webp?v=4" alt="" />
            <div className="yl-tag" id="ylTag">Energy, when you need it.</div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <header className="hero plain" id="top">
        <div className="hero-inner">
          <div className="eyebrow line-mask"><span>Unity ESS &middot; Battery Energy Storage &middot; India</span></div>
          <h1 className="display">
            <span className="line-mask"><span>Energy, <span className="grad">when you need it.</span></span></span>
          </h1>
          <p className="hero-sub" style={{ marginTop: "1.5rem", maxWidth: "58ch" }}>
            Battery energy storage systems that keep your operations running, your costs down, and your grid independence up.
          </p>
          <div className="hero-cta">
            <a href="/contact" className="btn" data-hot><span>Enquire about your project</span></a>
            <a href="/products" className="btn ghost" data-hot><span>Explore our products</span></a>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="stats">
        <div className="stats-inner">
          <div className="stat reveal">
            <div className="num"><span data-count="25" data-suf="yr">0</span></div>
            <div className="lbl">Trust</div>
          </div>
          <div className="stat reveal">
            <div className="num">$<span data-count="500">0</span><b>mn</b></div>
            <div className="lbl">Cumulative Turnover</div>
          </div>
          <div className="stat reveal">
            <div className="num"><span data-count="8.5" data-dec="1" data-suf="+ GWh">0</span></div>
            <div className="lbl">Production Capacity</div>
          </div>
          <div className="stat reveal">
            <div className="num"><span data-count="2.1" data-dec="1" data-suf="GW">0</span></div>
            <div className="lbl">Deployed Across India</div>
          </div>
        </div>
      </section>

      {/* IMAGE EXPANSION — frame grows to fullscreen on scroll */}
      <section className="xpand" id="xpand">
        <div className="xpand-stage">
          <div className="xpand-surround" id="xpandSurround" aria-hidden="true">
            <div className="xs-marks"><i></i><i></i><i></i><i></i></div>
            <div className="xs-meta xs-meta-l">UNITY cabinets · commissioned on-site</div>
            <div className="xs-meta xs-meta-r">Thar Desert · Rajasthan · 18:42 IST</div>
          </div>
          <figure className="xpand-frame" id="xpandFrame">
            <video id="xpandImg" autoPlay muted loop playsInline preload="auto">
              <source src="/assets/unity-ess-brand-loop.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
      </section>

      {/* THE COLLECTION */}
      <section className="pad" id="collection">
        <div className="wrap">
          <div className="prod-head">
            <div className="sec-head">
              <div className="eyebrow fade">The Collection</div>
              <h2 className="h2"><span className="line-mask"><span>Three systems. One family.</span></span></h2>
            </div>
            <a href="/contact" className="btn ghost reveal" data-hot><span>Not sure which? Ask us</span></a>
          </div>
          <div className="prod-grid g4">
            <a className="card reveal" href="/aura" data-hot>
              <div className="media"><img src="/assets/img/aura.webp?v=4" alt="Unity Aura commercial cabinet" /></div>
              <div className="body">
                <div className="tag">100 kWh – 225 kWh</div>
                <div className="cap">A standardized outdoor cabinet integrating long-life battery cells, advanced BMS, high-performance PCS, intelligent cooling and active fire protection.</div>
                <span className="go">
                  Discover Aura
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
                </span>
              </div>
            </a>
            <a className="card reveal" href="/aqua" data-hot>
              <div className="media"><img src="/assets/img/aqua.webp?v=4" alt="Unity Aqua hybrid solar, grid and storage platform" /></div>
              <div className="body">
                <div className="tag">250 kWh – 2500 kWh</div>
                <div className="cap">Optimize your operations with an Energy Storage System designed for Open Access Applications. It stores low cost renewable energy for utilization and delivers reliable power.</div>
                <span className="go">
                  Discover Aqua
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
                </span>
              </div>
            </a>
            <a className="card reveal" href="/ultima" data-hot>
              <div className="media"><img src="/assets/img/unity-ultima-containerised-utility-system.webp?v=3" alt="Unity Ultima containerised utility system" /></div>
              <div className="body">
                <div className="tag">3.00 MWh – 6.60 MWh</div>
                <div className="cap">An integrated containerized Energy Storage System combining batteries, PCS, thermal management, fire protection and advanced energy management for safe and reliable operation.</div>
                <span className="go">
                  Discover Ultima
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* APPLICATIONS — horizontal scroll */}
      <section className="pad hsec" id="applications" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <div className="eyebrow fade">Applications</div>
          <h2 className="h2"><span className="line-mask"><span>Built for the operations</span></span><span className="line-mask"><span>that cannot afford to stop.</span></span></h2>
        </div>
        <div className="htrack" id="htrack">
          <a className="hcard" href="/applications/industrial" data-hot>
            <div className="hbg"><img src="/assets/img/solar-energy-for-manufacturing-plants.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">01</div><h4> Industrial</h4><p>Peak load shifting, demand charge reduction, backup for production lines. </p></div>
          </a>
          <a className="hcard" href="/applications/hospitals" data-hot>
            <div className="hbg"><img src="/assets/img/solar-energy-for-hospitals-backup.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">02</div><h4> Hospitals </h4><p>Instant switchover, continuous power, surgical suite backup. The grid that never goes dark.</p></div>
          </a>
          <a className="hcard" href="/applications/utility-grid" data-hot>
            <div className="hbg"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">03</div><h4>Utility Grid Operators</h4><p>Frequency regulation, voltage support, renewable smoothing. Grid stability at scale.</p></div>
          </a>
          <a className="hcard" href="/applications/solar-hybrid" data-hot>
            <div className="hbg"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">04</div><h4>Solar + Storage Hybrid</h4><p>Capture excess generation, dispatch on demand. </p></div>
          </a>
          <a className="hcard" href="/applications/data-centres" data-hot>
            <div className="hbg"><img src="/assets/img/solar-energy-for-data-centers.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">05</div><h4>Data Centres</h4><p>Uninterruptible backup, UPS replacement, peak demand management for critical infrastructure.</p></div>
          </a>
          <a className="hcard" href="/applications/agriculture" data-hot>
            <div className="hbg"><img src="/assets/img/solar-energy-for-agriculture-applications.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">06</div><h4>Agriculture </h4><p>Cold storage backup, irrigation power, post-harvest protection.</p></div>
          </a>
        </div>
      </section>

      {/* CTA — full-bleed image */}
      <section className="cta-full" id="contact">
        <div className="cta-media" data-parallax="0.1"><img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" /></div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Contact</span></div>
          <h2 className="h2"><span className="line-mask"><span>Ready to deploy?</span></span><span className="line-mask"><span className="grad">Tell us about your project.</span></span></h2>
          <div className="reveal" style={{ marginTop: "2.2rem" }}>
            <a href="/contact" className="btn" data-hot><span>Begin the conversation</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
