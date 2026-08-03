
export default function ApplicationsPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14">
          <img src="/assets/img/unityess-containers-in-farmland-solar-field.webp" alt="UnityESS containers in a farmland solar field" />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Applications</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Energy storage for every load that matters</span></span>
            <span className="line-mask"><span className="grad">challenge.</span></span>
          </h1>
        </div>
      </header>

      {/* ENERGY MANAGEMENT */}
      <section className="pad" id="energy">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div className="eyebrow center fade">Energy Management</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Optimize grid performance</span></span><span className="line-mask"><span className="grad">and reduce costs.</span></span></h2>
          </div>
          <div className="found-grid">
            <div className="tcard reveal">
              <div className="tmark">Peak Shaving &amp; Load Shifting</div>
              <p>Demand management and bill optimization across the full demand cycle.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">Solar &amp; Renewable Integration</div>
              <p>Renewable integration and seamless deployment, from facility to plant.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">Peak &amp; Valley Price Arbitrage</div>
              <p>Automated dispatch and rate arbitrage &mdash; charge low, discharge high.</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">Grid Frequency Regulation</div>
              <p>Voltage support, grid stability, and ancillary services at grid scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR THE OPERATIONS — static 3x2 grid */}
      <section className="pad" id="built-for">
        <div className="wrap" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <div className="eyebrow fade">Applications</div>
          <h2 className="h2"><span className="line-mask"><span>Built for the operations</span></span><span className="line-mask"><span>that cannot afford to stop.</span></span></h2>
        </div>
        <div className="app-grid">
          <a className="hcard" href="/applications/industrial" data-hot><div className="hbg"><img src="/assets/img/solar-energy-for-manufacturing-plants.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">01</div><h4> Industrial</h4><p>Peak load shifting, demand charge reduction, backup for production lines. </p></div></a>
          <a className="hcard" href="/applications/hospitals" data-hot><div className="hbg"><img src="/assets/img/solar-energy-for-hospitals-backup.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">02</div><h4> Hospitals </h4><p>Instant switchover, continuous power, surgical suite backup. The grid that never goes dark.</p></div></a>
          <a className="hcard" href="/applications/utility-grid" data-hot><div className="hbg"><img src="/assets/img/solar-energy-grid-scale-storage.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">03</div><h4>Utility Grid Operators</h4><p>Frequency regulation, voltage support, renewable smoothing. Grid stability at scale.</p></div></a>
          <a className="hcard" href="/applications/solar-hybrid" data-hot><div className="hbg"><img src="/assets/img/solar-hybrid-energy-storage-system.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">04</div><h4>Solar + Storage Hybrid</h4><p>Capture excess generation, dispatch on demand. </p></div></a>
          <a className="hcard" href="/applications/data-centres" data-hot><div className="hbg"><img src="/assets/img/solar-energy-for-data-centers.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">05</div><h4>Data Centres</h4><p>Uninterruptible backup, UPS replacement, peak demand management for critical infrastructure.</p></div></a>
          <a className="hcard" href="/applications/agriculture" data-hot><div className="hbg"><img src="/assets/img/solar-energy-for-agriculture-applications.webp" alt="" /></div>
            <div className="hcard-body"><div className="idx">06</div><h4>Agriculture </h4><p>Cold storage backup, irrigation power, post-harvest protection.
              </p></div></a>
        </div>
      </section>

      {/* HOW ENERGY STORAGE SOLUTION WORKS — ported 1:1 from unityess.ai/process */}
      <section className="pad hiw2-section" style={{ paddingTop: 0 }}>
        <div className="wrap hiw2-wrap">
          <div className="center-head">
            <div className="eyebrow center fade">How It Works</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>How energy storage</span></span><span className="line-mask"><span className="grad">solution works.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.4rem", maxWidth: "52ch", marginInline: "auto" }}>From grid-connected commercial systems to solar-integrated and EV charging solutions.</p>
          </div>

          <div className="hiw2-stack">

            {/* Commercial & Industrial BESS */}
            <div className="hiw2-card reveal">
              <div className="hiw2-text">
                <h3>Commercial &amp; Industrial BESS</h3>
                <p>Store excess energy and cut costs in factories and offices by shifting energy use during high-demand periods. Our intelligent energy management system provides real-time monitoring and automated load balancing.</p>
              </div>
              <div className="hiw2-diagram">
                <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><filter id="glow1"><feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur><feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><linearGradient id="gridBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#005f6b" stopOpacity="0.08"></stop><stop offset="100%" stopColor="#005f6b" stopOpacity="0.02"></stop></linearGradient></defs><rect x="15" y="40" width="100" height="80" rx="12" fill="url(#gridBg)" stroke="#005f6b" strokeWidth="1.5"></rect><path d="M60 55 L55 72 L62 72 L57 90" stroke="#005f6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path><circle cx="58" cy="72" r="18" fill="#005f6b" fillOpacity="0.06"></circle><text x="65" y="108" textAnchor="middle" fill="#005f6b" fontSize="10" fontWeight="700">GRID</text><line x1="115" y1="80" x2="155" y2="80" stroke="#005f6b" strokeWidth="2" strokeDasharray="6,4" strokeOpacity="0.3"></line><polygon points="152,75 160,80 152,85" fill="#005f6b" fillOpacity="0.5"></polygon><circle r="4" fill="#005f6b" filter="url(#glow1)"><animate attributeName="cx" values="115;155" dur="1.5s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="translate" values="0,80;0,80" dur="1.5s" repeatCount="indefinite"></animateTransform></circle><circle cx="115" cy="80" r="4" fill="#005f6b" filter="url(#glow1)"><animate attributeName="cx" values="115;155" dur="1.5s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"></animate></circle><rect x="160" y="25" width="100" height="110" rx="14" fill="#005f6b" fillOpacity="0.06" stroke="#005f6b" strokeWidth="2"></rect><rect x="178" y="42" width="64" height="16" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.8"></rect><rect x="181" y="45" width="40" height="10" rx="3" fill="#005f6b" fillOpacity="0.35"><animate attributeName="width" values="25;55;25" dur="3s" repeatCount="indefinite"></animate></rect><rect x="178" y="64" width="64" height="16" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.8"></rect><rect x="181" y="67" width="35" height="10" rx="3" fill="#005f6b" fillOpacity="0.3"><animate attributeName="width" values="20;50;20" dur="3.5s" repeatCount="indefinite"></animate></rect><rect x="178" y="86" width="64" height="16" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.8"></rect><rect x="181" y="89" width="50" height="10" rx="3" fill="#005f6b" fillOpacity="0.4"><animate attributeName="width" values="30;58;30" dur="2.5s" repeatCount="indefinite"></animate></rect><text x="210" y="120" textAnchor="middle" fill="#005f6b" fontSize="11" fontWeight="800">BESS</text><line x1="260" y1="80" x2="300" y2="80" stroke="#005f6b" strokeWidth="2" strokeDasharray="6,4" strokeOpacity="0.3"></line><polygon points="297,75 305,80 297,85" fill="#005f6b" fillOpacity="0.5"></polygon><circle cx="260" cy="80" r="4" fill="#005f6b" filter="url(#glow1)"><animate attributeName="cx" values="260;300" dur="1.5s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"></animate></circle><rect x="305" y="40" width="100" height="80" rx="12" fill="#f0f4f8" stroke="#374151" strokeWidth="1.5"></rect><rect x="330" y="58" width="18" height="22" rx="2" fill="#374151" fillOpacity="0.15" stroke="#374151" strokeWidth="0.8"></rect><rect x="352" y="65" width="14" height="15" rx="2" fill="#374151" fillOpacity="0.1" stroke="#374151" strokeWidth="0.8"></rect><rect x="335" y="63" width="4" height="5" rx="1" fill="#374151" fillOpacity="0.25"></rect><rect x="341" y="63" width="4" height="5" rx="1" fill="#374151" fillOpacity="0.25"></rect><text x="355" y="100" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="700">FACTORY</text><line x1="210" y1="135" x2="210" y2="165" stroke="#005f6b" strokeWidth="1.5" strokeDasharray="4,4" strokeOpacity="0.25"></line><circle cx="210" cy="135" r="3" fill="#005f6b" fillOpacity="0.5"><animate attributeName="cy" values="135;165" dur="2s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"></animate></circle><rect x="130" y="165" width="160" height="45" rx="10" fill="#f8f9fa" stroke="#e2e5ea" strokeWidth="1.5"></rect><text x="210" y="186" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Energy Management System</text><text x="210" y="200" textAnchor="middle" fill="#9ca3af" fontSize="7">Real-time monitoring &amp; control</text></svg>
              </div>
            </div>

            {/* Solar Integration */}
            <div className="hiw2-card reverse reveal">
              <div className="hiw2-text">
                <h3>Solar Integration</h3>
                <p>Maximize solar self-consumption and reduce curtailment by integrating BESS into existing photovoltaic systems. Seamless DC-to-AC conversion with smart inverter technology ensures optimal energy utilization.</p>
              </div>
              <div className="hiw2-diagram">
                <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F59E0B"></stop><stop offset="100%" stopColor="#D97706"></stop></linearGradient><filter id="glow2"><feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur><feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><circle cx="55" cy="55" r="30" fill="#F59E0B" fillOpacity="0.08"></circle><circle cx="55" cy="55" r="18" fill="#F59E0B" fillOpacity="0.15"><animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite"></animate></circle><circle cx="55" cy="55" r="10" fill="#F59E0B" fillOpacity="0.5"></circle><line x1="77" y1="55" x2="85" y2="55" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="70.55634918610404" y1="70.55634918610404" x2="76.21320343559643" y2="76.21320343559643" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="55" y1="77" x2="55" y2="85" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="39.44365081389596" y1="70.55634918610404" x2="33.78679656440357" y2="76.21320343559643" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="33" y1="55" x2="25" y2="55.00000000000001" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="39.44365081389595" y1="39.44365081389596" x2="33.78679656440357" y2="33.78679656440357" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="54.99999999999999" y1="33" x2="54.99999999999999" y2="25" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><line x1="70.55634918610404" y1="39.44365081389595" x2="76.21320343559643" y2="33.78679656440357" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"></line><text x="55" y="98" textAnchor="middle" fill="#D97706" fontSize="9" fontWeight="700">SOLAR</text><line x1="88" y1="55" x2="128" y2="55" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.4"></line><polygon points="125,50 133,55 125,60" fill="#F59E0B" fillOpacity="0.6"></polygon><circle cx="88" cy="55" r="4" fill="#F59E0B" filter="url(#glow2)"><animate attributeName="cx" values="88;128" dur="1.2s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"></animate></circle><rect x="133" y="28" width="72" height="55" rx="6" fill="#1e3a5f" fillOpacity="0.06" stroke="#005f6b" strokeWidth="1.5"></rect><line x1="133" y1="46" x2="205" y2="46" stroke="#005f6b" strokeWidth="0.6" strokeOpacity="0.25"></line><line x1="133" y1="64" x2="205" y2="64" stroke="#005f6b" strokeWidth="0.6" strokeOpacity="0.25"></line><line x1="157" y1="28" x2="157" y2="83" stroke="#005f6b" strokeWidth="0.6" strokeOpacity="0.25"></line><line x1="181" y1="28" x2="181" y2="83" stroke="#005f6b" strokeWidth="0.6" strokeOpacity="0.25"></line><text x="169" y="98" textAnchor="middle" fill="#005f6b" fontSize="9" fontWeight="700">PV ARRAY</text><line x1="205" y1="55" x2="240" y2="55" stroke="#005f6b" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.3"></line><polygon points="237,50 245,55 237,60" fill="#005f6b" fillOpacity="0.5"></polygon><circle cx="205" cy="55" r="3.5" fill="#005f6b" filter="url(#glow2)"><animate attributeName="cx" values="205;240" dur="1.3s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite"></animate></circle><rect x="245" y="32" width="55" height="46" rx="8" fill="#f0f4f8" stroke="#005f6b" strokeWidth="1.5"></rect><text x="272" y="54" textAnchor="middle" fill="#005f6b" fontSize="9" fontWeight="800">INV</text><text x="272" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">DC → AC</text><line x1="300" y1="55" x2="335" y2="55" stroke="#005f6b" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.3"></line><polygon points="332,50 340,55 332,60" fill="#005f6b" fillOpacity="0.5"></polygon><circle cx="300" cy="55" r="3.5" fill="#005f6b" filter="url(#glow2)"><animate attributeName="cx" values="300;335" dur="1.4s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite"></animate></circle><rect x="340" y="20" width="70" height="75" rx="12" fill="#005f6b" fillOpacity="0.06" stroke="#005f6b" strokeWidth="2"></rect><rect x="354" y="34" width="42" height="12" rx="3" fill="#005f6b" fillOpacity="0.12" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="357" y="37" width="28" height="6" rx="2" fill="#005f6b" fillOpacity="0.35"><animate attributeName="width" values="15;36;15" dur="2.5s" repeatCount="indefinite"></animate></rect><rect x="354" y="50" width="42" height="12" rx="3" fill="#005f6b" fillOpacity="0.12" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="357" y="53" width="22" height="6" rx="2" fill="#005f6b" fillOpacity="0.3"><animate attributeName="width" values="12;36;12" dur="3s" repeatCount="indefinite"></animate></rect><rect x="354" y="66" width="42" height="12" rx="3" fill="#005f6b" fillOpacity="0.12" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="357" y="69" width="32" height="6" rx="2" fill="#005f6b" fillOpacity="0.4"><animate attributeName="width" values="18;36;18" dur="2s" repeatCount="indefinite"></animate></rect><text x="375" y="110" textAnchor="middle" fill="#005f6b" fontSize="10" fontWeight="800">BESS</text><line x1="272" y1="78" x2="272" y2="105" stroke="#005f6b" strokeWidth="1.5" strokeOpacity="0.25"></line><line x1="272" y1="105" x2="210" y2="105" stroke="#005f6b" strokeWidth="1.5" strokeOpacity="0.25"></line><line x1="210" y1="105" x2="210" y2="140" stroke="#005f6b" strokeWidth="1.5" strokeDasharray="4,4" strokeOpacity="0.3"></line><polygon points="205,137 210,145 215,137" fill="#005f6b" fillOpacity="0.5"></polygon><circle cx="210" cy="105" r="3" fill="#005f6b"><animate attributeName="cy" values="105;140" dur="1.8s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.8s" repeatCount="indefinite"></animate></circle><rect x="140" y="145" width="140" height="55" rx="10" fill="#f8f9fa" stroke="#e2e5ea" strokeWidth="1.5"></rect><rect x="195" y="157" width="18" height="20" rx="2" fill="#374151" fillOpacity="0.12" stroke="#374151" strokeWidth="0.8"></rect><rect x="199" y="161" width="4" height="4" rx="1" fill="#374151" fillOpacity="0.2"></rect><rect x="205" y="161" width="4" height="4" rx="1" fill="#374151" fillOpacity="0.2"></rect><text x="210" y="190" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Building Load</text></svg>
              </div>
            </div>

            {/* EV Charging Systems */}
            <div className="hiw2-card reveal">
              <div className="hiw2-text">
                <h3>EV Charging Systems</h3>
                <p>Support EV charging networks by efficiently storing clean energy, reducing peak loads, and enhancing power quality. Smart load controllers manage peak shaving and demand response automatically.</p>
              </div>
              <div className="hiw2-diagram">
                <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="evGrad" gradientUnits="userSpaceOnUse" x1="250" y1="90" x2="290" y2="90"><stop offset="0%" stopColor="#005f6b"></stop><stop offset="100%" stopColor="#10B981"></stop></linearGradient><filter id="glow3"><feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur><feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><rect x="15" y="20" width="85" height="60" rx="10" fill="#F59E0B" fillOpacity="0.06" stroke="#F59E0B" strokeWidth="1.5"></rect><circle cx="57" cy="42" r="12" fill="#F59E0B" fillOpacity="0.15"><animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite"></animate></circle><circle cx="57" cy="42" r="6" fill="#F59E0B" fillOpacity="0.4"></circle><text x="57" y="70" textAnchor="middle" fill="#D97706" fontSize="9" fontWeight="700">SOLAR</text><rect x="15" y="100" width="85" height="60" rx="10" fill="#f0f4f8" stroke="#374151" strokeWidth="1.5"></rect><path d="M52 115 L48 130 L55 130 L50 145" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path><text x="57" y="152" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">GRID</text><line x1="100" y1="50" x2="155" y2="80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,4" strokeOpacity="0.4"></line><polygon points="147,75 155,80 147,85" fill="#F59E0B" fillOpacity="0.5" transform="rotate(28.6 155 80)"></polygon><circle cx="100" cy="50" r="4" fill="#F59E0B" filter="url(#glow3)"><animate attributeName="cx" values="100;155" dur="1.5s" repeatCount="indefinite"></animate><animate attributeName="cy" values="50;80" dur="1.5s" repeatCount="indefinite"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"></animate></animate></circle><line x1="100" y1="130" x2="155" y2="100" stroke="#374151" strokeWidth="1.5" strokeDasharray="5,4" strokeOpacity="0.3"></line><polygon points="147,95 155,100 147,105" fill="#374151" fillOpacity="0.4" transform="rotate(-28.6 155 100)"></polygon><circle cx="100" cy="130" r="3" fill="#374151"><animate attributeName="cx" values="100;155" dur="1.8s" repeatCount="indefinite"></animate><animate attributeName="cy" values="130;100" dur="1.8s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"></animate></circle><rect x="160" y="35" width="90" height="110" rx="14" fill="#005f6b" fillOpacity="0.06" stroke="#005f6b" strokeWidth="2"></rect><g><rect x="176" y="48" width="58" height="14" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="179" y="51" width="35" height="8" rx="3" fill="#005f6b" fillOpacity="0.3"><animate attributeName="width" values="18;48;18" dur="2.2s" repeatCount="indefinite"></animate></rect></g><g><rect x="176" y="68" width="58" height="14" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="179" y="71" width="35" height="8" rx="3" fill="#005f6b" fillOpacity="0.3"><animate attributeName="width" values="23;46;23" dur="2.6s" repeatCount="indefinite"></animate></rect></g><g><rect x="176" y="88" width="58" height="14" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="179" y="91" width="35" height="8" rx="3" fill="#005f6b" fillOpacity="0.3"><animate attributeName="width" values="28;44;28" dur="3s" repeatCount="indefinite"></animate></rect></g><g><rect x="176" y="108" width="58" height="14" rx="4" fill="#005f6b" fillOpacity="0.1" stroke="#005f6b" strokeWidth="0.6"></rect><rect x="179" y="111" width="35" height="8" rx="3" fill="#005f6b" fillOpacity="0.3"><animate attributeName="width" values="33;42;33" dur="3.4000000000000004s" repeatCount="indefinite"></animate></rect></g><text x="205" y="140" textAnchor="middle" fill="#005f6b" fontSize="11" fontWeight="800">BESS</text><line x1="250" y1="90" x2="290" y2="90" stroke="url(#evGrad)" strokeWidth="2.5" strokeDasharray="6,4" strokeOpacity="0.4"></line><polygon points="287,84 295,90 287,96" fill="#10B981" fillOpacity="0.6"></polygon><circle cx="250" cy="90" r="4" fill="#005f6b" filter="url(#glow3)"><animate attributeName="cx" values="250;290" dur="1.2s" repeatCount="indefinite"></animate><animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"></animate></circle><rect x="295" y="20" width="110" height="145" rx="14" fill="#10B981" fillOpacity="0.04" stroke="#10B981" strokeWidth="1.5"></rect><text x="350" y="42" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="800">EV CHARGING</text><g><rect x="308" y="52" width="84" height="28" rx="8" fill="#10B981" fillOpacity="0.06" stroke="#10B981" strokeWidth="1"></rect><rect x="316" y="59" width="22" height="12" rx="4" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="0.6"></rect><circle cx="321" cy="74" r="2.5" fill="#10B981" fillOpacity="0.2"></circle><circle cx="333" cy="74" r="2.5" fill="#10B981" fillOpacity="0.2"></circle><text x="365" y="69" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="600">EV #1</text><circle cx="321" cy="65" r="5" fill="#10B981" fillOpacity="0.1"><animate attributeName="r" values="5;10;5" dur="1.5s" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" values="0.1;0;0.1" dur="1.5s" repeatCount="indefinite"></animate></circle></g><g><rect x="308" y="87" width="84" height="28" rx="8" fill="#10B981" fillOpacity="0.06" stroke="#10B981" strokeWidth="1"></rect><rect x="316" y="94" width="22" height="12" rx="4" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="0.6"></rect><circle cx="321" cy="109" r="2.5" fill="#10B981" fillOpacity="0.2"></circle><circle cx="333" cy="109" r="2.5" fill="#10B981" fillOpacity="0.2"></circle><text x="365" y="104" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="600">EV #2</text><circle cx="321" cy="100" r="5" fill="#10B981" fillOpacity="0.1"><animate attributeName="r" values="5;10;5" dur="1.8s" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" values="0.1;0;0.1" dur="1.8s" repeatCount="indefinite"></animate></circle></g><g><rect x="308" y="122" width="84" height="28" rx="8" fill="#10B981" fillOpacity="0.06" stroke="#10B981" strokeWidth="1"></rect><rect x="316" y="129" width="22" height="12" rx="4" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="0.6"></rect><circle cx="321" cy="144" r="2.5" fill="#10B981" fillOpacity="0.2"></circle><circle cx="333" cy="144" r="2.5" fill="#10B981" fillOpacity="0.2"></circle><text x="365" y="139" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="600">EV #3</text><circle cx="321" cy="135" r="5" fill="#10B981" fillOpacity="0.1"><animate attributeName="r" values="5;10;5" dur="2.1s" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" values="0.1;0;0.1" dur="2.1s" repeatCount="indefinite"></animate></circle></g><rect x="135" y="170" width="170" height="42" rx="10" fill="#f8f9fa" stroke="#e2e5ea" strokeWidth="1.5"></rect><text x="220" y="190" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Smart Load Controller</text><text x="220" y="203" textAnchor="middle" fill="#9ca3af" fontSize="7">Peak shaving &amp; demand response</text><line x1="205" y1="145" x2="220" y2="170" stroke="#005f6b" strokeWidth="1" strokeDasharray="4,4" strokeOpacity="0.2"></line></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK RECOMMENDATIONS */}
      <section className="pad" id="recommend" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="eyebrow center fade">Quick recommendations</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Not sure where to start?</span></span><span className="line-mask"><span className="grad">Match your challenge to a system.</span></span></h2>
            <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "52ch", marginInline: "auto" }}>A fast-reference view of every application on this page and the system built for it &mdash; for when you already know your use case and just want the answer.</p>
          </div>
          <div className="glass-panel reveal">
            <div className="compare-scroll">
              <table className="compare">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Recommended system</th>
                    <th>Capacity</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>Peak Shaving &amp; Load Shifting</th><td>Aura / Aqua</td><td>100&ndash;300 kWh</td><td>125 kW output sized for factory and building-scale demand cycles</td></tr>
                  <tr><th>Solar &amp; Renewable Integration</th><td>Aura / Ultima / Aqua</td><td>100&ndash;6250 kWh</td><td>Depends on whether the site is a single facility or a utility-scale plant</td></tr>
                  <tr><th>Peak &amp; Valley Price Arbitrage</th><td>Aura / Ultima / Aqua</td><td>100&ndash;6250 kWh</td><td>Bidirectional PCS enables charge-low, discharge-high dispatch</td></tr>
                  <tr><th>Grid Frequency Regulation</th><td>Ultima</td><td>3000&ndash;6250 kWh</td><td>Integrated PCS-BMS-EMS built for ramp-rate control at grid scale</td></tr>
                  <tr><th>Hospitals &amp; Healthcare</th><td>Aura / Aqua</td><td>100&ndash;3000 kWh</td><td>Aura for the facility, Reserve for critical-room-level backup</td></tr>
                  <tr><th>Data Centers</th><td>Aura</td><td>100&ndash;6250 kWh</td><td>&gt;94% round-trip efficiency and &lt;20ms switchover for load continuity</td></tr>
                  <tr><th>Factories &amp; Manufacturing</th><td>Aura / Aqua</td><td>100&ndash;3000 kWh</td><td>Outdoor-rated, IP54 enclosure built for industrial environments</td></tr>
                  <tr><th>Commercial Buildings</th><td>Aura</td><td>100&ndash;6250 kWh</td><td>100&ndash;225 kWh range fits most commercial building load profiles</td></tr>
                  <tr><th>EV Charging Infrastructure</th><td>Aura / Ultima</td><td>100&ndash;3000 kWh</td><td>Depends on charging site scale &mdash; depot vs. utility-fed hub</td></tr>
                  <tr><th>Utility-Scale, IPP &amp; EPC</th><td>Ultima</td><td>3000&ndash;6250 kWh</td><td>Containerised, up to 6.60 MWh, built for 20-year asset life</td></tr>
                  <tr><th>Renewable Project Developers</th><td>Ultima</td><td>3000&ndash;6250 kWh</td><td>Utility-scale capacity matched to solar plant output</td></tr>
                  <tr><th>Homes &amp; Clinics</th><td>Aqua</td><td>100&ndash;3000 kWh</td><td>Portable, &le;10 kg, sized for single-room or single-building backup</td></tr>
                  <tr><th>Small Businesses &amp; Retail</th><td>Aqua</td><td>100&ndash;3000 kWh</td><td>Compact footprint, no dedicated electrical infrastructure required</td></tr>
                  <tr><th>CPOs</th><td>Aura</td><td>100&ndash;6250 kWh</td><td>Fast switchable and multi-source combination</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* TALK TO ENGINEERING — CTA */}
      <section className="cta-full" id="talk">
        <div className="cta-media" data-parallax="0.1">
          <img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" />
        </div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>Talk to Engineering</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem", maxWidth: "none", whiteSpace: "nowrap" }}><span className="line-mask"><span>Whatever the challenge, <span className="grad">we&rsquo;ve already solved it.</span></span></span></h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "50ch" }}>Tell us what you&rsquo;re powering, and we&rsquo;ll recommend the system built for it &mdash; proven specifications, not projections.</p>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn" data-hot><span>Talk to Engineering</span></a>
            <a href="/products" className="btn ghost" data-hot><span>View Products</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
