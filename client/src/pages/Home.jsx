import { Link } from "react-router-dom";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
  ];

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

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)"
        }}></div>

        <div style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center"
        }}>
          <h1>AB Clicks</h1>
          <p>Capturing Moments, Creating Memories</p>

          <div>
            <Link to="/booking">
              <button style={{ margin: "10px", padding: "10px 20px" }}>
                Book Now
              </button>
            </Link>

            <a href="https://wa.me/91891985233" target="_blank">
              <button style={{ margin: "10px", padding: "10px 20px" }}>
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Our Services</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {["Wedding", "Pre-Wedding", "Birthday", "Maternity"].map((s, i) => (
            <div key={i} style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "20px",
              width: "200px"
            }}>
              <h3>{s}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Our Work</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "10px",
          marginTop: "20px"
        }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
