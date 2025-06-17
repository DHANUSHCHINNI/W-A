'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import Asset1 from './Asset1';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

interface HamburgerNavbarProps {
  show: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our story', href: '/story' },
  { label: 'Services', href: '/Services' },
  { label: 'Members', href: '/Members' },
  { label: 'Contact us', href: '/Contact Us' },
];

const HamburgerNavbar: React.FC<HamburgerNavbarProps> = ({ show, open, setOpen }) => {
  if (!show) return null;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#b19a8b',
        color: '#2e1a13',
        zIndex: 100,
        padding: '0.75rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "erstoria",
        fontSize: '1.4rem',
      } as HTMLMotionProps<"nav">["style"]}
    >
      <div className="logo" style={{ marginRight: '1.5rem', marginLeft: '1rem' }}>
        <Asset1 width={55} height={55} />
      </div>
     <IconButton
  onClick={() => setOpen(true)}
  sx={{ color: '#2e1a13', fontSize: 32, mx: 3 }} // Added padding here
  aria-label="menu"
>
  <MenuIcon fontSize="large" />
</IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { background: "#b19a8b", color: "#2e1a13", width: 220 },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "#2e1a13", textDecoration: "none", fontSize: 20 }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </motion.nav>
  );
};

export default HamburgerNavbar;