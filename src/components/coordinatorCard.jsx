import { useState } from "react";
import { Link } from "react-router-dom";
import { initialsOf } from "../pages/CoordinatorPage.jsx";

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


export default CoordinatorCard