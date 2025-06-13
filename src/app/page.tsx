'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Asset1 from "./components/Asset1";
import Asset2 from "./components/Asset2";
import Asset3 from "./components/Asset3";
import Asset4 from "./components/Asset4";
import Asset6 from './components/Asset6';
import hubs3 from './components/hubs3';
import hubs1 from './components/hubs1';
import hubs2 from './components/hubs2';
import Rahaat from './components/Rahaat';
import Retreat from './components/Retreat';
import Sukoon from './components/Sukoon';
import Fillcup from './components/Fillcup';

import buttonStyles from './components/Button.module.css';
import Link from 'next/link';

function ServiceHubButton({ label, href, style, BrushAsset }: { label: string, href: string, style: React.CSSProperties, BrushAsset: React.ComponentType<any> }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        width: 200,
        height: 70,
      }}>
        {/* Brush stroke as background */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0, width: '100%', height: '100%',
          zIndex: 1,
        }}>
          <BrushAsset width={200} height={70} />
        </div>
        <span style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          fontFamily: 'Erstoria',
          fontSize: 24,
          fontWeight: 500,
          textAlign: 'center',
          width: '100%',
        }}>
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function LandingPage() {
  const [pageState, setPageState] = useState(0); // 0: landing, 1: nav+asset+buttons, 2: nav only
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 80; // Lowered threshold for easier scrolling

  const paragraphs = [
    "We refuse to believe that being well means being quiet. We're here for your real self – the tired one, the curious one, the one who still dances in the kitchen.",
    "At Well-being & Arts Hub, we make noise, make art, make space for all the parts of you that don't fit the script.",
    "Come, celebrate the wild, weird and wonderful ways of being human. Say it messy, say it loud, however it shows up. We'll meet you there."
  ];
  const maxPage = 1 + paragraphs.length + 1; // 1: transition, 2: para 1, 3: para 2, 4: para 3, 5: services

  // Brush stroke rotation values for each paragraph
  const topBrushRotations = [210, 210, 210];    // Asset2
  const bottomBrushRotations = [210, 210, 210]; // Asset3
  const paraIndex = Math.max(0, Math.min(pageState - 2, 2));

  const pageStateRef = useRef(pageState);
  useEffect(() => {
    pageStateRef.current = pageState;
  }, [pageState]);

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
          {pageState > 1 && pageState <= maxPage - 1 && (
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageState}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    color: '#fff',
                    padding: '2.2rem 2.5rem',
                    width: '90%',
                    maxWidth: 1100,
                    textAlign: 'center',
                    fontSize: 50,
                    fontFamily: 'Erstoria',
                    fontWeight: 400,
                  } as React.CSSProperties}
                >
                  {paragraphs[pageState - 2]}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
          {pageState === maxPage && (
            <div
              style={{
                width: '100%',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: '#fff',
              }}
            >
              <div style={{ marginTop: 100, width: '100%' }}>
                {/* Center logo */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '55%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                } as React.CSSProperties}>
                  <Asset1 width={140} height={140} />
                </div>
                {/* Hubs */}
                <div style={{
                  width: '100%',
                  maxWidth: 900,
                  height: 500,
                  position: 'relative',
                  margin: '0 auto',
                }}>
                  {/* Top center */}
                  <ServiceHubButton
                    label="Therapy Hub"
                    href="/services/therapy"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '5%',
                      transform: 'translate(-50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={Asset2}
                  />
                  {/* Top left */}
                  <ServiceHubButton
                    label="R&D Hub"
                    href="/services/rd"
                    style={{
                      position: 'absolute',
                      left: '-55%',
                      top: '20%',
                      transform: 'translate(-50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={hubs2}
                  />
                  {/* Top right */}
                  <ServiceHubButton
                    label="Corporate Hub"
                    href="/services/corporate"
                    style={{
                      position: 'absolute',
                      right: '-65%',
                      top: '10%',
                      transform: 'translate(50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={hubs1}
                  />
                  {/* Bottom left */}
                  <ServiceHubButton
                    label="Innovation Lab"
                    href="/services/innovation"
                    style={{
                      position: 'absolute',
                      left: '-15%',
                      bottom: '-30%',
                      transform: 'translate(-50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={hubs3}
                  />
                  {/* Bottom right */}
                  <ServiceHubButton
                    label="Training Hub"
                    href="/services/training"
                    style={{
                      position: 'absolute',
                      right: '-15%',
                      bottom: '-20%',
                      transform: 'translate(50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={Asset2}
                  />
                </div>
                {/* Services text at top left for services page */}
                <div
                  style={{
                    position: 'absolute',
                    top: 80,
                    left: -500,
                    zIndex: 10,
                    color: '#d1c1b2',
                    fontFamily: 'Erstoria',
                    fontSize: 40,
                    fontWeight: 600,
                    letterSpacing: 1,
                  } as React.CSSProperties}
                >
                  Services
                </div>
              </div>
            </div>
          )}
          {pageState === maxPage + 1 && (
            <div
              style={{
                width: '100%',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: '#2e1a13',
              } as React.CSSProperties}
            >
              {/* Heading absolutely positioned at top left of the website */}
              <div
                style={{
                  position: 'absolute',
                  top: 75, // adjust as needed
                  left: 170, // adjust as needed
                  fontFamily: 'Erstoria',
                  fontSize: 40,
                  fontWeight: 500,
                  color: '#d1c1b2',
                  letterSpacing: 1,
                  textAlign: 'left',
                  zIndex: 20,
                } as React.CSSProperties}
              >
                Key offerings
              </div>
              {/* The gray box with only the icons row */}
              <div
                style={{
                  marginTop: 60,
                  width: '100vw',
                  maxWidth: '100vw',
                  marginLeft: 0,
                  marginRight: 0,
                  background: '#b19a8b',
                  borderRadius: 0, // sharp corners
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  padding: '3.5rem 2.5rem 3.5rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                } as React.CSSProperties}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: 1000,
                  gap: '2.5rem',
                }}>
                  <Link href="/offerings/sukoon" style={{ textDecoration: 'none', flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: 10,
                        padding: '1.2rem 0.5rem',
                        transition: 'background 0.2s, box-shadow 0.2s',
                        background: '#b19a8b',
                      } as React.CSSProperties}
                      onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
                      onMouseOut={e => e.currentTarget.style.background = '#b19a8b'}
                    >
                      <Sukoon width={90} height={90} />
                      <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                        Sukoon Subscription
                      </div>
                    </div>
                  </Link>
                  <Link href="/offerings/rahaat" style={{ textDecoration: 'none', flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: 10,
                        padding: '1.2rem 0.5rem',
                        transition: 'background 0.2s, box-shadow 0.2s',
                        background: '#b19a8b',
                      } as React.CSSProperties}
                      onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
                      onMouseOut={e => e.currentTarget.style.background = '#b19a8b'}
                    >
                      <Rahaat width={90} height={90} />
                      <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                        Rahaat Subscription
                      </div>
                    </div>
                  </Link>
                  <Link href="/offerings/filling-your-cup" style={{ textDecoration: 'none', flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: 10,
                        padding: '1.2rem 0.5rem',
                        transition: 'background 0.2s, box-shadow 0.2s',
                        background: '#b19a8b',
                      } as React.CSSProperties}
                      onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
                      onMouseOut={e => e.currentTarget.style.background = '#b19a8b'}
                    >
                      <Fillcup width={90} height={90} />
                      <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                        Filling your cup
                      </div>
                    </div>
                  </Link>
                  <Link href="/offerings/retreats" style={{ textDecoration: 'none', flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: 10,
                        padding: '1.2rem 0.5rem',
                        transition: 'background 0.2s, box-shadow 0.2s',
                        background: '#b19a8b',
                      } as React.CSSProperties}
                      onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
                      onMouseOut={e => e.currentTarget.style.background = '#b19a8b'}
                    >
                      <Retreat width={90} height={90} />
                      <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                        Well-being Retreats
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
