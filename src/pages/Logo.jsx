import { Circle, Mountain, Leaf, Cpu, Cog, Sun } from "lucide-react";

export default function LogoExplanation() {
  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6 md:px-12">
        


      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          NEST Cluster – Logo Explanation
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-xl">
          The logo of the North Eastern Science and Technology (NEST) Cluster reflects 
          innovation, inclusivity, and the technological essence of the North-East region 
          through carefully chosen elements.
        </p>
      </div>

      {/* Circular Representation */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Core Values - Top Section */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-72 h-72 rounded-full border-8 border-green-100 flex items-center justify-center bg-gradient-to-br from-white to-green-50 shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full shadow-inner flex flex-col items-center justify-center p-6">
                <Cpu className="text-green-600 w-24 h-24 mb-3" />
                <h3 className="font-bold text-3xl text-gray-800 mb-3">Core Values</h3>
                <p className="text-lg text-gray-600 text-center leading-relaxed">
                  Innovation · Sustainability<br />Technology · Growth
                </p>
              </div>
            </div>
            {/* Decorative glow effect */}
            <div className="absolute inset-0 rounded-full bg-green-200 opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sunrise Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-yellow-100 hover:border-yellow-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Sun className="text-yellow-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Sunrise</h4>
              <p className="text-sm text-gray-600">Symbolizes <strong>North-East India</strong>, where the sun rises first in India.</p>
              <p className="text-sm text-gray-600">Represents <strong>new beginnings, hope, and continuous innovation</strong>.</p>
            </div>
          </div>

          {/* Gear Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100 hover:border-blue-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Cog className="text-blue-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Gear</h4>
              <p className="text-sm text-gray-600">Represents <strong>grassroots technology and engineering innovation</strong>.</p>
              <p className="text-sm text-gray-600">Bridges traditional skills with advanced industry applications.</p>
            </div>
          </div>

          {/* Mountains Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-gray-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Mountain className="text-gray-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Mountains</h4>
              <p className="text-sm text-gray-600">Depict the <strong>geographical identity</strong> of the North-East region.</p>
              <p className="text-sm text-gray-600">Signify <strong>stability, strength, and resilience</strong> in science and technology growth.</p>
            </div>
          </div>

          {/* Leaf Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100 hover:border-green-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Leaf className="text-green-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Leaf Motif</h4>
              <p className="text-sm text-gray-600">Represents <strong>biodegradable plastics and green technologies</strong>.</p>
              <p className="text-sm text-gray-600">Reinforces the <strong>eco-friendly, sustainable focus</strong>.</p>
            </div>
          </div>

          {/* Circuit Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 hover:border-purple-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Circle className="text-purple-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Circuit Lines</h4>
              <p>Represent <strong>AI, semiconductor, and advanced technology</strong> initiatives.</p>
              <p className="text-sm text-gray-600">Convey the integration of <strong>nature with modern tech</strong>.</p>
            </div>
          </div>

          {/* Bamboo Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-lime-100 hover:border-lime-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-lime-100 flex items-center justify-center mb-4">
                <Leaf className="text-lime-600 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">Bamboo</h4>
              <p>Highlights the <strong>Centre of Excellence in Bamboo Technology</strong>.</p>
              <p className="text-sm text-gray-600">Symbolizes <strong>sustainability, tradition, and eco-friendliness</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      

      {/* Typography Section */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Typography</h3>
        <p className="text-gray-600 mb-4">
          <span className="font-bold text-green-600 text-xl">“NEST”</span> is styled in a bold modern font 
          symbolizing <strong>trust, professionalism, and vision</strong>. The green color embodies 
          <strong> growth, nature, and sustainability</strong>, while the full name below 
          — <em>North Eastern Science and Technology Cluster</em> — maintains a formal, 
          institutional identity.
        </p>
      </div>

      {/* Divider Line */}
      <div className="w-24 h-1 bg-green-500 mx-auto my-10 rounded-full"></div>

      {/* Tagline */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tagline</h3>
        <p className="text-lg font-medium text-gray-700">
          <span className="text-green-600">Innovation</span> ·{" "}
          <span className="text-blue-600">Sustainability</span> ·{" "}
          <span className="text-amber-600">Technology</span> ·{" "}
          <span className="text-gray-800">Growth</span>
        </p>
        <p className="text-gray-600 mt-3">
          Capturing the mission and vision of the cluster in four key values.
        </p>
      </div>
    </section>
  );
}
