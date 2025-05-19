import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Landing/Home";
import App from "../pages/Landing/AboutUs";
import WhatsAppButton from "../Component/WhatsappButton/WhatsappButton";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import TopButton from "../Component/TopButton.jsx/TopButton";
import OurProducts from "../pages/Landing/OurProducts";
import Reviews from "../pages/Landing/Reviews";
import Contacts from "../pages/Landing/Contacts";
import QuoteModal from "../Component/QuoteComponent/QuoteComponent";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";

const RoutesApp = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<App />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/QuoteModal" element={<QuoteModal />} />
        </Routes>
        <Footer />
        <TopButton />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default RoutesApp;
