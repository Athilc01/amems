import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Removed unused `Route`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faTshirt,faBox, faArrowRight, faClock ,  faAward, faBolt, faTag } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../Component/HeroSection/HeroSection";
import Chooseamems from "../../Component/WhyChooseAmems/Chooseamems";
import Statistics from "../../Component/Statistics/Statistics";
import Testimonials from "../../Component/Testimonials/Testimonials";
import CallToAction from "../../Component/CallToAction/CallToAction";
import Services from "../../Component/Services/Services";


const Home = () => {


  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero/>
      <Chooseamems/>
      <Statistics/>
      <Testimonials/>
      <CallToAction/>
    </div>
  );
};

export default Home;
