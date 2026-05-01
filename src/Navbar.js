import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#ffd700" : "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        background: "linear-gradient(to right, #7a3e2b, #a0522d)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Link style={linkStyle("/")} to="/">
        Home
      </Link>
      <Link style={linkStyle("/anindhurai")} to="/anindhurai">
        அணிந்துரை
      </Link>
      <Link style={linkStyle("/vazhthurai")} to="/vazhthurai">
        வாழ்த்துரை
      </Link>
      <Link style={linkStyle("/ennurai")} to="/ennurai">
        என்னுரை
      </Link>

      <Link style={linkStyle("/poems")} to="/poems">
        கவிதைகள்
      </Link>

      <Link style={linkStyle("/contact")} to="/contact">
        Review
      </Link>
    </nav>
  );
}

export default Navbar;