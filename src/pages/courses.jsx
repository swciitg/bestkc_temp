import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'

const Courses = () => {

    const slides = [
        c1 , c2, c3, c4, c5, c6
    ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-8xl w-full">
            {slides.map((src, idx) => (
                <div
                key={idx}
                className="rounded-xl p-4 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                <img
                    src={src}
                    alt={`img-${idx}`}
                    className="w-full h-fit h-72 object-cover"
                />
                </div>
            ))}
            </div>
    </div>
  );
};

export default Courses;