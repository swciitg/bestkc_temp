// import { useState } from "react";
// import { Link } from "react-router-dom";
// import CoordinatorCard from "../components/membersCard";
import CoordinatorCard from "../components/coordinatorCard.jsx";

const coordinators = [
  {
    name: "Prof. Devendra Jalihal",
    position: "Coordinator",
    affiliation: "Chairman of NEST Cluster",
    website: "https://www.iitg.ac.in/iitg_faculty_details?fac=ZXpYUlJGUmZrK0hld1BzSVN0bnBUQT09",
    imageUrl: "https://imgs.search.brave.com/3VimyUbpoli6Dhxakp6KKJb6TBq5inE8fk8l0DsbC1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paXRn/LmFjLmluL3N0b3Jh/Z2UvbWVkaWEvYmY5/MGRiNDY5OWQxMDk4/OTk0MDk4MWZmOGU2/OTMxYTUuJTIwRGV2/ZW5kcmElMjBKYWxp/aGFsLCUyMERpcmVj/dG9yLCUyMElJVCUy/MEd1d2FoYXRp",
  },
  {
    name: "Prof. Vimal Katiyar",
    position: "Coordinator",
    affiliation: "Project Director and Faculty Incharge",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=vk",
    imageUrl: "https://event.iitg.ac.in/researchconclave/rc20/assets/img/Vimal%20Katiyar.png",
  },
  {
    name: "Prof. Rakhi Chaturvedi",
    position: "Coordinator",
    affiliation: "Project Coordinator",
    website: "https://www.iitg.ac.in/rakhi_chaturvedi/profile.html",
    imageUrl: "https://images.news18.com/ibnlive/uploads/2022/03/iit-guwahati-164665401116x9.jpg",
  },
];


const IHGT = [
  {
    name: "Dr. Sajan Kapil (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://iitg.ac.in/mech/faculty/sajankapil/",
    imageUrl: "https://iitg.ac.in/mech/media/images/CET_4279.original.jpg",
  },
  {
    name: "Dr. Vivek Padmanabha (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/civil/home_faculty_profile.php?slno=S1FHM3A5ZDNvWFpaSlluVzNRTHZ2Zz09",
    imageUrl: "https://www.iitg.ac.in/civil/faculty/a4bbc816a415c026f6658674b0c21ee42d8128fejpeg",
  }
];

const THAS = [

  {
    name: "Dr. Teena Sharma (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://fac.iitg.ac.in/teena/",
    imageUrl: "https://fac.iitg.ac.in/teena/img/teena.jpg",
  },
  {
    name: "Dr. Chiranjib Sur (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/sob/faculty_profile.php?id=Y2hpcmFuamli",
    imageUrl: "https://www.iitg.ac.in/sob/faculty/chiranjib_sur.jpg",
  },
  {
    name: "Dr. Mahima Arrawatia (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://jeeadv.iitg.ac.in/eee/faculty_research.php?name=mha",
    imageUrl: "https://www.iitg.ac.in/storage/faculty/3229img.jpg",
  },
  
  {
    name: "Dr. Ankush Bag",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/nano/cfn/ankushfaculty.html",
    imageUrl: "https://www.iitg.ac.in/nano/cfn/pictures/ankushbag.jpg",
  },
  
  {
    name: "Dr. Ravindra Kr. Jha",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/eee/faculty_profile.php?name=rkj",
    imageUrl: "https://www.iitg.ac.in/eee/faculty/d19bc93884b38e4c09c1ccbc505ccab4.jpg",
  },
  {
    name: "Dr. Tanmay Dutta",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/eee/faculty_profile.php?name=td",
    imageUrl: "https://www.iitg.ac.in/eee/faculty/b6503d48be1e2ee97f22d06bf3d30631.jpg",
  },
  {
    name: "Dr. Debanga Raj Neog",
    position: "Faculty",
    affiliation: "  ",
    website: "https://debanga.github.io/",
    imageUrl: "https://debanga.github.io/images/debanga-554x576.jpg",
  },
  
]

