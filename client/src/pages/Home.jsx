import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "white", fontFamily: "sans-serif" }}>

      {/* HERO */}
      <div style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1529636798458-92182e662485')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))"
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "48px", letterSpacing: "2px" }}
          >
            AB CLICKS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: "10px", color: "#ccc" }}
          >
            Capturing Moments, Creating Memories
          </motion.p>

          <div style={{ marginTop: "30px" }}>
            <Link to="/booking">
              <button style={{
                padding: "12px 25px",
                marginRight: "10px",
                background: "gold",
                border: "none",
                color: "black",
                fontWeight: "bold"
              }}>
                Book Now
              </button>
            </Link>

            <a href="https://wa.me/91891985233" target="_blank">
              <button style={{
                padding: "12px 25px",
                border: "1px solid white",
                background: "transparent",
                color: "white"
              }}>
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px" }}>Services</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}>
          {["Wedding", "Pre-Wedding", "Birthday", "Maternity"].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "30px",
                border: "1px solid #333",
                minWidth: "200px",
                background: "#111"
              }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Our Work
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10px"
        }}>
          {[
            "https://images.unsplash.com/photo-1519741497674-611481863552",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
            "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
