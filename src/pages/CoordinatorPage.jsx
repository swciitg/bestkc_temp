// import { useState } from "react";
// import { Link } from "react-router-dom";
// import CoordinatorCard from "../components/membersCard";
import CoordinatorCard from "../components/coordinatorCard.jsx";
import poonam_kumari_dp from "../assets/poonam_kumari.jpeg";
import sajan_kapil_dp from "../assets/sajan_kapil.jpeg";
import kumar_komal_dp from "../assets/kumar_komal.jpeg";
import dora_dp from "../assets/dora.jpeg";

const coordinators = [
  {
    name: "Prof. Devendra Jalihal",
    position: "Coordinator",
    affiliation: "Chairman of NEST Cluster",
    website:
      "https://www.iitg.ac.in/iitg_faculty_details?fac=ZXpYUlJGUmZrK0hld1BzSVN0bnBUQT09",
    imageUrl:
      "https://imgs.search.brave.com/3VimyUbpoli6Dhxakp6KKJb6TBq5inE8fk8l0DsbC1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paXRn/LmFjLmluL3N0b3Jh/Z2UvbWVkaWEvYmY5/MGRiNDY5OWQxMDk4/OTk0MDk4MWZmOGU2/OTMxYTUuJTIwRGV2/ZW5kcmElMjBKYWxp/aGFsLCUyMERpcmVj/dG9yLCUyMElJVCUy/MEd1d2FoYXRp",
  },
  {
    name: "Prof. Vimal Katiyar",
    position: "Coordinator",
    affiliation: "Project Director and Faculty Incharge",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=vk",
    imageUrl:
      "https://event.iitg.ac.in/researchconclave/rc20/assets/img/Vimal%20Katiyar.png",
  },
];

export const initialsOf = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const CoordinatorPage = () => {
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(1,121,130,.35), transparent)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-20 w-[30rem] h-[30rem] blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,52,128,.35), transparent)",
          }}
        />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-dark/10 -translate-y-1/3 -rotate-45" />
        <div className="absolute top-1/2 right-1/5 w-96 h-96 bg-primary-light/10 translate-y-1/4 rotate-12" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary-dark/10 translate-x-1/4 -translate-y-1/4 rotate-30" />
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-primary-light/10 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12"></header>

        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coordinators.map((c, idx) => (
            <div key={c.name} className="flex justify-center">
              <CoordinatorCard member={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorPage;
