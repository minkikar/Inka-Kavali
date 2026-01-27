export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-tagline">Made with care, just like at home.</p>
        <div className="footer-brand">Inka Kavali</div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Inka Kavali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}