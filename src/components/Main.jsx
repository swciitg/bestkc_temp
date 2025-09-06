import React from "react";
import people from "../assets/people.jpg";

const ClusterLaunch = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f0c3c] py-16 md:py-24 text-white">
      {/* Decorative background (triangles + dots + soft panels) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* subtle dot field */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* big left triangle */}
        <div
          className="absolute left-0 top-24 h-[120%] w-[55vw] opacity-[.14]"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,0))",
          }}
        />
        {/* big right triangle */}
        <div
          className="absolute right-0 top-32 h-[120%] w-[55vw] opacity-[.12]"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,0))",
          }}
        />
        {/* soft rotated panels */}
        <div className="absolute left-[8%] top-44 w-80 h-80 rotate-45 bg-white/[0.05]" />
        <div className="absolute right-[12%] bottom-10 w-96 h-96 -rotate-12 bg-white/[0.04]" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="font-playfair text-4xl mx-auto text-center md:text-5xl mb-8">Cluster Launch</h2>

        <div className="max-w-5xl space-y-6 text-center mx-auto text-lg leading-relaxed text-white/90 font-inter">
          <p>
            Establishing a sustainable innovation ecosystem requires a
            well-connected network of The BeST cluster was formally launched at
            the plenary session of the Bengaluru Tech Summit 2022, by the
            Honorable PSA, Prof. Ajay Sood, in the presence of Prof. G
            Padmanabhan (former Director of IISc (Indian Institute of Science))
            and Shri S. Gopalakrishnan (Kris), Co-founder, Infosys, on 16th
            November 2022.
          </p>

          <p>
            Prof. Sood observed that Bengaluru has enormous research &amp;
            technological potential and Karnataka is a leader in science and
            technology. He anticipates the BeST cluster to catalyze the success
            of the S&amp;T (Science &amp; Technology) cluster initiative not just
            in Bengaluru but in the region, country, and internationally. At the
            launch, Co-PI Dr. Taslimarif Saiyed said, “Bangalore is a city of
            science, innovation, and opportunity. The BeST cluster launch could
            be a landmark for Science and Technology in India and the world. We
            aim to bring together stakeholders with shared ecosystems, identify
            and address problems with locally relevant solutions, and then scale
            up nationally and internationally by building global
            competitiveness. BeST cluster activities will be based on this
            ground-up pyramid model.” Co-PI Prof. Ambarish Ghosh said,
            “Bengaluru Tech Summit is the ideal launchpad for the BeST Cluster.
            The impact of the cluster can be defined in many ways. In addition
            to immediate social and economic impact at a city scale, we must
            also consider the impact on sustainability and being globally
            competitive.” The Honorable PSA, Prof. Ajay Sood, Prof. G
            Padmanabhan (former Director of IISc), and Shri S. Gopalakrishnan
            (Kris), Co-Founder, Infosys, carried out the launch by unfurling the
            BeST cluster poster, which outlines the cluster’s goals.
          </p>
        </div>

        {/* Photo strip (people.png) */}
        <figure className="mt-10 md:mt-14 relative">
          {/* soft card glow behind */}
          <div className="absolute -inset-3 md:-inset-5 rounded-2xl bg-white/10 blur-md" />
          <img
            src={people}
            alt="Cluster launch – dignitaries"
            className="relative mx-auto w-full max-w-5xl rounded-xl shadow-2xl border border-white/10"
            loading="eager"
            decoding="async"
          />
          {/* subtle diagonal highlight bar */}
          <div
            className="pointer-events-none absolute -left-6 top-1/3 w-[115%] h-16 rotate-2 opacity-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,.4), rgba(255,255,255,0))",
            }}
          />
        </figure>
      </div>
    </section>
  );
};

export default ClusterLaunch;
