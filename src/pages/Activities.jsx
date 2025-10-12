import poster from '../assets/poster.jpg'

export default function Activities() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <img src={poster} className='mb-16'/>
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 leading-tight">
            Human Resource Empowerment towards use of Artificial Intelligence, Data Science, for Enhancing Organizational Functionality for Civil Engineers
          </h2>
          <div className="flex items-center gap-2 text-lg text-gray-700">
            <span className="font-semibold">THE FUTURE IS</span>
            <span className="text-indigo-700 font-bold">AI TECHNOLOGY</span>
          </div>
        </div>

        {/* Program Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Welcomes */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-200 pb-2">
              Welcomes
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">Visitors from</p>
              <p className="text-2xl font-bold text-gray-800">Northeast Frontier Railways</p>
            </div>
          </div>

          {/* Date & Type */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-200 pb-2">
              Program Schedule
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-3xl font-bold text-gray-800">15-20 September, 2025</p>
              </div>
              <div>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md font-semibold">
                  SPECIALIZED TRAINING PROGRAM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Venue & Organization */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Venue */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-200 pb-2">
              Venue
            </h3>
            <p className="text-lg text-gray-800">Computer Lab (CoE-SUSPOL)</p>
          </div>

          {/* More Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-200 pb-2">
              More Information
            </h3>
            <div className="space-y-2 text-gray-700">
              <div>
                <span className="font-semibold">Organizer:</span>
                <p className="mt-1">Dr. Chiranjib Sur, Mehta School of Data Science and AI</p>
              </div>
              <div className="mt-3">
                <span className="font-semibold">Co-Organizer:</span>
                <p className="mt-1">Prof. Vimal Katiyar, Department of Chemical Engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">
            In collaboration with Mehta School of Data Science and Artificial Intelligence
          </p>
        </div>
      </main>
    </div>
  );
}