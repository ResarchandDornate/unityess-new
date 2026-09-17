// White paper content lives here as plain data, mirroring app/blog/blogPosts.js.
// To publish a new white paper: append an object with a unique `slug`, and drop
// the actual PDF at public/assets/whitepapers/<file>.pdf — the listing page and
// /white-paper/[slug] detail page both read from this file automatically.
const whitePapers = [
  {
    slug: "voltage-levels-bess",
    title: "Why Voltage Levels Matter in Battery Energy Storage Systems (BESS)",
    shortTitle: "Voltage Levels in BESS",
    subtitle:
      "A Practical Framework for Choosing the Right Voltage Levels in Battery Energy Storage System Architecture",
    metaTitle: "Why Voltage Levels Matter in BESS | UnityESS White Paper",
    metaDescription:
      "A practical framework for choosing the right voltage levels in battery energy storage system architecture, from UnityESS.",
    category: "Technical",
    author: "UnityESS",
    coverImage: "/assets/img/unityess-cabinet-on-site-at-sunrise.webp",
    coverAlt: "UnityESS battery energy storage cabinet on site at sunrise",
    pdfFile: "/assets/whitepapers/why-voltage-levels-matter-in-bess.pdf",
    excerpt:
      "How BESS voltage architecture is chosen, why it matters for performance and efficiency, and a framework for picking the right setup for your application.",
    body: [
      {
        type: "p",
        text: "This whitepaper provides a clear understanding of how Battery Energy Storage Systems (BESS) are designed and integrated into modern power systems. It focuses on the importance of choosing the right electrical configuration and how that decision influences overall system performance, efficiency, and reliability.",
      },
      {
        type: "p",
        text: "It walks through different approaches used in real-world projects, explains their practical advantages and limitations, and helps readers understand how to select the most suitable setup based on application needs.",
      },
      {
        type: "p",
        text: "The paper also offers a forward-looking perspective on how BESS design is evolving, highlighting emerging approaches that can improve performance and simplify system architecture.",
      },
    ],
  },
];

export default whitePapers;

export function getAllWhitePapers() {
  return whitePapers;
}

export function getWhitePaperBySlug(slug) {
  return whitePapers.find((wp) => wp.slug === slug);
}
