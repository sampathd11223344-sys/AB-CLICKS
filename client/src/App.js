import React from "react";

function App() {
  return (
    <div className="bg-black text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/60 backdrop-blur-md">
        <h1 className="text-xl font-semibold tracking-wide">AB CLICKS</h1>
        <div className="flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Capture Moments <br /> Create Memories
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl">
          Professional Photography & Cinematic Videography
        </p>

        <a
          href="https://wa.me/918919852330"
          target="_blank"
          rel="noreferrer"
          className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
        >
          Book Now
        </a>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="min-h-screen px-6 py-20">
        <h2 className="text-4xl mb-10">Our Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-60 bg-gray-800 rounded-xl hover:scale-105 transition"
            ></div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="min-h-screen px-6 py-20 text-center">
        <h2 className="text-4xl mb-6">Our Journey</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We started with a passion for capturing emotions. Today, we create cinematic wedding stories and unforgettable memories.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen px-6 py-20 text-center">
        <h2 className="text-4xl mb-6">Contact Us</h2>

        <a
          href="https://wa.me/918919852330"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>

        <p className="mt-6 text-gray-500">
          100+ Happy Clients | 300+ Shoots
        </p>
      </section>

    </div>
  );
}

export default App;
