import React from "react";
import ComingSoon from "../components/Coming";
import poster3 from "../assets/poster3.png";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-center">
          <img src={poster3} className="mb-16 mt-16" />
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
