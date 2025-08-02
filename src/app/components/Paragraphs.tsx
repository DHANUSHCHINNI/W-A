'use client';
import styles from '../therapyhub/PlanCards.module.css';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Paragraphs({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    // Plain background color wrapper
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: isMobile
          ? "url('https://res.cloudinary.com/djspsll41/image/upload/v1754164310/paraPhone_xnkqil.svg') center center / cover no-repeat"
          : "url('/scroll3.svg') center center / cover no-repeat", display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "32px 0" : "64px 0",
      }}
    >
      <div className={styles.planSectionWrapper}>
        <h2
          className={styles.choosePlanHeading}
          style={{ marginTop: '-40px', color: "#1C1610", marginBottom: '24px' }}
        >
          Our Philosophy
        </h2>
        <div className={styles.cardsRow}>
          {paragraphs.map((para, idx) => (
            <motion.div
              key={idx}
              className={styles.planCard}
              style={{
                minHeight: isMobile ? undefined : 260,
                color: "#ffffff",
                fontFamily: "Erstoria",
                fontSize: isMobile ? 18 : 22,
                fontWeight: 400,
                lineHeight: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {para}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
