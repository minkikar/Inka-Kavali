export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-tagline">Made with care, just like at home.</p>
        <div className="footer-brand">Inka Kavali</div>
        <p>By Shree Sai Gayatri Home Foods</p>
        <p>Dharmabad Maharashtra</p>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Inka Kavali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}