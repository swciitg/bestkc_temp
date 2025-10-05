import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VerticalPage from './pages/VerticalPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import CoordinatorPage from './pages/CoordinatorPage.jsx'
import Collaborations from './pages/Collabrations.jsx'
import Fundings from './pages/Fundings.jsx'
import ThematicAreas from './pages/ThematicAreas';
const App = () => {
  return (
       <BrowserRouter basename={`/nest`} >
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vertical" element={<VerticalPage />} />3
        <Route path="/team" element={<TeamPage />} />
        <Route path='/coordinators' element={<CoordinatorPage />} />
        <Route path='/collabrations' element={<Collaborations />} />
        <Route path='/funded-projects' element={<Fundings/>} />
        <Route path='/thematic-areas' element={<ThematicAreas/>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App