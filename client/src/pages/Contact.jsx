import React from "react";
export default function Contact() {
  return (
    <div style={{ background: "#000", color: "#fff", padding: "100px", textAlign: "center" }}>
      <h1>Book Your Shoot</h1>

      <a href="https://wa.me/91891985233" target="_blank">
        <button style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#fff",
          border: "none"
        }}>
          Book Now
        </button>
      </a>
    </div>
  );
}
