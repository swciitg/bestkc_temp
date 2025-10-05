import React, { useState } from "react";
import rect from "../assets/rect.jpg";
import sq from "../assets/sq.png";

let data = [
  {
    name: "Health & Wellness",
    imgs: [rect, sq, rect, sq, rect, sq, rect, sq, rect, sq, rect, sq, ],
  },
  {
    name: "Urban Life",
    imgs: [rect, sq, rect, sq, rect, sq, rect, sq, rect, sq, rect, sq],
  },
  {
    name: "Futuristic Tech & Solutions",
    imgs: [rect, sq, rect, sq, rect, sq, rect, sq, rect, sq, rect, sq],
  },
  {
    name: "Funding Patners",
    imgs: [rect, sq, rect, sq, rect, sq, rect, sq, rect, sq, rect, sq],
  },
  {
    name: "Others",
    imgs: [rect, sq, rect, sq, rect, sq],
  },
];

const Collaborations = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center md:justify-start px-4 md:px-8 lg:px-16"
        style={{
          backgroundImage:
            "url('https://www.bestkc.in/wp-content/uploads/2024/07/resources-bg-01.png')",
        }}
      >
        {/* Text Box */}
        <div
          className="bg-primary-dark/95 text-accent font-sans tracking-tight p-6 md:p-8 lg:p-10 
                w-full max-w-md md:max-w-lg lg:max-w-xl md:ml-8 lg:ml-40 shadow-xl min-h-48"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">Thematic Areas</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium">&gt; Collaborations</h2>
        </div>
      </section>

      <section className="h-auto bg-teal-500 flex justify-center items-center px-4 py-8 md:py-16 lg:py-24">
        <div className="h-auto w-full max-w-7xl bg-white flex flex-col">
          <div className="min-h-[10vh]">
            <ul className="w-full flex flex-wrap md:flex-nowrap text-center gap-1">
              {data.map((ele, index) => (
                <li 
                  key={index} 
                  className={`p-2 md:p-3 lg:p-4 flex-1 min-w-[120px] md:min-w-0 cursor-pointer transition-colors ${
                    num === index ? 'bg-blue-200' : 'bg-light-gray-bg hover:bg-gray-200'
                  }`}
                  onClick={() => setNum(index)}
                >
                  <p className="text-sm md:text-lg lg:text-xl xl:text-[22px] font-semibold text-gray-700 leading-tight">
                    {ele.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-h-28 p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 justify-items-center">
              {data[num].imgs.map((img, index) => (
                <div key={index} className="w-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${data[num].name} ${index + 1}`}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborations;
