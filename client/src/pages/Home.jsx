import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          alt="wedding"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Capture Moments. Create Memories.
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Professional Photography & Cinematic Videography for Weddings,
            Birthdays, Pre-Wedding Shoots & Special Occasions.
          </p>

          <p className="text-sm text-gray-300 mb-6">
            Budget-friendly | Creative storytelling | Trusted by happy clients
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Book Now
            </a>

            <a
              href="#portfolio"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </a>
          </div>

          {/* Social Proof */}
          <p className="mt-6 text-gray-400 text-sm">
            100+ Happy Clients | 300+ Shoots Completed
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Wedding Photography",
            "Pre-Wedding Shoots",
            "Birthday Events",
            "Maternity Shoots",
          ].map((service, i) => (
            <div
              key={i}
              className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 px-6">
        <h2 className="text-3xl text-center mb-10">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1529634895115-7dbe7c3b45c5",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="portfolio"
              className="rounded-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-5 right-5 bg-green-500 px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

    </div>
  );
};

export default Home;
