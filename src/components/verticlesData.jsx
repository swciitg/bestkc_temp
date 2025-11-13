const VerticalCard = ({ icon, title, images }) => (
  <div className="w-full cursor-pointer mt-12 bg-white rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 text-center border border-gray-100">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
      {icon}
    </div>
    <h3 className="text-xl  font-semibold text-gray-800 mb-2">{title}</h3>
    {/* <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 mb-8"> */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-8xl w-full">
      {images.length > 1 &&
        images.map((src, idx) => (
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

    {images.length === 1 && (
      <div className="rounded-xl p-4 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={images[0]}
          alt={`img`}
          className="w-full h-fit h-72 object-cover"
        />
      </div>
    )}
  </div>
  // </div>
);

export default VerticalCard;
