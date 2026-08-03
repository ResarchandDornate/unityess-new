import "./how-it-works.css";
import EmsChart from "./EmsChart";

export const metadata = {
  title: "How It Works — Five Stages, One Standard | UnityESS",
  description:
    "Every UnityESS system moves through the same five stages — consultation, engineering, manufacturing, commissioning, and 24/7 monitoring — whether it's a 5 kWh Reserve unit or a 6.60 MWh Ultima container. Proven before promised.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
            <source src="/assets/how-it-works-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>How We Work</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>From design. To deployment.</span></span>
            <span className="line-mask"><span className="grad">To always on.</span></span>
          </h1>
        </div>
      </header>

      {/* THE PROCESS */}
      <section className="pad" id="process">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div className="eyebrow center fade">The Process</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Five stages. One standard,</span></span><span className="line-mask"><span className="grad">start to finish.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "52ch", marginInline: "auto" }}>Every deployment &mdash; Reserve, Aura, or Ultima &mdash; follows the same disciplined path from first conversation to permanent monitoring.</p>
          </div>

          <div className="flow">
            <div className="fstep reveal">
              <div className="fnum">01</div>
              <span className="fkick">Consultation &amp; Load Analysis</span>
              <h3>We study how you actually use power.</h3>
              <p>Our engineering team studies your load profile &mdash; peak demand, outage history, solar generation pattern &mdash; before recommending a system. The right answer depends entirely on how you actually use power, not a generic sizing chart.</p>
            </div>
            <div className="fstep reveal">
              <div className="fnum">02</div>
              <span className="fkick">Custom Engineering &amp; Design</span>
              <h3>The system is configured to your site.</h3>
              <p>We configure the system to your site &mdash; <strong>Aura, Aqua, or Ultima</strong> &mdash; specifying PCS, BMS, and EMS integration, cooling method, and enclosure rating for your environment.</p>
            </div>
            <div className="fstep reveal">
              <div className="fnum">03</div>
              <span className="fkick">Manufacturing</span>
              <h3>Built on 314Ah LFP cells, in India.</h3>
              <p>Every system is built on 314Ah LFP cells with the same 3-Tiered BMS architecture, manufactured at our facility in Ghilot, Alwar district, Rajasthan &mdash; currently at 1+ GWh annual capacity, scaling toward a fully automated 6.5 GWh giga-facility.</p>
            </div>
            <div className="fstep reveal">
              <div className="fnum">04</div>
              <span className="fkick">Installation &amp; Commissioning</span>
              <h3>Proven live, on your site.</h3>
              <p>On-site installation, grid tie-in, and full system testing &mdash; switchover speed, thermal behaviour, and fault isolation are all verified live, on your site, before we call it done.</p>
            </div>
            <div className="fstep reveal">
              <div className="fnum">05</div>
              <span className="fkick">24/7 Monitoring &amp; Support</span>
              <h3>Commissioning isn&rsquo;t the finish line.</h3>
              <p>Every deployed system is watched continuously &mdash; this is where the BMS does its quietest, most important work. More on that below.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE THE SYSTEM — BMS */}
      <section className="pad alt" id="intelligence">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div className="eyebrow center fade">Inside the System</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Built with intelligence</span></span><span className="line-mask"><span className="grad">at every layer.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "54ch", marginInline: "auto" }}>A single BMS architecture runs underneath every system in the collection &mdash; Aura, Aqua, and Ultima alike. Three tiers, working together, so a fault at any level is caught before it becomes a failure.</p>
            <p className="brandline reveal" style={{ textAlign: "center" }}>Empowering you, through energy with intelligence.</p>
          </div>
          <div className="wire-grid">
            <article className="wcard reveal">
              <div className="ep">Tier 1</div>
              <h4>Cell-Level Protection.</h4>
              <p>Every individual 314Ah LFP cell is monitored for voltage and temperature in real time &mdash; the earliest possible point to catch a deviation, before it can propagate to the pack.</p>
            </article>
            <article className="wcard reveal">
              <div className="ep">Tier 2</div>
              <h4>Pack-Level Balancing.</h4>
              <p>Cells are grouped, balanced, and thermally managed as packs &mdash; keeping every module operating within the same tight tolerance, which is what makes 8,000+ cycle life possible.</p>
            </article>
            <article className="wcard reveal">
              <div className="ep">Tier 3</div>
              <h4>System-Level Orchestration.</h4>
              <p>At the top level, the BMS coordinates fault isolation, grid interaction, and the &lt;20ms switchover &mdash; the layer that decides, instantly, when and how the system responds.</p>
            </article>
          </div>
        </div>
      </section>

      {/* UNITY EMS SECTION */}
      <section className="ems-section">

        <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <div className="eyebrow center fade">Unity EMS</div>
          <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>The intelligence layer</span></span><span className="line-mask"><span className="grad">that runs every system.</span></span></h2>
          <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "56ch", marginInline: "auto" }}>The Unity EMS is what separates a battery from a storage system. Real-time dispatch, predictive optimisation, fire safety, and subsystem monitoring &mdash; all in one platform, built by us, running on every system we commission.</p>
        </div>

        {/* DASHBOARD MOCKUP */}
        <div className="ems-dashboard-wrap">

          {/* Top bar */}
          <div className="ems-dashboard-bar">
            <div className="ems-bar-left">
              <div className="ems-live-dot">LIVE</div>
              <div className="ems-gateway">UnityESS BESS <span>On-site gateway</span></div>
            </div>
            <div className="ems-timestamp">Tue, 28 Jul 2026 &nbsp;&middot;&nbsp; 07:47:56 &nbsp;&middot;&nbsp; Calcutta</div>
          </div>

          {/* KPI row */}
          <div className="ems-kpi-row">
            <div className="ems-kpi">
              <div className="ems-kpi-label">Assets online</div>
              <div className="ems-kpi-val green">10 <span style={{ fontSize: "14px", color: "#9ca3af" }}>/ 10</span></div>
            </div>
            <div className="ems-kpi">
              <div className="ems-kpi-label">Alarms</div>
              <div className="ems-kpi-val">0</div>
              <div className="ems-kpi-sub">No active alarms</div>
            </div>
            <div className="ems-kpi">
              <div className="ems-kpi-label">Cycles today</div>
              <div className="ems-kpi-val">0.13</div>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="ems-body">

            {/* Left: today stats */}
            <div className="ems-left">
              <div className="ems-stat-card">
                <div className="ems-stat-label">Today charge</div>
                <div className="ems-stat-val">135 <span className="unit">kWh</span></div>
                <div className="ems-stat-sub">solar-window charging</div>
              </div>
              <div className="ems-stat-card">
                <div className="ems-stat-label">Today discharge</div>
                <div className="ems-stat-val">0 <span className="unit">kWh</span></div>
                <div className="ems-stat-sub">peak-window dispatch</div>
              </div>
              <div className="ems-stat-card">
                <div className="ems-stat-label">Solar today</div>
                <div className="ems-stat-val">69 <span className="unit">kWh</span></div>
                <div className="ems-stat-sub">PV generation</div>
              </div>
              <div className="ems-stat-card">
                <div className="ems-stat-label">Today cost</div>
                <div className="ems-stat-val">&#8377;810</div>
                <div className="ems-stat-sub">est. &#8377;6.00/kWh off-peak</div>
              </div>
              <div className="ems-stat-card ems-savings">
                <div className="ems-stat-label">Today savings</div>
                <div className="ems-stat-val">&#8377;0</div>
                <div className="ems-stat-sub">est. &#8377;11.00/kWh peak</div>
              </div>
            </div>

            {/* Centre: energy graph */}
            <div className="ems-centre">
              <div className="ems-centre-label">Energy &middot; 24-hour profile</div>
              <div className="ems-graph-wrap">
                <EmsChart />
                <div className="graph-legend">
                  <div className="legend-item"><span className="legend-dot" style={{ background: "#f59e0b" }}></span>Solar generation</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: "#00A99D" }}></span>Battery charge</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: "#6366f1" }}></span>Discharge to load</div>
                </div>
              </div>

              {/* Battery live */}
              <div className="battery-live">
                <div className="battery-live-header">
                  <div className="bat-dot"></div>
                  <div className="battery-live-title">Battery &middot; Live</div>
                </div>
                <div className="bat-rows">
                  <div className="bat-row">
                    <span className="bat-row-label">SOC</span>
                    <span className="bat-row-val">52%</span>
                  </div>
                  <div className="soc-bar"><div className="soc-fill"></div></div>
                  <div className="bat-row">
                    <span className="bat-row-label">Status</span>
                    <span className="bat-row-val charging">Charging</span>
                  </div>
                  <div className="bat-row">
                    <span className="bat-row-label">Battery power</span>
                    <span className="bat-row-val">93.5 kW</span>
                  </div>
                  <div className="bat-row">
                    <span className="bat-row-label">State of health</span>
                    <span className="bat-row-val" style={{ color: "#00A99D" }}>97.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: subsystems */}
            <div className="ems-right">
              <div className="fire-card">
                <div className="fire-label">Fire safety</div>
                <div className="fire-status">No fire alarm</div>
                <div className="fire-sub">Smoke: Clear &nbsp;&middot;&nbsp; Panel: Normal</div>
              </div>

              <div className="subsystems-label">Subsystems</div>

              <div className="subsystem-row">
                <div>
                  <div className="sub-name">PCS</div>
                  <div className="sub-status">On-grid &middot; Charging</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
              <div className="subsystem-row">
                <div>
                  <div className="sub-name">BMS</div>
                  <div className="sub-status">3-tier active</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
              <div className="subsystem-row">
                <div>
                  <div className="sub-name">Solar inverter</div>
                  <div className="sub-status">Generating</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
              <div className="subsystem-row">
                <div>
                  <div className="sub-name">Liquid cooling</div>
                  <div className="sub-status">Cell temp 26.5&deg;C</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
              <div className="subsystem-row">
                <div>
                  <div className="sub-name">Fire protection</div>
                  <div className="sub-status">None triggered</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
              <div className="subsystem-row">
                <div>
                  <div className="sub-name">Dehumidifier</div>
                  <div className="sub-status">Idle</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
              <div className="subsystem-row">
                <div>
                  <div className="sub-name">Utility meter</div>
                  <div className="sub-status">Metering active</div>
                </div>
                <span className="online-pill">Online</span>
              </div>
            </div>

          </div>

          {/* Capacity row */}
          <div className="ems-cap-row">
            <div className="ems-cap-cell">
              <div className="ems-cap-label">Installed power</div>
              <div className="ems-cap-val">250 <span className="unit">kW</span></div>
            </div>
            <div className="ems-cap-cell">
              <div className="ems-cap-label">Rated capacity</div>
              <div className="ems-cap-val">502 <span className="unit">kWh</span></div>
            </div>
          </div>

        </div>
        {/* end dashboard */}

        {/* FEATURES GRID */}
        <div className="ems-features">

          <div className="ems-feature">
            <div className="ems-feature-icon">&#9889;</div>
            <div className="ems-feature-title">Real-time dispatch</div>
            <div className="ems-feature-desc">The EMS decides, in real time, whether to charge from solar, import from grid, or dispatch stored energy &mdash; based on your load profile and tariff structure.</div>
          </div>

          <div className="ems-feature">
            <div className="ems-feature-icon">&#128200;</div>
            <div className="ems-feature-title">Predictive optimisation</div>
            <div className="ems-feature-desc">Nine years of battery data inform models that predict degradation, optimise dispatch windows, and extend asset life &mdash; getting more efficient as the system learns your site.</div>
          </div>

          <div className="ems-feature">
            <div className="ems-feature-icon">&#128293;</div>
            <div className="ems-feature-title">Fire &amp; safety monitoring</div>
            <div className="ems-feature-desc">Smoke, panel status, and fire suppression state reported in real time. Alarms surface immediately &mdash; to the site and to our operations centre simultaneously.</div>
          </div>

          <div className="ems-feature">
            <div className="ems-feature-icon">&#127777;&#65039;</div>
            <div className="ems-feature-title">Thermal management</div>
            <div className="ems-feature-desc">Cell temperature tracked at the individual cell level. Cooling systems managed automatically to keep every pack within its operating window, regardless of ambient conditions.</div>
          </div>

          <div className="ems-feature">
            <div className="ems-feature-icon">&#128176;</div>
            <div className="ems-feature-title">Tariff arbitrage</div>
            <div className="ems-feature-desc">Charge during off-peak hours at &#8377;6/kWh. Dispatch during peak hours at &#8377;11/kWh. The EMS manages this cycle automatically &mdash; every day, without manual intervention.</div>
          </div>

          <div className="ems-feature">
            <div className="ems-feature-icon">&#128225;</div>
            <div className="ems-feature-title">Remote access &amp; control</div>
            <div className="ems-feature-desc">Every parameter visible, every subsystem controllable, from anywhere. Our operations centre uses the same interface &mdash; so when something needs attention, we are already looking at it.</div>
          </div>

        </div>

        <a href="https://service.unityess.cloud" className="ems-learn-more">
          Access the Unity EMS portal &rarr;
        </a>

      </section>

      {/* START BUILDING — CTA */}
      <section className="cta-full" id="start">
        <div className="cta-media" data-parallax="0.1"><img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" /></div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Start Building</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem", maxWidth: "42ch" }}><span className="line-mask"><span>Always with you.</span></span><span className="line-mask"><span className="grad" style={{ whiteSpace: "nowrap" }}>From first call to twenty years in.</span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "50ch" }}>Speak with our engineering team to architect a solution for your specific load profile &mdash; proven specifications, not projections.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn" data-hot><span>Contact Engineering</span></a>
            <a href="/products" className="btn ghost" data-hot><span>View Products</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
