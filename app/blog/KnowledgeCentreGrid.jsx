"use client";
import { useMemo, useState } from "react";

export default function KnowledgeCentreGrid({ posts }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  if (posts.length === 0) {
    return (
      <div className="kc-empty">More articles are on the way — check back soon.</div>
    );
  }

  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="kc-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`kc-filter-tab${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat === "All" ? "All Posts" : cat}
          </button>
        ))}
      </div>

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
    </>
  );
}
