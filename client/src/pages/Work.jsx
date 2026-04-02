import React from "react";

export default function Work() {
  return (
    <div style={{
      background: "#000",
      color: "#fff",
      padding: "120px 20px"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "80px" }}>
        Our Work
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "40px",
        maxWidth: "1200px",
        margin: "auto"
      }}>
        
        {[...Array(12)].map((_, i) => (
          <div key={i}
            style={{
              height: "300px",
              background: "#111",
              border: "1px solid #222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.4s"
            }}
            onMouseEnter={(e)=> e.currentTarget.style.transform="scale(1.05)"}
            onMouseLeave={(e)=> e.currentTarget.style.transform="scale(1)"}
          >
            <p style={{ color: "#777" }}>Video Coming Soon</p>
          </div>
        ))}

      </div>
    </div>
  );
}
