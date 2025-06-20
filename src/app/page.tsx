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


export default function LandingPage() {
  const [pageState, setPageState] = useState(0); // 0: landing, 1: nav+asset+buttons, 2: nav only
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 80; // Lowered threshold for easier scrolling
  const [isMobile, setIsMobile] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const paragraphs = [
    "We refuse to believe that being well means being quiet. We're here for your real self – the tired one, the curious one, the one who still dances in the kitchen.",
    "At Well-being & Arts Hub, we make noise, make art, make space for all the parts of you that don't fit the script.",
    "Come, celebrate the wild, weird and wonderful ways of being human. Say it messy, say it loud, however it shows up. We'll meet you there."
  ];
  const maxPage = 1 + paragraphs.length + 1; // 1: transition, 2: para 1, 3: para 2, 4: para 3, 5: services

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


  useEffect(() => {
    function onWheel(e: WheelEvent) {
      scrollAccumulator.current += e.deltaY;
      if (scrollAccumulator.current > SCROLL_THRESHOLD && pageStateRef.current < maxPage + 1) {
        setPageState(pageStateRef.current + 1);
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < -SCROLL_THRESHOLD && pageStateRef.current > 0) {
        setPageState(pageStateRef.current - 1);
        scrollAccumulator.current = 0;
      }
    }
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
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

      {/* Top left logo */}
      <div style={{ position: "absolute", top: 20, left: 32, zIndex: 10 }}>
        <Asset1 width={50} height={50} />
      </div>

      {/* Top right brush stroke */}
      <motion.div
        style={{
          position: "absolute",
          top: -100,
          right: -200,
          zIndex: 1,
          transformOrigin: "center",
        } as React.CSSProperties}
        animate={{
          opacity: (pageState === maxPage || pageState === maxPage + 1) ? 0 : 0.7,
          rotate: pageState > 2 ? topBrushRotations[paraIndex] : 210,
          scale: 1.9
        }}
        transition={{ duration: 0.7 }}
      >
        <Asset2 width={800} height={400} />
      </motion.div>

      {/* Bottom left brush stroke */}
      <motion.div
        style={{
          position: "absolute",
          bottom: -280,
          left: 0,
          zIndex: 1,
          transformOrigin: "center",
        } as React.CSSProperties}
        animate={{
          opacity: (pageState === maxPage || pageState === maxPage + 1) ? 0 : 0.7,
          rotate: pageState > 2 ? bottomBrushRotations[paraIndex] : 210,
          scale: 2.4
        }}
        transition={{ duration: 0.7 }}
      >
        <Asset3 width={800} height={400} />
      </motion.div>

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
                width: "700px",
                maxWidth: "100%",
              } as React.CSSProperties}
            >
              <Asset6 width={700} height={300} style={{ fill: "#d1c1b2" }} />
            </motion.div>
          )}
          {pageState === 1 && (
            <SecondPage />
          )}
          {pageState > 1 && pageState <= maxPage - 1 && (
            <Paragraphs pageState={pageState} paragraphs={paragraphs} />
          )}
          {pageState === maxPage && (
            <Services />
          )}
          {pageState === maxPage + 1 && (
            <KeyOfferings />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
