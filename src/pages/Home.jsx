import React from 'react'
import VisionMission from '../components/Vision'
import Hexa from '../components/Hexa'
// import ClusterActivities from '../components/Cluster'
import Hero from '../components/Hero'
import Best from '../components/Best'
const Home = () => {
  return (
    <>
    <Hero/>
      <VisionMission/>
      <Best/>
      <Hexa/>
      {/* <ClusterActivities/> */}
    </>
  )
}

export default Home