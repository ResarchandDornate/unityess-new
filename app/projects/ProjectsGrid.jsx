"use client";
import { useState } from "react";
import FlipCard from "./FlipCard";

// Mirrors the original inline filterProjects(category, btn) script: clicking
// a filter button marks it active and shows only cards whose data-category
// matches (or all of them for "all"). Implemented here as React state
// instead of manual classList/style.display manipulation.
const FILTERS = [
  { key: "all", label: "All projects" },
  { key: "commercial", label: "Commercial" },
  { key: "industrial", label: "Industrial" },
  { key: "utility", label: "Utility" },
  { key: "hybrid", label: "Solar hybrid" },
];

export default function ProjectsGrid({ projects }) {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filters-wrap">
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? " active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-wrap">
        <div className="projects-grid" id="projectsGrid">
          {visible.map((project) => (
            <FlipCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
