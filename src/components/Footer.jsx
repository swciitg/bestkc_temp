const Footer = () => {
  return (
    <footer className="font-playfair text-white text-center">
      {/* Main footer block */}
      <div className="bg-[#00899e] py-10">
        <div className="max-w-screen-xl mx-auto px-8 space-y-2 text-sm md:text-base leading-relaxed">
          <p>Section 8 Company</p>
          {/* <p>Foundation for Bengaluru Science and Technology</p> */}
          <p>Indian Institute of Technology, Guwahati,</p>
          <p>Guwahati – 781039, Assam, India</p>
          <p>Phone: 080 22933537</p>
          {/* <p>CIN : U72100KA2024NPL188452</p> */}

          <hr className="border-t border-white/50 my-6" />

          <p>copyright@NESTCluster2025</p>
        </div>
      </div>

      {/* Darker strip at the end */}
      <div className="bg-[#006b7a] py-3">
        <p className="text-xs md:text-sm tracking-wide">
          Maintained by <span className="font-semibold">SWC IITG</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
