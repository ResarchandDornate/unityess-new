import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Link className="brand" href="/" data-hot>
            <img className="logo-img" src="/assets/img/unity-ess-logo.webp?v=4" alt="UNITY ESS" />
          </Link>
          <p>Energy, when you need it. Battery energy storage built for India&rsquo;s grid by Ornate Solar and Inverted Energy, working as one.</p>
        </div>
        <div>
          <h5>Our Products</h5>
          <ul>
            <li><Link href="/aura" data-hot>Aura</Link></li>
            <li><Link href="/aqua" data-hot>Aqua</Link></li>
            <li><Link href="/ultima" data-hot>Ultima</Link></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link href="/about" data-hot>About Us</Link></li>
            <li><Link href="/how-it-works" data-hot>How We Work</Link></li>
            <li><Link href="/projects" data-hot>Projects</Link></li>
            <li><Link href="/applications" data-hot>Applications</Link></li>
            <li><Link href="/contact" data-hot>Contact</Link></li>
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
