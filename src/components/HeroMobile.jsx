import { openWhatsApp } from "../utils/whatsapp";
import heroImg from "../assets/hero.png";  

export default function HeroMobile() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 24px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '0 0 40px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <section className="hero" style={heroStyle}>
      <h1 style={{ fontSize: '36px', marginBottom: '12px', fontWeight: '700' }}>
        One bite is never enough.
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
        Traditional homemade snacks, <br />
        made with care — just like at home.
      </p>

      <button 
        style={{ 
          backgroundColor: '#8b2c2c', 
          color: 'white', 
          padding: '16px 32px', 
          borderRadius: '50px', 
          border: 'none', 
          fontWeight: '600',
          cursor: 'pointer'
        }}
        onClick={() => openWhatsApp("Hi 👋 I want to order snacks")}
      >
        Order on WhatsApp
      </button>
    </section>
  );
}