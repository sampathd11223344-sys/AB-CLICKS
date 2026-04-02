import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md flex justify-between px-6 py-4 z-50">
        <h1 className="font-bold text-xl">AB Clicks</h1>
        <div className="space-x-4 text-sm">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <h1 className="text-5xl md:text-7xl font-bold z-10 leading-tight">
          Capture Moments  
          <br /> Create Memories
        </h1>

        <p className="text-gray-400 mt-4 z-10">
          Cinematic Photography & Videography
        </p>

        <a
          href="https://wa.me/918919852330?text=Hello%20AB%20Clicks%20I%20want%20to%20book%20a%20shoot"
          target="_blank"
          rel="noreferrer"
          className="mt-6 z-10 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Book Now
        </a>
      </section>
{/* CATEGORIES */}
<section className="py-20 px-6 text-center">
  <h2 className="text-4xl font-bold mb-10">Our Specialties</h2>

  <div className="grid md:grid-cols-4 gap-6">
    {["Wedding", "Haldi", "Pre-Wedding", "Reception"].map((item, i) => (
      <div
        key={i}
        className="border border-gray-700 p-6 rounded-xl hover:bg-white hover:text-black transition"
      >
        {item}
      </div>
    ))}
  </div>
</section>


{/* VIDEO PORTFOLIO - PREMIUM */}
<section id="portfolio" className="py-28 px-6 text-center bg-gradient-to-b from-black to-gray-950">
  <h2 className="text-5xl font-bold mb-4 tracking-wide">
    Our Work
  </h2>
  <p className="text-gray-400 mb-16">
    Capturing emotions through cinematic storytelling
  </p>

  <div className="grid md:grid-cols-3 gap-10">

    {[
      { title: "Haldi Ceremony", id: "ysz5S6PUM-U" },
      { title: "Wedding Highlights", id: "jNQXAC9IVRw" },
      { title: "Pre Wedding Shoot", id: "ScMzIvxBSi4" },
    ].map((video, i) => (
      <a
        key={i}
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noreferrer"
        className="group relative"
      >

        {/* CARD */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 backdrop-blur-lg">

          <img
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 text-black px-5 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition duration-300 shadow-xl">
              ▶ Play Video
            </div>
          </div>

          {/* TITLE */}
          <div className="absolute bottom-4 left-4 text-left">
            <h3 className="text-xl font-semibold">{video.title}</h3>
          </div>
        </div>

      </a>
    ))}

  </div>
</section>
      <section id="services" className="py-28 px-6 text-center">
  <h2 className="text-5xl font-bold mb-16">Our Services</h2>

  <div className="grid md:grid-cols-3 gap-10">

    {[
      "Wedding Shoots",
      "Pre-Wedding",
      "Haldi & Events",
    ].map((service, i) => (
      <div
        key={i}
        className="p-10 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-md hover:scale-105 hover:bg-white/10 transition duration-300 shadow-lg"
      >
        <h3 className="text-xl font-semibold">{service}</h3>
      </div>
    ))}

  </div>
</section>

      {/* JOURNEY */}
      <section id="journey" className="py-24 px-6 text-center bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold mb-6">Our Journey</h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          What started as a passion for capturing emotions has now grown into
          creating cinematic love stories and unforgettable memories for our clients.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <p className="text-gray-400 mb-4">
          📞 8919852330
        </p>

        <a
          href="https://wa.me/918919852330"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}
