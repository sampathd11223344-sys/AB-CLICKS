import React, { useEffect } from "react";

export default function Home() {
  const whatsappLink = "https://wa.me/91891985233";

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400&family=Space+Grotesk:wght@700&display=swap');

        body, html {
          margin: 0;
          padding: 0;
          background: #000;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .scroll-container {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }

        .section {
          height: 100vh;
          scroll-snap-align: start;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s ease;
        }

        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .media-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          transform: scale(1.1);
          transition: transform 1.5s ease;
        }

        .section:hover .media-bg {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
          z-index: 2;
        }

        .content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 20px;
        }

        .huge-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 7vw, 7rem);
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -2px;
        }

        .subtitle {
          margin-top: 15px;
          color: #ccc;
          letter-spacing: 3px;
        }

        .btn {
          margin-top: 30px;
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #fff;
          color: #000;
        }

        .btn-outline {
          border: 1px solid #fff;
          color: #fff;
        }

        .btn:hover {
          transform: translateY(-5px);
        }

        .spacer {
          height: 20vh;
          background: #000;
        }
      `}</style>

      <div className="scroll-container">

        {/* HERO */}
        <section className="section visible">
          <video className="media-bg" autoPlay loop muted playsInline>
            <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>

          <div className="content">
            <h1 className="huge-title">Capture Moments</h1>
            <p className="subtitle">Create Memories</p>

            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book Now
            </a>
          </div>
        </section>

        <div className="spacer"></div>

        {/* PRE WEDDING */}
        <section className="section">
          <img className="media-bg" src="/images/pre-wedding-preview.jpg" loading="lazy" />
          <div className="overlay"></div>

          <div className="content">
            <h2 className="huge-title">Pre Wedding</h2>
            <p className="subtitle">Watch Story</p>
            <a href="https://www.instagram.com/reel/DVOZ3HNk7WU/" target="_blank" className="btn btn-outline">
              Watch
            </a>
          </div>
        </section>

        <div className="spacer"></div>

        {/* HALDI */}
        <section className="section">
          <img className="media-bg" src="/images/haldi-preview.jpg" loading="lazy" />
          <div className="overlay"></div>

          <div className="content">
            <h2 className="huge-title">Haldi</h2>
            <p className="subtitle">Vibrant Moments</p>
            <a href="https://www.instagram.com/p/DRgiVIIk8qV/" target="_blank" className="btn btn-outline">
              View
            </a>
          </div>
        </section>

        <div className="spacer"></div>

        {/* SAVE THE DATE */}
        <section className="section">
          <img className="media-bg" src="/images/save-the-date-preview.jpg" loading="lazy" />
          <div className="overlay"></div>

          <div className="content">
            <h2 className="huge-title">Save The Date</h2>
            <p className="subtitle">Cinematic Trailer</p>
            <a href="https://www.instagram.com/reel/DReov7mE5PW/" target="_blank" className="btn btn-outline">
              Watch
            </a>
          </div>
        </section>

        <div className="spacer"></div>

        {/* FINAL CTA */}
        <section className="section" style={{ background: "#0a0a0a" }}>
          <div className="content">
            <h2 className="huge-title">Let’s Create</h2>

            <a href={whatsappLink} target="_blank" className="btn btn-primary">
              Chat on WhatsApp
            </a>

            <p style={{ marginTop: "40px", color: "#666" }}>
              100+ Happy Clients | 300+ Shoots
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
