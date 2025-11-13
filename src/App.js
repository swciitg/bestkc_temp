import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import VerticalPage from "./pages/VerticalPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import CoordinatorPage from "./pages/CoordinatorPage.jsx";
import CoordinatorPage2 from "./pages/CoordinatorPage2.jsx";
import CoordinatorPage3 from "./pages/CoordinatorPage3.jsx";
import PeoplePage from "./pages/PeoplePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ClusterFormation from "./pages/ClusterFormation.jsx";
import OpportunityPage from "./pages/OpportunityPage.jsx";
import ResourcePage from "./pages/ResourcePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import LogoExplanation from "./pages/Logo.jsx";
import Activities from "./pages/Activities.jsx";
import CurtainAnimation from "./components/curtains.jsx";
import Courses from "./pages/courses.jsx";
import Spokes from "./pages/Spokes.jsx";
const App = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  return (
    <BrowserRouter basename={`/nest`}>
      {showCurtain && <CurtainAnimation setShowCurtain={setShowCurtain} />}
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/vertical" element={<VerticalPage />} />3
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<CoordinatorPage />} />
          <Route path="/team2" element={<CoordinatorPage2 />} />
          <Route path="/team3" element={<CoordinatorPage3 />} />
          <Route path="/Spokes" element={<Spokes />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cluster-formation" element={<ClusterFormation />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/resources" element={<ResourcePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/logo" element={<LogoExplanation />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
