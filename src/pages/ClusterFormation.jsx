import React from "react";
import wheel from "../assets/about.png"; 
// import Main from "../components/Main.jsx"; 
import { Element } from "react-scroll"; // 👈 added
import cluster from '../assets/cluster.png'

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
                    Eating enty win hi planed cluster is crucial for efcient functioning and decision-making. 
                    It will help streamline communication, delegation of tasks and resource allocation, ensuring its 
                    smooth functioning and achieving the targeted goals.
                  </p>

                  <p>
                    In this sience & Techmology cluster, the Director, IT Guwahati willake charge as the 
                    Chairman of this Section 8 Company, which will be run by the Board of Directors and will 
                    be coordinating with DoNER Ministry and the other members of the cluster. The decisions 
                    on important matters will be taken by the Appraisal/ Apex Committee on the recommendation 
                    of the Ministry and the Chairman. The Program Director position will be held by Prof. 
                    Vimal Katiyar, Dept. of Chemical Engineering, who will be overall responsible for the 
                    entire functioning of the cluster including coordination with CEO, reporting to the Board 
                    and looking after the day-to-day activities.
                  </p>

                </div>
              </div>

              {/* Wheel Image */}
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-white/5 blur-sm" />
                <figure className="relative w-full max-w-[720px] mx-auto">
                  
                  <img 
                  src={cluster} alt="" 
                  className="h-[500px] "/>
                </figure>
              </div>
            </div>
          </section>
        </Element>
      </main>

      {/* <Main /> */}
     
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
            <p className="text-lg">
              The North Eastern Science and Technology Cluster (NEST Cluster) has been established as a 
              Section-8 Company under the Companies Act, 2013, with its headquarters at IIT Guwahati. 
              The Cluster aims to promote Research & Development, skill development, and entrepreneurial 
              activities across the North Eastern Region (NER) of India.

            </p>

            <p className="text-lg">
              Operating as a not-for-profit entity, the NEST Cluster will function in a 
              self-sustainable mode within five years, leveraging the scientific and technological 
              expertise available at IIT Guwahati and other premier institutions of the region.

            </p>

            <p className="text-lg">
            The Cluster brings together researchers, scientists, innovators, entrepreneurs, and 
            industry experts to collaborate on cutting-edge technologies such as Semiconductors, 
            Artificial Intelligence, Community-based Grassroots Innovations, Bamboo-based Technologies, 
            Product Development, and Biodegradable Plastics.
            </p>
            <p className="text-lg">
              Through its state-of-the-art laboratories, tinkering and incubation facilities, and 
              networking platforms, the Cluster will foster innovation, provide training and certification, 
              and support the growth of startups and MSMEs in the NER.
            </p>
          </div>
          <figure className="relative w-full max-w-[640px] mx-auto mb-32">
                  <img
                    src={wheel}
                    alt="Cluster wheel"
                    className="h-[36] w-[36] drop-shadow-2xl rounded-xl"
                    loading="eager"
                    decoding="async"
                  />
          </figure>
        </section>
      </Element>
    </>
  );
};

export default ClusterFormation;
