
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <a className="brand" href="/" data-hot>
            <img className="logo-img" src="/assets/img/unity-ess-logo.webp?v=4" alt="UNITY ESS" />
          </a>
          <p>Energy, when you need it. Battery energy storage built for India&rsquo;s grid by Ornate Solar and Inverted Energy, working as one.</p>
        </div>
        <div>
          <h5>Our Products</h5>
          <ul>
            <li><a href="/aura" data-hot>Aura</a></li>
            <li><a href="/aqua" data-hot>Aqua</a></li>
            <li><a href="/ultima" data-hot>Ultima</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="/about" data-hot>About Us</a></li>
            <li><a href="/how-it-works" data-hot>How We Work</a></li>
            <li><a href="/projects" data-hot>Projects</a></li>
            <li><a href="/applications" data-hot>Applications</a></li>
            <li><a href="/contact" data-hot>Contact</a></li>
            <li><a href="https://service.unityess.cloud/report" data-hot>File a Complaint</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>A-87, Okhla Phase II, New Delhi</li>
            <li><a href="tel:+9118002026252" data-hot>1800 2026 252</a></li>
            <li><a href="mailto:info@ornatesolar.com" data-hot>info@ornatesolar.com</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 Unity ESS · Ornate Solar × Inverted Energy</span>
        <span>Energy, when you need it</span>
      </div>
    </footer>
  );
}
