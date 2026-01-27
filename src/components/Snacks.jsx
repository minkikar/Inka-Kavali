import snacks from "../data/snacks";
import { openWhatsApp } from "../utils/whatsapp";

export default function Snacks() {
  return (
    <section className="snacks-section">
      <div className="snacks-container">
        <div className="section-header">
          <h2>Our Snacks</h2>
          <p>Made fresh in small batches</p>
        </div>

        <div className="snack-grid">
          {snacks.map((item, i) => (
            <div 
              key={i} 
              className="snack-card"
              onClick={() => openWhatsApp(`Hi, I want to order ${item.name}`)}
            >
              <div className="snack-image-container">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="snack-info">
                <h3>{item.name}</h3>
                <p>Available in 500g & 1kg</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}