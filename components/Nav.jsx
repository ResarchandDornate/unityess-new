import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <Link className="brand" href="/" data-hot>
        <img className="logo-img" src="/assets/img/unity-ess-logo.webp?v=4" alt="UNITY ESS" />
      </Link>
      <div className="nav-links">
        <div className="nav-item">
          <Link href="/products" className="hide-sm" data-hot>
            Our Products
          </Link>
          <div className="nav-dropdown">
            <Link href="/aura" data-hot>Aura</Link>
            <Link href="/aqua" data-hot>Aqua</Link>
            <Link href="/ultima" data-hot>Ultima</Link>
          </div>
        </div>
        <Link href="/how-it-works" className="hide-sm" data-hot>How We Work</Link>
        <Link href="/projects" className="hide-sm" data-hot>Projects</Link>
        <Link href="/applications" className="hide-sm" data-hot>Applications</Link>
        <Link href="/about" className="hide-sm" data-hot>About</Link>
      </div>
      <Link href="/contact" className="btn" data-hot><span>Contact Us</span></Link>
    </nav>
  );
}
