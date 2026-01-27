export default function Why() {
  const points = [
    { icon: "👩‍🍳", text: "Prepared by experienced mothers" },
    { icon: "📖", text: "Traditional recipes" },
    { icon: "🍃", text: "No preservatives" },
    { icon: "🥘", text: "Small batch cooking" },
    { icon: "💝", text: "Packed with care" }
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <h2>Why Inka Kavali</h2>
        <div className="why-grid">
          {points.map((point, index) => (
            <div key={index} className="why-item">
              <div className="why-icon-box">
                <span className="why-icon">{point.icon}</span>
              </div>
              <p className="why-text">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}