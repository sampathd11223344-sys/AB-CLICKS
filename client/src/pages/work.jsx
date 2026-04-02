export default function Work() {
  return (
    <div style={{ background: "#000", color: "#fff", padding: "120px 20px" }}>

      {/* TITLE */}
      <h1 style={{
        textAlign: "center",
        marginBottom: "80px",
        fontSize: "40px"
      }}>
        Our Work
      </h1>

      {/* GRID */}
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
              position: "relative",
              overflow: "hidden",
              transition: "0.4s"
            }}
          >

            {/* HOVER EFFECT */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.05)",
              opacity: 0,
              transition: "0.4s"
            }}
              className="hover-overlay"
            ></div>

            <p style={{ color: "#777", letterSpacing: "1px" }}>
              Video Coming Soon
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}
