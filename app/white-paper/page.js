import "./whitepaper.css";
import { getAllWhitePapers } from "./whitePapers";

export const metadata = {
  title: "White Papers | UnityESS",
  description:
    "Technical white papers on battery energy storage systems from UnityESS — research, system analysis, and industry insights. www.unityess.ai",
  keywords: ["bess white paper", "battery energy storage system", "unityess"],
  alternates: { canonical: "/white-paper/" },
};

export default function WhitePaperIndexPage() {
  const papers = getAllWhitePapers();

  return (
    <div className="wp-page">
      <header className="hero wp-hero" id="top">
        <div className="hero-media" data-parallax="0.14">
          <img src="/assets/img/solar-energy-for-data-centers.webp" alt="Server racks in a data centre" />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask"><span>Resources</span></div>
          <h1 className="display" style={{ marginTop: ".9rem", fontWeight: 700 }}>
            <span className="line-mask"><span>Technical Whitepapers</span></span>
          </h1>
          <p className="hero-sub" style={{ marginTop: "1.2rem", maxWidth: "58ch" }}>
            Explore whitepapers on Battery Energy Storage Systems with technical research, system analysis, and industry insights to support informed energy decisions.
          </p>
        </div>
      </header>

      <section className="pad">
        <div className="wrap">
          <div className="wp-grid">
            {papers.map((wp) => (
              <a className="card reveal" href={`/white-paper/${wp.slug}`} key={wp.slug} data-hot>
                <div className="media"><img src={wp.coverImage} alt={wp.coverAlt} /></div>
                <div className="body">
                  <div className="tag">{wp.category}</div>
                  <div className="name">{wp.title}</div>
                  <div className="wp-byline">By {wp.author}</div>
                  <div className="cap">{wp.excerpt}</div>
                  <span className="go">
                    Download PDF
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h15M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="wp-closing">
        <div className="wrap">
          <div className="eyebrow center"><span>Talk To Engineering</span></div>
          <h2 className="h2">Have a question a white paper doesn&rsquo;t answer?</h2>
          <p>Our engineering team can walk through your specific load profile and system requirements directly.</p>
          <div className="btn-row">
            <a className="btn" href="/contact" data-hot><span>Talk to Engineering</span></a>
            <a className="btn ghost" href="/how-it-works" data-hot><span>How It Works</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
