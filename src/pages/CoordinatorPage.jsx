import { useState } from "react";
import { Link } from "react-router-dom";

const coordinators = [
  {
    name: "Prof. Devendra Jalihal",
    position: "Coordinator",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/iitg_faculty_details?fac=ZXpYUlJGUmZrK0hld1BzSVN0bnBUQT09",
    imageUrl: "https://imgs.search.brave.com/3VimyUbpoli6Dhxakp6KKJb6TBq5inE8fk8l0DsbC1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paXRn/LmFjLmluL3N0b3Jh/Z2UvbWVkaWEvYmY5/MGRiNDY5OWQxMDk4/OTk0MDk4MWZmOGU2/OTMxYTUuJTIwRGV2/ZW5kcmElMjBKYWxp/aGFsLCUyMERpcmVj/dG9yLCUyMElJVCUy/MEd1d2FoYXRp",
  },
  {
    name: "Prof. Vimal Katiyar",
    position: "Coordinator",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=vk",
    imageUrl: "https://event.iitg.ac.in/researchconclave/rc20/assets/img/Vimal%20Katiyar.png",
  },
  {
    name: "Prof. Rakhi Chaturvedi",
    position: "Coordinator",
    affiliation: "Affiliation TBD",
    website: "https://www.iitg.ac.in/rakhi_chaturvedi/profile.html",
    imageUrl: "https://images.news18.com/ibnlive/uploads/2022/03/iit-guwahati-164665401116x9.jpg",
  },
];

const initialsOf = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const CoordinatorCard = ({ coordinator }) => {
  const [broken, setBroken] = useState(false);

  return (
    <article className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100 w-full max-w-sm">
      <span className="absolute top-3 left-3 z-10 px-2 py-0.5 text-xs tracking-wide rounded-full bg-accent/10 text-accent border border-accent/20">
        {coordinator.position}
      </span>

      <div className="relative aspect-[4/3] bg-gray-100">
        {!broken ? (
          <img
            src={coordinator.imageUrl}
            alt={coordinator.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
              <span className="text-accent font-semibold">
                {initialsOf(coordinator.name)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900 font-inter">
          {coordinator.name}
        </h3>
        <p className="mt-1 text-sm text-gray-600">{coordinator.affiliation}</p>

        {coordinator.website && (
          <Link
            to={coordinator.website}
            href={coordinator.website}
            className="mt-4 inline-flex items-center justify-center px-3 py-1.5 rounded-md text-sm font-medium text-white bg-primary hover:opacity-90 transition"
          >
            Website →
          </Link>
        )}
      </div>
    </article>
  );
};

// ===== Page =====
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
            Coordinators
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Our Esteemed Coordinators
          </p>
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
              <CoordinatorCard coordinator={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorPage;
