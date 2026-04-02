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

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello AB Clicks, I want to book a ${form.event} shoot on ${form.date}. My name is ${form.name}`;

    const url = `https://wa.me/91891985233?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); // 🔥 IMPORTANT FIX
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000",
      color: "#fff"
    }}>

      <div style={{ textAlign: "center", width: "300px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
          Let’s Create
        </h1>

        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
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

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#fff",
              color: "#000",
              border: "none",
              cursor: "pointer"
            }}
          >
            Book Now
          </button>

        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #555",
  padding: "10px",
  color: "#fff",
  outline: "none"
};
