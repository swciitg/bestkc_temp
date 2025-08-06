import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/Vision'
import Best from './components/Best'
import Hexa from './components/Hexa'
import ClusterActivities from './components/Cluster.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <VisionMission/>
      <Best/>
      <Hexa/>
      <ClusterActivities/>
      <Footer/>
    </div>
  )
}

export default App