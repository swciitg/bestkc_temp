import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Element } from "react-scroll";

const ContactUs = () => {
  const org = {
    title: "North Eastern Science & Technology (NEST) Cluster",
    addressLines: [
      "NEST Cluster Office",
      "Indian Institute of Technology Guwahati",
      "Amingaon, Guwahati, Assam – 781039",
      "India",
    ],
    website: "https://swc.iitg.ac.in/nest/",
    email: "nest@iitg.ac.in",
    phone: "+91 70860 50764",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Query from Contact Page");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nQuery:\n${formData.query}`
    );
    window.location.href = `mailto:${org.email}?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
    setFormData({ name: "", contact: "", query: "" });
  };

  return (
    <Element name="contact-us">
      <section className="w-full bg-white">
        {/* Header */}
        <header className="text-center mt-24 mb-12">
          <h2 className="text-5xl md:text-5xl font-playfair text-gray-900">
            Contact Us
          </h2>
          {/* <p className="mt-2 text-base text-gray-600">
            Our Esteemed Coordinators
          </p> */}
          <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full" />
        </header>

        {/* Content */}
        <div className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: details */}
              <div>
                <h2 className="text-2xl md:text-3xl font-playfair text-[#1b2850] mb-6">
                  {org.title}
                </h2>

                <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 text-[#004179]" />
                    <div>
                      {org.addressLines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaGlobe className="mr-3 text-[#004179]" />
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#004179]/40 underline-offset-4 hover:decoration-[#004179]"
                    >
                      {org.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-[#004179]" />
                    <a
                      href={`mailto:${org.email}`}
                      className="underline decoration-[#004179]/40 underline-offset-4 hover:decoration-[#004179]"
                    >
                      {org.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <FaPhoneAlt className="mr-3 text-[#004179]" />
                    <a
                      href={`tel:${org.phone}`}
                      className="underline decoration-[#004179]/40 underline-offset-4 hover:decoration-[#004179]"
                    >
                      {org.phone}
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-5 py-2.5 rounded-md bg-[#004179] text-white font-medium hover:bg-[#00325d] transition"
                    >
                      Send a Query
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: map */}
              <div className="relative">
                <div className="rounded-lg border border-gray-200 overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4717.572343107409!2d91.69253177541485!3d26.192320477083978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b6bf26969f1%3A0xc752809363b33443!2sIndian%20Institute%20of%20Technology%20Guwahati!5e1!3m2!1sen!2sin!4v1756308251670!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="mt-3 text-gray-500 text-sm">
                  Location: IIT Guwahati Campus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-4 text-[#1b2850]">
                Send Your Query
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#004179]/40 outline-none"
                />
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="Your Contact (Email / Phone)"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#004179]/40 outline-none"
                />
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  placeholder="Your Query"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#004179]/40 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#004179] text-white font-medium py-2 rounded-md hover:bg-[#00325d] transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </Element>
  );
};

export default ContactUs;
