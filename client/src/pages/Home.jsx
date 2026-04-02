import React from "react";

export default function Home() {
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      
      <video autoPlay muted loop style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}>
        <source src="/Videos/VID_20260402_112748_502.mp4" />
      </video>

      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeUp 1s ease"
      }}>
        <h1 style={{
          fontSize: "70px",
          letterSpacing: "-2px"
        }}>
          Capture Moments
        </h1>

        <p style={{
          marginTop: "20px",
          letterSpacing: "3px"
        }}>
          Create Memories
        </p>

        <a href="https://wa.me/91891985233" target="_blank">
          <button style={{
            marginTop: "30px",
            padding: "12px 25px",
            background: "#fff",
            color: "#000",
            border: "none",
            cursor: "pointer"
          }}>
            Book Now
          </button>
        </a>
      </div>

    </section>
  );
}
