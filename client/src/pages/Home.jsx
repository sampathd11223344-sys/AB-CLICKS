import React from "react";

export default function Home() {
  const whatsappLink = "https://wa.me/91891985233";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400&family=Space+Grotesk:wght@700&display=swap');
        
        body, html {
          margin: 0; padding: 0; background: #000; color: #fff;
          font-family: 'Outfit', sans-serif; overflow: hidden;
        }

        .scroll-container {
          height: 100vh; width: 100vw; overflow-y: scroll;
          scroll-snap-type: y mandatory; scroll-behavior: smooth;
        }

        .section {
          height: 100vh; width: 100vw; scroll-snap-align: start;
          position: relative; display: flex; align-items: center;
          justify-content: center; overflow: hidden;
        }

        .media-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover; z-index: 1;
          transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .section:hover .media-bg { transform: scale(1.03); }

        .overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 2;
        }

        .content {
          position: relative; z-index: 3; text-align: center;
          padding: 20px; display: flex; flex-direction: column; align-items: center;
        }

        .huge-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 8vw, 8rem); font-weight: 700;
          line-height: 1.1; text-transform: uppercase; margin: 0;
          letter-spacing: -2px; text-shadow: 0 10px 30px rgba(0,0,0,0.5);
          animation: fadeUp 1s ease-out;
        }

        .subtitle {
          font-size: clamp(1rem, 2vw, 1.5rem); letter-spacing: 4px;
          text-transform: uppercase; color: #e0e0e0; margin-top: 20px;
          margin-bottom: 40px; font-weight: 300;
          animation: fadeUp 1.2s ease-out backwards;
        }

        .btn-primary {
          background: #fff; color: #000; padding: 18px 45px;
          font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem;
          font-weight: 700; text-transform: uppercase; border: none;
          border-radius: 50px; cursor: pointer; transition: all 0.3s ease;
          text-decoration: none; display: inline-block;
        }
        
        .btn-primary:hover {
          transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255,255,255,0.2);
        }

        .play-btn {
          width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; cursor: pointer; transition: all 0.4s ease;
          margin-bottom: 30px; text-decoration: none;
        }
        
        .play-btn:hover { background: #fff; transform: scale(1.1); }
        .play-btn:hover svg { fill: #000; }

        .scroll-indicator {
          position: absolute; bottom: 40px; z-index: 3; display: flex;
          flex-direction: column; align-items: center; gap: 15px; opacity: 0.7;
          animation: bounce 2s infinite;
        }
        
        .scroll-indicator span { font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase; }
        .scroll-line { width: 2px; height: 40px; background: linear-gradient(to bottom, #fff, transparent); }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-15px); } 60% { transform: translateY(-7px); } }
      `}</style>

      <div className="scroll-container">

        {/* 1. HERO SECTION */}
        <section className="section">
          {/* IMPORTANT: For the hero, do NOT lazy load. We want this instant. */}
          <video className="media-bg" autoPlay loop muted playsInline preload="auto">
            {/* Download your main video and put it in your project folder */}
            <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
          
          <div className="content">
            <h1 className="huge-title">Capture<br/>Moments</h1>
            <p className="subtitle">Create Memories</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">Book Now</a>
          </div>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* 2. PRE-WEDDING STORY */}
        <section className="section">
          {/* Added loading="lazy" to instantly boost site speed */}
          <img className="media-bg" src="/images/pre-wedding-preview.jpg" alt="Pre Wedding" loading="lazy" />
          <div className="overlay"></div>
          
          <div className="content">
            <a href="https://www.instagram.com/reel/DVOZ3HNk7WU/" target="_blank" rel="noreferrer" className="play-btn">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff" style={{ transition: "fill 0.4s ease", marginLeft: "5px" }}>
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
            <h2 className="huge-title" style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}>Pre-Wedding</h2>
            <p className="subtitle">Watch The Story</p>
          </div>
        </section>

        {/* 3. VIBRANT HALDI */}
        <section className="section">
          <img className="media-bg" src="/images/haldi-preview.jpg" alt="Haldi Photo" loading="lazy" />
          <div className="overlay"></div>
          
          <div className="content">
            <h2 className="huge-title" style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}>Vibrant<br/>Haldi</h2>
            <p className="subtitle">High Resolution</p>
            <a href="https://www.instagram.com/p/DRgiVIIk8qV/" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: "transparent", color: "#fff", border: "2px solid #fff" }}>
              View Gallery
            </a>
          </div>
        </section>

        {/* 4. SAVE THE DATE */}
        <section className="section">
          <img className="media-bg" src="/images/save-the-date-preview.jpg" alt="Save the date" loading="lazy" />
          <div className="overlay"></div>
          
          <div className="content">
            <a href="https://www.instagram.com/reel/DReov7mE5PW/" target="_blank" rel="noreferrer" className="play-btn">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff" style={{ transition: "fill 0.4s ease", marginLeft: "5px" }}>
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
            <h2 className="huge-title" style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}>Save The Date</h2>
            <p className="subtitle">Cinematic Trailer</p>
          </div>
        </section>

        {/* 5. THE WEDDING DAY */}
        <section className="section">
          <img className="media-bg" src="/images/wedding-day-preview.jpg" alt="Wedding Day" loading="lazy" />
          <div className="overlay"></div>
          
          <div className="content">
            <h2 className="huge-title" style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}>The Big Day</h2>
            <p className="subtitle">Moments Frozen in Time</p>
            <a href="https://www.instagram.com/p/DVig8fok_Vy/" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: "transparent", color: "#fff", border: "2px solid #fff" }}>
              View Gallery
            </a>
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="section" style={{ background: "#0a0a0a" }}>
          <div className="content">
            <h2 className="huge-title" style={{ fontSize: "clamp(2rem, 5vw, 5rem)", marginBottom: "30px" }}>Let's Create<br/>Together.</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
                Chat on WhatsApp
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: "transparent", color: "#fff", border: "2px solid #fff" }}>
                Follow Instagram
              </a>
            </div>
            <p style={{ marginTop: "50px", color: "#555", letterSpacing: "2px" }}>100+ HAPPY CLIENTS | 300+ SHOOTS</p>
          </div>
        </section>

      </div>
    </>
  );
}
