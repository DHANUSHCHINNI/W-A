"use client";
import ColorLogoFin from './ColorLogoFin';
import buttonStyles from './Button.module.css';
import styles from './SecondPage.module.css';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function SecondPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <motion.div
        key="colorLogoFin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.logoContainer}
      >
        <ColorLogoFin
          width="100%"
          height="auto"
          style={{ fill: "#d1c1b2" }}
        />
      </motion.div>

      <motion.div
        key="buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className={styles.buttonsContainer}
      >
        <button className={buttonStyles.myButton}>
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
