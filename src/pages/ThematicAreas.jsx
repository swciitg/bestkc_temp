import React, { useEffect } from 'react';

function ThematicAreas() {
  useEffect(() => {
    // Image map responsiveness script
    const makeImageMapsResponsive = () => {
      const imageMaps = document.querySelectorAll('img[usemap]');
      
      imageMaps.forEach((img) => {
        const mapName = img.getAttribute('usemap').slice(1);
        const map = document.querySelector(`map[name="${mapName}"]`);
        
        if (!map) return;
        
        const areas = map.querySelectorAll('area');
        const originalCoords = Array.from(areas).map(area => area.getAttribute('coords'));
        
        const resizeMap = () => {
          const imgWidth = img.naturalWidth;
          const imgHeight = img.naturalHeight;
          const displayWidth = img.offsetWidth;
          const displayHeight = img.offsetHeight;
          
          const scaleX = displayWidth / imgWidth;
          const scaleY = displayHeight / imgHeight;
          
          areas.forEach((area, index) => {
            const coords = originalCoords[index].split(',').map(Number);
            const scaledCoords = coords.map((coord, i) => {
              return i % 2 === 0 ? Math.round(coord * scaleX) : Math.round(coord * scaleY);
            });
            area.setAttribute('coords', scaledCoords.join(','));
          });
        };
        
        img.onload = resizeMap;
        window.addEventListener('resize', resizeMap);
        resizeMap();
      });
    };
    
    makeImageMapsResponsive();
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'AREA') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('resize', () => {});
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="w-full font-inter">
      {/* Title Section */}
      <div className="py-8 bg-accent bg-cover bg-center bg-no-repeat relative" id='image-div'
      style={{
          backgroundImage: "url('https://www.bestkc.in/wp-content/uploads/2024/07/thematics-bg-01.png')"
        }}>
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-16">Thematic areas</h1>
          <img 
            src="https://www.bestkc.in/wp-content/uploads/2024/07/thematics-img-01.png" 
            useMap="#image-map" 
            alt="Thematic Areas Interactive Map"
            className="w-3/4 max-w-full mx-auto"
          />
        </div>
      </div>

      {/* Interactive Image Map Section */}
      <div className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <map name="image-map">
            <area 
              href="#image-div" 
              coords="79,247,91,159,140,75,207,29,303,4,304,189,302,228,216,299,129,371,97,319,86,286" 
              shape="poly"
              alt="Health & Wellness"
              title="Health & Wellness"
            />
            <area 
              href="#urban-life" 
              coords="133,375,306,238,491,364,421,427,333,458,235,449,175,414,151,395" 
              shape="poly"
              alt="Urban Life"
              title="Urban Life"
            />
            <area 
              href="#futuristic-technologies" 
              coords="309,5,309,228,493,356,520,304,533,235,519,150,489,99,433,44,377,18" 
              shape="poly"
              alt="Futuristic Technologies"
              title="Futuristic Technologies"
            />
          </map>
        </div>
      </div>

      {/* Health & Wellness Section */}
      <div 
        id="health-wellness" 
        className="py-8"
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-8">Health & Wellness</h2>
          <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
            <p>
              <strong>Health & Wellness:</strong> Health and well-being require a multidisciplinary approach to studying entire systems, from biological cells to individuals to social groups. Activities envisaged under this broad thematic area cut across academic boundaries and involve an integrated approach to prevent disease and illness, encourage healthy lifestyles in individuals and communities, and reduce the cost and impact of illnesses. Themes are identified under this are One Health and Digital Health.
            </p>
            
            <div className="mt-6">
              <p>
                <strong>One Health:</strong><br />
                Vision: Build a network of practitioners and scientists who will engage with and inform policy-makers, city planners, health authorities, NGOs, municipal bodies and citizens, to minimize infectious and zoonotic disease risks to people and mitigate the challenges that novel outbreaks may bring.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light underline hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
            
            <div className="mt-6">
              <p>
                <strong>Digital Health:</strong><br />
                Vision: Develop the base for a digital health platform to address two specific needs – personalized nutrition and diabetic footcare.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light underline hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Urban Life Section */}
      <div 
        id="urban-life" 
        className="py-8 bg-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://www.bestkc.in/wp-content/uploads/2024/07/thematics-img-02.png')"
        }}
      >
        <div className="max-w-4xl mx-auto text-white px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">Urban life</h2>
          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              <strong>Urban life:</strong> Urbanization is a major social and environmental transformation occurring in countries across the globe. This area is devoted to developing theoretical and applied knowledge for urban management, liveability and sustainability. Themes identified under this are Precision Agriculture, Urban Mobility and Monsoon, Climate & Weather.
            </p>
            
            <div className="mt-6">
              <p>
                <strong>Precision Agriculture:</strong><br />
                Vision: Develop information and technology-based systems to measure variations in conditions within a field and tweak the input accordingly to ensure optimum yield and translate to open field agriculture and space agriculture.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
            
            <div className="mt-6">
              <p>
                <strong>Urban Mobility:</strong><br />
                Vision: Bring together academia, industry partners, government transport authorities and mobility service providers to develop long-term strategies for sustainable urban and megaregional mobility.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/"
                  className="text-primary-light hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
            
            <div className="mt-6">
              <p>
                <strong>Monsoon, Climate & Weather:</strong><br />
                Vision: Use deep science to address important questions related to climate and monsoon variability with deliverables to directly benefit short to sub-seasonal scale forecasting of the monsoon.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Technologies Section */}
      <div 
        id="futuristic-technologies" 
        className="py-8 bg-accent bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://www.bestkc.in/wp-content/uploads/2024/07/thematics-img-03.png')"
        }}
      >
        <div className="max-w-4xl mx-auto text-white px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-8">Futuristic Technologies</h2>
          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              <strong>Futuristic Technologies:</strong> This thematic area aims to support collaborations that will pursue interdisciplinary research on futuristic areas that can drive economic growth through innovation. Themes identified under this are Quantum technologies, Active Matter & Microrobotics and Jet Engines.
            </p>
            
            <div className="mt-6">
              <p>
                <strong>Quantum Technologies:</strong><br />
                Vision: Establish a nodal entity to collectivize the quantum-related research and development in Bangalore to achieve the global goals of quantum technology, including those of the national quantum mission​
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
            
            <div className="mt-6">
              <p>
                <strong>Active Matter and Microrobotics:</strong><br />
                Vision: Bridge the gap between fundamental researchers in theoretical and experimental active matter research and engineers, advance the field at a global scale and address locally relevant problems.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
            
            <div className="mt-6">
              <p>
                <strong>Jet Engines:</strong><br />
                Vision: Develop gas turbine engine for regional transport aircraft laying the foundation for more challenging goals such as building larger engines for commercial aircraft.
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.bestkc.in/collaborations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-primary"
                >
                  Click here to view the Partners
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThematicAreas;