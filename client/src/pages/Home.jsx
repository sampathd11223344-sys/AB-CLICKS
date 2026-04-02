import React from "react";
export default function Home() {
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src="/Videos/VID_20260402_112748_502.mp4" />
      </video>

      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}>
        <h1 style={{ fontSize: "50px" }}>AB Clicks</h1>
        <p>Cinematic Wedding Stories</p>
      </div>
    </section>
  );
}
