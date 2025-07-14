'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [pageState, setPageState] = useState(0); // 0: landing, 1: nav+asset+buttons, 2: nav only
  const scrollingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const paragraphs = [
    "We refuse to believe that being well means being quiet. We're here for your real self – the tired one, the curious one, the one who still dances in the kitchen.",
    "At Well-being & Arts Hub, we make noise, make art, make space for all the parts of you that don't fit the script.",
    "Come, celebrate the wild, weird and wonderful ways of being human. Say it messy, say it loud, however it shows up. We'll meet you there."
  ];
  const maxPage = 7; // 0: landing, 1: SecondPage, 2-4: Paragraphs, 5: Services, 6: Key Offerings, 7: Testimonials

  // Brush stroke rotation values for each paragraph
  const topBrushRotations = [210, 205, 210]; // Asset2
  const bottomBrushRotations = [210, 200, 205]; // Asset3
  const paraIndex = Math.max(0, Math.min(pageState - 2, 2));

  const pageStateRef = useRef(pageState);
  useEffect(() => {
    pageStateRef.current = pageState;
  }, [pageState]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonialsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobileEnv = window.innerWidth <= 768;
    let touchStartY = 0;
    let touchEndY = 0;

    const goNext = () => {
      if (scrollingRef.current || pageStateRef.current >= maxPage) return;
      setPageState(pageStateRef.current + 1);
      scrollingRef.current = true;
      setTimeout(() => { scrollingRef.current = false; }, 800);
    };

    const goPrev = () => {
      if (scrollingRef.current || pageStateRef.current <= 0) return;

      // Scroll lock logic for Testimonials
      if (pageStateRef.current === 7 && testimonialsScrollRef.current) {
        const el = testimonialsScrollRef.current;
        if (el.scrollTop > 0) {
          el.scrollTo({ top: 0, behavior: 'smooth' });
          scrollingRef.current = true;
          setTimeout(() => { scrollingRef.current = false; }, 400);
          return;
        }
      }

      setPageState(pageStateRef.current - 1);
      scrollingRef.current = true;
      setTimeout(() => { scrollingRef.current = false; }, 800);
    };

    if (isMobileEnv) {
      const onTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
      };

      const onTouchMove = (e: TouchEvent) => {
        touchEndY = e.touches[0].clientY;
      };

      const onTouchEnd = () => {
        const deltaY = touchStartY - touchEndY;
        if (deltaY > 30) {
          goNext();
        } else if (deltaY < -30) {
          goPrev();
        }
      };

      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });

      return () => {
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
      };
    } else {
      const onWheel = (e: WheelEvent) => {
        if (scrollingRef.current) return;
        if (e.deltaY > 0) {
          goNext();
        } else if (e.deltaY < 0) {
          goPrev();
        }
      };

      window.addEventListener("wheel", onWheel, { passive: true });

      return () => {
        window.removeEventListener("wheel", onWheel);
      };
    }
  }, []);


  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2e1a13",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Erstoria",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Navbar */}
      {isMobile ? (
        <HamburgerNavbar show={pageState > 0} open={hamburgerOpen} setOpen={setHamburgerOpen} />
      ) : (
        <Navbar show={pageState > 0} />
      )}

      {/* Top left logo (centered above content on mobile) */}
      {isMobile ? (
        <div style={{ position: "absolute", top: 18, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center' }}>
          <Asset1 width={60} height={60} />
        </div>
      ) : (
        <div style={{ position: "absolute", top: 20, left: 32, zIndex: 10 }}>
          <Asset1 width={50} height={50} />
        </div>
      )}

      {/* Top right brush stroke */}
      {!isMobile && (
        <motion.div
          style={{
            position: "absolute",
            top: -100,
            right: -200,
            zIndex: 1,
            transformOrigin: "center",
          } as React.CSSProperties}
          initial={{
            opacity: pageState >= 5 ? 0 : 0.7,
            rotate: (pageState >= 2 && pageState <= 4) ? topBrushRotations[paraIndex] : 210,
            scale: 1.9
          }}
          animate={{
            opacity: pageState >= 5 ? 0 : 0.7,
            rotate: (pageState >= 2 && pageState <= 4) ? topBrushRotations[paraIndex] : 210,
            scale: 1.9
          }}
          transition={{ duration: 0.7 }}
        >
          <Asset2 width={800} height={400} />
        </motion.div>
      )}

      {/* Bottom left brush stroke */}
      {!isMobile && (
        <motion.div
          style={{
            position: "absolute",
            bottom: -280,
            left: 0,
            zIndex: 1,
            transformOrigin: "center",
          } as React.CSSProperties}
          initial={{
            opacity: pageState >= 5 ? 0 : 0.7,
            rotate: (pageState >= 2 && pageState <= 4) ? bottomBrushRotations[paraIndex] : 210,
            scale: 2.4
          }}
          animate={{
            opacity: pageState >= 5 ? 0 : 0.7,
            rotate: (pageState >= 2 && pageState <= 4) ? bottomBrushRotations[paraIndex] : 210,
            scale: 2.4
          }}
          transition={{ duration: 0.7 }}
        >
          <Asset3 width={800} height={400} />
        </motion.div>
      )}

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          color: "#d1c1b2",
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        } as React.CSSProperties}
      >
        <AnimatePresence mode="wait">
          {pageState === 0 && (
            <motion.div
              key="asset6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              style={{
                width: isMobile ? "90vw" : "700px",
                maxWidth: "100%",
                margin: isMobile ? '0 auto' : undefined,
              } as React.CSSProperties}
            >
              <Asset6 width={isMobile ? 320 : 700} height={isMobile ? 120 : 300} style={{ fill: "#d1c1b2" }} />
            </motion.div>
          )}
          {pageState === 1 && (
            <SecondPage />
          )}
          {pageState >= 2 && pageState <= 4 && (
            <Paragraphs pageState={pageState} paragraphs={paragraphs} />
          )}
          {pageState === 5 && (
            <Services />
          )}
          {pageState === 6 && (
            <KeyOfferings />
          )}
          {pageState === 7 && (
            <div
              ref={testimonialsScrollRef}
              style={{
                background: "url('/brownlight.svg') center center / cover no-repeat",
                maxHeight: 'calc(100vh - 60px)',
                minHeight: '100vh',
                overflowY: 'auto',
                width: '100vw',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Testimonials />
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
