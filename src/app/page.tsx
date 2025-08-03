'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/navbar";
import Image from "next/image";
import SecondPage from "./components/SecondPage";
import Services from "./components/Services";
import Paragraphs from "./components/Paragraphs";
import HamburgerNavbar from "./components/HamburgerNavbar";
import Testimonials from "./testimonials/page";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Section refs for in-view animations
  const secondRef = useRef(null);
  const secondInView = useInView(secondRef, { margin: "-40% 0px -40% 0px" });
  const paraRefs = [useRef(null)];
  const paraInViews = paraRefs.map(ref => useInView(ref, { margin: "-40% 0px -40% 0px" }));
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-20% 0px" });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-20% 0px" });

  // Navbar color logic (only for desktop Navbar)
  const [navbarColor, setNavbarColor] = useState('#BAB1AB'); // original

  useEffect(() => {
    // Order: testimonials > services > paragraphs > second
    if (testimonialsInView) {
      setNavbarColor('#1C1610'); // dark
    } else if (servicesInView) {
      setNavbarColor('#1C1610'); // original
    } else if (paraInViews.some(Boolean)) {
      setNavbarColor('#1C1610'); // dark
    } else if (secondInView) {
      setNavbarColor('#1C1610'); // original
    }
  }, [secondInView, paraInViews, servicesInView, testimonialsInView]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Erstoria",
        display: "block",
      }}
    >
      {/* Navbar */}
      {isMobile ? (
        <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
      ) : (
        <Navbar show={true} color={navbarColor} />
      )}

      {/* Second Page Section */}
      <section ref={secondRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SecondPage />
        </motion.div>
      </section>

      {/* Paragraph Section */}
      <section
        ref={paraRefs[0]}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 5,
          fontStyle: 'PT Serif, serif'
        }}
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Paragraphs paragraphs={[
            "We refuse to believe that being well means being quiet. We're here for your real self – the tired one, the curious one, the one who still dances in the kitchen.",
            "At Well-being & Arts Hub, we make noise, make art, make space for all the parts of you that don't fit the script.",
            "Come, celebrate the wild, weird and wonderful ways of being human. Say it messy, say it loud, however it shows up. We'll meet you there."
          ]} />
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Services />
        </motion.div>
      </section>

      {/* Testimonials + Footer Section */}
      <section ref={testimonialsRef} style={{ minHeight: '100vh', width: '100vw', background: "url('/brownlight.svg') center center / cover no-repeat", position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 5 }}

        >
          <Testimonials />
          <Footer />
        </motion.div>
      </section>
    </main>
  );
}
