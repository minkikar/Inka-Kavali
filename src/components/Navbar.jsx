import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <img src={logo} alt="Inka Kavali Logo" className="logo" />
        <span className="brand-name">Shree Sai home foods</span>
      </div>
    </header>
  );
}
