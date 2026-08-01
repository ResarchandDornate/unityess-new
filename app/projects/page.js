import "./projects.css";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";

const projects = [
  {
    id: "coimbatore",
    category: "commercial",
    tag: "Commercial",
    hasHint: true,
    image: "/assets/img/unityess-containers-on-a-utility-solar-site.webp",
    imageAlt: "Coimbatore BESS-integrated EV charging site",
    overlayLocation: "Coimbatore, Tamil Nadu",
    overlayCap: "261 kWh · Unity Aura",
    backCategory: "Commercial · EV Integration",
    backLocationLines: ["Coimbatore,", "Tamil Nadu"],
    backProduct: "261 kWh · Unity Aura",
    backDesc:
      "India’s first BESS-integrated EV charging deployment. The system enables charging during grid outages and supports peak demand, removing the dependency between grid availability and EV uptime.",
    specs: [
      { label: "Capacity", value: "261 kWh" },
      { label: "Application", value: "EV charging + backup" },
      { label: "Chemistry", value: "LFP · 314Ah" },
      { label: "Monitoring", value: "24/7 remote" },
    ],
    backFooter: "Proven Before Promised · Unity ESS",
  },
  {
    id: "bikaner",
    category: "hybrid",
    tag: "Solar Hybrid",
    hasHint: true,
    image: "/assets/img/unityess-cabinet-in-the-desert-at-dusk.webp",
    imageAlt: "Bikaner solar and storage hybrid site",
    overlayLocation: "Bikaner, Rajasthan",
    overlayCap: "4.5 MWh · Unity Ultima",
    backCategory: "Utility · Solar Hybrid",
    backLocationLines: ["Bikaner,", "Rajasthan"],
    backProduct: "4.5 MWh · Unity Ultima",
    backDesc:
      "An integrated solar PV and battery energy storage solution in one of Rajasthan’s most demanding environments. Built for efficient energy management and reliable grid support across a large generation site.",
    specs: [
      { label: "Capacity", value: "4.5 MWh" },
      { label: "Application", value: "Solar + grid support" },
      { label: "Ambient temp", value: "Up to 48°C" },
      { label: "Monitoring", value: "24/7 remote" },
    ],
    backFooter: "Proven Before Promised · Unity ESS",
  },
  {
    id: "phalodi",
    category: "utility",
    tag: "Utility",
    hasHint: true,
    image: "/assets/img/unityess-cabinet-on-site-at-sunrise.webp",
    imageAlt: "Phalodi utility-scale BESS containers",
    overlayLocation: "Phalodi, Rajasthan",
    overlayCap: "35 MWh · Unity Ultima",
    backCategory: "Utility · Grid Scale",
    backLocationLines: ["Phalodi,", "Rajasthan"],
    backProduct: "35 MWh · Unity Ultima",
    backDesc:
      "Seven 5 MWh containerised BESS units commissioned as a single utility-scale deployment. One of our largest projects, built for some of Rajasthan’s most challenging site and weather conditions.",
    specs: [
      { label: "Capacity", value: "35 MWh" },
      { label: "Configuration", value: "7 × 5 MWh units" },
      { label: "Application", value: "Utility grid storage" },
      { label: "Monitoring", value: "24/7 remote" },
    ],
    backFooter: "Proven Before Promised · Unity ESS",
  },
  {
    id: "maharashtra",
    category: "commercial",
    tag: "Commercial",
    hasHint: true,
    image: "/assets/img/unityess-containers-beside-a-solar-substation.webp",
    imageAlt: "Maharashtra solar offset BESS installation",
    overlayLocation: "Maharashtra",
    overlayCap: "3.34 MWh · Unity Aura",
    backCategory: "Commercial · Solar Offset",
    backLocationLines: ["Maharashtra"],
    backProduct: "3.34 MWh · Unity Aura",
    backDesc:
      "Enables businesses to store surplus solar energy during the day and offset high-cost grid electricity during peak tariff hours. The system pays back through tariff arbitrage across the daily cycle.",
    specs: [
      { label: "Capacity", value: "3.34 MWh" },
      { label: "Application", value: "Solar storage + arbitrage" },
      { label: "Chemistry", value: "LFP · 314Ah" },
      { label: "Monitoring", value: "24/7 remote" },
    ],
    backFooter: "Always With You · Unity ESS",
  },
  {
    id: "commissioning",
    category: "utility",
    tag: "Utility",
    hasHint: false,
    image: "/assets/img/row-of-unityess-containers-at-sunset.webp",
    imageAlt: "300-acre utility BESS project under commissioning",
    overlayLocation: "300-acre project",
    overlayCap: "Under commissioning",
    backCategory: "Utility · Under Commissioning",
    backLocationLines: ["300-acre project"],
    backProduct: "Unity Ultima · Large scale",
    backDesc:
      "Our largest project to date. Currently under commissioning. Details and photography will be added once the system goes live and monitoring is confirmed.",
    specs: [
      { label: "Status", value: "Commissioning" },
      { label: "Scale", value: "300 acres" },
      { label: "Monitoring", value: "Live on commissioning" },
    ],
    backFooter: "Proven Before Promised · Unity ESS",
  },
  {
    id: "more-projects",
    category: "industrial",
    tag: "Industrial",
    hasHint: false,
    image: "/assets/img/unityess-containers-in-a-solar-field.webp",
    imageAlt: "UnityESS industrial storage projects across India",
    overlayLocation: "More projects",
    overlayCap: "Across India",
    backCategory: "Industrial",
    backLocationLines: ["Continuously", "expanding"],
    backProduct: "Unity Aqua · Liquid cooled",
    backDesc:
      "We commission new projects continuously. This page is updated as each system goes live. To discuss your project, reach us directly — we respond within 24 hours.",
    specs: [
      { label: "Response time", value: "Within 24 hours" },
      { label: "Coverage", value: "Across India" },
    ],
    backFooter: "Always With You · Unity ESS",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14">
          <img
            src="/assets/img/unityess-bess-substation-at-a-desert-solar-site.webp"
            alt="UnityESS BESS substation at a desert solar site"
          />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}>
            <span>Projects Deployed Across India</span>
          </div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask">
              <span>Every project here is running</span>
            </span>
            <span className="line-mask">
              <span className="grad">24/7 on Unity EMS.</span>
            </span>
          </h1>
        </div>
      </header>

      <section className="stats">
        <div className="stats-inner">
          <div className="stat reveal">
            <div className="num">
              <span data-count="50" data-suf="+">0</span>
            </div>
            <div className="lbl">Projects Commissioned</div>
          </div>
          <div className="stat reveal">
            <div className="num">
              <span data-count="45">0</span> <b>MWh</b>
            </div>
            <div className="lbl">Storage Deployed</div>
          </div>
          <div className="stat reveal">
            <div className="num">
              <span data-count="24" data-suf="/7">0</span>
            </div>
            <div className="lbl">Live Monitoring</div>
          </div>
          <div className="stat reveal">
            <div className="num">
              <span data-count="10" data-suf="+">0</span>
            </div>
            <div className="lbl">States</div>
          </div>
        </div>
      </section>

      <div className="projects-page">
        {/* INTRO */}
        <div className="pad" style={{ paddingBottom: "2.5rem", borderBottom: "1px solid var(--rule)" }}>
          <div className="wrap">
            <p
              className="lead reveal"
              style={{ maxWidth: "60ch", marginInline: "auto", textAlign: "center", fontSize: "16px" }}
            >
              Every project runs 24/7 monitoring from our operations centre. These are the systems we have
              commissioned, the sites we are present on, and the load we are managing.
            </p>
          </div>
        </div>

        {/* FILTERS + GRID (client-managed) */}
        <ProjectsGrid projects={projects} />
      </div>
      {/* /projects-page */}

      {/* TALK TO ENGINEERING — CTA */}
      <section className="cta-full" id="talk">
        <div className="cta-media" data-parallax="0.1">
          <img
            src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2"
            alt="UnityESS storage cabinets on a solar site at sunrise"
          />
        </div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}>
            <span>Start Your Project</span>
          </div>
          <h2 className="h2" style={{ marginTop: "1.2rem", maxWidth: "36ch" }}>
            <span className="line-mask">
              <span>Tell us about</span>
            </span>
            <span className="line-mask">
              <span className="grad">your project.</span>
            </span>
          </h2>
          <p className="hero-sub reveal" style={{ marginInline: "auto", maxWidth: "50ch" }}>
            Our engineering team responds within 24 hours &mdash; proven specifications, not projections.
          </p>
          <div
            className="reveal"
            style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href="mailto:info@ornatesolar.com" className="btn" data-hot>
              <span>Begin the Conversation</span>
            </a>
            <Link href="/products" className="btn ghost" data-hot>
              <span>View Products</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
