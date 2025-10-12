import React from "react";
import wheel from "../assets/about.png";
import cluster from "../assets/cluster.png";
import { Element } from "react-scroll";

const ClusterFormation = () => {
  return (
    <>
      <main className="relative w-full overflow-hidden bg-gray-50 text-gray-800">
        {/* ---------- Top Banner (About Us) ---------- */}
        <Element name="about-us">
          <header className="text-center mt-24 mb-12">
          <h2 className="text-5xl md:text-5xl font-playfair text-gray-900">
            About Us
          </h2>
          {/* <p className="mt-2 text-base text-gray-600">
            Our Esteemed Coordinators
          </p> */}
          <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
        </header>
        </Element>

        {/* ---------- Cluster Formation Section ---------- */}
        <Element name="cluster-launch">
          <section className="relative bg-white py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-6 grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
              {/* Copy */}
              <div className="font-inter">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
                  Cluster Formation
                </h2>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light">
                  <p>
                    Establishing a hierarchy within this planned cluster is
                    crucial for efficient functioning and decision-making. It
                    will help streamline communication, delegation of tasks, and
                    resource allocation, ensuring its smooth functioning and
                    achieving the targeted goals.
                  </p>

                  <p>
                    In this Science &amp; Technology Cluster, the Director, IIT
                    Guwahati, will take charge as the Chairman of this Section 8
                    Company, which will be run by the Board of Directors and will
                    coordinate with the DoNER Ministry and other members of the
                    cluster. The decisions on important matters will be taken by
                    the Appraisal/Apex Committee on the recommendation of the
                    Ministry and the Chairman. The Program Director position will
                    be held by Prof. Vimal Katiyar, Dept. of Chemical Engineering,
                    who will be overall responsible for the entire functioning of
                    the cluster, including coordination with the CEO, reporting to
                    the Board, and overseeing daily activities.
                  </p>
                </div>
              </div>

              {/* Cluster Image */}
              <div className="relative flex justify-center">
                <img
                  src={cluster}
                  alt="Cluster model"
                  className="rounded-2xl shadow-md w-full max-w-lg object-contain"
                />
              </div>
            </div>
          </section>
        </Element>
      </main>

      {/* ---------- Section 8 Company Formation ---------- */}
      <Element name="section-8-formation">
        <section className="relative bg-gray-50 py-20 md:py-28 text-gray-800 border-t border-gray-200">
          <div className="max-w-screen-xl mx-auto px-6 space-y-8">
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900">
              Section 8 Company Formation
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700 ">
              <p>
                The North Eastern Science and Technology Cluster (NEST Cluster)
                has been established as a Section-8 Company under the Companies
                Act, 2013, with its headquarters at IIT Guwahati. The Cluster
                aims to promote Research &amp; Development, skill development,
                and entrepreneurial activities across the North Eastern Region
                (NER) of India.
              </p>

              <p>
                Operating as a not-for-profit entity, the NEST Cluster will
                function in a self-sustainable mode within five years, leveraging
                the scientific and technological expertise available at IIT
                Guwahati and other premier institutions of the region.
              </p>

              <p>
                The Cluster brings together researchers, scientists, innovators,
                entrepreneurs, and industry experts to collaborate on
                cutting-edge technologies such as Semiconductors, Artificial
                Intelligence, Community-based Grassroots Innovations,
                Bamboo-based Technologies, Product Development, and Biodegradable
                Plastics.
              </p>

              <p>
                Through its state-of-the-art laboratories, tinkering and
                incubation facilities, and networking platforms, the Cluster will
                foster innovation, provide training and certification, and
                support the growth of startups and MSMEs in the NER.
              </p>
            </div>

            <figure className="flex justify-center pt-10">
              <img
                src={wheel}
                alt="Cluster wheel"
                className="rounded-2xl shadow-lg max-w-md w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </section>
      </Element>
    </>
  );
};

export default ClusterFormation;