const BISD = [
  {
    name: "Prof. Rakhi Chaturvedi (PI)",
    position: "Coordinator",
    affiliation: " ",
    website: "https://www.iitg.ac.in/rakhi_chaturvedi/profile.html",
    imageUrl: "https://images.news18.com/ibnlive/uploads/2022/03/iit-guwahati-164665401116x9.jpg",
  },
   {
    name: "Dr. Poonam Kumari (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://iitg.ac.in/mech/faculty/kpmech/",
    imageUrl: "https://iitg.ac.in/mech/media/images/CET_4107.original.jpg",
  },
  {
    name: "Dr. Ujendra Kr. Komal",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/mech/faculty/ukk/",
    imageUrl: "https://www.iitg.ac.in/mech/media/images/Picture_5.original.png",
  },
  {
    name: "Dr. Tarkes Dora Pallicitiy",
    position: "Faculty",
    affiliation: "  ",
    website: "https://iitg.ac.in/mech/faculty/tarkes/",
    imageUrl: "https://iitg.ac.in/mech/media/images/tarkes_300x400_wU9rRu6.original.jpg",
  },
]

const BPWM = [
  {
    name: "Dr. Amit Kumar (PI)",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=amk",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/eaec5dc6f1a635760907dcb8f702f584.jpg",
  },
  {
    name: "Prof. Vimal Katiyar (PI)",
    position: "Coordinator",
    affiliation: " ",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=vk",
    imageUrl: "https://event.iitg.ac.in/researchconclave/rc20/assets/img/Vimal%20Katiyar.png",
  },
 
  {
    name: "Prof. G. Pugazhenthi",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=gp",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/646a8812bcc9f8acfb7c40a3ff9e606a.jpg",
  },
  {
    name: "Dr. Raghvendra Gupta",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=rg",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/075425f5976765e745fe90b7f0369d7a.jpg",
  },
{
    name: "Dr. Pankaj Tiwari",
    position: "Faculty",
    affiliation: "  ",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=pt",
    imageUrl: "https://www.iitg.ac.in/chemeng/faculty/d745db61aae61a5d4bb97fee0ebbae69026025a6.jpg",
  },
  {
    name: "Prof. Sreedeep S.",
    position: "Faculty",
    affiliation: "  ",
    website: "http://sree21s.wixsite.com/srees",
    imageUrl: "https://static.wixstatic.com/media/9462d9_847f2536e21d4612a9106f61da4366e1~mv2.jpg/v1/fill/w_186,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9462d9_847f2536e21d4612a9106f61da4366e1~mv2.jpg",
  },
  
]


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
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
            Team
          </h2>
          {/* <p className="mt-2 text-base text-gray-600">
            Our Esteemed Coordinators
          </p> */}
          <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
        </header>

        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coordinators.map((c, idx) => (
            <div
              key={c.name}
              className={
                idx === 0
                  ? "sm:col-span-2 flex justify-center"
                  : "flex justify-center"
              }
            >
              <CoordinatorCard member={c} />
            </div>
          ))}
        </div>

        {/* Header */}
          <header className="text-center mt-24 mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
              Innovation Hub on Grassroots Technologies
            </h2>
            {/* <p className="mt-2 text-base text-gray-600">Team Members</p> */}
            <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7">
            {IHGT.slice(0 , Math.floor(IHGT.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>
          <div className="flex justify-center gap-7 mt-7">
            {IHGT.slice(Math.floor(IHGT.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>


          <header className="text-center mt-24 mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
              Technology Hub for AI & Semiconductor
            </h2>
            {/* <p className="mt-2 text-base text-gray-600">Team Members</p> */}
            <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7">
            {THAS.slice(0 , Math.floor(THAS.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>
          <div className="flex justify-center mt-7 mr-7 ">
            {THAS.slice(Math.floor(THAS.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>


          <header className="text-center mt-24 mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
              CoE for Bamboo Innovation & Skill Development
            </h2>
            {/* <p className="mt-2 text-base text-gray-600">Team Members</p> */}
            <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7">
            {BISD.slice(0 , Math.floor(BISD.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>
          <div className="flex justify-center mt-7 mr-7">
            {BISD.slice(Math.floor(BISD.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>

          <header className="text-center mt-24 mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">
              Centre on Biodegradable Plastics & Waste Management
            </h2>
            {/* <p className="mt-2 text-base text-gray-600">Team Members</p> */}
            <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7">
            {BPWM.slice(0 , Math.floor(BPWM.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>
          <div className="flex justify-center gap-7 mt-7">
            {BPWM.slice(Math.floor(BPWM.length / 3) * 3).map((m) => (
              <CoordinatorCard key={m.name} member={m} />
            ))}
          </div>
      </div>
    </section>
  );
};

export default CoordinatorPage;
