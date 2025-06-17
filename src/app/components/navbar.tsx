// src/app/components/Navbar.tsx
'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import Asset1 from './Asset1';
import { NavbarProps } from '../types';

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
                background: '#b19a8b', // lighter brown for navbar
                color: '#2e1a13',
                zIndex: 100,
                padding: '0.75rem 1rem',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: "erstoria",
                fontSize: '1.4rem',
            } as HTMLMotionProps<"nav">["style"]}
        >
            <div className="logo" style={{ top: 20, left: 20, zIndex: 10, marginRight: '1.5rem', marginLeft: '1rem' }}>
                <Asset1 width={55} height={55} />
            </div>
            <div style={{ display: 'flex', gap: '1.1rem', marginLeft: '57rem' }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <Link href="/story" style={{ color: 'inherit', textDecoration: 'none' }}>Our story</Link>
                <Link href="/Services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
                <Link href="/Members" style={{ color: 'inherit', textDecoration: 'none' }}>Members</Link>
                <Link href="/Contact Us" style={{ color: 'inherit', textDecoration: 'none' }}>Contact us</Link>
            </div>
        </motion.nav>
    );
}

export default Navbar;
