import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Paragraphs({ pageState, paragraphs }: { pageState: number, paragraphs: String[] }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        marginTop: 0,
      } as React.CSSProperties}
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
            padding: isMobile ? '1.2rem 0.7rem' : '2.2rem 2.5rem',
            width: '90%',
            maxWidth: 1100,
            textAlign: 'center',
            fontSize: isMobile ? 22 : 50,
            fontFamily: 'Erstoria',
            fontWeight: 400,
          } as React.CSSProperties}
        >
          {paragraphs[pageState - 2]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}