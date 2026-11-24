<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>UnityESS — XML Sitemap</title>
  <style>
    :root{
      --ink:#0f141e; --paper:#f6f8f9; --card:#ffffff;
      --line:rgba(15,20,30,0.1); --low:rgba(15,20,30,0.5);
      --teal:#005f6b; --teal-2:#00717f; --teal-soft:rgba(0,95,107,0.08);
    }
    *{box-sizing:border-box;}
    body{
      margin:0; background:var(--paper); color:var(--ink);
      font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    }
    .wrap{ max-width:960px; margin:0 auto; padding:3rem 1.5rem 4rem; }
    .head{ margin-bottom:2rem; }
    .brand{ display:flex; align-items:center; gap:.6rem; font-weight:700; font-size:1.05rem; letter-spacing:-.01em; color:var(--ink); margin-bottom:1.1rem; }
    .brand .dot{ width:9px;height:9px;border-radius:50%;background:var(--teal); }
    h1{ font-size:1.7rem; font-weight:600; margin:0 0 .4rem; letter-spacing:-.02em; }
    .sub{ color:var(--low); font-size:.95rem; margin:0; }
    .sub b{ color:var(--teal-2); font-weight:600; }
    .card{
      background:var(--card); border:1px solid var(--line); border-radius:16px;
      overflow:hidden; box-shadow:0 24px 48px -32px rgba(15,20,30,.18);
    }
    table{ width:100%; border-collapse:collapse; font-size:.88rem; }
    thead th{
      text-align:left; padding:.85rem 1.1rem; background:var(--teal-soft);
      color:var(--teal); font-weight:700; letter-spacing:.06em; text-transform:uppercase; font-size:.68rem;
      border-bottom:1px solid var(--line);
    }
    tbody td{ padding:.85rem 1.1rem; border-bottom:1px solid var(--line); vertical-align:middle; }
    tbody tr:last-child td{ border-bottom:none; }
    tbody tr:hover{ background:rgba(0,95,107,0.035); }
    .url a{ color:var(--ink); text-decoration:none; font-weight:500; word-break:break-all; }
    .url a:hover{ color:var(--teal); text-decoration:underline; }
    .freq{ color:var(--low); text-transform:capitalize; }
    .prio{ display:inline-block; min-width:2.6em; text-align:center; padding:.2em .55em; border-radius:100px;
      background:var(--teal-soft); color:var(--teal-2); font-weight:700; font-size:.78rem; font-variant-numeric:tabular-nums; }
    .mod{ color:var(--low); font-variant-numeric:tabular-nums; white-space:nowrap; }
    .foot{ margin-top:1.5rem; color:var(--low); font-size:.8rem; text-align:center; }
    .foot code{ background:var(--teal-soft); color:var(--teal-2); padding:.1em .4em; border-radius:5px; }
    @media (max-width:640px){
      .freq, thead th:nth-child(3){ display:none; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="head">
      <div class="brand"><span class="dot"></span> UnityESS</div>
      <h1>XML Sitemap</h1>
      <p class="sub"><b><xsl:value-of select="count(sm:urlset/sm:url)"/></b> URLs submitted for search engine indexing.</p>
    </div>
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Priority</th>
            <th>Change Frequency</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="sm:urlset/sm:url">
            <xsl:sort select="sm:priority" order="descending" data-type="number"/>
            <tr>
              <td class="url"><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td><span class="prio"><xsl:value-of select="sm:priority"/></span></td>
              <td class="freq"><xsl:value-of select="sm:changefreq"/></td>
              <td class="mod"><xsl:value-of select="substring(sm:lastmod,1,10)"/></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
    <p class="foot">Generated automatically at build time · valid XML at <code>/sitemap.xml</code></p>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
