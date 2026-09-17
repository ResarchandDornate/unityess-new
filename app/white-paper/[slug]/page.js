import { notFound } from "next/navigation";
import "../whitepaper.css";
import { getAllWhitePapers, getWhitePaperBySlug } from "../whitePapers";
import WhitePaperDownloadForm from "../WhitePaperDownloadForm";

export function generateStaticParams() {
  return getAllWhitePapers().map((wp) => ({ slug: wp.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const wp = getWhitePaperBySlug(slug);
  if (!wp) return {};
  return {
    title: wp.metaTitle,
    description: wp.metaDescription,
    keywords: ["bess white paper", "unityess", "battery energy storage system"],
    alternates: { canonical: `/white-paper/${wp.slug}/` },
  };
}

export default async function WhitePaperDetailPage({ params }) {
  const { slug } = await params;
  const wp = getWhitePaperBySlug(slug);
  if (!wp) notFound();

  return (
    <div className="wp-page">
      <div className="wrap" style={{ marginTop: "clamp(6rem,14vh,8rem)", maxWidth: 1040 }}>
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/white-paper">White Papers</a> / {wp.shortTitle || wp.title}
        </div>

        <section className="wp-hero-detail">
          <div>
            <div className="eyebrow">{wp.category} Whitepaper</div>
            <h1>{wp.title}</h1>
            <div className="wp-author">By {wp.author}</div>
            <p className="wp-subtitle">{wp.subtitle}</p>
            <div className="detail-cta">
              <a className="btn" href="#download" data-hot>
                <span>Sign Up for Free Download</span>
              </a>
            </div>
          </div>
          <div>
            <div className="wp-thumb-tag">UnityESS Whitepaper</div>
            <div className="wp-thumb">
              <img src={wp.coverImage} alt={wp.coverAlt} />
            </div>
          </div>
        </section>

        <section className="block">
          <div className="num-mark">What&rsquo;s Inside</div>
          <h2>What&rsquo;s Inside This Whitepaper?</h2>
          <div className="wp-inside-media">
            <img src={wp.coverImage} alt={wp.coverAlt} />
          </div>
          {wp.body.map((block, i) => (
            <p key={i} className="lead" style={{ marginTop: "1rem" }}>
              {block.text}
            </p>
          ))}
        </section>
      </div>

      <section className="wp-download" id="download">
        <div className="wrap">
          <div className="eyebrow center"><span>Free Download</span></div>
          <h2 className="h2">Sign up for free download</h2>
          <p>White Paper: {wp.title}</p>
          <WhitePaperDownloadForm title={wp.title} pdfFile={wp.pdfFile} />
        </div>
      </section>

      <div className="wrap" style={{ maxWidth: 1040 }}>
        <div style={{ marginTop: "2rem", paddingTop: "1.6rem", paddingBottom: "3rem", borderTop: "1px solid var(--glass-line)", fontSize: ".85rem" }}>
          <a href="/white-paper" data-hot>&larr; Back to all white papers</a>
        </div>
      </div>
    </div>
  );
}
