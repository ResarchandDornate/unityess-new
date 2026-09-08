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
    <div className="kc">
      <KcFonts />

      <main className="wrap">
        <section className="kc-hero">
          <div className="kc-eyebrow">Knowledge Centre</div>
          <h1>Everything you need to know about energy storage.</h1>
          <p className="kc-lede">
            Sizing, safety, uptime, and the questions worth asking before you decide — explained plainly, for anyone evaluating battery energy storage for their site.
          </p>
        </section>

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
        <div className="wrap">
          <div className="kc-eyebrow">Stay Updated</div>
          <h3>Get the next post before anyone else.</h3>
          <p>No spam — just field notes, product updates, and the occasional deep-dive, sent when there&rsquo;s something worth reading.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
