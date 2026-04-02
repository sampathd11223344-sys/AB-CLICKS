import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth">

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Capture Moments. Create Memories.
        </h1>
        <p className="text-gray-400 mb-6">
          Professional Photography & Videography
        </p>

        <a
          href="https://wa.me/918919852330?text=Hello%20AB%20Clicks%20I%20want%20to%20book%20a%20shoot"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Book Now
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">Wedding</div>
          <div className="bg-gray-900 p-6 rounded-xl">Pre Wedding</div>
          <div className="bg-gray-900 p-6 rounded-xl">Birthdays</div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We started with a passion for capturing emotions.
          Today, we create cinematic stories for your special moments.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <p className="text-gray-400 mb-4">
          Phone: 8919852330
        </p>

        <a
          href="https://wa.me/918919852330"
          className="bg-white text-black px-6 py-3 rounded-full"
        >
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}
