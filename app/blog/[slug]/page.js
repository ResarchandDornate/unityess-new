import { notFound } from "next/navigation";
import "../kc.css";
import { getAllPosts, getPostBySlug } from "../blogPosts";
import KcFonts from "../KcFonts";
import SidebarLeadForm from "../SidebarLeadForm";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.keyword, "unityess", "bess"],
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

function ArticleBlock({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="kc-figure">
          <img src={block.src} alt={block.alt} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case "p":
    default:
      return block.html ? (
        <p dangerouslySetInnerHTML={{ __html: block.html }} />
      ) : (
        <p>{block.text}</p>
      );
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="kc">
      <KcFonts />

      <main className="wrap kc-article">
        <div className="kc-breadcrumb">
          <a href="/">Home</a> <span className="sep">/</span> <a href="/blog">Blog</a> <span className="sep">/</span> {post.category}
        </div>

        <div className="kc-layout">
          <div className="kc-main">
            <div className="kc-post-head">
              {/* the banner graphic already shows the title visually — keep a real,
                  visually-hidden H1 so the page still has a proper heading for
                  accessibility and search engines */}
              <div className="kc-eyebrow kc-sr-only">{post.category}</div>
              <h1 className="kc-sr-only">{post.title}</h1>
              <div className="kc-post-meta">
                <span>{post.dateLabel}</span>
                <span className="dot"></span>
                <span>{post.readTime}</span>
              </div>
            </div>

            {post.bannerImage && (
              <div className="kc-banner">
                <img src={post.bannerImage} alt={post.bannerAlt || post.title} />
              </div>
            )}

            <article className="kc-prose">
              {post.body.map((block, i) => (
                <ArticleBlock block={block} key={i} />
              ))}

              <div className="kc-inline-cta">
                <p>Talk to our engineering team about a BESS-integrated EV charging deployment.</p>
                <a className="kc-btn" href="/contact" data-hot>Contact Engineering</a>
              </div>
            </article>

            <div className="kc-back">
              <a href="/blog" data-hot>&larr; Back to all articles</a>
            </div>
          </div>

          <aside className="kc-sidebar">
            <SidebarLeadForm />
            {post.sidebarAds?.length > 0 && (
              <div className="kc-ad-list">
                {post.sidebarAds.map((ad, i) => (
                  <a className="kc-ad" href={ad.href} key={i} data-hot>
                    <img src={ad.src} alt={ad.alt} />
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
