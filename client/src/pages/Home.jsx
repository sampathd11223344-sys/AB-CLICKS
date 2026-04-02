import React from "react";

const videos = [
  {
    title: "Haldi Ceremony",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
  },
  {
    title: "Wedding Highlights",
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
  },
  {
    title: "Pre Wedding Shoot",
    url: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          AB Clicks
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          Cinematic Photography & Videography for Weddings, Haldi,
          Pre-Wedding & Special Moments.
        </p>

        <a
          href="https://wa.me/91891985233"
          target="_blank"
          className="mt-6 bg-white text-black px-6 py-3 rounded-xl"
        >
          Book Now
        </a>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Specialties</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Wedding", "Haldi", "Pre-Wedding", "Birthdays"].map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 p-6 rounded-xl hover:bg-white hover:text-black transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO PORTFOLIO */}
      <section className="py-16 px-6">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Our Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <a
              key={i}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="group relative"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded-xl w-full h-64 object-cover group-hover:scale-105 transition"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white text-black px-4 py-2 rounded-full">
                  ▶ Play
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg">{video.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Book Your Shoot</h2>

        <a
          href="https://wa.me/91891985233"
          target="_blank"
          className="bg-green-500 px-8 py-3 rounded-xl text-black font-semibold"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 AB Clicks
      </footer>

    </div>
  );
}
