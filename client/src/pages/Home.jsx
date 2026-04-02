import React from "react";

export default function Home() {
  const whatsapp =
    "https://wa.me/91891985233?text=Hello%20AB%20Clicks,%20I%20want%20to%20book";

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "sans-serif" }}>

      {/* HERO VIDEO */}
      <section style={{ position: "relative", height: "100vh" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        >
          <source src="/Videos/VID_20260402_112748_502.mp4" type="video/mp4" />
        </video>

        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)"
        }} />

        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "40px" }}>Capture Moments</h1>
          <p style={{ color: "#ccc" }}>Create Memories</p>

          <a href={whatsapp} target="_blank">
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
      </section>

      {/* IMAGE 1 */}
      <section>
        <img
          src="/Images/IMG_20260402_112535_189.jpg"
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
        />
      </section>

      {/* VIDEO SECTION */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Watch Our Work</h2>

        <video controls style={{ width: "100%", maxWidth: "800px" }}>
          <source src="/Videos/VID_20260402_112750_983.mp4" type="video/mp4" />
        </video>
      </section>

      {/* IMAGE 2 */}
      <section>
        <img
          src="/Images/IMG_20260402_112535_546.jpg"
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
        />
      </section>

      {/* IMAGE 3 */}
      <section>
        <img
          src="/Images/IMG_20260402_112629_796.jpg"
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
        />
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Let’s Create Something Beautiful</h2>

        <a href={whatsapp} target="_blank">
          <button style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#fff",
            border: "none"
          }}>
            Chat on WhatsApp
          </button>
        </a>
      </section>

    </div>
  );
}
