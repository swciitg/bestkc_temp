import React from "react";
import wheel from "../assets/about.png"; 
import Main from "../components/Main.jsx"; 
import { Element } from "react-scroll"; // 👈 added

const ClusterFormation = () => {
  return (
    <>
      <main className="relative w-full overflow-hidden">
        {/* ---------- Top Banner (About Us) ---------- */}
        <Element name="about-us"> {/* 👈 scroll target */}
          <section className="relative bg-gradient-to-r from-[#1f1561] via-[#3b238b] to-[#1f1561] py-10 md:py-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="max-w-screen-xl mx-auto px-6">
              <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl">
                About Us
              </h1>
            </div>
          </section>
        </Element>

        {/* ---------- Cluster Formation Section ---------- */}
        <Element name="cluster-launch"> {/* 👈 scroll target */}
          <section className="relative bg-[#0a6b75] text-white">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-40 -left-48 w-[38rem] h-[38rem] rotate-45 bg-white/5 rounded-sm" />
              <div className="absolute top-52 -left-10 w-[24rem] h-[24rem] -rotate-12 bg-white/4 rounded-sm" />
              <div className="absolute -right-40 top-20 w-[34rem] h-[34rem] rotate-6 bg-white/5 rounded-sm" />
              <div className="absolute right-10 bottom-10 w-56 h-56 rounded-full border border-white/10" />
              <div className="absolute left-16 bottom-20 w-24 h-24 rounded-full border-2 border-white/10" />
              <div
                className="absolute -left-10 top-1/3 w-[120%] h-24 rotate-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,.16), rgba(255,255,255,0))",
                }}
              />
            </div>

            <div className="max-w-screen-xl mx-auto px-6 py-14 md:py-20 grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
              {/* Copy */}
              <div className="font-inter">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6">
                  Cluster Formation
                </h2>

                <div className="space-y-6 text-lg leading-relaxed font-light">
                  <p>
                    Establishing a sustainable innovation ecosystem requires a
                    well-connected network of entrepreneurs, domestic and foreign
                    enterprises, educational and research institutions, government
                    agencies, investors, business incubators, and technology &amp;
                    business mentors.
                  </p>

                  <p>
                    This need has led to the development of regional innovation
                    clusters in many parts of the world. Such clusters bring
                    together capital, expertise, and talent to foster
                    breakthroughs that have a meaningful impact on society. The{" "}
                    <strong>
                      North Eastern Science &amp; Technology (NEST) Cluster
                    </strong>{" "}
                    is envisioned as a collaborative effort of leading academic
                    institutions, industry partners, startups, and government
                    bodies across the Northeast—working together through a
                    hub-and-spoke model to drive inclusive growth.
                  </p>

                  <p>
                    Anchored by <strong>IIT Guwahati</strong> with support from
                    national partners, and enabled by outcome-driven
                    collaboration, the NEST Cluster aims to accelerate research,
                    innovation, and entrepreneurship—turning ideas into scalable,
                    sustainable solutions for the region.
                  </p>

                  <p>
                    With state-of-the-art infrastructure, shared facilities,
                    capacity-building programmes, and strong industry linkages,
                    the Cluster will catalyse technology transfer, skill
                    development, startup incubation, and job creation across the
                    Northeast.
                  </p>
                </div>
              </div>

              {/* Wheel Image */}
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-white/5 blur-sm" />
                <figure className="relative w-full max-w-[720px] mx-auto">
                  <img
                    src={wheel}
                    alt="Cluster wheel"
                    className="w-full h-auto drop-shadow-2xl rounded-xl"
                    loading="eager"
                    decoding="async"
                  />
                </figure>
              </div>
            </div>
          </section>
        </Element>
      </main>

      <Main />

      {/* ---------- Section 8 Company Formation ---------- */}
      <Element name="section-8-formation"> {/* 👈 scroll target */}
        <section className="relative overflow-hidden bg-[#0a6b75] text-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div
              className="absolute top-0 left-0 h-full w-[60vw] opacity-[.09]"
              style={{
                clipPath: "polygon(0 0, 55% 0, 85% 50%, 55% 100%, 0 100%)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,0))",
              }}
            />
            <div
              className="absolute top-0 left-[26vw] h-full w-[50vw] opacity-[.08]"
              style={{
                clipPath: "polygon(0 0, 55% 0, 85% 50%, 55% 100%, 0 100%)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.20), rgba(255,255,255,0))",
              }}
            />
            <div
              className="absolute top-0 right-0 h-full w-[45vw] opacity-[.08]"
              style={{
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0 50%)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,0))",
              }}
            />
            <div className="absolute -right-10 top-24 w-40 h-40 rotate-12 rounded-sm bg-white/10" />
            <div className="absolute right-20 top-48 w-28 h-28 -rotate-6 rounded-sm bg-white/10" />
            <div className="absolute left-10 bottom-16 w-32 h-32 -rotate-12 rounded-sm bg-white/10" />
          </div>

          <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-playfair text-4xl md:text-5xl mb-8">
              Section 8 Company Formation
            </h2>
            <p className="max-w-6xl font-inter text-xl md:text-2xl leading-relaxed text-white/95">
              The Bengaluru S&amp;T Cluster took a significant leap forward by
              transitioning into a Section 8 Company on{" "}
              <span className="whitespace-nowrap">14th May 2024</span>. Four
              leading institutions—namely the Indian Institute of Science (IISc),
              the National Centre for Biological Sciences (NCBS), the Jawaharlal
              Nehru Centre for Advanced Scientific Research (JNCASR), and the
              International Centre for Theoretical Sciences (ICTS)—came together
              to establish the non-profit organization named{" "}
              <em>Foundation for Bengaluru Science and Technology</em>.
            </p>
          </div>
        </section>
      </Element>
    </>
  );
};

export default ClusterFormation;
