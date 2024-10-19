"use client";

import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ConsultationModal from "./ConsultationModal";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-slate-300'>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
