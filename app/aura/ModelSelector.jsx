"use client";
import { useState } from "react";

const rows = [
  { load: "25 kW", h2: "—", h3: "—", h4: "100 kWh" },
  { load: "30 kW", h2: "—", h3: "90 kWh", h4: "120 kWh" },
  { load: "40 kW", h2: "100 kWh", h3: "120 kWh", h4: "—" },
  { load: "50 kW", h2: "100 kWh", h3: "130 kWh", h4: "—" },
  { load: "65 kW", h2: "130 kWh", h3: "—", h4: "—" },
];

const DatasheetIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 2v8m0 0L5 7m3 3 3-3M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ModelSelector() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={`selector-selected ${selected ? "visible" : ""}`} id="auraSel">
        <div><div className="ss-lbl">Load</div><div className="ss-val" id="aura-load">{selected ? `Aura · ${selected.load}` : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">2 hr backup</div><div className="ss-val" id="aura-2h">{selected ? selected.h2 : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">3 hr backup</div><div className="ss-val" id="aura-3h">{selected ? selected.h3 : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">4 hr backup</div><div className="ss-val" id="aura-4h">{selected ? selected.h4 : "—"}</div></div>
        <a className="ss-dl" href="/contact?datasheet=/assets/datasheets/aura.pdf" data-hot>
          <DatasheetIcon size={14} />
          Download Datasheet
        </a>
      </div>

      <div className="selector-table-wrap" style={{ marginTop: "1.25rem" }}>
        <table className="selector-table">
          <thead>
            <tr className="st-h1">
              <th style={{ width: 130 }}>Load</th>
              <th className="st-gh" colSpan={3}>Backup duration — Storage required</th>
              <th style={{ width: 130 }}></th>
            </tr>
            <tr className="st-h2">
              <th>Power (kW)</th>
              <th style={{ textAlign: "center" }}>2 hours</th>
              <th style={{ textAlign: "center" }}>3 hours</th>
              <th style={{ textAlign: "center" }}>4 hours</th>
              <th>Datasheet</th>
            </tr>
          </thead>
          <tbody id="auraTbody">
            {rows.map((row) => (
              <tr
                key={row.load}
                onClick={() => setSelected(row)}
                className={selected?.load === row.load ? "selected" : ""}
              >
                <td>{row.load}</td>
                <td className={`st-bc${row.h2 === "—" ? " st-empty" : ""}`}>{row.h2}</td>
                <td className={`st-bc${row.h3 === "—" ? " st-empty" : ""}`}>{row.h3}</td>
                <td className={`st-bc${row.h4 === "—" ? " st-empty" : ""}`}>{row.h4}</td>
                <td>
                  <a className="st-dl" href="/contact?datasheet=/assets/datasheets/aura.pdf" data-hot onClick={(e) => e.stopPropagation()}>
                    <DatasheetIcon /> Datasheet
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
