'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./components/navbar";
import Asset1 from "./components/Asset1";
import Asset2 from "./components/Asset2";
import Asset3 from "./components/Asset3";
import Asset6 from './components/Asset6';
import SecondPage from "./components/SecondPage";
import Services from "./components/Services";
import KeyOfferings from "./components/KeyOfferings";
import Paragraphs from "./components/Paragraphs";
import HamburgerNavbar from "./components/HamburgerNavbar";
import Testimonials from "./testimonials/page";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const paragraphs = [
    "We refuse to believe that being well means being quiet. We're here for your real self – the tired one, the curious one, the one who still dances in the kitchen.",
    "At Well-being & Arts Hub, we make noise, make art, make space for all the parts of you that don't fit the script.",
    "Come, celebrate the wild, weird and wonderful ways of being human. Say it messy, say it loud, however it shows up. We'll meet you there."
  ];
  useEffect(() => {
    const preventPullToRefresh = (e: TouchEvent) => {
      if (window.scrollY === 0 && e.touches[0].clientY > 0) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventPullToRefresh, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventPullToRefresh);
    };
  }, []);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Section refs for in-view animations
  const landingRef = useRef(null);
  const landingInView = useInView(landingRef, { margin: "-40% 0px -40% 0px" });
  const secondRef = useRef(null);
  const secondInView = useInView(secondRef, { margin: "-40% 0px -40% 0px" });
  const paraRefs = [useRef(null), useRef(null), useRef(null)];
  const paraInViews = paraRefs.map(ref => useInView(ref, { margin: "-40% 0px -40% 0px" }));
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-20% 0px" });
  const keyOfferingsRef = useRef(null);
  const keyOfferingsInView = useInView(keyOfferingsRef, { once: true, margin: "-20% 0px" });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-20% 0px" });

  // Brush stroke rotation values for each paragraph
  const topBrushRotations = [210, 205, 210]; // Asset2
  const bottomBrushRotations = [210, 200, 205]; // Asset3

  // Helper to determine which paragraph section is most in view
  const paraActiveIdx = paraInViews.findIndex(Boolean); // 0,1,2 for paragraphs, -1 if none

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2e1a13",
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
        <Navbar show={true} />
      )}

      {/* Top left logo (desktop only) */}
      {isMobile ? null : (
        <div style={{ position: "absolute", top: 20, left: 32, zIndex: 10 }}>
          <Asset1 width={50} height={50} />
        </div>
      )}

      {/* Top and Bottom brush strokes for only the active paragraph section (desktop only) */}
      {!isMobile && paraActiveIdx !== -1 && (
        <>
          {/* Top brush stroke */}
          <motion.div
            style={{
              position: "absolute",
              top: -100,
              right: -200,
              zIndex: 1,
              transformOrigin: "center",
            } as React.CSSProperties}
            initial={{ opacity: 0, rotate: topBrushRotations[paraActiveIdx], scale: 1.9 }}
            animate={{ opacity: 0.7, rotate: topBrushRotations[paraActiveIdx], scale: 1.9 }}
            transition={{ duration: 0.7 }}
          >
            <Asset2 width={800} height={400} />
          </motion.div>
          {/* Bottom brush stroke */}
          <motion.div
            style={{
              position: "absolute",
              bottom: -280,
              left: 0,
              zIndex: 1,
              transformOrigin: "center",
            } as React.CSSProperties}
            initial={{ opacity: 0, rotate: bottomBrushRotations[paraActiveIdx], scale: 2.4 }}
            animate={{ opacity: 0.7, rotate: bottomBrushRotations[paraActiveIdx], scale: 2.4 }}
            transition={{ duration: 0.7 }}
          >
            <Asset3 width={800} height={400} />
          </motion.div>
        </>
      )}

      {/* Landing Section */}
      <section ref={landingRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: landingInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: isMobile ? "90vw" : "700px", maxWidth: "100%", margin: '0 auto' }}
        >
          <Asset6 width={isMobile ? 320 : 700} height={isMobile ? 120 : 300} style={{ fill: "#d1c1b2" }} />
        </motion.div>
      </section>

      {/* Second Page Section */}
      <section ref={secondRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: secondInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SecondPage />
        </motion.div>
      </section>

      {/* Paragraph Sections */}
      {paragraphs.map((para, idx) => (
        <section
          key={idx}
          ref={paraRefs[idx]}
          style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: paraInViews[idx] ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Paragraphs pageState={idx + 2} paragraphs={paragraphs} />
          </motion.div>
        </section>
      ))}

      {/* Services Section */}
      <section ref={servicesRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: servicesInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Services />
        </motion.div>
      </section>

      {/* Key Offerings Section */}
      <section ref={keyOfferingsRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: keyOfferingsInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <KeyOfferings />
        </motion.div>
      </section>

      {/* Testimonials + Footer Section */}
      <section ref={testimonialsRef} style={{ minHeight: '100vh', width: '100vw', background: "url('/brownlight.svg') center center / cover no-repeat", position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: testimonialsInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <Testimonials />
          <Footer />
        </motion.div>
      </section>
    </main>
  );
}
