import React, { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({
    name: "",
    event: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello AB Clicks, I want to book a ${form.event} shoot on ${form.date}. My name is ${form.name}`;
    const url = `https://wa.me/918919852330?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div style={{ background: "#000", color: "#fff" }}>

      {/* HERO */}
      <section id="home" style={{ height: "100vh", position: "relative" }}>
        <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src="/Videos/VID_20260402_112748_502.mp4" />
        </video>

        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h1 style={{ fontSize: "60px" }}>Capture Moments</h1>
          <p>Create Memories</p>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h1>Our Journey</h1>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          We create cinematic wedding stories through photography and videography.
        </p>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "120px 20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Our Work</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              height: "250px",
              background: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              Video Placeholder
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="event" placeholder="Event" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />

          <button type="submit">Book Now</button>
        </form>
      </section>

    </div>
  );
}
