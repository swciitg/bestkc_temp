import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/Vision'
import Best from './components/Best'
import Hexa from './components/Hexa'
import ClusterActivities from './components/Cluster.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import VerticalPage from './pages/VerticalPage.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vertical" element={<VerticalPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App