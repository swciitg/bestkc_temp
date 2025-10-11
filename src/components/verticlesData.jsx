const VerticalCard = ({ icon, title, text }) => (
  <div
    className="cursor-pointer mt-12 bg-white rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 text-center border border-gray-100"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    {text && <p className="text-sm text-gray-600">{text}</p>}
  </div>
);

export default VerticalCard