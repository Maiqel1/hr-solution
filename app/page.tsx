"use client";

import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
