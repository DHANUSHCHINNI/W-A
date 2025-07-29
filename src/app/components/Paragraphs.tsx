'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Paragraphs({
  pageState,
  paragraphs,
}: {
  pageState: number;
  paragraphs: String[];
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "1rem 1rem" : "2rem 1rem", // reduced padding
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
            color: "#fff",
            padding: 0, // remove double padding
            width: "90%",
            maxWidth: 960,
            textAlign: "center",
            fontSize: isMobile ? 20 : 36, // slightly smaller font
            fontFamily: "Erstoria",
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          {paragraphs[pageState - 2]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
