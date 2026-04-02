import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(10px)",
      zIndex: 1000
    }}>
      <h3>AB Clicks</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/journey">Journey</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
