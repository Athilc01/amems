import React, { useState, useEffect } from "react";
import Hero from "../../Component/HeroSection/HeroSection";
import Chooseamems from "../../Component/WhyChooseAmems/Chooseamems";
import Statistics from "../../Component/Statistics/Statistics";
import Testimonials from "../../Component/Testimonials/Testimonials";
import CallToAction from "../../Component/CallToAction/CallToAction";
import MedicalBanner from "../../Component/MedicalBanner/Medicalbanner";
const Home = () => {


  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero/>
      <MedicalBanner/>
      <Chooseamems/>
      <Statistics/>
      <Testimonials/>
      <CallToAction/>
    </div>
  );
};

export default Home;
