"use client";
import { useState } from "react";
import Link from "next/link";

const rows = [
  { load: "0.75 MW", h2: "1.50 MWh", h4: "3.00 MWh" },
  { load: "1.00 MW", h2: "2.00 MWh", h4: "4.00 MWh" },
  { load: "1.25 MW", h2: "2.50 MWh", h4: "5.00 MWh" },
  { load: "1.50 MW", h2: "3.00 MWh", h4: "6.00 MWh" },
  { load: "1.65 MW", h2: "3.30 MWh", h4: "6.60 MWh" },
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
      <div className={`selector-selected ${selected ? "visible" : ""}`} id="ultimaSel">
        <div><div className="ss-lbl">Power</div><div className="ss-val" id="ultima-load">{selected ? `Ultima · ${selected.load}` : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">2 hr backup</div><div className="ss-val" id="ultima-2h">{selected ? selected.h2 : "—"}</div></div>
        <div className="ss-div"></div>
        <div><div className="ss-lbl">4 hr backup</div><div className="ss-val" id="ultima-4h">{selected ? selected.h4 : "—"}</div></div>
        <Link className="ss-dl" href="/contact?datasheet=/assets/datasheets/ultima.pdf" data-hot>
          <DatasheetIcon size={14} />
          Download Datasheet
        </Link>
      </div>

      <div className="selector-table-wrap" style={{ marginTop: "1.25rem" }}>
        <table className="selector-table">
          <thead>
            <tr className="st-h1">
              <th style={{ width: 130 }}>Power</th>
              <th className="st-gh" colSpan={2}>Backup duration — Storage required</th>
              <th style={{ width: 130 }}></th>
            </tr>
            <tr className="st-h2">
              <th>Power (MW)</th>
              <th style={{ textAlign: "center" }}>2 hours</th>
              <th style={{ textAlign: "center" }}>4 hours</th>
              <th>Datasheet</th>
            </tr>
          </thead>
          <tbody id="ultimaTbody">
            {rows.map((row) => (
              <tr
                key={row.load}
                onClick={() => setSelected(row)}
                className={selected?.load === row.load ? "selected" : ""}
              >
                <td>{row.load}</td>
                <td className={`st-bc${row.h2 === "—" ? " st-empty" : ""}`}>{row.h2}</td>
                <td className={`st-bc${row.h4 === "—" ? " st-empty" : ""}`}>{row.h4}</td>
                <td>
                  <Link className="st-dl" href="/contact?datasheet=/assets/datasheets/ultima.pdf" data-hot onClick={(e) => e.stopPropagation()}>
                    <DatasheetIcon /> Datasheet
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
