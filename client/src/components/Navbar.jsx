import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "25px 60px",
      display: "flex",
      justifyContent: "space-between",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(12px)",
      zIndex: 1000
    }}>
      <h2>AB Clicks</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/">Home</Link>
        <Link to="/journey">Journey</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
