import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    event: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://abclicks.onrender.com/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const text = `Hello AB Clicks, I want to book a ${form.event} shoot on ${form.date}. My name is ${form.name}`;
    window.open(`https://wa.me/91891985233?text=${encodeURIComponent(text)}`);
  };

  return (
    <section style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      color: "#fff",
      padding: "20px"
    }}>

      {/* BIG TITLE */}
      <h1 style={{
        fontSize: "60px",
        marginBottom: "50px",
        letterSpacing: "-2px"
      }}>
        Let’s Create
      </h1>

      {/* MINIMAL FORM */}
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        width: "300px"
      }}>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          name="event"
          placeholder="Event Type"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={{
          marginTop: "20px",
          padding: "12px",
          background: "#fff",
          color: "#000",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s"
        }}>
          Book Now
        </button>

      </form>

      {/* SMALL CONTACT */}
      <p style={{
        marginTop: "40px",
        fontSize: "12px",
        opacity: 0.6
      }}>
        WhatsApp: 891985233
      </p>

    </section>
  );
}

const inputStyle = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #555",
  padding: "10px 0",
  color: "#fff",
  outline: "none",
  fontSize: "14px"
};
