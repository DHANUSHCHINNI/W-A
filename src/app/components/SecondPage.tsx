import ColorLogoFin from './ColorLogoFin';
import ServiceHubButton from "./ServiceHubButton";
import buttonStyles from './Button.module.css';
import { motion } from "framer-motion";

export default function SecondPage(){
    return(

            <>
              <motion.div
                key="colorLogoFin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "700px",
                  maxWidth: "100%",
                } as React.CSSProperties}
              >
                <ColorLogoFin width={700} height={300} style={{ fill: "#d1c1b2" }} />
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
  
    )
}