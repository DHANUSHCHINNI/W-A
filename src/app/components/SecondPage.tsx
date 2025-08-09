"use client";
import ColorLogoFin from './ColorLogoFin';
import ServiceHubButton from "./ServiceHubButton";
import buttonStyles from './Button.module.css';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function SecondPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isShortHeight, setIsShortHeight] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobileAndHeight = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsShortHeight(window.innerHeight <= 700); // Threshold for short height
    };
    checkMobileAndHeight();
    window.addEventListener('resize', checkMobileAndHeight);
    return () => window.removeEventListener('resize', checkMobileAndHeight);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: isMobile
          ? "url('https://res.cloudinary.com/djspsll41/image/upload/v1754164009/homepagePhone_ojryml.svg') center center / cover no-repeat"
          : "url('/Page1.svg') center center / cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: isShortHeight ? '1rem' : '0', // reduce vertical padding if height is small
        paddingBottom: isShortHeight ? '1rem' : '0',
      }}
    >
      <motion.div
        key="colorLogoFin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: isMobile ? "320px" : "700px",
          maxWidth: "100%",
          height: isShortHeight ? (isMobile ? "90px" : "220px") : (isMobile ? "120px" : "300px"), // smaller logo for short height
        } as React.CSSProperties}
      >
        <ColorLogoFin
          width={isMobile ? 320 : 700}
          height={isShortHeight ? (isMobile ? 90 : 220) : (isMobile ? 120 : 300)}
          style={{ fill: "#d1c1b2" }}
        />
      </motion.div>
      <motion.div
        key="buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "1.2rem" : "2rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isShortHeight ? (isMobile ? 20 : 30) : (isMobile ? 40 : 60), // smaller margin for short height
          zIndex: 6,
          position: "relative",
        } as React.CSSProperties}
      >
        <button
          className={buttonStyles.myButton}
        >
          Book consultation
        </button>
        <button
          className={buttonStyles.myButton}
          onClick={() => router.push('/community')}
        >
          Community events
        </button>

      </motion.div>
    </div>
  );
}
