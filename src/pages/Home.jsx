import React from "react";
import VisionMission from "../components/Vision";
import Hexa from "../components/Hexa";
// import ClusterActivities from '../components/Cluster'
import Hero from "../components/Hero";
import Best from "../components/Best";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="vision">
        <VisionMission />
      </Element>

      <Element name="best">
        <Best />
      </Element>

      <Element name="hexa">
        <Hexa />
      </Element>

      {/* <ClusterActivities/> */}
    </>
  );
};

export default Home;
