"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";

/**
 * Ported from the inline <script> on how_it_works.html (lines ~939-1040):
 * renders the 24-hour solar / battery-charge / discharge line chart inside
 * the Unity EMS dashboard mockup, using Chart.js loaded from the same CDN
 * the static page used. Chart.js isn't a project dependency (this page is
 * the only one that needs it), so it's loaded via next/script scoped to
 * this route rather than added to the shared layout.
 */
export default function EmsChart() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  function initChart() {
    if (!canvasRef.current || !window.Chart || chartRef.current) return;

    const hours = ["12a", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12p", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    const solar = [0, 0, 0, 0, 0, 0, 2, 8, 22, 38, 52, 62, 69, 60, 50, 38, 22, 8, 2, 0, 0, 0, 0, 0];
    const charge = [0, 0, 0, 0, 0, 0, 0, 4, 16, 28, 40, 50, 52, 44, 36, 26, 14, 4, 0, 0, 0, 0, 0, 0];
    const discharge = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 28, 48, 62, 54, 36, 16, 4];

    chartRef.current = new window.Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: hours,
        datasets: [
          {
            label: "Solar generation",
            data: solar,
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245,158,11,0.08)",
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Battery charge",
            data: charge,
            borderColor: "#00A99D",
            backgroundColor: "rgba(0,169,157,0.08)",
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Discharge to load",
            data: discharge,
            borderColor: "#6366f1",
            backgroundColor: "rgba(99,102,241,0.08)",
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#fff",
            borderColor: "#e5e7eb",
            borderWidth: 1,
            titleColor: "#111",
            bodyColor: "#6b7280",
            titleFont: { size: 11, weight: "600" },
            bodyFont: { size: 11 },
            padding: 10,
            callbacks: {
              label: function (ctx) {
                return ctx.dataset.label + ": " + ctx.parsed.y + " kW";
              },
            },
          },
        },
        scales: {
          x: {
            grid: { color: "#f3f4f6", drawBorder: false },
            ticks: {
              color: "#9ca3af",
              font: { size: 10 },
              maxTicksLimit: 12,
            },
            border: { display: false },
          },
          y: {
            grid: { color: "#f3f4f6", drawBorder: false },
            ticks: {
              color: "#9ca3af",
              font: { size: 10 },
              callback: function (v) {
                return v + " kW";
              },
              maxTicksLimit: 5,
            },
            border: { display: false },
            min: 0,
            max: 80,
          },
        },
      },
    });
  }

  useEffect(() => {
    if (window.Chart) initChart();
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"
        strategy="afterInteractive"
        onLoad={initChart}
      />
      <canvas ref={canvasRef} id="emsChart" width="440" height="220"></canvas>
    </>
  );
}
