import "./kc.css";
import { getAllPosts } from "./blogPosts";
import KnowledgeCentreGrid from "./KnowledgeCentreGrid";
import NewsletterForm from "./NewsletterForm";
import KcFonts from "./KcFonts";

export const metadata = {
  title: "Blog | UnityESS",
  description:
    "Insights on battery energy storage, BESS deployments and India's grid — from the engineering team at UnityESS. www.unityess.ai",
  keywords: ["bess blog", "battery energy storage system", "unityess"],
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <header className="hero centered" id="top">
        <div className="hero-media" data-parallax="0.14">
          <img src="/assets/img/Gemini_Generated_Image_5qu4215qu4215qu4.png" alt="UnityESS energy storage containers at a solar and wind site at sunset" />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Knowledge Centre</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Everything you need to know about</span></span>
            <span className="line-mask"><span className="grad">energy storage.</span></span>
          </h1>
        </div>
      </header>

      <div className="kc">
        <KcFonts />

        <main className="wrap">
          {featured && (
            <a className="kc-featured" href={`/blog/${featured.slug}`} data-hot>
              <div className="kc-featured-media">
                <img src={featured.coverImage} alt={featured.coverAlt} />
              </div>
              <div>
                <div className="kc-tag">Featured &middot; {featured.category}</div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="kc-meta">{featured.readTime} &middot; {featured.dateLabel}</div>
              </div>
            </a>
          )}

          <KnowledgeCentreGrid posts={rest} />
        </main>

        <section className="kc-newsletter">
          <div className="kc-newsletter-media">
            <img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="" />
          </div>
          <div className="kc-newsletter-scrim"></div>
          <div className="wrap">
            <div className="kc-eyebrow">Stay Updated</div>
            <h3>Get the next post before anyone else.</h3>
            <p>No spam — just field notes, product updates, and the occasional deep-dive, sent when there&rsquo;s something worth reading.</p>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </>
  );
}
