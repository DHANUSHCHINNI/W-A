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
    let touchStartY = 0;
    let initialScrollY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      initialScrollY = window.scrollY; // Capture initial scroll position
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - touchStartY;

      // Only prevent if:
      // 1. We started at the very top (scrollY === 0)
      // 2. We're moving downward (deltaY > 0)
      // 3. The movement is significant enough (> 10px to avoid tiny movements)
      if (initialScrollY === 0 && deltaY > 10) {
        e.preventDefault(); // Block pull-to-refresh
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
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
  const topBrushRotations = [210, 205, 210];
  const bottomBrushRotations = [210, 200, 205];

  const paraActiveIdx = paraInViews.findIndex(Boolean);

  return (
      <main
          style={{
            minHeight: "100vh",
            background: "#2e1a13",
            position: "relative",
            fontFamily: "Erstoria",
            display: "block",
            scrollSnapType: "y mandatory",
            overflowY: "auto" // Change from "hidden" to "auto"
          }}
      >
        {/* Navbar */}
        {isMobile ? (
            <HamburgerNavbar show={true} open={hamburgerOpen} setOpen={setHamburgerOpen} />
        ) : (
            <Navbar show={true} />
        )}

        {/* Top left logo (desktop only) */}
        {!isMobile && (
            <div style={{ position: "absolute", top: 20, left: 32, zIndex: 10 }}>
              <Asset1 width={50} height={50} />
            </div>
        )}

        {/* Top and Bottom brush strokes (desktop only) */}
        {!isMobile && paraActiveIdx !== -1 && (
            <>
              <motion.div
                  style={{
                    position: "absolute",
                    top: -100,
                    right: -200,
                    zIndex: 1,
                    transformOrigin: "center",
                  }}
                  initial={{ opacity: 0, rotate: topBrushRotations[paraActiveIdx], scale: 1.9 }}
                  animate={{ opacity: 0.7, rotate: topBrushRotations[paraActiveIdx], scale: 1.9 }}
                  transition={{ duration: 0.7 }}
              >
                <Asset2 width={800} height={400} />
              </motion.div>
              <motion.div
                  style={{
                    position: "absolute",
                    bottom: -280,
                    left: 0,
                    zIndex: 1,
                    transformOrigin: "center",
                  }}
                  initial={{ opacity: 0, rotate: bottomBrushRotations[paraActiveIdx], scale: 2.4 }}
                  animate={{ opacity: 0.7, rotate: bottomBrushRotations[paraActiveIdx], scale: 2.4 }}
                  transition={{ duration: 0.7 }}
              >
                <Asset3 width={800} height={400} />
              </motion.div>
            </>
        )}

        {/* All sections remain unchanged below */}
        <section ref={landingRef} style={sectionStyle}>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: landingInView ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              style={{ width: isMobile ? "90vw" : "700px", maxWidth: "100%", margin: '0 auto' }}
          >
            <Asset6 width={isMobile ? 320 : 700} height={isMobile ? 120 : 300} style={{ fill: "#d1c1b2" }} />
          </motion.div>
        </section>

        <section ref={secondRef} style={sectionStyle}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: secondInView ? 1 : 0 }} transition={{ duration: 0.7 }} style={motionStyle}>
            <SecondPage />
          </motion.div>
        </section>

        {paragraphs.map((para, idx) => (
            <section key={idx} ref={paraRefs[idx]} style={sectionStyle}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: paraInViews[idx] ? 1 : 0 }} transition={{ duration: 0.7 }} style={motionStyle}>
                <Paragraphs pageState={idx + 2} paragraphs={paragraphs} />
              </motion.div>
            </section>
        ))}

        <section ref={servicesRef} style={sectionStyle}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: servicesInView ? 1 : 0 }} transition={{ duration: 0.7 }} style={motionStyle}>
            <Services />
          </motion.div>
        </section>

        <section ref={keyOfferingsRef} style={sectionStyle}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: keyOfferingsInView ? 1 : 0 }} transition={{ duration: 0.7 }} style={motionStyle}>
            <KeyOfferings />
          </motion.div>
        </section>

        <section ref={testimonialsRef} style={{ ...sectionStyle, background: "url('/brownlight.svg') center center / cover no-repeat", width: "100vw" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: testimonialsInView ? 1 : 0 }} transition={{ duration: 0.7 }}>
            <Testimonials />
            <Footer />
          </motion.div>
        </section>
      </main>
  );
}
const sectionStyle: React.CSSProperties = {
  height: '100vh', // Change from minHeight to height for consistency
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 5,
  scrollSnapAlign: 'start' // Add this line
};


const motionStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};
