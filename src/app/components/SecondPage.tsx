import ColorLogoFin from './ColorLogoFin';
import ServiceHubButton from "./ServiceHubButton";
import buttonStyles from './Button.module.css';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SecondPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <motion.div
        key="colorLogoFin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: isMobile ? "320px" : "700px",
          maxWidth: "100%",
        } as React.CSSProperties}
      >
        <ColorLogoFin width={isMobile ? 320 : 700} height={isMobile ? 120 : 300} style={{ fill: "#d1c1b2" }} />
      </motion.div>
      <motion.div
        key="buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          gap: isMobile ? "1.5rem" : "2rem",
          justifyContent: "center",
          marginTop: isMobile ? 40 : 60,
          zIndex: 6,
          position: "relative",
        } as React.CSSProperties}
      >
        <button
          className={buttonStyles.myButton}
          style={{
            fontSize: isMobile ? "0.95rem" : undefined,
            padding: isMobile ? "0.5rem 1.2rem" : undefined,
          }}
        >
          Book consultation
        </button>
        <button
          className={buttonStyles.myButton}
          style={{
            fontSize: isMobile ? "0.95rem" : undefined,
            padding: isMobile ? "0.5rem 1.2rem" : undefined,
          }}
        >
          Community events
        </button>
      </motion.div>
    </>
  );
}