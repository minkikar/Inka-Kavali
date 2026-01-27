import { openWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Order Directly</h2>
        <p className="contact-subtext">
          For fresh stock and quick delivery, order directly with us.
        </p>

        <div className="contact-actions">
          <button 
            className="btn-whatsapp" 
            onClick={() => openWhatsApp("Hi, I want to place an order")}
          >
            <span className="icon">💬</span> WhatsApp Order
          </button>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-instagram"
          >
            <span className="icon">📸</span> Instagram
          </a>
        </div>

        <div className="contact-footer-info">
          <p>Inka Kavali is for students away from home.</p>
          <p>For people far from their roots.</p>
        </div>
      </div>
    </section>
  );
}