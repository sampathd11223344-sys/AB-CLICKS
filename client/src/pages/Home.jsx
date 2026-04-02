import React, { useEffect } from "react";

export default function Home() {
  const whatsapp =
    "https://wa.me/91891985233?text=Hello%20AB%20Clicks,%20I%20want%20to%20book";

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@300;400&display=swap');

        body {
          margin: 0;
          background: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }

        h1, h2 {
          font-family: 'Playfair Display', serif;
          letter-spacing: 1px;
        }

        .section {
          padding: 120px 20px;
          text-align: center;
        }

        .fade {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }

        .hero {
          position: relative;
          height: 100vh;
        }

        .hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: clamp(2.5rem, 6vw, 5rem);
        }

        .subtitle {
          margin-top: 10px;
          color: #ccc;
        }

        .btn {
          margin-top: 25px;
          padding: 12px 30px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          background: white;
          color: black;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          transform: translateY(-4px);
        }

        .image {
          width: 100%;
          height: 80vh;
          object-fit: cover;
        }

        .spacer {
          height: 80px;
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src="/Videos/VID_20260402_112748_502.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content fade">
          <h1 className="title">Capture Moments</h1>
          <p className="subtitle">Create Memories</p>

          <a href={whatsapp} target="_blank">
            <button className="btn">Book Now</button>
          </a>
        </div>
      </section>

      {/* TEXT */}
      <section className="section fade">
        <h2 style={{ maxWidth: "700px", margin: "auto" }}>
          We don’t just shoot events.  
          We create timeless cinematic stories.
        </h2>
      </section>

      {/* IMAGE 1 */}
      <img
        src="/Images/IMG_20260402_112535_189.jpg"
        className="image fade"
      />

      <div className="spacer"></div>

      {/* VIDEO */}
      <section className="section fade">
        <h2>Featured Film</h2>

        <video controls style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <source src="/Videos/VID_20260402_112750_983.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="spacer"></div>

      {/* IMAGE 2 */}
      <img
        src="/Images/IMG_20260402_112535_546.jpg"
        className="image fade"
      />

      <div className="spacer"></div>

      {/* IMAGE 3 */}
      <img
        src="/Images/IMG_20260402_112629_796.jpg"
        className="image fade"
      />

      {/* CTA */}
      <section className="section fade">
        <h2>Let’s Create Something Beautiful</h2>

        <a href={whatsapp} target="_blank">
          <button className="btn">Chat on WhatsApp</button>
        </a>
      </section>
    </>
  );
}
