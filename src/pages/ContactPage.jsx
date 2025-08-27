// src/components/ContactUs.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Element } from "react-scroll"; // 👈 added

const ContactUs = () => {
  // <<< Replace these with your real details >>>
  const org = {
    title: "North Eastern Science & Technology (NEST) Cluster",
    addressLines: [
      "NEST Cluster Office",
      "Indian Institute of Technology Guwahati",
      "Amingaon, Guwahati, Assam – 781039",
      "India",
    ],
    website: "https://example.com", // your site
    email: "info@nestcluster.in",
    phone: "+91 000 000 0000",
    mapsURL: "https://maps.google.com/?q=IIT+Guwahati,+Assam+781039",
  };

  return (
    <Element name="contact-us"> {/* 👈 scroll target */}
      <section className="w-full">
        {/* Top banner / header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#241a69] via-[#3b2c86] to-[#4a3480]">
          <div
            className="h-6 opacity-20"
            style={{
              background:
                "repeating-linear-gradient(45deg, rgba(255,255,255,.25) 0 14px, transparent 14px 28px)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-14">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-16 -left-24 w-64 h-64 rotate-12 bg-white/5" />
              <div className="absolute top-6 right-24 w-48 h-48 -rotate-6 bg-white/5" />
              <div className="absolute -bottom-20 left-1/3 w-72 h-72 rotate-45 bg-white/5" />
            </div>

            <h1 className="text-white font-playfair text-4xl md:text-5xl font-semibold">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Content band */}
        <div className="relative bg-[#0a6d7a] py-12 md:py-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,.25), transparent)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-[32rem] h-[32rem] blur-3xl opacity-10"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(0,0,0,.25), transparent)",
              }}
            />
            <div className="absolute top-28 left-10 w-44 h-44 rotate-12 bg-white/6" />
            <div className="absolute bottom-24 left-1/3 w-64 h-64 -rotate-12 bg-white/6" />
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
              {/* Left: details */}
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">
                  {org.title}
                </h2>

                <div className="space-y-4 text-lg leading-relaxed">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 text-white/90" />
                    <div>
                      {org.addressLines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaGlobe className="mr-3 text-white/90" />
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {org.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-white/90" />
                    <a
                      href={`mailto:${org.email}`}
                      className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {org.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <FaPhoneAlt className="mr-3 text-white/90" />
                    <a
                      href={`tel:${org.phone}`}
                      className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {org.phone}
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href={org.mapsURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/15 hover:bg-white/20 transition"
                    >
                      Open in Google Maps <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: “map” placeholder block */}
              <div className="relative">
                <div className="rounded-lg border border-white/30 overflow-hidden shadow-lg bg-[#083f47]">
                  <div className="h-10 bg-white/10 border-b border-white/15 flex items-center px-4 space-x-2">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                  </div>
                  <div className="h-72 md:h-[22rem] lg:h-[24rem] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/80">
                        <div className="text-sm uppercase tracking-wider">
                          Map Placeholder
                        </div>
                        <div className="mt-2 text-xs opacity-80">
                          (have to replace this with a real map)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-white/80 text-sm">
                  Location preview is intentionally disabled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
