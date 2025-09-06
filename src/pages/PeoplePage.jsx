import React, { useState } from "react";

// ---- Data (coordinators first, then everyone else) ----
const coordinators = [
  {
    name: "Prof. Vimal Katiyar",
    position: "Coordinator",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=vk",
    imageUrl: "https://placehold.co/300x225/E0F7F7/0A345A?text=Vimal",
  },
  {
    name: "Prof. Rakhi Chaturvedi",
    position: "Coordinator",
    website: "https://www.iitg.ac.in/rakhi_chaturvedi/profile.html",
    imageUrl: "https://placehold.co/300x225/E0F7F7/0A345A?text=Rakhi",
  },
];

const faculty = [
  { name: "Dr. Amit Kumar", website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=amk" },
  { name: "Dr. Ankush Bag", website: "https://www.iitg.ac.in/nano/cfn/ankushfaculty.html" },
  { name: "Dr. Chiranjib Sur", website: "https://www.iitg.ac.in/sob/faculty_profile.php?id=Y2hpcmFuamli" },
  { name: "Dr. Debanga Raj Neog", website: "https://debanga.github.io/" },
  { name: "Dr. Pugazhenthi", website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=gp" },
  { name: "Dr. Mahima Arrawatia", website: "https://jeeadv.iitg.ac.in/eee/faculty_research.php?name=mha" },
  { name: "Dr. Poonam Kumari", website: "https://iitg.ac.in/mech/faculty/kpmech/" },
  { name: "Dr. Raghavendra Gupta", website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=rg" },
  { name: "Dr. Ravindra Kumar Jha", website: "https://www.iitg.ac.in/eee/faculty_profile.php?name=rkj" },
  { name: "Dr. Sajan Kapil", website: "https://iitg.ac.in/mech/faculty/sajankapil/" },
  { name: "Dr. Sreedeep Sekharan", website: "http://sree21s.wixsite.com/srees" },
  { name: "Dr. Tanmay Dutta", website: "https://www.iitg.ac.in/eee/faculty_profile.php?name=td" },
  { name: "Dr. Tarkes Dora", website: "https://iitg.ac.in/mech/faculty/tarkes/" },
  { name: "Dr. Teena Sharma", website: "https://fac.iitg.ac.in/teena/" },
  { name: "Dr. Ujendra Kumar Komal", website: "https://www.iitg.ac.in/mech/faculty/ukk/" },
  { name: "Dr. VIvek Padmanabha", website: "https://www.iitg.ac.in/civil/home_faculty_profile.php?slno=S1FHM3A5ZDNvWFpaSlluVzNRTHZ2Zz09" },
].map(p => ({
  ...p,
  position: "Faculty",
  imageUrl: `https://placehold.co/300x225/F3F4F6/374151?text=${encodeURIComponent(p.name.split(' ').slice(0,2).join(' '))}`,
}));

const people = [...coordinators, ...faculty];

// ---- Helpers ----
const initialsOf = (name = "") =>
  name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join("");

// ---- Card ----
const PersonCard = ({ person }) => {
  const [broken, setBroken] = useState(false);

  return (
    <a
      href={person.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-xl"
      aria-label={`${person.name} – open website`}
      title={`${person.name} – open website`}
    >
      <article className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100">
        {/* Badge */}
        <span className="absolute top-3 left-3 z-10 px-2 py-0.5 text-xs tracking-wide rounded-full bg-accent/10 text-accent border border-accent/20">
          {person.position}
        </span>

        {/* Image / Fallback */}
        <div className="relative aspect-[4/3] bg-gray-100">
          {!broken ? (
            <img
              src={person.imageUrl}
              alt={person.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setBroken(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="text-accent font-semibold">{initialsOf(person.name)}</span>
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        {/* Body */}
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold text-gray-900 font-inter">
            {person.name}
          </h3>
          {/* If you ever add affiliations, show here */}
          {/* <p className="mt-1 text-sm text-gray-600">{person.affiliation}</p> */}
          <p className="mt-2 text-sm text-primary/70 group-hover:text-primary transition">
            Visit website →
          </p>
        </div>
      </article>
    </a>
  );
};

// ---- Page ----
const PeoplePage = () => {
  return (
    <section className="relative py-20">
      {/* Decorative geometry (same language as your other sections) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-20"
          style={{ background: "radial-gradient(closest-side, rgba(1,121,130,.35), transparent)" }}
        />
        <div
          className="absolute -bottom-24 -right-20 w-[30rem] h-[30rem] blur-3xl opacity-20"
          style={{ background: "radial-gradient(closest-side, rgba(74,52,128,.35), transparent)" }}
        />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-dark/10 -translate-y-1/3 -rotate-45" />
        <div className="absolute top-1/2 right-1/5 w-96 h-96 bg-primary-light/10 translate-y-1/4 rotate-12" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary-dark/10 translate-x-1/4 -translate-y-1/4 rotate-30" />
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-primary-light/10 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-900">People</h2>
          <p className="mt-2 text-base text-gray-600">Coordinators & Faculty</p>
          <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
          {people.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeoplePage;
