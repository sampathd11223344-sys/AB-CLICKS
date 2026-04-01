import { useRef } from "react";

export default function Home() {
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#000", color: "white", fontFamily: "sans-serif" }}>

      {/* HERO SECTION */}
      <div style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1529636798458-92182e662485')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>

        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.7)"
        }}></div>

        {/* CONTENT */}
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

          <h1 style={{ fontSize: "42px", letterSpacing: "2px" }}>
            Capture Moments. Create Memories.
          </h1>

          <p style={{ marginTop: "15px", color: "#ccc", maxWidth: "600px" }}>
            Professional Photography & Cinematic Videography for Weddings, Birthdays,
            Pre-Wedding Shoots & Special Occasions.
          </p>

          <p style={{ marginTop: "10px", fontSize: "14px", color: "#aaa" }}>
            Budget-friendly | Creative storytelling | Trusted by happy clients
          </p>

          {/* BUTTONS */}
          <div style={{ marginTop: "25px" }}>
            <a href="https://wa.me/91891985233" target="_blank">
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
            </a>

            <button
              onClick={scrollToPortfolio}
              style={{
                padding: "12px 25px",
                background: "transparent",
                border: "1px solid white",
                color: "white"
              }}
            >
              View Portfolio
            </button>
          </div>

          {/* SOCIAL PROOF */}
          <p style={{ marginTop: "20px", fontSize: "14px", color: "#aaa" }}>
            100+ Happy Clients | 300+ Shoots Completed
          </p>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div ref={portfolioRef} style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Work
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10px"
        }}>

          <img src="https://images.unsplash.com/photo-1519741497674-611481863552" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
          <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486" style={{ width: "100%", height: "300px", objectFit: "cover" }} />

        </div>
      </div>

      {/* VIDEO SECTION */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Featured Videos</h2>

        <div style={{ marginTop: "20px" }}>
          <a href="https://www.instagram.com/reel/DVOZ3HNk7WU/" target="_blank">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Pre-Wedding Video
            </button>
          </a>

          <a href="https://www.instagram.com/reel/DReov7mE5PW/" target="_blank">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Save The Date
            </button>
          </a>

          <a href="https://www.instagram.com/reel/DR7Iwmuk1rw/" target="_blank">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Haldi Video
            </button>
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>

        <p style={{ marginTop: "10px" }}>
          Ready to capture your special moments?
        </p>

        <a href="https://wa.me/91891985233" target="_blank">
          <button style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "gold",
            border: "none"
          }}>
            Chat on WhatsApp
          </button>
        </a>
      </div>

    </div>
  );
}
