'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Asset1 from "./components/Asset1";
import Asset2 from "./components/Asset2";
import Asset3 from "./components/Asset3";
import Asset4 from "./components/Asset4";
import Asset5 from "./components/Asset5";
import Asset6 from './components/Asset6';
import buttonStyles from './components/Button.module.css';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const lastScrollY = useRef(0);

  // Listen for scroll direction
  useEffect(() => {
    function onWheel(e: WheelEvent) {
      if (!scrolled && e.deltaY > 0) {
        setScrolled(true);
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
      } else if (scrolled && e.deltaY < 0) {
        setScrolled(false);
        setShowNavbar(false);
      } else if (scrolled && e.deltaY > 0) {
        setShowNavbar(true);
      }
    }
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [scrolled]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2e1a13",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Navbar */}
      <Navbar show={showNavbar} />

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
          transform: "rotate(210deg) scale(1.7)",
          transformOrigin: "center",
        }}
        animate={{ opacity: scrolled ? 0.7 : 1 }}
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
          transform: "rotate(210deg) scale(2.4)",
          transformOrigin: "center",
        }}
        animate={{ opacity: scrolled ? 0.7 : 1 }}
        transition={{ duration: 0.7 }}
      >
        <Asset3 width={800} height={400} />
      </motion.div>

      {/* Center main text (Asset6/Asset4) and buttons */}
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
        }}
      >
        <AnimatePresence mode="wait">
          {!scrolled ? (
            <motion.div
              key="asset6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              style={{
                width: "700px",
                maxWidth: "100%",
              }}
            >
              <Asset6 width={700} height={300} style={{ fill: "#d1c1b2" }} />
            </motion.div>
          ) : (
            <motion.div
              key="asset4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                width: "700px",
                maxWidth: "100%",
              }}
            >
              <Asset4 width={700} height={300} style={{ fill: "#d1c1b2" }} />
            </motion.div>
          )}
          {scrolled && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                marginTop: 60,
                zIndex: 6,
                position: "relative",
              }}
            >
              <button
                className={buttonStyles.myButton}
              >
                Book consultation
              </button>
              <button
                className={buttonStyles.myButton}
              >
                Community events
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Discover us button (hide after scroll) */}
      <motion.div
        style={{
          position: "absolute",
          right: 48,
          bottom: 32,
          zIndex: 10,
        }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 40 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#d1c1b2",
            fontSize: 22,
            textDecoration: "none",
            fontFamily: "'Playfair Display', serif",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "color 0.2s",
          }}
        >
          Discover us
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#d1c1b2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: 4 }}
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </motion.div>
    </main>
  );
}
