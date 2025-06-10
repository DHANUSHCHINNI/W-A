'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Asset1 from "./components/Asset1";
import Asset2 from "./components/Asset2";
import Asset3 from "./components/Asset3";
import Asset4 from "./components/Asset4";
import Asset6 from './components/Asset6';
import buttonStyles from './components/Button.module.css';

export default function LandingPage() {
  const [pageState, setPageState] = useState(0); // 0: landing, 1: nav+asset+buttons, 2: nav only
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 200; // You can adjust this value

  useEffect(() => {
    function onWheel(e: WheelEvent) {
      scrollAccumulator.current += e.deltaY;

      if (scrollAccumulator.current > SCROLL_THRESHOLD && pageState < 2) {
        setPageState(pageState + 1);
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < -SCROLL_THRESHOLD && pageState > 0) {
        setPageState(pageState - 1);
        scrollAccumulator.current = 0;
      }
    }
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [pageState]);

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
      <Navbar show={pageState > 0} />

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
        } as React.CSSProperties}
        animate={{ opacity: 0.7 }}
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
        } as React.CSSProperties}
        animate={{ opacity: 0.7 }}
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
        }}
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
            <>
              <motion.div
                key="asset4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "700px",
                  maxWidth: "100%",
                } as React.CSSProperties}
              >
                <Asset4 width={700} height={300} style={{ fill: "#d1c1b2" }} />
              </motion.div>
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
                } as React.CSSProperties}
              >
                <button className={buttonStyles.myButton}>
                  Book consultation
                </button>
                <button className={buttonStyles.myButton}>
                  Community events
                </button>
              </motion.div>
            </>
          )}
          {pageState === 2 && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2.5rem',
                marginTop: 0,
              }}
            >
              <div
                style={{
                  background: '#b19a8b',
                  color: '#fff',
                  borderRadius: 30,
                  padding: '2.2rem 2.5rem',
                  width: '90%',
                  maxWidth: 900,
                  textAlign: 'left',
                  fontSize: 22,
                  fontFamily: 'Erstoria',
                  fontWeight: 400,
                  boxShadow: 'none',
                }}
              >
                We refuse to believe that being well means being quiet. We're here for your real self – the tired one, the curious one, the one who still dances in the kitchen.
              </div>
              <div
                style={{
                  background: '#b19a8b',
                  color: '#fff',
                  borderRadius: 30,
                  padding: '2.2rem 2.5rem',
                  width: '90%',
                  maxWidth: 900,
                  textAlign: 'left',
                  fontSize: 22,
                  fontFamily: 'Erstoria',
                  fontWeight: 400,
                  boxShadow: 'none',
                }}
              >
                At Well-being & Arts Hub, we make noise, make art, make space for all the parts of you that don't fit the script.
              </div>
              <div
                style={{
                  background: '#b19a8b',
                  color: '#fff',
                  borderRadius: 30,
                  padding: '2.2rem 2.5rem',
                  width: '90%',
                  maxWidth: 900,
                  textAlign: 'left',
                  fontSize: 22,
                  fontFamily: 'Erstoria',
                  fontWeight: 400,
                  boxShadow: 'none',
                }}
              >
                Come, celebrate the wild, weird and wonderful ways of being human. Say it messy, say it loud, however it shows up. We'll meet you there.
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
