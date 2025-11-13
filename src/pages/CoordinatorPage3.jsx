// import { useState } from "react";
// import { Link } from "react-router-dom";
// import CoordinatorCard from "../components/membersCard";
import CoordinatorCard from "../components/coordinatorCard.jsx";
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img8 from "../assets/img8.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

const coordinators = [
  {
    name: "Dr. Kiran Kumar Gali",
    position: "Coordinator",
    affiliation: "Chief Executive Officer (CEO)",
    imageUrl: `${img7}`,
  },
  {
    name: "Dr. Sakshi Nangia",
    position: "Coordinator",
    affiliation: "Manager \nScientific Communications",
    imageUrl: `${img8}`,
  },
  {
    name: "(Dr) Abhishek Singh",
    position: "Coordinator",
    affiliation: "Lead Business Operations & Marketing",
    imageUrl: `${img1}`,
  },
  {
    name: "(Dr) Sweety Kalita",
    position: "Coordinator",
    affiliation: "Lead Innovation & Management",
    imageUrl: `${img6}`,
  },
  {
    name: "Mrinal Kumar",
    position: "Coordinator",
    affiliation: "Technical Associate",
    imageUrl: `${img2}`,
  },
  {
    name: "Debeshree Daimary",
    position: "Coordinator",
    affiliation: "Office Associate",
    imageUrl: `${img5}`,
  },
  {
    name: "Rumi Yadav",
    position: "Coordinator",
    affiliation: "Office Associate",
    imageUrl: `${img4}`,
  },
];

export const initialsOf = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const CoordinatorPage3 = () => {
  return (
    <section className="relative py-20 whitespace-pre-line leading-tight">
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

        <div className="mx-auto max-w-4xl grid grid-cols-3 sm:grid-cols-3 gap-8">
          {coordinators.map((c, idx) => (
            <div
              key={c.name}
              className={
                idx === 0
                  ? "sm:col-span-3 flex justify-center"
                  : "flex justify-center"
              }
            >
              <CoordinatorCard member={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorPage3;
