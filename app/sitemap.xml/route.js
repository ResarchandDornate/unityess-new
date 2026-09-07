export const dynamic = "force-static";

const BASE_URL = "https://unityess.ai";

const routes = [
  { path: "/", priority: "1.0", changeFrequency: "weekly" },
  { path: "/products/", priority: "0.9", changeFrequency: "monthly" },
  { path: "/aura/", priority: "0.9", changeFrequency: "monthly" },
  { path: "/aqua/", priority: "0.9", changeFrequency: "monthly" },
  { path: "/ultima/", priority: "0.9", changeFrequency: "monthly" },
  { path: "/how-it-works/", priority: "0.7", changeFrequency: "monthly" },
  { path: "/applications/", priority: "0.8", changeFrequency: "monthly" },
  { path: "/applications/hospitals/", priority: "0.6", changeFrequency: "monthly" },
  { path: "/applications/data-centres/", priority: "0.6", changeFrequency: "monthly" },
  { path: "/applications/industrial/", priority: "0.6", changeFrequency: "monthly" },
  { path: "/applications/agriculture/", priority: "0.6", changeFrequency: "monthly" },
  { path: "/applications/solar-hybrid/", priority: "0.6", changeFrequency: "monthly" },
  { path: "/applications/utility-grid/", priority: "0.6", changeFrequency: "monthly" },
  { path: "/about/", priority: "0.7", changeFrequency: "monthly" },
  { path: "/projects/", priority: "0.8", changeFrequency: "weekly" },
  { path: "/contact/", priority: "0.7", changeFrequency: "yearly" },
];

export function GET() {
  const lastmod = new Date().toISOString();
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changeFrequency}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
