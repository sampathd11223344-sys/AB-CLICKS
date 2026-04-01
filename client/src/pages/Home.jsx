import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO SECTION */}
      <div style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1529636798458-92182e662485')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white"
      }}>

        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)"
        }}></div>

        {/* CONTENT */}
        <div style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            AB Clicks
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Capturing Moments, Creating Memories
          </p>

          <div>
            <Link to="/booking">
              <button style={{
                padding: "10px 20px",
                marginRight: "10px",
                border: "none",
                background: "#ff9800",
                color: "white",
                borderRadius: "5px"
              }}>
                Book Now
              </button>
            </Link>

            <a
              href="https://wa.me/91891985233?text=Hello%20AB%20Clicks"
              target="_blank"
              rel="noreferrer"
            >
              <button style={{
                padding: "10px 20px",
                border: "none",
                background: "green",
                color: "white",
                borderRadius: "5px"
              }}>
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Our Services</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px"
        }}>

          {[
            "Wedding Photography",
            "Pre-Wedding Shoots",
            "Birthday Events",
            "Maternity Shoots"
          ].map((service, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              padding: "20px",
              margin: "10px",
              width: "200px",
              borderRadius: "10px"
            }}>
              <h3>{service}</h3>
              <p>Professional and creative photography service.</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
