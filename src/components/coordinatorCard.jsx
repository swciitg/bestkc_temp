import { useState } from "react";
import { Link } from "react-router-dom";
import { initialsOf } from "../pages/CoordinatorPage.jsx";

const CoordinatorCard = ({ member }) => {
  const [broken, setBroken] = useState(false);

  return (
    <article className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100 w-full max-w-[300px]">
      {/* <span className="absolute top-3 left-3 z-10 px-2 py-0.5 text-xs tracking-wide rounded-full bg-accent/10 text-accent border border-accent/20">
        {member.position}
      </span> */}

      <div className="relative aspect-[4/4] bg-gray-100">
        {!broken ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
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

      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900 font-inter">
          {member.name}
        </h3>
        <p className="mt-1 text-lg font-bold text-gray-600">
          {member.affiliation}
        </p>

        {member.website && (
          <Link
            to={member.website}
            href={member.website}
            className="mt-4 inline-flex items-center justify-center px-3 py-1.5 rounded-md text-sm font-medium text-white bg-primary hover:opacity-90 transition"
          >
            Website →
          </Link>
        )}
      </div>
    </article>
  );
};


export default CoordinatorCard