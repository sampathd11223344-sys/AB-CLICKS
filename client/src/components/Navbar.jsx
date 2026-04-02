import React from "react";

export default function Navbar() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(12px)",
      zIndex: 1000
    }}>
      <h2>AB Clicks</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#home">Home</a>
        <a href="#journey">Journey</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
