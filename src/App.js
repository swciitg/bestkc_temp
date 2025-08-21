import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VerticalPage from './pages/VerticalPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import CoordinatorPage from './pages/CoordinatorPage.jsx'
import PeoplePage from './pages/PeoplePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
const App = () => {
  return (
    <BrowserRouter >
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/vertical" element={<VerticalPage />} />3
        <Route path="/team" element={<TeamPage />} />
        <Route path='/coordinators' element={<CoordinatorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App