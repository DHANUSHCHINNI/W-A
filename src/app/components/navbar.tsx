'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import Asset1 from './Asset1';
import { NavbarProps } from '../types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Navbar: React.FC<NavbarProps> = ({ show }) => {
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
                zIndex: 100,
            } as HTMLMotionProps<"nav">["style"]}
        >
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    background: '#BAB1AB',
                    color: '#2e1a13',
                    fontFamily: 'erstoria',
                    fontSize: '1.4rem',
                    boxShadow: 'none',
                    padding: '5px'
                }}
            >
                <Toolbar sx={{ minHeight: '64px', px: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box className="logo" sx={{ mr: 3, ml: 2, zIndex: 10 }}>
                        <Asset1 width={55} height={55} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1.1rem', ml: 'auto' }}>
                        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                        <Link href="/story" style={{ color: 'inherit', textDecoration: 'none' }}>Our story</Link>
                        <Link href="/Services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
                        <Link href="/Members" style={{ color: 'inherit', textDecoration: 'none' }}>Members</Link>
                        <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact us</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </motion.nav>
    );
}

export default Navbar;