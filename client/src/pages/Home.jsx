import { useRef } from "react";

export default function Home() {
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappLink = "https://wa.me/91891985233";

  return (
    <div style={{ background: "#000000", color: "#ffffff", fontFamily: "'Outfit', sans-serif", overflowX: "hidden", position: "relative" }}>
      
      {/* FUTURISTIC CSS INJECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Space+Grotesk:wght@500;700&display=swap');
        
        * { box-sizing: border-box; }
        
        /* Background Glow Orbs */
        .glow-orb-1 { position: absolute; top: -10%; left: -10%; width: 50vw; height: 50vw; background: radial-gradient(circle, rgba(0,112,243,0.15) 0%, rgba(0,0,0,0) 70%); z-index: 0; pointer-events: none; }
        .glow-orb-2 { position: absolute; bottom: 20%; right: -10%; width: 40vw; height: 40vw; background: radial-gradient(circle, rgba(121,40,202,0.15) 0%, rgba(0,0,0,0) 70%); z-index: 0; pointer-events: none; }

        .futuristic-heading { 
          font-family: 'Space Grotesk', sans-serif; 
          background: linear-gradient(to right, #ffffff, #a8a8a8); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          animation: fadeUp 1s ease-out;
        }

        .gradient-text {
          background: linear-gradient(90deg, #0070f3, #f81ce5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        /* Glassmorphism Cards */
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px;
          position: relative;
          z-index: 2;
        }

        /* Cyber/Tech Buttons */
        .btn-primary { 
          background: #ffffff; color: #000000; padding: 14px 32px; border-radius: 30px; 
          font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 16px; 
          border: none; cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(255,255,255,0.2);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 30px rgba(255,255,255,0.4); background: #e0e0e0; }
        
        .btn-secondary { 
          background: transparent; color: #ffffff; padding: 14px 32px; border-radius: 30px; 
          font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 16px; 
          border: 1px solid rgba(255,255,255,0.2); cursor: pointer; transition: all 0.3s ease;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.5); transform: translateY(-2px); }

        /* Media Cards */
        .media-card { 
          border-radius: 12px; overflow: hidden; position: relative; cursor: pointer;
          border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: #0a0a0a; z-index: 2;
        }
        .media-card img { width: 100%; height: 350px; object-fit: cover; transition: transform 0.6s ease; opacity: 0.8; }
        .media-card:hover { border-color: #0070f3; box-shadow: 0 10px 30px rgba(0, 112, 243, 0.2); transform: translateY(-10px); }
        .media-card:hover img { transform: scale(1.05); opacity: 1; }
        
        .media-overlay { 
          position: absolute; inset: 0; background: linear-gradient(to top, #000 0%, transparent 70%); 
          display: flex; flex-direction: column; justify-content: flex-end; padding: 25px; 
        }

        /* Floating Element */
        .floating-badge {
          display: inline-block; padding: 8px 16px; border-radius: 20px; 
          background: rgba(0, 112, 243, 0.1); border: 1px solid rgba(0, 112, 243, 0.3);
          color: #0070f3; font-size: 13px; font-weight: 600; letter-spacing: 1px; margin-bottom: 20px;
        }

        .scroll-indicator { animation: pulse 2s infinite; position: absolute; bottom: 40px; color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .scroll-indicator::after { content: ''; width: 1px; height: 30px; background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent); }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
      `}</style>

      {/* AMBIENT GLOWS */}
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>

      {/* HERO SECTION */}
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", position: "relative" }}>
        
        <div className="glass-panel" style={{ maxWidth: "800px", textAlign: "center", width: "100%" }}>
          <span className="floating-badge">NEXT-GEN VISUALS</span>
          
          <h1 className="futuristic-heading" style={{ fontSize: "clamp(35px, 5vw, 60px)", margin: "0 0 20px 0", lineHeight: 1.1 }}>
            Capture Moments.<br/>
            <span className="gradient-text">Create Memories.</span>
          </h1>

          <p style={{ color: "#a1a1aa", fontSize: "18px", lineHeight: 1.6, marginBottom: "15px", fontWeight: 300 }}>
            Professional Photography & Cinematic Videography for Weddings, Birthdays, Pre-Wedding Shoots & Special Occasions.
          </p>

          <p style={{ fontSize: "14px", color: "#666", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "40px" }}>
            Budget-friendly • Creative storytelling • Trusted by happy clients
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button className="btn-primary">Book Now</button>
            </a>
            <button className="btn-secondary" onClick={scrollToPortfolio}>View Portfolio</button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div><h3 style={{ margin: 0, fontSize: "24px", fontFamily: "'Space Grotesk'" }}>100+</h3><p style={{ margin: 0, fontSize: "12px", color: "#888" }}>HAPPY CLIENTS</p></div>
            <div><h3 style={{ margin: 0, fontSize: "24px", fontFamily: "'Space Grotesk'" }}>300+</h3><p style={{ margin: 0, fontSize: "12px", color: "#888" }}>SHOOTS DONE</p></div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={scrollToPortfolio}>Scroll to explore</div>
      </div>

      {/* PORTFOLIO SECTION */}
      <div ref={portfolioRef} style={{ padding: "100px 5%", maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        <h2 className="futuristic-heading" style={{ fontSize: "40px", marginBottom: "10px" }}>Our Work.</h2>
        <p style={{ color: "#888", marginBottom: "60px", fontSize: "16px" }}>High-resolution photography. Click to view on Instagram.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {[
            { img: "https://images.unsplash.com/photo-1519741497674-611481863552", link: "https://www.instagram.com/p/DVig8fok_Vy/?img_index=1&igsh=MW84eGt0ZzNtcDZuOA==" },
            { img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf", link: "https://www.instagram.com/p/DVZ_zn8k1jp/?img_index=2&igsh=Z295YWZpNng2b283" },
            { img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b", link: "https://www.instagram.com/p/DVDajxLE8AT/?img_index=1&igsh=MXZ6bXRsZmdiN3JyNQ==" },
            { img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486", link: "https://www.instagram.com/p/DRgiVIIk8qV/?igsh=MW0wZ2FvZnViZnVpNQ==" }
          ].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="media-card">
              <img src={item.img} alt={`Portfolio ${index + 1}`} />
              <div className="media-overlay">
                <span style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)", color: "#fff", padding: "8px 16px", borderRadius: "30px", fontSize: "12px", width: "fit-content", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Open Photo ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div style={{ padding: "50px 5% 100px", maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2 className="futuristic-heading" style={{ fontSize: "40px", marginBottom: "10px" }}>Featured Reels.</h2>
        <p style={{ color: "#888", marginBottom: "60px", fontSize: "16px" }}>Cinematic storytelling in motion.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {[
            { title: "Pre-Wedding", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866", link: "https://www.instagram.com/reel/DVOZ3HNk7WU/?igsh=MWYxYTRrcWQ1anZqYg==" },
            { title: "Save The Date", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a", link: "https://www.instagram.com/reel/DReov7mE5PW/?igsh=MWU2dnlndHZ4MHdueA==" },
            { title: "Haldi Ceremony 1", img: "https://images.unsplash.com/photo-1621801306175-ebc7b41e8c0e", link: "https://www.instagram.com/reel/DR7Iwmuk1rw/?igsh=NnlybDk3amtkdnhy" },
            { title: "Haldi Ceremony 2", img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935", link: "https://www.instagram.com/reel/DSKgVIeCHeN/?igsh=dmU0emR1ZHNsbDdt" }
          ].map((video, index) => (
            <a key={index} href={video.link} target="_blank" rel="noreferrer" className="media-card" style={{ height: "450px" }}>
              <img src={video.img} alt={video.title} style={{ height: "100%" }} />
              <div className="media-overlay">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(5px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <span className="gradient-text" style={{ fontSize: "14px" }}>Watch Reel</span>
                </div>
                <h3 style={{ margin: 0, color: "white", fontSize: "22px", fontFamily: "'Space Grotesk'" }}>{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER / CONTACT */}
      <div className="glass-panel" style={{ margin: "0 5% 50px", textAlign: "center", borderRadius: "24px" }}>
        <h2 className="futuristic-heading" style={{ fontSize: "36px", marginBottom: "20px" }}>Ready to Start?</h2>
        <p style={{ color: "#a1a1aa", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>
          Initiate a conversation. Let's discuss your vision and make it a reality.
        </p>
        <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button className="btn-primary">Initialize Chat ↗</button>
        </a>
      </div>

    </div>
  );
}
