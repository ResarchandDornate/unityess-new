"use client";
import { useState } from "react";

const rows = [
  { cap: "125 kWh", h2: "261 kWh", h4: "522 kWh", voltage: "415V" },
  { cap: "150 kWh", h2: "313 kWh", h4: "626 kWh", voltage: "415V" },
  { cap: "215 kWh", h2: "418 kWh", h4: "836 kWh", voltage: "415/690/800V" },
  { cap: "250 kWh", h2: "522 kWh", h4: "1,044 kWh", voltage: "415V" },
  { cap: "500 kWh", h2: "1,044 kWh", h4: "2,170 kWh", voltage: "415V" },
  { cap: "1,000 kWh", h2: "2,170 kWh", h4: "—", voltage: "415V" },
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
      <div className={`selector-selected ${selected ? "visible" : ""}`} id="aquaSel">
        <div><div className="ss-lbl">Capacity</div><div className="ss-val" id="aqua-cap">{selected ? `Aqua · ${selected.cap}` : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">2 hr storage</div><div className="ss-val" id="aqua-2h">{selected ? selected.h2 : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">4 hr storage</div><div className="ss-val" id="aqua-4h">{selected ? selected.h4 : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">Voltage</div><div className="ss-val">415V</div></div>
        <a className="ss-dl" href="/contact?datasheet=/assets/datasheets/aqua.pdf" data-hot>
          <DatasheetIcon size={14} />
          Download Datasheet
        </a>
      </div>

      <div className="selector-table-wrap" style={{ marginTop: "1.25rem" }}>
        <table className="selector-table">
          <thead>
            <tr className="st-h1">
              <th style={{ width: 140 }}>Capacity</th>
              <th className="st-gh" colSpan={2}>Backup duration — Storage required</th>
              <th style={{ textAlign: "center", width: 100 }}>Voltage</th>
              <th style={{ width: 130 }}></th>
            </tr>
            <tr className="st-h2">
              <th>Power (kW)</th>
              <th style={{ textAlign: "center" }}>2 hours</th>
              <th style={{ textAlign: "center" }}>4 hours</th>
              <th style={{ textAlign: "center" }}>AC nominal</th>
              <th>Datasheet</th>
            </tr>
          </thead>
          <tbody id="aquaTbody">
            {rows.map((row) => (
              <tr
                key={row.cap}
                onClick={() => setSelected(row)}
                className={selected?.cap === row.cap ? "selected" : ""}
              >
                <td>{row.cap}</td>
                <td className={`st-bc${row.h2 === "—" ? " st-empty" : ""}`}>{row.h2}</td>
                <td className={`st-bc${row.h4 === "—" ? " st-empty" : ""}`}>{row.h4}</td>
                <td className="st-vc">{row.voltage}</td>
                <td>
                  <a className="st-dl" href="/contact?datasheet=/assets/datasheets/aqua.pdf" data-hot onClick={(e) => e.stopPropagation()}>
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
