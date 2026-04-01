import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/booking">Book</Link>
    </div>
  );
}
