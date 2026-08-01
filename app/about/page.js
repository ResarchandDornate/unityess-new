import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14">
          <img src="/assets/img/unityess-storage-system-beside-a-solar-field.webp?v=2" alt="UnityESS storage system beside a solar field" />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          {/* <Link className="backlink reveal" href="/" data-hot>&larr; Home</Link> */}
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>About</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>We store energy. So the people</span></span>
            <span className="line-mask"><span className="grad">who need it, have it.</span></span>
          </h1>
        </div>
      </header>

      {/* WHO WE ARE */}
      <section className="pad" id="who">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div className="eyebrow center fade">Who we are</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Ornate Solar and Inverted</span></span><span className="line-mask"><span className="grad">Energy, working as one.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "54ch", marginInline: "auto", fontSize: ".875rem" }}>We came together because we kept running into the same wall from different directions. Generation was growing. Storage was lagging. And the companies filling that gap were more interested in winning contracts than in what happened after commissioning. So we built UnityESS to be the kind of company we wanted to work with.</p>
          </div>
          <div className="wire-grid founder-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: "900px", marginInline: "auto" }}>
            <article className="wcard reveal">
              <div className="ep">Solar &amp; EPC</div>
              <h4>Ornate Solar.</h4>
              <p>Ornate Agencies Pvt. Ltd. has been in the business of clean energy since 2015, over a decade before it became the industry everyone wanted to be in. With more than 1 GW of solar deployed across 7,100+ customers and a cumulative turnover exceeding &#8377;2,500 crores, the track record speaks before the pitch does. Their in-house R&amp;D team, recognised by the Department of Science and Industrial Research, developed India&rsquo;s first solar-integrated roofing solution and is now doing the same for grid-tied inverters and energy storage. The state-of-the-art production facility in Ghiloth, NCR is where the next chapter is being built: BESS, PCS, and inverters, made in India.</p>
              <div className="wcard-overlay"><img src="/assets/img/inverted-energy-facility-model.webp" alt="Inverted Energy manufacturing facility" /></div>
            </article>
            <article className="wcard reveal">
              <div className="ep">Battery Manufacturing</div>
              <h4>Inverted Energy.</h4>
              <p>Inverted was founded in 2018 by a group of IIT engineers with a straightforward conviction: that India should design, develop, and manufacture its own lithium-ion batteries, not import them. In nine years, it has become one of India&rsquo;s largest lithium-ion battery manufacturers, with three operational factories, an annual production capacity of 6.5 GWh, and over a million batteries deployed across e-mobility and energy storage. The manufacturing infrastructure spans high-precision assembly, laser welding, and in-house testing labs that put every battery through thermal cycling, vibration analysis, and capacity grading before it leaves the facility. Every cell that goes into a Unity ESS system has been built and validated to that standard.</p>
              <div className="wcard-overlay"><img src="/assets/img/ornate-solar-office-building.webp" alt="Ornate Solar office building" /></div>
            </article>
          </div>
          <p className="lead reveal" style={{ marginTop: "clamp(2rem,4vw,3rem)", maxWidth: "54ch", marginInline: "auto", textAlign: "center" }}>UnityESS is where those two disciplines meet: the judgment of people who&rsquo;ve engineered solar at scale, and the precision of people who build the battery underneath it.</p>
        </div>
      </section>

      {/* THE GAP WE CLOSE */}
      <section className="pad alt" id="gap">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div className="eyebrow center fade">The gap we close</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Solar peaks at noon.</span></span><span className="line-mask"><span className="grad">Demand peaks at seven.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "54ch", marginInline: "auto" }}>Between those two facts sits every hospital, factory, and commercial building we serve. Aura and Ultima exist to close that gap &mdash; charging when the sun is highest, discharging when the grid is under the most strain &mdash; so the timing of generation stops being the thing that decides whether the lights stay on.</p>
          </div>
          <div className="found-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="tcard reveal">
              <div className="tmark">9 Years</div>
              <p>Battery &amp; O&amp;M data behind every specification we publish.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">&lt;20 ms</div>
              <p>Switchover speed &mdash; fast enough that the gap is never felt.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">24/7</div>
              <p>Live monitoring on every deployed system, for the life of the asset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE PROMISE */}
      <section className="pad" id="promise">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div className="eyebrow center fade">What we promise</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Three promises,</span></span><span className="line-mask"><span className="grad">not a slogan.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "52ch", marginInline: "auto" }}>These aren&rsquo;t lines we put on a homepage and forget about. They&rsquo;re the standard every system, every deployment, and every conversation with our engineering team is measured against.</p>
          </div>
          <div className="wire-grid">
            <article className="wcard reveal">
              <div className="ep">Because you matter</div>
              <h4>Always With You.</h4>
              <p>We didn&rsquo;t build UnityESS to win a contract and move on. Every system we deploy is monitored long after commissioning &mdash; because the moment the grid fails is exactly the moment we said we&rsquo;d be there.</p>
            </article>
            <article className="wcard reveal">
              <div className="ep">India&rsquo;s most trusted storage company</div>
              <h4>Proven Before Promised.</h4>
              <p>Every number we put on a spec sheet &mdash; the cycle life, the switchover speed, the uptime &mdash; comes from systems already running, backed by 9 years of battery and O&amp;M data. We don&rsquo;t lead with a promise we haven&rsquo;t already kept somewhere else first.</p>
            </article>
            <article className="wcard reveal">
              <div className="ep">Through energy with intelligence</div>
              <h4>Empowering You.</h4>
              <p>A 3-Tiered BMS and AI-enabled EMS run underneath every system we build &mdash; the same intelligence layer whether it&rsquo;s a single commercial site or a utility-scale asset. Scale changes. The intelligence, and the judgment behind it, doesn&rsquo;t.</p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR INFRASTRUCTURE */}
      <section className="pad alt" id="infrastructure">
        <div className="wrap">
          <div className="feat">
            <div>
              <div className="eyebrow fade">Our Infrastructure</div>
              <h2 className="h2 prodtag" style={{ marginTop: ".9rem" }}>
                <span className="line-mask"><span>Built in Ghiloth,</span></span>
                <span className="line-mask"><span className="grad">Rajasthan.</span></span>
              </h2>
              <p className="lead reveal" style={{ marginTop: "1.2rem" }}>Every system in the collection is manufactured at our facility in Ghiloth, Rajasthan &mdash; a 6-acre site built for the precision Inverted Energy&rsquo;s battery engineering demands, and the scale UnityESS needs to serve hospitals, factories, and utility projects across India.</p>
              <div className="bigstat reveal" style={{ marginTop: "2.2rem" }}>
                <div className="bignum"><span data-count="6.5" data-dec="1" data-suf=" GWh">0</span></div>
                <div className="biglbl">Annual manufacturing capacity</div>
              </div>
              <div className="chips reveal" style={{ marginTop: "1.9rem" }}>
                <span className="chip">6-acre facility footprint</span><span className="chip">Ghiloth, Rajasthan</span>
              </div>
            </div>
            <div className="feat-media"><img data-drift src="/assets/img/unityess-manufacturing-facility-ghiloth-rajasthan.webp" alt="UnityESS manufacturing facility, Ghiloth, Rajasthan" /></div>
          </div>
        </div>
      </section>

      {/* FROM THE FIELD — photo collage */}
      <section className="pad" id="field">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="eyebrow center fade">From the field</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Systems we&rsquo;ve</span></span><span className="line-mask"><span className="grad">put on the ground.</span></span></h2>
          </div>
          <div className="collage">
            <div className="ci big reveal"><img src="/assets/img/unityess-containers-on-a-utility-solar-site.webp" alt="UnityESS containers on a utility solar site" /></div>
            <div className="ci tall reveal"><img src="/assets/img/unityess-cabinet-in-the-desert-at-dusk.webp" alt="UnityESS cabinet in the desert at dusk" /></div>
            <div className="ci wide reveal"><img src="/assets/img/unityess-containers-beside-a-solar-substation.webp" alt="UnityESS containers beside a solar substation" /></div>
            <div className="ci reveal"><img src="/assets/img/unityess-containers-in-a-solar-field.webp" alt="UnityESS containers in a solar field" /></div>
            <div className="ci tall reveal"><img src="/assets/img/unityess-cabinet-on-site-at-sunrise.webp" alt="UnityESS cabinet on site at sunrise" /></div>
            <div className="ci reveal"><img src="/assets/img/row-of-unityess-containers-at-sunset.webp" alt="Row of UnityESS containers at sunset" /></div>
          </div>
        </div>
      </section>

      {/* WHAT WE BRING */}
      <section className="pad" id="bring">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="eyebrow center fade">What we bring</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Years in Indian renewable energy,</span></span><span className="line-mask"><span className="grad">now built into every deployment.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "54ch", marginInline: "auto" }}>Ornate Solar and Inverted Energy each spent years developing solar and energy projects across India before coming together to build UnityESS &mdash; that ground-level experience shapes how every system is engineered, manufactured, and supported.</p>
          </div>
        </div>
      </section>

      {/* START BUILDING — CTA */}
      <section className="cta-full" id="start">
        <div className="cta-media" data-parallax="0.1">
          <img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" />
        </div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Start Building</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem", maxWidth: "42ch" }}><span className="line-mask"><span>Always with you.</span></span><span className="line-mask"><span className="grad" style={{ whiteSpace: "nowrap" }}>From first call to twenty years in.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "50ch" }}>Speak with our engineering team to architect a solution for your specific load profile &mdash; proven specifications, not projections.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn" data-hot><span>Contact Engineering</span></Link>
            <Link href="/products" className="btn ghost" data-hot><span>View Products</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
