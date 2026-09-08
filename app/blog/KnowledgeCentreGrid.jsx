"use client";
import { useState } from "react";

// Fixed taxonomy the site organizes posts under — kept stable regardless of
// which categories happen to have a published post yet, so the filter bar
// reflects the site's content plan, not just today's post count.
const CATEGORIES = ["All Posts", "Industry Insights", "Case Studies", "Product Updates", "Company News"];

export default function KnowledgeCentreGrid({ posts }) {
  const [active, setActive] = useState("All Posts");

  const visible = active === "All Posts" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="kc-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`kc-filter-tab${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="kc-empty">More articles are on the way — check back soon.</div>
      ) : (
        <div className="kc-grid">
          {visible.map((post) => (
            <a className="kc-card" href={`/blog/${post.slug}`} key={post.slug} data-hot>
              <div className="kc-photo">
                <img src={post.coverImage} alt={post.coverAlt} />
              </div>
              <div className="kc-card-body">
                <div className="kc-card-tag">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="kc-card-meta">{post.readTime} &middot; {post.dateLabel}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
