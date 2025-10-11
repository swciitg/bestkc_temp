import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VerticalPage from './pages/VerticalPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import CoordinatorPage from './pages/CoordinatorPage.jsx'
import PeoplePage from './pages/PeoplePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ClusterFormation from './pages/ClusterFormation.jsx'
import OpportunityPage from './pages/OpportunityPage.jsx'
import ResourcePage from './pages/ResourcePage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import LogoExplanation from './pages/Logo.jsx'
import Activities from './pages/Activities.jsx'
const App = () => {
  return (
       <BrowserRouter basename={`/nest`} >
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/vertical" element={<VerticalPage />} />3
        {/* <Route path="/team" element={<TeamPage />} /> */}
        <Route path='/team' element={<CoordinatorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cluster-formation" element={<ClusterFormation/>} />
        <Route path="/opportunities" element={<OpportunityPage/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/resources" element={<ResourcePage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/logo" element={<LogoExplanation/>} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App