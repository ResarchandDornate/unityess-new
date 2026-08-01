export default function AmbientFX() {
  return (
    <>
      <div className="fx-aurora" aria-hidden="true">
        <span className="orb o1"></span>
        <span className="orb o2"></span>
        <span className="orb o3"></span>
        <span className="orb o4"></span>
      </div>
      <div className="fx-grid" aria-hidden="true"></div>
      <div className="fx-grain" aria-hidden="true"></div>
      <div className="progress-beam" aria-hidden="true"></div>
      <div className="cursor"></div>
      <div className="cursor-ring"></div>
    </>
  );
}
