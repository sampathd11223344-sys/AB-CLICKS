import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md flex justify-between px-6 py-4 z-50">
        <h1 className="font-bold text-xl">AB Clicks</h1>
        <div className="space-x-4 text-sm">
          <a href="#services">Services</a>
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

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
            Wedding Shoots
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
            Pre-Wedding
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
            Birthday & Events
          </div>

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
