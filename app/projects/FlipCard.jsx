"use client";
import { useState, Fragment } from "react";

// Mirrors the original inline script's behaviour: hovering the card flips it
// via pure CSS (.card-wrap:hover .card-inner). Clicking the hover-hint arrow
// or the back-close icon additionally toggles a "flipped" class on the
// card-wrap, which the CSS also honours (.card-wrap.flipped .card-inner) so
// the flip persists independent of hover — exactly like the original
// addEventListener/classList.toggle('flipped') logic.
export default function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = (e) => {
    e.stopPropagation();
    setFlipped((f) => !f);
  };

  return (
    <div
      className={`card-wrap${flipped ? " flipped" : ""}`}
      data-category={project.category}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-photo">
            <img src={project.image} alt={project.imageAlt} />
          </div>
          <div className="card-overlay">
            <span className="overlay-tag">{project.tag}</span>
            {project.hasHint && (
              <span className="hover-hint" aria-hidden="true" onClick={toggleFlip}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 1 3.5 7.1" />
                  <polyline points="3 17 3 21 7 21" />
                </svg>
              </span>
            )}
            <div className="overlay-location">{project.overlayLocation}</div>
            <div className="overlay-cap">{project.overlayCap}</div>
          </div>
        </div>
        <div className="card-back">
          <div>
            <div className="back-category">{project.backCategory}</div>
            <div className="back-location">
              {project.backLocationLines.map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < project.backLocationLines.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
            <div className="back-product">{project.backProduct}</div>
            <div className="back-desc">{project.backDesc}</div>
          </div>
          <div>
            <div className="back-specs">
              {project.specs.map((spec, i) => (
                <div className="spec-row" key={i}>
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-val">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="back-footer">{project.backFooter}</div>
          </div>
          <span className="back-close" aria-hidden="true" onClick={toggleFlip}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
