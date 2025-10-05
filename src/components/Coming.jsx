import React from "react";

const ComingSoon = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#241a69] via-[#3b2c86] to-[#4a3480] text-white overflow-hidden">
      {/* ===== Background Decorations ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div
          className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(26,162,175,.6), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,.2), transparent)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            color: "rgba(255,255,255,.8)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Rotated squares */}
        <div className="absolute top-20 left-10 w-28 h-28 bg-white/10 rotate-12" />
        <div className="absolute bottom-24 right-24 w-36 h-36 bg-white/10 -rotate-6" />

        {/* Outline circles */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full border border-white/20" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full border-2 border-white/20" />

        {/* Diagonal light bar */}
        <div
          className="absolute -left-1/4 top-1/2 w-[150%] h-24 rotate-2 opacity-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,.2), rgba(255,255,255,0))",
          }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className="relative text-center px-6">
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Coming Soon
        </h1>
        <p className="font-inter text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          We’re working hard to bring you something amazing. Stay tuned for updates!
        </p>

        {/* Notify button (can be hooked later to email service) */}
        {/* <button
          className="px-6 py-3 rounded-md bg-black text-white font-medium hover:opacity-90 transition"
        >
          Notify Me
        </button> */}
      </div>
    </section>
  );
};

export default ComingSoon;
