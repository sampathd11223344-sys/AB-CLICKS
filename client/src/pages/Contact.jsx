import React from "react";

export default function Contact() {
  return (
    <div style={{
      background: "#000",
      color: "#fff",
      padding: "120px 20px",
      textAlign: "center"
    }}>
      <h1>Let’s Create Together</h1>

      <a href="https://wa.me/91891985233" target="_blank">
        <button style={{
          marginTop: "30px",
          padding: "14px 30px",
          background: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Book Now
        </button>
      </a>
    </div>
  );
}
