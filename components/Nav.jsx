
export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <a className="brand" href="/" data-hot>
        <img className="logo-img" src="/assets/img/unity-ess-logo.webp?v=4" alt="UNITY ESS" />
      </a>
      <div className="nav-links">
        <div className="nav-item">
          <a href="/products" className="hide-sm" data-hot>
            Our Products
          </a>
          <div className="nav-dropdown">
            <a href="/aura" data-hot>Aura</a>
            <a href="/aqua" data-hot>Aqua</a>
            <a href="/ultima" data-hot>Ultima</a>
          </div>
        </div>
        <a href="/how-it-works" className="hide-sm" data-hot>How We Work</a>
        <a href="/projects" className="hide-sm" data-hot>Projects</a>
        <a href="/applications" className="hide-sm" data-hot>Applications</a>
        <a href="/about" className="hide-sm" data-hot>About</a>
        <div className="nav-item">
          <a href="/blog" className="hide-sm" data-hot>
            Resources
          </a>
          <div className="nav-dropdown">
            <a href="/blog" data-hot>Blogs</a>
            <a href="/white-paper" data-hot>White Papers</a>
            <a href="/contact?datasheet=bess-catalogue-2026.pdf#quote" data-hot>Download Catalogue</a>
          </div>
        </div>
      </div>
      <a href="https://service.unityess.cloud/report?brand=unityess" className="hide-sm" data-hot>Complaint</a>
      <a href="/contact" className="btn" data-hot><span>Contact Us</span></a>
    </nav>
  );
}
