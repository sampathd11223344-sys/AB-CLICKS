import { useRef } from "react";

export default function Home() {
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // WhatsApp Number (Ensure country code is correct, assuming +91 for India)
  const whatsappLink = "https://wa.me/91891985233";

  return (
    <div style={{ background: "#050505", color: "white", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      {/* INJECTED CSS FOR ANIMATIONS & GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&display=swap');
        
        .hero-heading { font-family: 'Cinzel', serif; animation: fadeInUp 1s ease-out; }
        .hero-text { animation: fadeInUp 1.2s ease-out backwards; }
        .hero-buttons { animation: fadeInUp 1.4s ease-out backwards; }
        
        .btn-gold { background: #d4af37; color: #000; transition: all 0.3s; }
        .btn-gold:hover { background: #b5952f; box-shadow: 0 4px 20px rgba(212,175,55,0.4); transform: translateY(-2px); }
        
        .btn-outline { background: transparent; border: 1px solid #fff; color: #fff; transition: all 0.3s; }
        .btn-outline:hover { background: #fff; color: #000; transform: translateY(-2px); }
        
        .card { overflow: hidden; border-radius: 8px; position: relative; cursor: pointer; }
        .card img { transition: transform 0.5s ease; width: 100%; height: 300px; object-fit: cover; display: block; }
        .card:hover img { transform: scale(1.08); }
        .card-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: center; justify-content: center; }
        .card:hover .card-overlay { opacity: 1; }
        
        .scroll-bounce { animation: bounce 2s infinite; position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); cursor: pointer; color: #fff; font-size: 24px; }
        
        .floating-wa { position: fixed; bottom: 30px; right: 30px; background: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 30px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); z-index: 1000; transition: transform 0.3s; text-decoration: none;}
        .floating-wa:hover { transform: scale(1.1); }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-15px); } 60% { transform: translateY(-7px); } }
      `}</style>

      {/* 1 & 6. HERO SECTION WITH BACKGROUND */}
      <div style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop')", // Cinematic dark wedding background
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        {/* SLIGHT DARK OVERLAY */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(5,5,5,1))" }}></div>

        {/* CONTENT */}
        <div style={{
          position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 20px"
        }}>
          
          <h1 className="hero-heading" style={{ fontSize: "clamp(40px, 6vw, 65px)", letterSpacing: "2px", margin: 0, lineHeight: 1.1 }}>
            Capture Moments.<br/>Create Memories.
          </h1>

          {/* 2 & 3. SUBHEADING & TAGLINE */}
          <div className="hero-text">
            <p style={{ marginTop: "20px", color: "#e0e0e0", maxWidth: "700px", fontSize: "18px", lineHeight: 1.6, fontWeight: 300 }}>
              Professional Photography & Cinematic Videography for Weddings, Birthdays, Pre-Wedding Shoots & Special Occasions.
            </p>
            <p style={{ marginTop: "15px", fontSize: "14px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase" }}>
              Budget-friendly • Creative storytelling • Trusted by happy clients
            </p>
          </div>

          {/* 4. CALL-TO-ACTION BUTTONS */}
          <div className="hero-buttons" style={{ marginTop: "40px", display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button className="btn-gold" style={{ padding: "15px 35px", border: "none", fontWeight: "600", fontSize: "16px", borderRadius: "4px", cursor: "pointer" }}>
                Book Now →
              </button>
            </a>
            <button className="btn-outline" onClick={scrollToPortfolio} style={{ padding: "15px 35px", fontSize: "16px", borderRadius: "4px", cursor: "pointer" }}>
              View Portfolio ↓
            </button>
          </div>

          {/* 5. SOCIAL PROOF */}
          <div className="hero-buttons" style={{ marginTop: "50px", display: "flex", gap: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
            <div><h3 style={{ margin: 0, color: "#d4af37" }}>100+</h3><p style={{ margin: 0, fontSize: "12px", color: "#aaa" }}>Happy Clients</p></div>
            <div><h3 style={{ margin: 0, color: "#d4af37" }}>300+</h3><p style={{ margin: 0, fontSize: "12px", color: "#aaa" }}>Shoots Completed</p></div>
          </div>
        </div>

        {/* 7. SCROLL DOWN INDICATOR */}
        <div className="scroll-bounce" onClick={scrollToPortfolio}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>

      {/* PORTFOLIO SECTION (Photos) */}
      <div ref={portfolioRef} style={{ padding: "80px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 className="hero-heading" style={{ textAlign: "center", fontSize: "36px", marginBottom: "10px" }}>Our Photography</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "50px" }}>Click to view full quality on Instagram</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { img: "https://images.unsplash.com/photo-1519741497674-611481863552", link: "https://www.instagram.com/p/DVig8fok_Vy/?img_index=1&igsh=MW84eGt0ZzNtcDZuOA==" },
            { img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf", link: "https://www.instagram.com/p/DVZ_zn8k1jp/?img_index=2&igsh=Z295YWZpNng2b283" },
            { img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b", link: "https://www.instagram.com/p/DVDajxLE8AT/?img_index=1&igsh=MXZ6bXRsZmdiN3JyNQ==" },
            { img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486", link: "https://www.instagram.com/p/DRgiVIIk8qV/?igsh=MW0wZ2FvZnViZnVpNQ==" }
          ].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="card">
              <img src={item.img} alt={`Portfolio ${index + 1}`} />
              <div className="card-overlay"><span style={{ color: "white", border: "1px solid white", padding: "8px 20px", borderRadius: "20px" }}>View Post</span></div>
            </a>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION (Reels) */}
      <div style={{ padding: "20px 5% 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 className="hero-heading" style={{ textAlign: "center", fontSize: "36px", marginBottom: "10px" }}>Cinematic Reels</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "50px" }}>Experience the magic in motion</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {[
            { title: "Pre-Wedding", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866", link: "https://www.instagram.com/reel/DVOZ3HNk7WU/?igsh=MWYxYTRrcWQ1anZqYg==" },
            { title: "Save The Date", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a", link: "https://www.instagram.com/reel/DReov7mE5PW/?igsh=MWU2dnlndHZ4MHdueA==" },
            { title: "Haldi Ceremony 1", img: "https://images.unsplash.com/photo-1621801306175-ebc7b41e8c0e", link: "https://www.instagram.com/reel/DR7Iwmuk1rw/?igsh=NnlybDk3amtkdnhy" },
            { title: "Haldi Ceremony 2", img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935", link: "https://www.instagram.com/reel/DSKgVIeCHeN/?igsh=dmU0emR1ZHNsbDdt" }
          ].map((video, index) => (
            <a key={index} href={video.link} target="_blank" rel="noreferrer" className="card" style={{ height: "400px" }}>
              <img src={video.img} alt={video.title} style={{ height: "100%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px" }}>
                {/* Play Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" style={{ marginBottom: "10px" }}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <h3 style={{ margin: 0, color: "white", fontSize: "20px" }}>{video.title}</h3>
                <p style={{ margin: "5px 0 0", color: "#d4af37", fontSize: "14px" }}>Watch Reel →</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER / CONTACT */}
      <div style={{ padding: "80px 20px", textAlign: "center", background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <h2 className="hero-heading" style={{ fontSize: "32px", marginBottom: "10px" }}>Let's Create Together</h2>
        <p style={{ color: "#aaa", marginBottom: "30px", maxWidth: "500px", margin: "0 auto 30px" }}>
          Ready to capture your special moments? Reach out today to discuss your vision and check our availability.
        </p>
        <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button className="btn-gold" style={{ padding: "15px 40px", border: "none", fontWeight: "bold", fontSize: "16px", borderRadius: "4px", cursor: "pointer" }}>
            Chat on WhatsApp
          </button>
        </a>
      </div>

      {/* 7. FLOATING WHATSAPP BUTTON */}
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="floating-wa" title="Chat with us">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
