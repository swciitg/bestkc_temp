import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll"; // 👈 added

// ----- Dummy data (kept same) -----
const teamMembers = [
  {
    name: "Dr. Amit Kumar",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=amk",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/eaec5dc6f1a635760907dcb8f702f584.jpg",
  },
  {
    name: "Dr. Ankush Bag",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/nano/cfn/ankushfaculty.html",
    imageUrl: "https://www.iitg.ac.in/nano/cfn/pictures/ankushbag.jpg",
  },
  {
    name: "Dr. Chiranjib Sur",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/sob/faculty_profile.php?id=Y2hpcmFuamli",
    imageUrl: "https://www.iitg.ac.in/sob/faculty/chiranjib_sur.jpg",
  },
  {
    name: "Dr. Debanga Raj Neog",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://debanga.github.io/",
    imageUrl: "https://debanga.github.io/images/debanga-554x576.jpg",
  },
  {
    name: "Prof. G. Pugazhenthi",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=gp",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/646a8812bcc9f8acfb7c40a3ff9e606a.jpg",
  },
  {
    name: "Dr. Mahima Arrawatia",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://jeeadv.iitg.ac.in/eee/faculty_research.php?name=mha",
    imageUrl: "https://www.iitg.ac.in/storage/faculty/3229img.jpg",
  },
  {
    name: "Dr. Poonam Kumari",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://iitg.ac.in/mech/faculty/kpmech/",
    imageUrl: "https://iitg.ac.in/mech/media/images/CET_4107.original.jpg",
  },
  {
    name: "Dr. Raghvendra Gupta",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=rg",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/075425f5976765e745fe90b7f0369d7a.jpg",
  },
   {
    name: "Dr. Pankaj Tiwari",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=pt",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/d745db61aae61a5d4bb97fee0ebbae69026025a6.jpg",
  },
  {
    name: "Dr. Ravindra Kr. Jha",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/eee/faculty_profile.php?name=rkj",
    imageUrl: "https://www.iitg.ac.in/eee/faculty/d19bc93884b38e4c09c1ccbc505ccab4.jpg",
  },
  {
    name: "Dr. Sajan Kapil",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://iitg.ac.in/mech/faculty/sajankapil/",
    imageUrl: "https://iitg.ac.in/mech/media/images/CET_4279.original.jpg",
  },
  {
    name: "Prof. Sreedeep S.",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "http://sree21s.wixsite.com/srees",
    imageUrl: "https://static.wixstatic.com/media/9462d9_847f2536e21d4612a9106f61da4366e1~mv2.jpg/v1/fill/w_186,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9462d9_847f2536e21d4612a9106f61da4366e1~mv2.jpg",
  },
  {
    name: "Dr. Tanmay Dutta",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/eee/faculty_profile.php?name=td",
    imageUrl: "https://www.iitg.ac.in/eee/faculty/b6503d48be1e2ee97f22d06bf3d30631.jpg",
  },
  {
    name: "Dr. Tarkes Dora Pallicitiy",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://iitg.ac.in/mech/faculty/tarkes/",
    imageUrl: "https://iitg.ac.in/mech/media/images/tarkes_300x400_wU9rRu6.original.jpg",
  },
  {
    name: "Dr. Teena Sharma",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://fac.iitg.ac.in/teena/",
    imageUrl: "https://fac.iitg.ac.in/teena/img/teena.jpg",
  },
  {
    name: "Dr. Ujendra Kr. Komal",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/mech/faculty/ukk/",
    imageUrl: "https://www.iitg.ac.in/mech/media/images/Picture_5.original.png",
  },
  {
    name: "Dr. Vivek Padmanabha",
    position: "Faculty",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/civil/home_faculty_profile.php?slno=S1FHM3A5ZDNvWFpaSlluVzNRTHZ2Zz09",
    imageUrl: "https://www.iitg.ac.in/civil/faculty/a4bbc816a415c026f6658674b0c21ee42d8128fejpeg",
  },
];

// ----- Helpers -----
const initialsOf = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

// ----- Card -----
const MemberCard = ({ member }) => {
  const [broken, setBroken] = useState(false);

  return (
    <article className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100">
      {/* Badge */}
      <span className="absolute top-3 left-3 z-10 px-2 py-0.5 text-xs tracking-wide rounded-full bg-accent/10 text-accent border border-accent/20">
        {member.position}
      </span>

      {/* Image / Fallback */}
      <div className="relative aspect-[4/4] bg-gray-100">
        {!broken ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
              <span className="text-accent font-semibold">
                {initialsOf(member.name)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900 font-inter">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-gray-600">{member.affiliation}</p>

        {member.website && (
          <Link
            to={member.website}
            className="mt-4 inline-flex items-center justify-center px-3 py-1.5 rounded-md text-sm font-medium text-white bg-primary hover:opacity-90 transition"
          >
            Website →
          </Link>
        )}
      </div>
    </article>
  );
};

// ----- Page -----
const TeamPage = () => {
  return (
    <Element name="people">
      {" "}
      {/* 👈 scroll target */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* background geometry (unchanged) */}
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
        {/* your original blocks */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-dark/10 -translate-y-1/3 -rotate-45" />
        <div className="absolute top-1/2 right-1/5 w-96 h-96 bg-primary-light/10 translate-y-1/4 rotate-12" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary-dark/10 translate-x-1/4 -translate-y-1/4 rotate-30" />
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-primary-light/10 -rotate-12" />

        {/* extra rotated squares */}
        <div className="absolute top-1/4 right-1/4 w-44 h-44 bg-primary-dark/10 rotate-12" />
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-primary-light/10 -rotate-45" />
        <div className="absolute bottom-1/5 left-1/5 w-36 h-36 bg-primary-dark/10 rotate-6" />

        {/* outline circles */}
        <div className="absolute top-12 right-24 w-40 h-40 rounded-full border border-white/10" />
        <div className="absolute top-28 right-36 w-24 h-24 rounded-full border-2 border-primary-light/20" />
        <div className="absolute bottom-16 left-24 w-20 h-20 rounded-full border border-primary-dark/20" />

        {/* triangles (clipped) */}
        <div
          className="absolute top-20 left-10 w-28 h-28 bg-primary-light/15"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div
          className="absolute right-12 bottom-24 w-24 h-24 bg-primary-dark/15 rotate-12"
          style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
        />

        {/* small dot grid (very subtle) */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            color: "rgba(255,255,255,0.9)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* faint diagonal bar for structure */}
        <div
          className="absolute -left-20 top-1/3 w-[120%] h-20 rotate-2 opacity-5"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,.15), rgba(255,255,255,0))",
          }}
        />
      </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
              People
            </h2>
            <p className="mt-2 text-base text-gray-600">Team Members</p>
            <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
            {teamMembers.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default TeamPage;
